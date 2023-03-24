import {useEffect, useState} from 'react';
import React, { useReducer, useCallback } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'setJobs':
      return {...state, jobs: action.payload };
    case 'setPage':
      return {...state, page: action.payload };
    case 'setWhat':
      return {...state, what: action.payload };
    case 'setWhere':
      return {...state, where: action.payload };
    case 'setDistance':
      return {...state, distance: action.payload };
    case 'setLocation0':
      return {...state, location0: action.payload };
    case 'setLocation1':
      return {...state, location1: action.payload };
    case 'setLocation2':
      return {...state, location2: action.payload };
    case 'setLocation3':
      return {...state, location3: action.payload };
    case 'setLocation4':
      return {...state, location4: action.payload };
    case 'setLocation5':
      return {...state, location5: action.payload };
    case 'setLocation6':
      return {...state, location6: action.payload };
    case 'setLocation7':
      return {...state, location7: action.payload };
    case 'setCategory':
      return {...state, category: action.payload };
    case 'setSalaryMin':
      return {...state, salaryMin: action.payload };
    case 'setSalaryMax':
      return {...state, salaryMax: action.payload };
    case 'setFullTime':
      return {...state, full_time: action.payload };
    case 'setPartTime':
      return {...state, part_time: action.payload };
    case 'setCompany':
      return {...state, company: action.payload };
  default:
    throw new Error();
  }
}

const getUrl = (page, what, where, distance, location0, location1, location2, location3, location4, location5, location6, location7, category, salary_min, salary_max, full_time, part_time, company) => {
  let searchUrl='https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=76dbecca&app_key=cdfe40cea1339c14198b7f6468e24d10';
  let params = [page, what, where, distance, location0, location1, location2, location3, location4, location5, location6, location7, category, salary_min, salary_max, full_time, part_time, company];
  let values = ["page", "what", "where", "distance", "location0", "location1", "location2", "location3", "location4", "location5", "location6", "location7", "category", "salary_min", "salary_max", "full_time", "part_time", "company"]
  let count = 0
  params.forEach(param => {

    if(count === 0) {
      searchUrl = `https://api.adzuna.com/v1/api/jobs/gb/search/${param}?app_id=76dbecca&app_key=cdfe40cea1339c14198b7f6468e24d10`;
    }
    else {
      if (param !== -1 && param !== '') {
        searchUrl += `&${values[count]}=${param}`
      }
    };
    count++
  })

  return searchUrl
};

export function App() {
    const initialState = {
      apiObject: {},
      jobs: [],
      page: 1,
      what: '',
      where: '',
      distance: -1,
      location0: '',
      location1: '',
      location2: '',
      location3: '',
      location4: '',
      location5: '',
      location6: '',
      location7: '',
      category: '',
      salary_min: -1,
      salary_max: -1,
      full_time: -1,
      part_time: -1,
      company: -1,
    };
  
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isLoading, setIsLoading] = useState(true);
  
    const fetchFilteredJobs = useCallback(async () => {
      const url = getUrl(state.page, state.what, state.where, state.distance, state.location0, state.location1, state.location2, state.location3, state.location4, state.location5, state.location6, state.location7, state.category, state.salary_min, state.salary_max, state.full_time, state.part_time, state.company)
      const response = await fetch(url);
      const data = await response.json();
      console.log('data from fetch:')
      console.log(data);
      dispatch({type: 'setJobs', payload: data})
    }, [state.page, state.what, state.where, state.distance, state.location0, state.location1, state.location2, state.location3, state.location4, state.location5, state.location6, state.location7, state.category, state.salary_min, state.salary_max, state.full_time, state.part_time, state.company])
  
    useEffect( () => {
      fetchFilteredJobs();
    }, [fetchFilteredJobs, state.page, state.what, state.where, state.distance, state.location0, state.location1, state.location2, state.location3, state.location4, state.location5, state.location6, state.location7, state.category, state.salary_min, state.salary_max, state.full_time, state.part_time, state.company]);
    
    console.log(state.jobs[0])
    
  return (
    <p>Hi</p>
  );
};

export default App;