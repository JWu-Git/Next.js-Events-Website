import React from 'react';
import EventItem from './event-item';
import classes from './events-list.module.css';

export default function EventsList({ events }) {
  const mappedEvents = events.map((event) => {
    return <EventItem key={event.id} event={event} />;
  });

  return <ul className={classes.list}>{mappedEvents}</ul>;
}
