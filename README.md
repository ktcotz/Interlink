# Interlink

**Interlink** is a modern, scalable backend API for social media applications, built on [NestJS](https://nestjs.com/) and [Prisma](https://www.prisma.io/).
The project offers extensive features for managing users, posts, comments, likes, follows, and notifications.

---

## Contents

- [Functionalities](#functionalities)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Contribution](#contribution)
- [License](#license)

---

## Functionalities

## Features

- **User Authentication & Authorization**  
  Secure registration, login with JWT access and refresh tokens, password reset via email, and multi-factor authentication (MFA) support.

- **User Management**  
  Role-based access control (RBAC), customizable user profiles, and user activity tracking with audit logs.

- **Posts & Comments**  
  Create, edit, delete posts and comments with rich-text support, media attachments, and content moderation tools including spam detection and profanity filtering.

- **Likes & Follows**  
  Like system with real-time updates and follower/following relationships supporting mutual follows and follow recommendations based on social graphs.

- **Notifications**  
  Real-time notifications via WebSockets, email alerts, and push notifications with customizable user preferences and notification grouping.

- **Advanced Filtering & Pagination**  
  Efficient data querying with cursor-based pagination, full-text search, and complex filtering on posts, comments, and users.

- **Security Features**  
  Password hashing with bcrypt, protection against common vulnerabilities (XSS, CSRF, SQL Injection), rate limiting, IP blacklisting, and audit trails.

- **Robust Error Handling & Logging**  
  Centralized error handling, structured logging, and integration with monitoring tools.

- **API Versioning & Documentation**  
  Versioned REST API endpoints with comprehensive Swagger/OpenAPI documentation.

- **Comprehensive Testing**  
  Unit, integration, and end-to-end tests written in Jest and Gherkin to ensure code quality and maintainability.

---

## Technologies

- **[NestJS](https://nestjs.com/)** – A progressive Node.js framework for building efficient and scalable server-side applications.
- **[Prisma](https://www.prisma.io/)** – Modern ORM for TypeScript and Node.js to interact safely and efficiently with the database.
- **[PostgreSQL](https://www.postgresql.org/)** – Reliable and powerful relational database system (or any other supported relational DB).
- **[TypeScript](https://www.typescriptlang.org/)** – Strongly typed programming language that builds on JavaScript.
- **[JWT (JSON Web Tokens)](https://jwt.io/)** – For stateless authentication and authorization with access and refresh tokens.
- **[bcrypt](https://github.com/kelektiv/node.bcrypt.js)** – Library for hashing passwords securely.
- **[Passport.js](http://www.passportjs.org/)** – Authentication middleware for NestJS supporting strategies like local, JWT, OAuth2.
- **[class-validator & class-transformer](https://github.com/typestack/class-validator)** – For declarative validation and transformation of request data.
- **[Swagger / OpenAPI](https://swagger.io/specification/)** – Automatic API documentation generation and interactive testing.
- **[Jest](https://jestjs.io/)** – Testing framework for unit and integration tests.
- **[Cucumber/Gherkin](https://cucumber.io/docs/gherkin/)** – For behavior-driven development (BDD) and readable acceptance tests.
- **[Socket.IO](https://socket.io/)** or **WebSockets** – Real-time communication for notifications and live updates.
- **[dotenv](https://github.com/motdotla/dotenv)** – Loading environment variables from `.env` files.
- **[ESLint & Prettier](https://eslint.org/, https://prettier.io/)** – Code quality and formatting tools to maintain consistent style and catch errors early.
- **[Helmet](https://helmetjs.github.io/)** – Security middleware to set HTTP headers and protect against common vulnerabilities.
- **[Rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible)** – Rate limiting to protect API from abuse and DoS attacks.
- **[Winston](https://github.com/winstonjs/winston)** or **Pino** – Logging libraries for structured and performant logs.

---

## Architecture

The project follows a modular architecture pattern powered by NestJS, promoting scalability, maintainability, and testability.

### Key Architectural Concepts:

- **Modular Design**  
  Each feature is encapsulated in its own module (e.g., `AuthModule`, `UserModule`, `PostModule`, `NotificationModule`, `CommonModule`) to isolate responsibilities and enable independent development and testing.

- **Layered Structure**  
  Separation of concerns is maintained through layers such as Controllers (handling HTTP requests), Services (business logic), Repositories (database access via Prisma), and Guards/Interceptors (security, validation, and request transformations).

- **API Versioning**  
  The REST API is versioned (e.g., `/api/v1`) to support backward compatibility and smooth evolution of the system.

- **Security by Design**  
  Authentication and authorization mechanisms are centralized in the `AuthModule`, implementing JWT-based stateless sessions with refresh token rotation and role-based access control (RBAC).

- **Real-Time Communication**  
  Notifications and live updates are powered by WebSockets (e.g., using Socket.IO), allowing event-driven client-server communication.

- **Database Layer**  
  Prisma ORM abstracts database operations, enabling type-safe queries and migrations on a relational database such as PostgreSQL.

- **Configuration Management**  
  Environment variables are managed via `.env` files and the `dotenv` package to separate configuration from code, supporting different environments (development, testing, production).

- **Testing Strategy**  
  Tests are organized by module and type (unit, integration, end-to-end), with behavior-driven development (BDD) style using Gherkin syntax for acceptance criteria.

- **Logging and Monitoring**  
  Centralized logging using Winston or Pino, with structured logs to facilitate debugging and performance monitoring.

This architecture ensures the system is modular, extensible, secure, and easy to maintain as the project grows.

---

## Installation

Follow these steps to get the Interlink backend up and running on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/ktcotz/interlink.git
cd interlink
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

- Create a .env file in the root directory based on the .env.example template:

```bash
  cp .env.example .env
```

- Then update .env with your environment-specific values, e.g.:

```bash
  PORT=3000
  DATABASE_URL=POSTGRESQL_DATABASE_URL
  JWT_ACCESS_TOKEN_SECRET=your_access_token_secret
  JWT_REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

### 4. Set up the database

- Make sure you have PostgreSQL (or your preferred relational DB) installed and running.
- Create the database:

```bash
  createdb interlink
```

- Run prisma migrations to create the database schema:

```bash
  npx prisma migrate deploy
```

### 5. Run the application

- For development with hot reload:

```bash
  npm run start:dev
```

- For production build and run:

```bash
  npm run build
  npm run start:prod
```

### 6. (OPTIONAL) Run tests

- Unit tests

```bash
  npm run test
```

- Tests coverage

```bash
  npm run test:cov
```

- E2e tests

```bash
  npm run test:e2e
```

## API Documentation

The API is fully documented using Swagger (OpenAPI). After running the application, you can explore and test the API endpoints interactively:
[API Documentation](http://localhost:3000/api/v1/docs)

## Contribution

We welcome contributions from the community! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'feat: add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please follow our [Code of Conduct](./CODE_OF_CONDUCT.md) and [Contributing Guidelines](./CONTRIBUTING.md) for best practices.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
