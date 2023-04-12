import client from './db';
export async function getAllEvents() {
  const db = client.db();
  const events = await db
    .collection('events')
    .find({}, { projection: { _id: 0 } })
    .toArray();
  return events;
}

export async function getFeaturedEvents() {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
}

export async function getEventById(eventId) {
  const allEvents = await getAllEvents();
  const event = allEvents.find((e) => e.id === eventId);
  return event;
}

export async function getFilteredEvents(year, month) {
  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
