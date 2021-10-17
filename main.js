const $arenas = document.querySelector('.arenas');
const $button = document.querySelector('.button');

const liukang = {
  player: 1,
  name: 'Liukang',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: [],
  attack: function () {
    console.log(liukang.name + ' Fight ...');
  },
};

const scorpion = {
  player: 2,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: [],
  attack: function () {
    console.log(scorpion.name + ' Fight ...');
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

function playerWin(name) {
  const $winTitle = createElement('div', 'winTitle');
  $winTitle.innerText = name + ' Win!';

  return $winTitle;
}

function draw() {
  const $drawTitle = createElement('div', 'drawTitle');
  $drawTitle.innerText = 'Draw!';

  return $drawTitle;
}

function changeHP(player) {
  const $playerLife = document.querySelector('.player' + player.player + ' .life');
  player.hp -= getRandomInt(20);
  $playerLife.style.width = player.hp + '%';

  if (player.hp <= 0) {
    $button.disabled = true;
    if (player.player === 1) {
      $arenas.appendChild(playerWin(scorpion.name));
    } else if (player.player === 2) {
      $arenas.appendChild(playerWin(liukang.name));
    } else if (liukang.hp === scorpion.hp) {
      $arenas.appendChild(draw());
    }
  }
}

$button.addEventListener('click', function () {
  changeHP(liukang);
  changeHP(scorpion);
})

$arenas.appendChild(createPlayer(liukang));
$arenas.appendChild(createPlayer(scorpion));

