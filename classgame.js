import { player1, player2 } from "./classplayer.js";
import { createPlayer } from "./createplayers.js";
import { generateLogs } from "./generatelogs.js";
import { checkWin } from "./declareWinner.js";
import { enemyAttack, playerAttack } from "./fight.js";

export class Game {
  start = () => {
    const $arenas = document.querySelector('.arenas');
    const $form = document.querySelector('.control');

    $form.addEventListener('submit', (e) => {
      e.preventDefault();

      const { hit: hitEnemy, defence: defenceEnemy, value: valueEnemy } = enemyAttack();

      const { hit: hitPlayer, defence: defencePlayer, value: valuePlayer } = playerAttack($form);

      if (defenceEnemy !== hitPlayer) {
        player2.changeHP(valueEnemy);
        player2.renderHP();
        generateLogs('hit', player1, player2, valueEnemy);
      }

      if (defencePlayer !== hitEnemy) {
        player1.changeHP(valuePlayer);
        player1.renderHP();
        generateLogs('hit', player2, player1, valuePlayer);
      }

      if (defencePlayer === hitEnemy) {
        generateLogs('defence', player2, player1);
      }

      if (hitPlayer === defenceEnemy) {
        generateLogs('defence', player1, player2);
      }

      checkWin(player1, player2, $arenas);
    })

    generateLogs('start', player1, player2);
    $arenas.appendChild(createPlayer(player1));
    $arenas.appendChild(createPlayer(player2));
  }
}