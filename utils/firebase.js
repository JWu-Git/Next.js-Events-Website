import axios from 'axios';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config({ path: '.env.local' });

export async function getAllEvents() {
  const resp = await axios.get(process.env.FIREBASE);
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
