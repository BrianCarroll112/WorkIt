# WorkIt

## Project Description

WorkIt is a job search app for the tech industry. Users may register/login and browse recent job posts. A user may view more information on both the job or the company hiring. Additionally, a user may view other users' profiles and 'vouch' for them.

## Challenges

- Editing Functionality
- Vouching Many-to-Many

## MVP

- Register/Login
- Profile 
- View Jobs/companies

## Post-MVP

- Vouching
- Company login / post jobs

## Feature List

- User Login
- User Register
- Edit Profile - Inline edits
- Upload CV and images drag/drop
- Add Desired Job Titles
- View list of job postings
- View jobs by Job Title
- View job post
- Apply to job
- View list of companies
- View company profile and available jobs
- Vouch for other users

## ERD

![ERD](https://i.imgur.com/ojOMZdd.jpg)

## API Endpoint Documentation

- POST /users

Request: User Object

Response: User Object

- GET /users/:id

Response: User data object of requested user id

- PUT /users/:id

Request: User Object

Response: User Object

- DELETE /users/:id

Request: id integer to delete

Response: success message JSON

- POST /login

Request: Email/Password Object

Response: Token String

- GET /jobs

Response: Array of job objects

- GET /companies

Response: Array of company objects

- Get /companies/:id

Response: Company object

- Post-MVP

Add C(R)UD functionality for companies to login and C(R)UD jobs


## Wireframes

![Wireframes sketches](https://i.imgur.com/esJ0Dol.jpg).

## Component Hierarchy

![Component Heirarchy](https://i.imgur.com/nQnJwCO.jpg)

## Dependencies

- TBD
