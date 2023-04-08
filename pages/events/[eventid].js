import React from 'react';
import { getEventById, getAllEvents } from '../../dummy-data';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

export default function EventDetailPage({ event }) {
  return (
    <>
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
