import axios from 'axios';

export async function getAllEvents() {
  const resp = await axios.get(
    'https://next-events-f6315-default-rtdb.firebaseio.com/events.json'
  );
  const data = resp.data;
  const events = [];
  for (let key in data) {
    const event = {
      id: key,
      ...data[key],
    };
    events.push(event);
  }
  return events;
}

export async function getFeaturedEvents() {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
}

export async function getEventbyId(eventId) {
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
