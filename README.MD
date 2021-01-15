# Drawing App Backend

This is the backend for the Drawing App. 

The frontend can be found at https://github.com/victorP0/DrawingApp.
## API Documentation

The App uses the canvas API (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API). 

DrawingAppRputer.js has 2 routes on the "/" path. The `GET` route is used to fetch the images added to the gallery in the last 7 days. The `POST` route allows the user to send the drawing to the gallery.

The validate-bearer-token.js file is created and used to ensure only clients with the valid bearer token can acesss and send data to the database.
## Description

This a drawing app that allows Users to draw and save their drawings to the gallery. The gallery will display drawings added to the gallery in the last 7 days.

## Technologies used

Node, Express, PostgreSQL, Mocha, Chai, Supertest, Knex.js

