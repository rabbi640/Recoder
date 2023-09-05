import Type from "typed.js";

export function animateTyping(element, arr) {
  return new Type(element, {
    strings: arr,
    typeSpeed: 100,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
    startDelay: 900,
    shuffle: true,
    cursorChar: "|",
  });
}
