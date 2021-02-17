# Biblio - Online Bookstore

An ecommerce project that allows users to purchase books online.

## Technologies Used

1. NextJS + TailwindCSS
2. NodeJS w/ Express
3. PostGRE SQL w/ PrismaV2 ORM (Migrations)
4. Typescript
5. PDFKit for Invoice Generation
6. Context API for State Management
7. JWT w/ Cookies (Custom Auth)

## Features

1. Account Creation and Login
2. Book Purchases
3. Secure Payment with Stripe Integration
4. Extensive catalogue w/ multiple categories
5. Invoice Generation for orders on demand
6. Order status tracking
7. Order History
8. Robust Session Management with JWT

#### Authentication and Authorization Flow

This project uses JWT Authentication that is facilitated by an Express Backend.

Registered user's passwords are hashed before being entered into the Database. This is done using **Bcrypt**.

The `auth` middleware handles _token-creation_ using the `jsonwebtoken` library.

[Read my article about this topic...]('https://dev.to/aritik/writing-a-basic-authentication-api-with-express-and-mongodb-1-j8')

The Client stores the user's data in its Global state (Context API) and queries the `/api/auth/me` route to maintain the session on page reload. This is done with the help of a `Cookie`.

![Register]('/../documentation/register.png?raw=true')
