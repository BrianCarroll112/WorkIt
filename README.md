# WorkIt

## Project Description
A brief explanation of the project you'll be building with the objective described in non-technical language.

## Challenges
An explanation of the major challenges you expect to face while building this app and how you foresee your team solving them.

## MVP

## Post-MVP

A section clearly defining MVP and POST MVP.

## Feature List

- User Login
- User Register
- Edit Profile
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

![ERD](https://i.imgur.com/CC9dEOh.jpg)

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

Wireframes sketches of the user interface with notes of how the user will interact with the UI.

## Component Hierarchy

![Component Heirarchy](https://i.imgur.com/nQnJwCO.jpg)

## Dependencies

List Dependencies link to any project dependencies (e.g. 3rd party APIs, libraries, linter, etc).
