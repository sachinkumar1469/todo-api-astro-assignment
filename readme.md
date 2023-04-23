# Todo-List NodeJs API
## Description
This is a simple Todo-List API made with NodeJs, Express and MongoDB.
## Installation
### Clone
- Clone this repo to your local machine using `https://github.com/sachinkumar1469/todo-api-astro-assignment.git`
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
- Role based access control
- Role : "USER", "ADMIN"
- Password Hashing using BcryptJs
- Nodemailer to send reminder mails
- Task schedulers

## Usage
### Api Endpoints (Role: "USER","ADMIN")
| Endpoint | Functionality | Access | Body | Headers | Response |
| --- | --- | --- | --- | --- | --- |
| POST /api/user/signup | Register a user | Open | { "name": "string", "email": "string", "password": "string", "role": "string" } | | { "token": "string" } | { "token": "string"} |
| POST  /api/user/signin | Login a user | Open | { "email": "string", "password": "string" } | | { "token": "string" } |
| POST  /api/todo/create | Create a new todo | Authenticated | { "title": "string", "description":"string" } | Authorization  | { "todo": "todo" } |
| GET   /api/todo/all | Get all todos of the user | Authenticated | | Authorization | [{ "todos": "todos" }] |
| PUT   /api/todo/update/:id | Update the Todo | Authenticated | { "title": "string", "description":"string" } |  Authorization  | { "todo": "todo" } |
| PUT   /api/todo/change-status/:id | Chagne the status of todo | Authenticated | {"status": "string"} | Authorization  | { "todo": "todo" } |
| DELETE /api/todo/delete/:id | Delete the Todo | Authenticated | | Authorization | {"message":"string"}

### Api Endpoints (Role: "ADMIN")
| Admin Endpoints | Functionality | Access | Body | Headers | Response
| --- | --- | --- | --- | --- | --- |
| GET /api/admin/all | Get all users | Admin | | Authorization | [{"user":"user"}]
| GET /api/admin/:id | Get a single user | Admin | | Authorization | {"user":"user"}
| DELETE /api/admin/:id | Delete a user | Admin | | Authorization | {"message":"string"}

## Scheduler
- The scheduler is set to send an email to the user every 2 hours to remind them of their tasks.
- Scheduler will run for every five minutes.

## Technologies
- NodeJs
- Express
- MongoDB
- Mongoose
- JsonWebToken
- Bcrypt
- Nodemailer
- Scheduler
