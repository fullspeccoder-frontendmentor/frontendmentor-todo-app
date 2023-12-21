# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This repository is here to practice some front end styling, functionality, and basic markup using the React library along with the react-beautiful-dnd library to enable drag and drop features. 

This app allows you to do the following: 
- Create todos
- Check them off
- Delete them
- Drag them into a new position
- Change themes from day to night and night to day
- Change categories for the completed, active, and all todos

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size (Still needs work)
- See hover states for all interactive elements on the page ✅
- Add new todos to the list ✅
- Mark todos as complete ✅
- Delete todos from the list ✅
- Filter by all/active/complete todos ✅
- Clear all completed todos ✅
- Toggle light and dark mode ✅
- **Bonus**: Drag and drop to reorder items on the list ✅

### Screenshot

![IMG_1794](https://github.com/fullspeccoder/frontendmentor-todo-app/assets/48267755/dde659c1-1ec7-4da1-8490-6ab9cd0b171a)

### Links

- Solution URL: [Github Repo]([https://your-solution-url.com](https://github.com/fullspeccoder/frontendmentor-todo-app))
- Live Site URL: ([https://your-live-site-url.com](https://clinquant-basbousa-f00508.netlify.app/])

## My process

I chose to use the react library to create this app.

When choosing react as my library this would allow me to develop components that I could modularize and possibly reuse down the road for many other projects. Through react I was able to separate each of the User Interface's groupings into components that I could reuse multiple times without having to rewrite certain portions and functions in HTML and Javascript.

I had to make sure that I understood how prop drilling works, how I could utilize the children prop to eliminate some prop drilling, and further improve the readability of this app. When I stumbled onto react-beautiful-dnd I had to do enough research to understand how drag and drop works for an app like this. Simply put, you surround your droppable area and your draggables in a DragDropContext. Then from there you put your droppable area in the DragDropContext. It was pretty clear that the Droppable Component was the TodoList and that the Draggable Component were the Todos.

### Built with

- HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**

**Note: I still have alot more work to do on this application and README.md File but this is what I have so far.**
