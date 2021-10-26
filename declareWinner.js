import { createElement, createReloadButton } from "./utils.js";
import { generateLogs } from "./generatelogs.js";

const $button = document.querySelector('.button');

export function checkWin(player1, player2, wrap) {
  const { name: name1, hp: hp1 } = player1;
  const { name: name2, hp: hp2 } = player2;

  if (hp1 === 0 || hp2 === 0) {
    $button.disabled = true;
    createReloadButton(wrap);
  }

  if (hp1 === 0 && hp1 < hp2) {
    wrap.appendChild(showTitle(name2));
    generateLogs('end', player2, player1);
  } else if (hp2 === 0 && hp1 > hp2) {
    wrap.appendChild(showTitle(name1));
    generateLogs('end', player1, player2);
  } else if (hp1 === 0 && hp2 === 0) {
    wrap.addEventListener(showTitle());
    generateLogs('draw', player1, player2);
  }
}

function showTitle(name) {
  const $showTitle = createElement('div', 'loseTitle');

  if (name) {
    $showTitle.innerText = name + ' Win!';
  } else {
    $showTitle.innerText = 'Draw!';
  }

  return $showTitle;
}