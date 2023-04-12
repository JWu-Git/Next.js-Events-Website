import React from 'react';
import EventsList from '../components/events/events-list';
import { getFeaturedEvents } from '../utils/events';
import Head from 'next/head';
import NewsletterRegistration from '../components/input/newsletter-registration';
export default function HomePage({ featuredEvents }) {
  return (
    <div>
      <Head>
        <title>Next.js Events </title>
        <meta
          name="description"
          content="Explore featured events on our Next.js Events Website. Discover exciting events, and stay updated with the latest happenings around you."
        />
      </Head>
      <NewsletterRegistration />
      <EventsList events={featuredEvents} />
    </div>
  );
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
