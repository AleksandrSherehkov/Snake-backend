# 🏆 Score API

Welcome to the **Score API**! This project provides a robust backend for
managing scores in a game, built using **Node.js**, **Express**, **TypeScript**,
and **Prisma**. It also includes various middleware for security, validation,
and logging.

## 🚀 Features

- **CRUD Operations**: Create, Read, Update, and Delete scores.
- **Validation**: Input validation using **Joi**.
- **Error Handling**: Centralized error handling.
- **Logging**: Request logging using **Morgan** and **Winston**.
- **Security**: Secure HTTP headers with **Helmet**.
- **CORS**: Cross-Origin Resource Sharing enabled.
- **API Documentation**: Swagger UI for API documentation.

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for Node.js.
- **TypeScript**: Typed JavaScript for safer and more robust code.
- **Prisma**: ORM for database management.
- **Cors**: Middleware for enabling CORS.
- **Joi**: Schema validation library.
- **Helmet**: Helps secure Express apps by setting various HTTP headers.
- **Morgan**: HTTP request logger middleware.
- **Winston**: Logging library.
- **Swagger-UI-Express**: Middleware to serve auto-generated Swagger API docs.

## 📦 Installation

To get started with the project, follow these steps:

1. Clone the repository:

   \```sh git clone https://github.com/AleksandrSherehkov/snake-backend.git \```

2. Navigate to the project directory:

   \```sh cd score-api \```

3. Install the dependencies:

   \```sh npm install \```

4. Set up your `.env` file with your database connection string:

   \```env DATABASE_URL="your-database-url" \```

5. Run Prisma migrations to set up your database:

   \```sh npx prisma migrate dev \```

6. Start the server:

   \```sh npm run dev \```

## 📋 API Endpoints

### Add or Update a Score

- **URL**: `/api/scores`
- **Method**: `POST`
- **Request Body**: \```json { "name": "string", "score": "integer" } \```
- **Responses**:
  - `201`: Score successfully created or updated.
  - `400`: Invalid input.

### Get Top 10 Scores

- **URL**: `/api/scores`
- **Method**: `GET`
- **Responses**:
  - `200`: List of top 10 scores.

### Check Unique Name

- **URL**: `/api/check-unique-name`
- **Method**: `POST`
- **Request Body**: \```json { "name": "string" } \```
- **Responses**:
  - `200`: Returns if the name is unique.
  - `400`: Invalid input.

## 🤝 Contributing

Contributions are welcome! Please fork this repository and submit a pull
request.

## 📝 License

This project is licensed under the MIT License.

## 📧 Contact

For any inquiries, please reach out to me at
[aleksandr.shereshkov@gmail.com](mailto:aleksandr.shereshkov@gmail.com).

---

Enjoy using the Score API! 🏆
