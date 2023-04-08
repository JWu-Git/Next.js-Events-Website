import React from 'react';
import EventsList from '../components/events/events-list';
import { getFeaturedEvents } from '../utils/firebase';

export default function HomePage({ featuredEvents }) {
  return <EventsList events={featuredEvents} />;
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 60 * 30, //revalidate every 30 minutes
  };
}
