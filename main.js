const liukang = {
  name: 'Liukang',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: [],
  attack: function () {
    console.log(liukang.name + ' Fight ...');
  },
};

const scorpion = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: [],
  attack: function () {
    console.log(scorpion.name + ' Fight ...');
  },
};

function createPlayer(player, playerData) {
  const $player1 = document.createElement('div');
  $player1.classList.add(player);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  const $character = document.createElement('div');
  $character.classList.add('character');

  $player1.appendChild($progressbar);
  $player1.appendChild($character);

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = playerData.hp + '%';

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = playerData.name;

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  const $img = document.createElement('img');
  $img.src = playerData.img;
  $character.appendChild($img);

  const $arenas = document.querySelector('.arenas');
  $arenas.appendChild($player1);
};

createPlayer('player1', liukang);
createPlayer('player2', scorpion);