REST API with Authentication, Authorization & Product CRUD

A backend REST API built with Node.js, Express.js, MongoDB, and JWT.
This API demonstrates user authentication, role-based authorization, and secure CRUD operations for a Product resource.



 1. Project Overview

The goal of this project is to build a backend API that supports:
		User registration & login
		JWT-based authentication
		Role-based access control
		CRUD operations on products
		Protected routes
		Centralized error handling
		Clean and maintainable code structure


2. Core Features

2.1 User Authentication

 User Registration (Signup)
		Accepts: name, email, password
		Passwords are hashed using bcrypt
		Validates all incoming data before saving
		Stores user in MongoDB

 User Login
		Accepts: email, password
		Verifies credentials
		Returns a signed JWT token
		Token must be sent with every protected request (Authorization: Bearer <token>)

 Token Validation
		Middleware verifies:
		Token validity
		Token expiration
		User existence
		Unauthorized users get 401 Unauthorized



2.2 Authorization (Role-Based Access)

Supports two roles:
		user
		admin

Admin-only routes include:
		Create product
		Update product
		Delete product

Middleware ensures:
		Users can only access what their role permits
		Admins have full access to product management

Unauthorized access triggers 403 Forbidden



 2.3 CRUD Operations (Products API)

Public Routes (No Token Required)

✔ GET /products
Fetch all products

✔ GET /products/:id
Fetch a single product


Admin-Only Routes (Token + Admin Role Required)

✔ POST /products
Create a product

✔ PATCH /products/:id
Update an existing product

✔ DELETE /products/:id
Delete a product



 3. Technical Requirements

Backend Stack
	.	Node.js
	.	Express.js
	.	MongoDB + Mongoose
	.	JWT (JSON Web Tokens)
	.	bcryptjs
    .   validator




 4. API Standards & Response Structure
 HTTP Status Codes Used
		200 – OK
		201 – Created
		400 – Bad Request
		401 – Unauthorized
		403 – Forbidden
		404 – Not Found
		500 – Server Error



 5. Error Handling
	Custom error responses
		Covers:
		validation errors
		authentication failures
		missing resources
		internal server issues


6. How to run the Projrct
     Install dependencies listed in stack
     create.env.file e.g (PORT: 3000)
     start server (npm run dev after installing nodemon)
     server will run on : http://localhost:3000


7. Hosted Link
    Hosted Api URL: 