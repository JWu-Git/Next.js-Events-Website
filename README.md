# Next.js Events Website Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The event website is a comprehensive platform that showcases a wide range of events, highlights featured events, and offers user-friendly functionalities. 

Users can effortlessly filter events based on month and year to find events that match their interests and schedule. Additionally, the website fosters community interaction by enabling users to leave comments and share their thoughts. 

To keep users informed about the latest events and updates, the website also features a newsletter signup option.

## View Website

This website is currently deployed to and hosted on Vercel.

To view the website, please visit https://next-js-events-website.vercel.app/

## Pages

- index.js: This page displays all featured events.
- events/index.js: This page shows a list of all events and allows users to search for events by month and year.
- events/[eventid].js: This page displays detailed information about a single event based on the eventid URL parameter.
- events/[...slug].js: This page shows a list of events based on the provided month and year filters from the URL slug.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
