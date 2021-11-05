import { createPlayer } from "./createplayers.js";
import { generateLogs } from "./generatelogs.js";
import { checkWin } from "./declareWinner.js";
import { playerAttack } from "./fight.js";
import { getRandomInt } from "./utils.js";
import { Player } from "./classplayer.js";

let player1;
let player2;
export class Game {

  getPlayer = async () => {
    const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players').then(responce => responce.json());
    return body;
  };

  getEnemy = async () => {
    const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/player/choose').then(responce => responce.json());
    return body;
  };

  getEnemyAttack(hit, defence) {
    const attack = fetch('http://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
      method: 'POST',
      body: JSON.stringify({
        hit,
        defence,
      })
    }).then(responce => responce.json());
    return attack;
  };


  fight = async (hit, defence) => {
    const obj = await this.getEnemyAttack(hit, defence);
    return obj;
  }

  start = async () => {

    const $arenas = document.querySelector('.arenas');
    const $form = document.querySelector('.control');
    const players = await this.getPlayer();
    const p2 = await this.getEnemy();
    const p1 = players[getRandomInt(players.length) - 1];

    console.log(players);
    console.log(p1);

    player1 = new Player({
      ...p1,
      player: 1
    });

    player2 = new Player({
      ...p2,
      player: 2
    });

    $form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const { hit, defence } = playerAttack($form);

      const { player1: player, player2: enemy } = await this.fight(hit, defence);

      const { hit: hitPlayer, defence: defencePlayer, value: valuePlayer } = player;
      const { hit: hitEnemy, defence: defenceEnemy, value: valueEnemy } = enemy;

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
