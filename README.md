# Next.js blog

Blog app made with Next.js, Node.js, Express.js, JSON Web Token (JWT), PostgreSQL, Prisma ORM and Docker for containerization.

## Features

* Server Side Rendering (SSR)
* Dark/Light theme detection based on user's OS preference, or manual toggle by the user
* No Flash Of Unstyles Components (FOUC)
* Each blog post gets it's own unique page accessible under unique route (e.g. /12-books-i-read-in-2024-heres-what-i-think-of-them)
* Efficient caching implementation, with cache being revalidated only on relevant CRUD operations, such as creating a new post or deleting one
* Secure authentication with JSON Web Token
* Admin password is stored hashed in the database, each login request compares the hashed password with the one provided by the user
* User input is validated and sanitized
* Next.js middleware ensuring access control to admin-only routes (e.g. /dashboard, /dashboard/create)
* Logged in user cannot access /login route, instead he is redirected to /dashboard
* Post's content can be writtien with Markdown, which is then converted to React Components styled with TailwindCSS, ensuring unique look of the blog
* Posts can be edited
* Code snippets in blog posts are displayed in a code-editor styled container

## Tech Stack

* Next.js 14
* TailwindCSS
* Express.js
* Express Validator
* Prisma ORM
* Typescript
* Json Web Token (JWT)
* PostgreSQL

## To do

* Containerize
