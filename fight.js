import { getRandomInt } from "./utils.js";

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

export function enemyAttack() {
  const hit = ATTACK[getRandomInt(3) - 1];
  const defence = ATTACK[getRandomInt(3) - 1];
  return {
    value: getRandomInt(HIT[hit]),
    hit,
    defence
  }
}

export function playerAttack(form) {
  const attack = {};

  for (const item of form) {
    if (item.checked && item.name === 'hit') {
      attack.value = getRandomInt(HIT[item.value]);
      attack.hit = item.value;
    }

    if (item.checked && item.name === 'defence') {
      attack.defence = item.value;
    }

    item.checked = false;
  }

  return attack;
}