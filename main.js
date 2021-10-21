const $arenas = document.querySelector('.arenas');
const $button = document.querySelector('.button');
const $form = document.querySelector('.control');

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

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
  const $showTitle = createElement('div', 'loseTitle');

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

function changeHP(hp) {
  if (this.hp >= hp) {
    this.hp -= hp;
  } else if (this.hp === 0) {
    this.hp;
  } else if (this.hp < hp) {
    this.hp = 0;
  }
}

function elHP() {
  const $playerLife = document.querySelector('.player' + this.player + ' .life');
  return $playerLife;
}

function renderHP() {
  const player = this.elHP();
  player.style.width = this.hp + '%';
}

function createReloadButton() {
  const $wrapButton = createElement('div', 'reloadWrap');
  $arenas.appendChild($wrapButton);

  const $button = createElement('button', 'button');
  $wrapButton.appendChild($button);
  $button.innerText = 'Restart';

  $button.addEventListener('click', function () {
    console.log('hi');
    window.location.reload();
  })

  return $wrapButton;
}

function enemyAttack() {
  const hit = ATTACK[getRandomInt(3) - 1];
  const defence = ATTACK[getRandomInt(3) - 1];

  return {
    value: getRandomInt(HIT[hit]),
    hit,
    defence
  }
}

// $button.addEventListener('click', function () {
//   player1.changeHP(getRandomInt(20));
//   player1.renderHP();

//   player2.changeHP(getRandomInt(20));
//   player2.renderHP();
//   console.log(player1.hp, player2.hp);
//   if (player1.hp === 0 || player2.hp === 0) {
//     $button.disabled = true;
//     createReloadButton();
//   }

//   if (player1.hp === 0 && player1.hp < player2.hp) {
//     $arenas.appendChild(showTitle(player2.name));
//   } else if (player2.hp === 0 && player1.hp > player2.hp) {
//     $arenas.appendChild(showTitle(player1.name));
//   } else if (player1.hp === 0 && player2.hp === 0) {
//     $arenas.addEventListener(showTitle());
//   }
// })


$form.addEventListener('submit', function (e) {
  e.preventDefault();

  const enemy = enemyAttack();
  const attack = {};

  for (const item of $form) {
    if (item.checked && item.name === 'hit') {
      console.log(item.value);
      attack.value = getRandomInt(HIT[item.value]);
      console.log(attack.value);
      attack.hit = item.value;
    }

    if (item.checked && item.name === 'defence') {
      attack.defence = item.value;
    }

    item.checked = false;
  }

  if (enemy.defence !== attack.hit) {
    player1.changeHP(attack.value);
    player1.renderHP();
  }

  if (attack.defence !== enemy.hit) {
    player2.changeHP(enemy.value);
    player2.renderHP();
  }

  if (player1.hp === 0 || player2.hp === 0) {
    $button.disabled = true;
    createReloadButton();
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(showTitle(player2.name));
  } else if (player2.hp === 0 && player1.hp > player2.hp) {
    $arenas.appendChild(showTitle(player1.name));
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.addEventListener(showTitle());
  }
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
