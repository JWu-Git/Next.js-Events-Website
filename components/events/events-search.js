import React from 'react';
import Button from '../ui/Button';
import classes from './events-search.module.css';
import { useRef } from 'react';
import { useRouter } from 'next/router';
export default function EventsSearch() {
  const router = useRouter();
  const monthRef = useRef();
  const yearRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const month = monthRef.current.value;
    const year = yearRef.current.value;
    router.push(`/events/${year}/${month}`);
  };
  return (
    <form class={classes.form} onSubmit={submitHandler}>
      <div class={classes.controls}>
        <div class={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div class={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find events</Button>
    </form>
  );
}
