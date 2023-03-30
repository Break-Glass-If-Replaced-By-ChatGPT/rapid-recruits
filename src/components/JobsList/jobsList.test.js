import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { StateContext } from '../../App';
import { JobsList } from './jobsList';
import { prettify } from '../../common/utility';
import { sampleState } from '../../common/utility'

const mockDispatch = jest.fn();


const Wrapper = ({ children }) => (
  <StateContext.Provider value={{ state: sampleState, dispatch: mockDispatch }}>
    {children}
  </StateContext.Provider>
);

describe('JobsList component', () => {
  test('renders the table headers', () => {
    render(<JobsList />, { wrapper: Wrapper });

    const headers = ['Job Title', 'Company', 'Job Location', 'Category', 'Contract Type', 'Salary Range'];
    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  test('renders the job rows', () => {
    render(<JobsList />, { wrapper: Wrapper });

    sampleState.jobs.forEach((job, index) => {
      const jobRow = screen.getByTestId(`job-row-${index}`);
      expect(jobRow).toBeInTheDocument();

      const rowUtils = within(jobRow);
      expect(rowUtils.getByText(prettify(job.title))).toBeInTheDocument();
      expect(rowUtils.getByText(prettify(job.company.display_name))).toBeInTheDocument();
      expect(rowUtils.getByText(`${prettify(job.location.display_name)}, ${prettify(job.location.area[0])}`)).toBeInTheDocument();
      expect(rowUtils.getByText(prettify(job.category.label))).toBeInTheDocument();
      expect(rowUtils.getByText(prettify(job.contract_time))).toBeInTheDocument();
      expect(rowUtils.getByText(`$${job.salary_min}-$${job.salary_max}`)).toBeInTheDocument();
    });
  });

  test('handles row click event', async () => {
    render(<JobsList />, { wrapper: Wrapper });

    // eslint-disable-next-line testing-library/no-node-access
    const row = screen.getAllByText(prettify(sampleState.jobs[0].title))[0];
    fireEvent.click(row);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({ type: 'setSelectedJob', payload: sampleState.jobs[0] });
    });
  });

  test('handles page change event', async () => {
    render(<JobsList />, { wrapper: Wrapper });

    const nextPageButton = screen.getByLabelText('Go to next page');
    fireEvent.click(nextPageButton);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({ type: 'setPage', payload: sampleState.page + 1 });
    });
  });

  test('sorts job rows based on column', async () => {
    const { rerender } = render(<JobsList />, { wrapper: Wrapper });

    // Click on the 'Job Title' header to sort ascending
    const jobTitleHeader = screen.getByTestId('header-0');
    fireEvent.click(jobTitleHeader);

    // Rerender the component with sorted jobs data
    const sortedJobs = [...sampleState.jobs].sort((a, b) => a.title.localeCompare(b.title));
    const updatedState = { ...sampleState, jobs: sortedJobs };
    
    rerender(
      <StateContext.Provider value={{ state: updatedState, dispatch: mockDispatch }}>
        <JobsList />
      </StateContext.Provider>
    );

    // Verify the sorted job titles
    sortedJobs.forEach((job, index) => {
      const jobRow = screen.getByTestId(`job-row-${index}`);
      const rowUtils = within(jobRow);
      expect(rowUtils.getByText(prettify(job.title))).toBeInTheDocument();
    });

    // Click on the 'Job Title' header again to sort descending
    fireEvent.click(jobTitleHeader);

    // Rerender the component with reverse sorted jobs data
    const reverseSortedJobs = sortedJobs.reverse();
    const reverseUpdatedState = { ...sampleState, jobs: reverseSortedJobs };
    rerender(
      <StateContext.Provider value={{ state: reverseUpdatedState, dispatch: mockDispatch }}>
        <JobsList />
      </StateContext.Provider>
    );

    // Verify the reverse sorted job titles
    reverseSortedJobs.forEach((job, index) => {
      const jobRow = screen.getByTestId(`job-row-${index}`);
      const rowUtils = within(jobRow);
      expect(rowUtils.getByText(prettify(job.title))).toBeInTheDocument();
    });
  });

  test('displays no jobs when jobs array is empty', () => {
    const emptyState = { ...sampleState, jobs: [] };
    render(
      <StateContext.Provider value={{ state: emptyState, dispatch: mockDispatch }}>
        <JobsList />
      </StateContext.Provider>
    );

    expect(screen.queryByText('Search Results')).not.toBeInTheDocument();
  });
});
