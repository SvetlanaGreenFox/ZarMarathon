// import { player1, player2 } from "./classplayer.js";
import { createPlayer } from "./createplayers.js";
import { generateLogs } from "./generatelogs.js";
import { checkWin } from "./declareWinner.js";
import { enemyAttack, playerAttack } from "./fight.js";
import { getRandomInt } from "./utils.js";
import { Player } from "./classplayer.js";

let player1;
let player2;
export class Game {

  getPlayer = async () => {
    const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players').then(responce => responce.json()).then(data => data);
    return body;
  };

  getEnemy = async () => {
  const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/player/choose').then(responce => responce.json()).then(data => data);
    return body;
  };

  // getEnemyAttack (hit, defence) {
  //   const attack = fetch('http://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //         hit,
  //         defence,
  //     })
  // }).then(responce => responce.json());
  // console.log(attack);
  // return attack;
  // };

  // fight = async () => {
  //   const obj = await this.getEnemyAttack('head', 'head');
  //   return obj;
  // } 

  start = async () => {

    const $arenas = document.querySelector('.arenas');
    const $form = document.querySelector('.control');
    const players = await this.getPlayer();
    player2 = await this.getEnemy();
    const p1 = players[getRandomInt(players.length) - 1];
    player1 = new Player({
      ...p1,
      player: 1
    });

    // const attack = this.fight();

    $form.addEventListener('submit', (e) => {
      e.preventDefault();

      const { hit: hitPlayer, defence: defencePlayer, value: valuePlayer } = playerAttack($form);
      // const { hit: hitEnemy, defence: defenceEnemy, value: valueEnemy } = await this.getEnemyAttack(hitPlayer, defencePlayer);
      // const enemyAttack = async () => {
      //   const obj = await this.getEnemyAttack(hitPlayer, defencePlayer);
      //   return obj;
      // } 

      if (defenceEnemy !== hitPlayer) {
        // console.log(player2);
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


  // start = () => {
  //   const $arenas = document.querySelector('.arenas');
  //   const $form = document.querySelector('.control');

  //   $form.addEventListener('submit', (e) => {
  //     e.preventDefault();

  //     const { hit: hitEnemy, defence: defenceEnemy, value: valueEnemy } = enemyAttack();

  //     const { hit: hitPlayer, defence: defencePlayer, value: valuePlayer } = playerAttack($form);

  //     if (defenceEnemy !== hitPlayer) {
  //       player2.changeHP(valueEnemy);
  //       player2.renderHP();
  //       generateLogs('hit', player1, player2, valueEnemy);
  //     }

  //     if (defencePlayer !== hitEnemy) {
  //       player1.changeHP(valuePlayer);
  //       player1.renderHP();
  //       generateLogs('hit', player2, player1, valuePlayer);
  //     }

  //     if (defencePlayer === hitEnemy) {
  //       generateLogs('defence', player2, player1);
  //     }

  //     if (hitPlayer === defenceEnemy) {
  //       generateLogs('defence', player1, player2);
  //     }

  //     checkWin(player1, player2, $arenas);
  //   })

  //   generateLogs('start', player1, player2);
  //   $arenas.appendChild(createPlayer(player1));
  //   $arenas.appendChild(createPlayer(player2));
  // }

  
  // start = async => {
  //   players = this.getPlayer();
  //   const p1 = players[getRandomInt(players.length - 1)];
  //   const p2 = players[getRandomInt(players.length - 1)];

  //   player1 = new Player({
  //     ...p1,
  //     player: 1
  //   });
  //   player2 = new Player({
  //     ...p2,
  //     player: 2
  //   });
  //   player1.createPlayer();
  //   player2.createPlayer();

  //   generateLogs('start', player1, player2);
  // }