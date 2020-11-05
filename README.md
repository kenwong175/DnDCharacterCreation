# Dungeons and Dragons Character Creation

Dungeons and Dragons are one of the popular boardgames that are played with a group of friends. The game centers around a Game Master(GM) for narration and players who will interact with the scenario given. This app is designed for the Character Creation stages of the game.

## Description

This project aims to assist in character creation for the boardgame Dungeons and Dragons, which have a lot of different combinations of races, classes and proficiencies.

Users can choose based on their preference and stats will be shown upon selection.

### Technology Used

```
- React hooks
- Bootstrap with react
- Axios for API calls
- Firebase for data storage
```

### Wireframes

Initial plans when going through the layout of the app

![1](https://git.generalassemb.ly/stralth/DnDCharCreation/blob/master/src/wireframes/Screenshot%202020-11-05%20at%207.49.09%20PM.png)
![2](https://git.generalassemb.ly/stralth/DnDCharCreation/blob/master/src/wireframes/Screenshot%202020-11-05%20at%207.49.55%20PM.png)
![3](https://git.generalassemb.ly/stralth/DnDCharCreation/blob/master/src/wireframes/Screenshot%202020-11-05%20at%207.50.16%20PM.png)

### User Stories

User login page powered by Firebase
![1](https://git.generalassemb.ly/stralth/DnDCharCreation/blob/master/src/screenshots/Screenshot%202020-11-05%20at%207.55.43%20PM.png)

User to be able to view all characters
![2](https://git.generalassemb.ly/stralth/DnDCharCreation/blob/master/src/screenshots/Screenshot%202020-11-05%20at%208.04.35%20PM.png)

User to be able to select races and classes
![3](https://git.generalassemb.ly/stralth/DnDCharCreation/blob/master/src/screenshots/Screenshot%202020-11-05%20at%208.05.09%20PM.png)
![4](https://git.generalassemb.ly/stralth/DnDCharCreation/blob/master/src/screenshots/Screenshot%202020-11-05%20at%208.05.46%20PM.png)

User to be able to see the overall selections and save
![5](https://git.generalassemb.ly/stralth/DnDCharCreation/blob/master/src/screenshots/Screenshot%202020-11-05%20at%208.06.32%20PM.png)

## Planning and Development Process

Started with the react-app coding for API calls from the DnD API. Used hooks to store the data from the API calls and populate the selection screen. Compiled all into one Overall page before moving on to the CSS styling. Firebase storage and login was done last. 

### Problem-Solving Strategy

Throughout the project, the need to keep track of the API data was important to make sure the data doesn't get called or assigned to the wrong states. 
Some of the data is in array or similar types and there was a need to give it a unique designation to store them in separate keys.
For the Firebase, I went to get help from my Instructor, Ebere and TA Siu Sing as there were some issues with authenticating the logins.  

### Unsolved problems

A lot more of the DnD data for character creation(eg. subclasses, spells, player name, character name) was left out from the project.

## APIs Used

DnD 5E API - http://www.dnd5eapi.co/docs/#intro


## Acknowledgments

Thanks to my Instructor Ebere, TAs Siu Sing & Tristan, and fellow GA SEI-25 coursemates for all the help and advice given during the project.

 ## References
Dungeons and Dragons Character Creation Guide - https://www.youtube.com/watch?v=ZcNgj0KPYuA
Baldur's Gate Character Creation Video - https://www.youtube.com/watch?v=pXxcA1TSL-k