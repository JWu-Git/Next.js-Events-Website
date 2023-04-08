import React from 'react';
import { getFilteredEvents } from '../../utils/firebase';
import EventsList from '../../components/events/events-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/error-alert';

export default function FilteredEventsPage({
  filterYear,
  filterMonth,
  filteredEvents,
  adjustValues,
}) {
  if (adjustValues) {
    return (
      <div class="center">
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values.</p>
        </ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </div>
    );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div class="center">
        <p>No events found.</p>
        <Button link="/events">Show All Events</Button>
      </div>
    );
  }

  return (
    <>
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
