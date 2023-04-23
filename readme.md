# Todo-List NodeJs API
## Description
This is a simple Todo-List API made with NodeJs, Express and MongoDB.
## Installation
### Clone
- Clone this repo to your local machine using `
### Setup
> install npm packages
```shell
$ npm install
```
> run the server
```shell
$ npm start
```
## Features
- User signup
- User signin
- Create a new todo
- Get all todos
- Get a single todo
- Update a todo
- Delete a todo
- Admin get all users
- Admin get a single user
- Admin update a user
- Admin delete a user
- Send remainder email for tasks
## Usage
### Api Endpoints
| Endpoint | Functionality | Access | Body | Headers | Response |
| --- | --- |
| POST /api/user/signup | Register a user | Open | { "name": "string", "email": "string", "password": "string", "role": "string" } | | { "Authorization": "string" } | { "token": "string"} |
| POST /api/user/signin | Login a user | Open | { "email": "string", "password": "string" } | | { "token": "string" } |
| POST /api/todo/create | Create a new todo | Authenticated | { "title": "string", "description":"string" } | { "Authorization": "string" } | { "todo": "todo" } |
| GET /api/todo/all | Get all todos of the user | Authenticated | | { "token": "string" } | [{ "todos": "todos" }] |
| PUT /api/todo/update/:id | Update the Todo | Authenticated | { "title": "string", "description":"string" } | { "Authorization": "string" } | { "todo": "todo" } |
| PUT /api/todo/change-status/:id | Chagne the status of todo | Authenticated | {"status": "string"} | { "Authorization": "string" } | { "todo": "todo" } |
| DELETE api/todo/delete/:id | Delete the Todo |

| Admin Endpoints | Functionality |
| --- | --- |
| GET /api/admin/all | Get all users |
| GET /api/admin/:id | Get a single user |
| DELETE /api/admin/:id | Delete a user |

## Scheduler
- The scheduler is set to send an email to the user every 2 hours to remind them of their tasks.

## Technologies
- NodeJs
- Express
- MongoDB
- Mongoose
- JsonWebToken
- Bcrypt
- Nodemailer
- Scheduler