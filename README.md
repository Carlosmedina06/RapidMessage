# RapidMessage

RapidMessage is a powerful messaging application built with Next.js, Prisma, MongoDB, Zustand, Next-Auth, TypeScript, TailwindCSS, Pusher, React-Hook-Form, and Cloudinary. It provides users with a seamless messaging experience and offers a range of features to enhance communication.

## Demo
https://github.com/Carlosmedina06/RapidMessage/assets/101008770/1a25c583-2891-4d9f-a9ab-60a279bb9a3d

## Features

- User registration and authentication with Next-Auth
- Real-time messaging using Pusher
- Message synchronization and storage with Prisma and MongoDB
- State management with Zustand
- Form validation and management with React-Hook-Form
- Cloudinary integration for image and file uploads
- Enhanced user interface with TailwindCSS

## Installation

To run RapidMessage locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/carlosmedina06/rapidmessage.git

```

2. Install the dependencies:

```bash
npm install
```
3. Create a .env.local file in the root directory and add the following environment variables:

```bash

DATABASE_URL=
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_APP_ID=1602205
PUSHER_SECRET=

```

4. Run the development server:
    

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

RapidMessage allows users to register, log in, and start messaging with other users in real time. Users can send text messages, share images and files, and enjoy a responsive and intuitive interface.

## Technologies Used

- Next.js: A React framework for building server-side rendered and static websites.
- Prisma: A modern database toolkit and ORM for TypeScript and Node.js.
- MongoDB: A popular NoSQL database for storing and managing data.
- Zustand: A small, fast state management library for React.
- Next-Auth: A complete authentication solution for Next.js applications.
- TypeScript: A statically typed superset of JavaScript that compiles to plain JavaScript.
- TailwindCSS: A utility-first CSS framework for quickly building custom user interfaces.
- Pusher: A hosted service for real-time messaging and events.
- React-Hook-Form: A performant form library for React.
- Cloudinary: A cloud-based media management platform for image and video uploads.

## Contributing

Contributions are welcome! If you'd like to contribute to RapidMessage, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with descriptive messages.
- Push your changes to your forked repository.
- Submit a pull request to the main repository.
- Please ensure your code follows the project's coding style and includes appropriate tests.


## Autor
Carlos Medina

[![LinkedIn][linkedin-shield]][linkedin-url]
[![GitHub][github-shield]][github-url]

<!-- Enlaces a redes sociales -->
[linkedin-url]: https://www.linkedin.com/in/carlosmedina06/
[github-url]: https://github.com/Carlosmedina06

<!-- Escudos de redes sociales -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/carlosmedina06/
[github-shield]: https://img.shields.io/badge/-GitHub-grey?style=flat-square&logo=github&logoColor=white&link=https://github.com/Carlosmedina06

## License

This project is licensed under the MIT License.
