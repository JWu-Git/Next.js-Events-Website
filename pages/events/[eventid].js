import React from 'react';
import { getEventById, getAllEvents } from '../../utils/events';
import Comments from '../../components/input/comments';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import Head from 'next/head';
export default function EventDetailPage({ event }) {
  return (
    <>
      <Head>
        <title>Next.js Events | Event Details</title>
        <meta
          name="description"
          content="Find detailed information about specific events on our Next.js Events Website. Get event descriptions, logistics, and more to plan your perfect experience."
        />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </>
  );
}

export async function getStaticProps(context) {
  const id = context.params.eventid;
  const event = await getEventById(id);

  return {
    props: { event: event },
    revalidate: 60 * 30, //revalidate every 30 minutes
  };
}

export async function getStaticPaths() {
  const allEvents = await getAllEvents();

  const paths = [];
  for (const event of allEvents) {
    const path = { params: { eventid: event.id } };
    paths.push(path);
  }

  return {
    paths: paths,
    fallback: 'blocking', // can also be true or 'blocking'
  };
}
