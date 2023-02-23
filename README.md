# cantinatatooine
A quick no style implementation of the Star Wars API


## Running
You will need to run `yarn install`, followed by `yarn start` to run locally.

Run `npm run cypress:open` to see the e2e tests and fixtures.


## Notes:
Films / Planets are referenced by url on the /people/api/

There are GraphQL and typescript wrappers 
https://github.com/amitmtrn/swapi-ts

This would solve the issue of doing custom queries to resovlve dependencies like "https://swapi.dev/api/films/2/" -> "The Empire Strikes Back"

Ideally want to keep requests to a minimum and cache things everywhere.

### Redux Toolkit Query RTK
I'm new to this, so I'm going to see how this goes in terms of doing this case.

### TDD 
Also going to start off with a minimal goal of getting routes setup with cypress, e.g. 

/character/ (All Characters)
/character/1/ (Luke)

## Requirements
Use data from https://swapi.dev/

### Character list view
 - List characters from the Star Wars universe (name, gender &amp; home
planet, people/?page=1 would suffice).
    X List should load
    X List should have characters
    List items should include name, gender, home planet, people
 - Clicking a list entry should navigate to the character details page

### Character details view
 - Display the following: name, hair colour, eye colour, gender and home planet and list
 the films that the character has appeared in

###
Setup log
npx create-react-app cantinatatooine --template typescript .
yarn add typescript @types/node @types/react @types/react-dom @types/jest
yarn add cypress

> Pulling from https://github.com/cypress-io/cypress-and-jest-typescript-example
want to test route exists for /all/, /character/<id>

Routing took longer than expected, but now cypress is validating the routes work as intended (yay TDD achieved)

Added a Redux Query RTK apiSlice to start getting data from SW API. Needs tests.


