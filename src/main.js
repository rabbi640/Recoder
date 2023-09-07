import "./sass/style.scss";
import "./../node_modules/bootstrap/dist/js/bootstrap.min";
import { createPopper } from "@popperjs/core";
import { animateTyping } from "./Animations.js";

const arr = [
  "print('Hello, Programmer')",
  'System.out.println("Welcome to programmeing world")',
  'console.log("How are you Programmer")',
  "SELECT 'Hello, World' FROM DUAL",
  'printf("Hello, World")',
];
animateTyping("#typing", arr);
document.querySelector(".typed-cursor").style.color = "white";


