import { createPlayer } from "./createplayers.js";
import { generateLogs } from "./generatelogs.js";
import { checkWin } from "./declareWinner.js";
import { changeHP, renderHP, elHP } from "./players.js";
import { enemyAttack, playerAttack } from "./fight.js";

const $arenas = document.querySelector('.arenas');
const $form = document.querySelector('.control');

const player1 = {
  player: 1,
  name: 'Liukang',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: [],
  attack: function () {
    console.log(player1.name + ' Fight ...');
  },
  changeHP,
  renderHP,
  elHP,
};

const player2 = {
  player: 2,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: [],
  attack: function () {
    console.log(player2.name + ' Fight ...');
  },
  changeHP,
  renderHP,
  elHP,
};

$form.addEventListener('submit', function (e) {
  e.preventDefault();

  const enemy = enemyAttack();

  const player = playerAttack($form);

  if (enemy.defence !== player.hit) {
    player1.changeHP(player.value);
    player1.renderHP();
    generateLogs('hit', player1, player2, player.value);
  }

  if (player.defence !== enemy.hit) {
    player2.changeHP(enemy.value);
    player2.renderHP();
    generateLogs('hit', player2, player1, enemy.value);
  }

  if (player.defence === enemy.hit) {
    generateLogs('defence', player2, player1);
  }

  if (player.hit === enemy.defence) {
    generateLogs('defence', player1, player2);
  }

  checkWin(player1, player2, $arenas);
})

generateLogs('start', player1, player2);
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
