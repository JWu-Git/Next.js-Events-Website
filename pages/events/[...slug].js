import React from 'react';
import { getFilteredEvents } from '../../utils/firebase';
import EventsList from '../../components/events/events-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/error-alert';
import Head from 'next/head';

const metaData = (
  <>
    <title>Next.js Events | Filtered Events</title>
    <meta
      name="description"
      content="View a curated list of events based on your preferred month and year on our Next.js Events Website. Discover events tailored to your interests and schedule."
    />
  </>
);
export default function FilteredEventsPage({
  filterYear,
  filterMonth,
  filteredEvents,
  adjustValues,
}) {
  if (adjustValues) {
    return (
      <>
        {metaData}
        <div class="center">
          <ErrorAlert>
            <p>Invalid filter. Please adjust your values.</p>
          </ErrorAlert>
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        {metaData}
        <div class="center">
          <p>No events found.</p>
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  return (
    <>
      {metaData}
      <ResultsTitle filterYear={filterYear} filterMonth={filterMonth} />
      <EventsList events={filteredEvents} />
    </>
  );
}

export async function getServerSideProps(context) {
  const filterData = context.params.slug;

  const filterYear = +filterData[0];
  const filterMonth = +filterData[1];
  if (
    isNaN(filterYear) ||
    isNaN(filterMonth) ||
    filterYear > 2030 ||
    filterMonth < 1 ||
    filterMonth > 12
  ) {
    return {
      props: {
        adjustValues: true,
      },
    };
  }
  const filteredEvents = await getFilteredEvents(filterYear, filterMonth);

  return {
    props: {
      filterYear,
      filterMonth,
      filteredEvents: filteredEvents,
    },
  };
}
