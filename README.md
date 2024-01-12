# Netflix Clone - A Full Stack project in React, Tailwind CSS, Next.JS, Prisma, MongoDB, and NextAuth

## Overview

This project is a Netflix clone that mimic the functionalities of Netflix developed using Next.js with Typescript. This application allows users to sign in/out, create an account, watch movies, and add/remove movies from "My List" to mark their favorite movies or to watch later. Along with these features users can also view more information about a movie and utilize the autoplayer feature to take a quick look at a movie that is designed to help users decide if they would like to watch the movie then. This application is built using Next.js 14.0.4, React, Tailwind CSS, Prisma, MongoDB and more. It leverages MongoDB as the database to store movies, users, accounts and sessions in separate collections while also utilizing Next.js's built-in API routing for backend functionality.

## Features

- **Netflix-style UI**: ENgaging and interactive UI mimicing Netflix'sinterface to enhance user experience and make navigation intuitive.
- **User Authentication:** Users can sign up, sign in, and sign out securely to access personalized content and features. Sign-in is possible via email-password, Google sign-in or GitHub account.
- **Movie Streaming:** Seamless streaming experience for users to watch a variety of movies directly on the platform.
- **Responsive Design:** Ensures a seamless user experience across various screen sizes, including desktops, tablets and, mobile phones. The application's layout and components dynamically adjust to provide optimal viewing and interaction on any device, offering a consistent and user-friendly experience.
- **My List Functionality:** Users can curate a personal list of favorite movies or movies to watch later by adding and removing them from "My List".
- **Movie Details:** View detailed information about each movie including synopsis, release period, duration, and genre.
- **Autoplayer Feature:** Utilize the autoplayer feature for a quick preview of movies, helping users make informed decisions about what to watch.
- **Next.js and React Framework:** Built with Next.js 14.0.4 and React for a modern and efficient web application development experience.
- **Tailwind CSS:** Stylish and responsive user interface designed with Tailwind CSS, providing a visually appealing and consistent layout.
- **Prisma Integration:** Integration with Prisma for efficient database access and management, ensuring optimal performance in data retrieval and storage.
- **MongoDB Database:** Utilizes MongoDB as the database system to store and manage data related to movies, users, accounts, and sessions.
- **Built-in API Routing:** Harnessing Next.js's built-in API routing for serverless backend functionality, ensuring efficient handling of data requests.
- **Continuous Updates:** Regular updates and maintenance to keep the application current with the latest features and improvements.

## Installation

### Clone the repository

To get started, you will need to clone this repository to your local machine. You can do this by running the following in the command line/terminal:

```bash
git clone https://github.com/radgupte/petflix.git
```

### Install dependencies

Once you have clone the repository, navigate to the project directory and run the following to install all necessary dependencies:

```bash
cd petflix

npm install
# or
yarn install
```

### Set up environment variables

After installing the dependencies, create a `.env` file in the root of the project and add all necessary API credentials of your own as follows:

```bash
DATABASE_URL=your_database_url
NEXTAUTH_JWT_SECRET=your_nextauth_jwt_secret
NEXTAUTH_SECRET=your_nextauth_secret

GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Setup Prisma

Add MongoDB Database

```bash
npx prisma generate
npx prisma db push
```

### Run the development server

After all dependencies have been installed, you can start the development server by running the following command:

```bash
npm run dev
# or
yarn dev
```

This will start the server at `http://localhost:3000` and you can now view the application in your browser.`
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About API Routes

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Credits

[CodeWithAntonio](https://www.codewithantonio.com/) => Thank you for making this awesome tutorial! You are a great teacher and you inspired me to start developing full-stack projects.
