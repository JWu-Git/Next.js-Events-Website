import React from 'react';
import Head from 'next/head';
import EventList from '../../components/events/events-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../utils/firebase';

export default function AllEventsPage({ events }) {
  return (
    <>
      <Head>
        <title>Next.js Events | All Events</title>
        <meta
          name="description"
          content="Browse through a comprehensive list of events on our Next.js Events Website. Filter events by month and year to find the perfect event for you."
        />
      </Head>
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
