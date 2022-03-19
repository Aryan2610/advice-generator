"use strict";

const title = document.querySelector(".title");
const content = document.querySelector(".content");

const advice = async function () {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  title.innerHTML = `Advice ${data.slip.id}`;
  content.innerHTML = `"${data.slip.advice}"`;
};
