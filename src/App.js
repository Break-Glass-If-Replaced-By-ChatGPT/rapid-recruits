import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { JobsList } from 'components/JobsList';

import logo from './logo.svg';
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case 'setJobs':
      return {...state, jobs: action.payload };
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
    case 'setLoaction4':
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
      return {...state, company: action.paylaod };
  default:
    throw new Error();
  }
}

function getUrl(what, where, distance, location0, location1, location2, location3, location4, location5, location6, location7, category, salary_min, salary_max, full_time, part_time, company) {
  let searchUrl='https://api.adzuna.com/v1/api/jobs/gb/search/100?app_id=76dbecca&app_key=cdfe40cea1339c14198b7f6468e24d10';
  let params = [what, where, distance, location0, location1, location2, location3, location4, location5, location6, location7, category, salary_min, salary_max, full_time, part_time, company];
  let values = ["what", "where", "distance", "location0", "location1", "location2", "location3", "location4", "location5", "location6", "location7", "category", "salary_min", "salary_max", "full_time", "part_time", "company"]
  let count = -1

  params.forEach(param => {
    count++
    if (param !== -1 && param !== '') {
      searchUrl += `&${values[count]}=${param}`
    }
  })

  return searchUrl
};

export const App = () => {

  const initialState = {
    jobs: undefined,
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

  async function fetchFilteredJobs(url){
    const response = await fetch(url);
    const data = await response.json();
    dispatch({type: 'setJobs', payload: data})
  }
  
  useEffect( () => {
    const url = getUrl(state.what, state.where, state.distance, state.location0, state.location1, state.location2, state.location3, state.location4, state.location5, state.location6, state.location7, state.category, state.salary_min, state.salary_max, state.full_time, state.part_time, state.company);
    fetchFilteredJobs(url);
  }, [state.what, state.where, state.distance, state.location0, state.location1, state.location2, state.location3, state.location4, state.location5, state.location6, state.location7, state.category, state.salary_min, state.salary_max, state.full_time, state.part_time, state.company])
}