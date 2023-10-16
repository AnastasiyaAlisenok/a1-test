import wineProjectImg from "../../assets/img/project1.png";
import asyncProjectImg from "../../assets/img/project2.png";
import selectorsProjectImg from "../../assets/img/project3.png";
import minesweeperProjectImg from "../../assets/img/project4.png";
import keyboardProjectImg from "../../assets/img/project5.png";
import shelterProjectImg from "../../assets/img/project6.png";

export const projectsList = [
  {
    title: "Wine Store App",
    text: "The final training task was created in the team. Application functionality: login page, registration page, favorite products, product catalog, shopping cart, routing.",
    imgSrc: wineProjectImg,
    stackText:
      "TypeScript, React, Webpack, Eslint, Prettier, Husky, react-route-dom, react-hook-form, react-paginate, commertools API.",
    deployLink: "https://allwine.netlify.app/",
    gitLink: "https://github.com/AnastasiyaAlisenok/eCommerce-Application",
  },
  {
    title: "Async-race App",
    text: "A simple game in which we can create cars, change their colors and names, and browse through the different cars page by page. Implemented race animation. Race winners are displayed on a separate page.",
    imgSrc: asyncProjectImg,
    stackText: "HTML, SASS, TypeScript, Webpack, Eslint, Prettier",
    deployLink: "https://anastasiyaalisenok-async-race.netlify.app",
    gitLink: "https://github.com/AnastasiyaAlisenok/async-race",
  },
  {
    title: "RSS-Selectors App",
    text: "A simulator for studying selectors. Application functionality: 10 levels with different tasks, a field for entering an answer, animation for correct and incorrect answers, progress reset. The application prototype is CSS-diner https://flukeout.github.io/.",
    imgSrc: selectorsProjectImg,
    stackText: "HTML, SASS, TypeScript, Webpack, Eslint, Prettier, Jest",
    deployLink: "https://anastasiyaalisenok-rss-css-selectors.netlify.app/",
    gitLink: "https://github.com/AnastasiyaAlisenok/rss-css-selectors",
  },
  {
    title: "Minesweeper",
    text: "The application is a popular minesweeper game. Additional functionality: 3 field sizes, the ability to select the number of mines, change the theme, results page, save the game after a reload.",
    imgSrc: minesweeperProjectImg,
    stackText: "HTML, CSS, JavaScript, Webpack, Eslint, Prettier",
    deployLink: "https://anastasiyaalisenok-minesweeper.netlify.app/",
    gitLink:
      "https://github.com/AnastasiyaAlisenok/minesweeper/tree/minesweeper",
  },
  {
    title: "Virtual keyboard",
    text: "The virtual keyboard allows to enter text from both a virtual and physical keyboard. It is possible to change the language. All these buttons correspond to the physical keyboard, animation has been added when pressed.",
    imgSrc: keyboardProjectImg,
    stackText: "HTML, CSS, JavaScript, Eslint",
    deployLink: "https://anastasiyaalisenok-keyboard.netlify.app/",
    gitLink:
      "https://github.com/AnastasiyaAlisenok/virtual-keyboard/tree/development",
  },
  {
    title: "Shelter",
    text: "A two-page website made according to the layout. Application functionality: pagination, carousel, popup.",
    imgSrc: shelterProjectImg,
    stackText: "HTML, CSS, JavaScript",
    deployLink: "https://anastasiyaalisenok.github.io/shelter/pages/main",
    gitLink: "https://github.com/AnastasiyaAlisenok/shelter",
  },
];
