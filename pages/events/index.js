import React from 'react';

import EventList from '../../components/events/events-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../utils/firebase';

export default function AllEventsPage({ events }) {
  return (
    <>
      <EventsSearch />
      <EventList events={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60 * 30, //revalidate every 30 minutes
  };
}
