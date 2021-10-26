import { createElement } from "./utils.js";

export function createPlayer(playerData) {
  const { player, name, hp, img } = playerData;

  const $player = createElement('div', 'player' + player);
  const $progressbar = createElement('div', 'progressbar');
  const $character = createElement('div', 'character');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $img = createElement('img');

  $player.appendChild($progressbar);
  $player.appendChild($character);

  $life.style.width = hp + '%';

  $name.innerText = name;

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  $img.src = img;
  $character.appendChild($img);

  return $player;
};
