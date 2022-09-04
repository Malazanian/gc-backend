# Baseball and Softball Scoring Service

We want you to build a simple baseball and softball score keeping REST API that mobile and web clients can use to save information about games. In its first iteration the service should provide endpoints to allow consumers to store and retrieve basic information about games and game events (like pitches and balls).

## Directions

- Please complete the open GitHub issue(s). Please commit your changes at least 24 hours before your visit and confirm your submission with your point of contact or let them know if you have any questions.
- Make sure you get to a working state. We're going to build some new features on top of your existing solution when you come into the office.
- We think it should normally take about a couple of hours to complete this assignment, but you are free to dedicate as much time as you see fit.
- The prompt is language-agnostic; feel free to choose the language(s) and technologies you are most comfortable with.
- We'll be running your software on our machines, so please include any setup instructions needed to run your solution.

## Requirements:

- node
- yarn

## Setup Instructions

- Clone repo and run `yarn install` or `npm install`
- Run the server with `yarn start` or `yarn watch` for hot reloading
- Run tests with `yarn test:unit`
- Note: To clear the database, delete `database.sqlite3` and re-run the server

## Usage

### Games

1. Create Game - `POST /games`

   POST body:

   ```
   {
     "id": "6690cf59-79de-445c-b9f7-04b7f1ee7990",
     "start": "2018-10-10T22:00:00.000Z",
     "end": "2018-10-11T01:00:00.000Z",
     "arrive": "2018-10-10T21:30:00.000Z"
   }
   ```

2. Get Game - `GET /games/6690cf59-79de-445c-b9f7-04b7f1ee7990`

3. List Games - `GET /games`

### ScoringEvents

1. Create ScoringEvent - `POST /scoring-events`

   POST body:

   ```
    {
      "id": "486585db-75f2-467d-a825-b37777c96529",
      "game_id": "6690cf59-79de-445c-b9f7-04b7f1ee7990",
      "timestamp": "2018-10-10T22:03:56.413Z",
      "data": {
        "code": "pitch",
        "attributes": {
          "advances_count": true,
          "result": "ball_in_play"
        }
      }
    }
   ```

2. Get ScoringEvent - `GET /scoring-events/486585db-75f2-467d-a825-b37777c96529`

3. List ScoringEvents - `GET /scoring-events`
