# What is Track My Team?

Track my team is little application where you are able to track who is still a member of your team. This might be useful when your company has a employee turnover rate.

This app's intention is solely for training purposes: To apply React, NextJs and GCP Cloud Functions in a fun application! :)

# Live preview:
The Track My Team app is hosted by Vercel using their CI/CD pipelines.
[https://track-my-team.vercel.app/](https://track-my-team.vercel.app/)

# How this is built?
This application is split in two applications:
1. `track-my-team-ui`: This is a [Next.js](https://nextjs.org/) project, using [ReactJs](https://reactjs.org/) and [Typescript](https://www.typescriptlang.org/). This application is developed using plain CSS (no frameworks) using css flexbox and media queries to support the responsive layout.
2. `serverless-functions`: The functions used to power the data used by this app. This could be simply done using the Next.js's [API hosting](https://nextjs.org/docs/api-routes/introduction). However, for training purposes, it was decided to deploy write this as [GCP Cloud Function](https://cloud.google.com/functions).
`serverless-functions\teamMembers`: The function that gets deployed as a GCP Cloud Function. This function is responsible for returning a list of team members and their status.


## How to run locally

#### 1. Running the server side
Running the server side, navigate to the `serverless-functions\teamMembers` directory and run:

```bash
npm i
npm run start
```

You should be able to see the response when you navigate to [http://localhost:8080/](http://localhost:8080/)

#### 2. Running the front-end
To start the UI/front-end project, navigate to the `track-my-team-ui` directory and run:

```bash
npm i
npm run dev
```

You should be able to see the response when you navigate to [http://localhost:3000/](http://localhost:3000/)


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
