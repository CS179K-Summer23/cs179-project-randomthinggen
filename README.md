[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11509573&assignment_repo_type=AssignmentRepo)
# RandomThingGen
A website to allow writers to randomly generate various things (characters, locations, objects, etc) when lacking inspiration.

## Team
- Carlos Velazquez, cavelazquez8
- Ian Kim, yanathan
- Seokha Kang, SeokhaSK
- Alison Stewart-Jones, JSJ-ucr

## Technologies
NodeJS, React, likely Express

## Major Features
| Priority | Feature                                                                                                                                                         | Story Points |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|
| 10       | Randomly generate a description of a specific thing (e.g. person, location, object, etc.) from databases of relevant words.                                     | 10           |
| 9        | Generation history (each new generated thing appears at the top of the page, so user can scroll down through things generated in the past)                      | 5            |
| 8        | Incorporate OpenAI libraries to generate with various prompts from user (location: altitude, temperature, location type, etc; person: age, gender, height, etc) | 8            |
| 7        | Save favorite descriptions to sidebar                                                                                                                           | 4            |
| 6        | Download contents of sidebar as JSON                                                                                                                            | 4            |
| 5        | Random writing prompt generator that incorporates items from other generators                                                                                   | 10           |
| 4        | Generators branch off from each other (generate person who lives in generated location or object owned by generated person, etc)                                | 8            |
| 3        | Change website theme, changing theme of prompts as well (fantasy/sci-fi)                                                                                    | 10           |

## User Stories
1. As a user, I want to be able to enter an input that randomly generates a character, location, or object.
2. As a user, I want to be able to decide whether my input shall be generated into a character, location, or object.
3. As a user, I want to be able to see past generated results
4. As a user, I want to be able to decide whether or not I want my result to be AI-generated
5. As a user, I want to bookmark/favorite descriptions so that I can save them/use them later
6. As a user, I want to download my bookmarks/favorites in JSON format
7. As a user, I want to change the theme of the result I receive according to the website theme
8. As a user, I want to see my results with as little delay as possible.
9. As a user, I want the things I enter into my AI prompt to be reflected in the result I receive.
10. As a user, I want there to be a large amount of possible true-random results.
11. As a user, I want to log in to the randomgen website to keep and see my histories.
12. As a user, I want to be able to provide information that will be reflected in my results.
