const $arenas = document.querySelector('.arenas');
const $button = document.querySelector('.button');

const player1 = {
  player: 1,
  name: 'Liukang',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: [],
  attack: function () {
    console.log(player1.name + ' Fight ...');
  },
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
};

function createElement(tag, className) {
  const $elem = document.createElement(tag);

  if (className) {
    $elem.classList.add(className);
  }

  return $elem;
}

function createPlayer(playerData) {
  const $player = createElement('div', 'player' + playerData.player);
  const $progressbar = createElement('div', 'progressbar');
  const $character = createElement('div', 'character');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $img = createElement('img');

  $player.appendChild($progressbar);
  $player.appendChild($character);

  $life.style.width = playerData.hp + '%';

  $name.innerText = playerData.name;

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  $img.src = playerData.img;
  $character.appendChild($img);

  return $player;
};

function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
}

function playerLose(name) {
  const $loseTitle = createElement('div', 'loseTitle');
  $loseTitle.innerText = name + ' Lose!';

  return $loseTitle;
}

function showTitle(name) {
  const $showTitle = createElement('div', 'showTitle');

  if (name) {
    $showTitle.innerText = name + ' Win!';
  } else {
    $showTitle.innerText = 'Draw!';
  }

  return $showTitle;
}

function draw() {
  const $drawTitle = createElement('div', 'drawTitle');
  $drawTitle.innerText = 'Draw!';

  return $drawTitle;
}

function changeHP(player) {
  const $playerLife = document.querySelector('.player' + player.player + ' .life');
  player.hp -= getRandomInt(20);

  if (player.hp <= 0) {
    player.hp = 0;
  };

  $playerLife.style.width = player.hp + '%';
}

$button.addEventListener('click', function () {
  changeHP(player1);
  changeHP(player2);

  if (player1.hp === 0 || player2.hp === 0) {
    $button.disabled = true;
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(showTitle(player2.name));
  } else if (player2.hp === 0 && player1.hp > player2.hp) {
    $arenas.appendChild(showTitle(player1.name));
  } else if (player1.hp === 0 && player2.name === 0) {
    $arenas.addEventListener(showTitle());
  }
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

