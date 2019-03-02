# Let's Play


## A. Description
Let's Play is an app that caters to board game enthusiasts. Visitors of the website can see a list of boardgames, add a particular boardgame to their favorites, and see profiles of other board gamers as well as their favorite boardgames.

The apps' front-end uses React, a popular Javascript library for building user interfaces with modular components.

The app's back-end architecture features users and board games routes with complete CRUD (Create, Read, Update, and Delete) capabilities using RESTful routing. This router also features authentication using bcrypt.
The boardgame router uses RESTful routing to grab appropriate data, provided by the BoardGameGeek API.


## B. Link to deployed app: 
heroku


```
Let's Play was built in 5 days by:
Bryant Cabrera - GitLab Manager/Scrum Master/Documenter/Designer
Abraham Hsu - Scrum Master/API Manager/Designer/React Lead

```

## C. App Images

![Imgur](https://i.imgur.com/QqglYvs.png)
![Imgur](https://i.imgur.com/Qy0ujpR.png)
![Imgur](https://i.imgur.com/wi7cQfB.jpg)
![Imgur](https://i.imgur.com/8TZ3SEk.png)
![Imgur](https://i.imgur.com/fbD31Lg.png)



## D. Technologies Used
> Front-End
    
    1. React
    2. Bootstrap
    3. BEM
    4. Google Fonts
    5. HTML
    6. CSS
    7. Javascript
    8. Heroku
    9. Git

> Back-End

    1. Python
    2. PostgreSQL
    3. Flask
    4. Restful Routing

> APIs
    1. Board Game Geek


> Authentication
    
    1. Bcrypt

> Planning/Organization/Design
    
    1. Adobe XD
    2. Adobe Photoshop


## E. User Stories
LOGGING IN: Users are able to register for a new account. 
When a user signs up for the first time, user will be presented a user profile page, where they'll fill out his or her name, profile picture, and location.

User will be able to browse all board games and add a particular game to his/her collection.

USER PROFILE:
Once vendor has completed their profile page, website will redirect to their own profile page, showing their info: profile picture, username, location, and board games he/she owns.

WEBSITE VISITORS:
Upon visiting the landing page, visitors are greeted a splash image of people gathered around playin a boardgame and can either register for a new account, discover all board games, or browse other profile.

Upon clicking a boardgame, visitor will be redirected to the Boardgame Show page, which displays additional information about the game: the designer, minimum and maximum players, play time, and description.

BOARD GAMES:
Available boardgames are viewable by anyone, without the need to register.
Clickin a boardgame image will redirect user to a boardgame's individual showpage, showing additional information.

## F. Github workflow
1.	Link to repository Front-End in React: [https://github.com/BryantCabrera/letsplay-react](https://github.com/BryantCabrera/letsplay-react). 
2.  1.	Link to repository Back-End in Python & Flask: [https://github.com/BryantCabrera/letsplay-flask](https://github.com/BryantCabrera/letsplay-flask). 

2.	On your personal repo (NOT the General Assembly) enterprise, log in.  then click link above and fork the repo.  Make sure the repo is in your personal GitHub (go to your personal GitHub account and the project repo “relocater” should be there).  Then, from YOUR PERSONAL FORK, clone it to your local repo.
    1.	$git clone {without curly braces, put the clone link here}
    2.  $git remote add upstream https://github.com/BryantCabrera/letsplay-react
3.	In terminal, cd to the project repo, open it, and $git checkout -b {without these curly braces, put your first name here in all lower case letters}
    1.	EXAMPLE:  $git checkout -b bryant
    2.	**any other time you are changing back to your branch, you don’t need to type the “-b” part anymore
4.	$npm install
    1.	This gets all of the react & express packages downloaded.
5.	FOR EXPRESS: you’re only concerned with the following folders/files
    1.	Controllers
    2.	Db
    3.	Models
    4.	Public
    5.	Routers
    6.	.env
    7.	Server.js
6.	FOR REACT: you’re only concerned with the following folders:
    1.	src (where you will be making ALL components)
    2.	public
7.	When you are 100% sure your data is ready to be merged into the master copy, make sure you are on YOUR OWN BRANCH (lower left of VScode), call Bryant to let him know you're merging, then:
    1.	$git add -A
    2.	$git commit -m “Adds {put your name here}’s {2-3 word description of the feature/code you made}”
    3.	$git push origin {without the curly braces, branchname}
        1.	This passes up the whole branch
    4.  go to your PERSONAL GitHub repo
        1.  OPTION 1: on your PERSONAL GitHub repo, accept and merge the pull requests
        2.  OPTION 2 (if you don't see the green button ABOVE the clone/download button on the right): 
            1. in your PERSONAL remote repo, use the dorpdown on the left to switch to the branch that you made updates to
            2.  click the "New Pull Request" button directly to the right of that dropdown menu
            3.  on the new screen, make sure the left side points to the origin master, and the right side points to your personal branch that has your edits
8.  Make sure your local repo is always in sync.
    1.  make sure you don't have any pending commits, then
    2.  $git checkout master
    3.  Bryant will let you know when to $git pull upstream master
    4.  $git branch -D {without the curly braces, your name all in lowercase}
        1. this deletes your old branch
    5. $git checkout -b {without the curly braces, your name all in lowercase}
9.	Merging
    1.	On master GitHub link
        1.	Click green button called “compare & pull”
        2.	Create pull request
            (a)	Title: {YourName in all lowercase} –{1-3 word description of new feature/code you made}
            (b)	Description: {line numbers} : Describe in detail what change you made and what it does.
        3.	Click send pull request
    2.	DO NOT hit “merge”, Bryant will be handling this.


## G. Next Steps
Unsolved problems:
    Search bar needs to match exact characters, including Uppercase. Search bar user-unfriendly, having to press "Reset Search" everytime a user wants to perform another search.
    Users can edit other user's profiles. 
    
Planned features:
    When a boardgame is added, no activity happens. Make it so a flash message appears, "Boardgame has been added!" 
    Users able to leave ratings and reviews on boardgames.
    Users able to chat with other users to discuss boardgames or meet-up times to play boardgames together.
    Authentication with Google or other social medias for easier login and security.
    User to be able to delete a boardgame from their list.
    Make search bar smoother: with each key press, start filtering boardgame names and animate the flow of 
    boardgames disappearing.
 


