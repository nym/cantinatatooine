# cantinatatooine
A quick no style implementation of the Star Wars API

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
    List should load
    List should have characters
    List items should include name, gender, home planet, people
 - Clicking a list entry should navigate to the character details page

### Character details view
 - Display the following: name, hair colour, eye colour, gender and home planet and list
 the films that the character has appeared in
