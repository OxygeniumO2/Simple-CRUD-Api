# Simple-CRUD-Api

---

## Prerequisites

1. Install [Node.js](https://nodejs.org/en/download/)
2. Clone this repository `git clone https://github.com/OxygeniumO2/Simple-CRUD-Api.git`
3. Go to folder `cd Simple-CRUD-Api`
4. Change current branch to develop `git checkout develop`
5. Install all dependencies `npm install`
6. Create file in the root of the project with name `.env` and paste `PORT=4000` into it, or copy from file `.env.example`
7. Print into console to run development mode: `npm run start:dev` or production mode: `npm run start:prod`

---

## Description

This API allows managing users with basic CRUD operations.

### Base URL

`http://localhost:3000`

### Endpoints

## GET /api/users

- Description: Fetch all user records.
- Response: `200 OK`: Returns an array of all users.

### Example:

```
curl -X GET http://localhost:3000/api/users
```
