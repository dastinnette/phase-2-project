# Starviews

Starviews is a Phase 2 project for [Flatiron School](https://flatironschool.com/). Its purpose is to expose users to NASA's APOD (astronomy photo of the day) API and allows them to contribute their interstellar discoveries as well. Starviews is a single page app built with React that accesses data from a db.json file using [json-sever](https://www.npmjs.com/package/json-server). 

This project also makes use of popular React hooks and client-side routing. We styled the app through a combination of [React Bootstrap](https://react-bootstrap.github.io/) and custom CSS.

## Getting started

### BackEnd
To get this app running on your local machine, first **fork** a copy into your Github account then **clone** from that copy. Once you've opened the code files from your terminal, run the following commands to get json-server working...

Install JSON Server:

`npm install -g json-server`

Start JSON Server:

`json-server --watch db.json or `npm run server`

### FrontEnd

Running the command `npm start` will start up a react page that brings you to http://localhost:3000, you'll see the home page of our app.

Open the app in your browser with the command "npm start" to interact with the page and learn more about the wonders of space.

### Tree

Inside the tree youll see examples of routes: (/route). you can also get a better idea at line 13 to 34 of index.js

You might also see a link that follows a route:[/link]

```
Index.js - App.js(/)  ------------------NavBar-LINKS[/,/Gallery,/New
              / |    \
 (/New)NewForm  |     Item Container(/Gallery)
                |        |	                 \
                |  ItemCard[/Gallery/:id]     DetailedPage[/]
                |	                            
                HomePage(/)[/Gallery]		
                |
                FavoriteItem
```

## Shout outs

This project was created by [Mateusz Trybunia](https://github.com/Case652) and myself. We used...

on lines 7 to 42 in HomePage.js and lines 105 to 120 in App.css, code from https://codepen.io/Hyperplexed/pen/MWXBRBp is used.
