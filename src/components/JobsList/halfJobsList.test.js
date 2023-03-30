import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { StateContext } from '../../App';
import { HalfJobsList } from './halfJobsList';
import { prettify } from '../../common/utility';
import { sampleState } from '../../common/utility';

const mockDispatch = jest.fn();

const Wrapper = ({ children }) => (
  <StateContext.Provider value={{ state: sampleState, dispatch: mockDispatch }}>
    {children}
  </StateContext.Provider>
);

describe('HalfJobsList component', () => {
  test('renders the table headers', () => {
    render(<HalfJobsList />, { wrapper: Wrapper });

    const headers = ['Job Title', 'Company', 'Job Location', 'Category', 'Contract Type', 'Salary Range'];
    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  test('renders the job rows', () => {
    render(<HalfJobsList />, { wrapper: Wrapper });

    sampleState.jobs.forEach((job, index) => {
      const jobRow = screen.getByTestId(`job-row-${index}`);
      expect(jobRow).toBeInTheDocument();

      const rowUtils = within(jobRow);
      expect(rowUtils.getByText(prettify(job.title))).toBeInTheDocument();
      expect(rowUtils.getByText(prettify(job.company.display_name))).toBeInTheDocument();
      expect(rowUtils.getByText(`${prettify(job.location.display_name)}, ${prettify(job.location.area[0])}`)).toBeInTheDocument();
      expect(rowUtils.getByText(prettify(job.category.label))).toBeInTheDocument();
      expect(rowUtils.getByText(prettify(job.contract_time))).toBeInTheDocument();
      expect(rowUtils.getByText(`$${job.salary_min} - $${job.salary_max}`)).toBeInTheDocument();
    });
  });

  test('handles row click event', async () => {
    render(<HalfJobsList />, { wrapper: Wrapper });

    const row = screen.getAllByText(prettify(sampleState.jobs[0].title))[0];
    fireEvent.click(row);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({ type: 'setSelectedJob', payload: sampleState.jobs[0] });
    });
  });

  test('handles page change event', async () => {
    render(<HalfJobsList />, { wrapper: Wrapper });

    const nextPageButton = screen.getByLabelText('Go to next page');
    fireEvent.click(nextPageButton);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({ type: 'setPage', payload: sampleState.page + 1 });
    });
  });

  test('sorts job rows based on column', async () => {
    
    render(<HalfJobsList />, { wrapper: Wrapper });

    // Click on the 'Job Title' header to sort
    const jobTitleHeader = screen.getByText('Job Title');
    fireEvent.click(jobTitleHeader);

    // Wait for the table to rerender with sorted jobs data
    await waitFor(() => {
      const sortedJobs = [...sampleState.jobs].sort((a, b) => a.title.localeCompare(b.title));

      // Verify the sorted job titles
      sortedJobs.forEach(async (job, index) => {
        const jobRow = screen.getByTestId(`job-row-${index}`);
        const rowUtils = within(jobRow);
        await rowUtils.findByText(prettify(job.title));
      });
    });

    // Click on the 'Job Title' header again to sort in reverse order
    fireEvent.click(jobTitleHeader);

    // Wait for the table to rerender with reverse sorted jobs data
    await waitFor(() => {
      const reverseSortedJobs = [...sampleState.jobs].sort((a, b) => b.title.localeCompare(a.title));

      // Verify the reverse sorted job titles
      reverseSortedJobs.forEach(async (job, index) => {
        const jobRow = screen.getByTestId(`job-row-${index}`);
        const rowUtils = within(jobRow);
        await rowUtils.findByText(prettify(job.title));
      });
    });
  });

  test('displays no jobs when jobs array is empty', () => {
    const emptyState = { ...sampleState, jobs: [] };
    render(
      <StateContext.Provider value={{ state: emptyState, dispatch: mockDispatch }}>
        <HalfJobsList />
      </StateContext.Provider>
    );

    expect(screen.queryByTestId(/^job-row-/)).not.toBeInTheDocument();
  });
});

