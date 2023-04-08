# Next.js Events Website Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It is an events website, which displays various events and provides functionalities like filtering events based on month and year.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

- index.js: This page displays all featured events.
- events/index.js: This page shows a list of all events and allows users to search for events by month and year.
- events/[eventid].js: This page displays detailed information about a single event based on the eventid URL parameter.
- events/[...slug].js: This page shows a list of events based on the provided month and year filters from the URL slug.

## Components

- EventsList: This component is responsible for displaying a list of events.
- ResultsTitle: This component shows a title with the month and year of the filtered events.
- Button: This reusable UI component is used to display various buttons throughout the project.
- ErrorAlert: This UI component is used to display error messages.
- EventSummary: This component displays a summary of a single event.
- EventLogistics: This component displays the logistics information of a single event, such as date, location, and image.
- EventContent: This component displays the description of a single event.
- EventsSearch: This component allows users to search for events by month and year.

## Dummy Data

The project uses dummy-data as a data source for the events. In a real-world scenario, you can replace this with data from an API or a database.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
