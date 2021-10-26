const $arenas = document.querySelector('.arenas');
const $button = document.querySelector('.button');
const $form = document.querySelector('.control');
const $chat = document.querySelector('.chat');

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

const logs = {
  start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
  end: [
    'Результат удара [playerWins]: [playerLose] - труп',
    '[playerLose] погиб от удара бойца [playerWins]',
    'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
  ],
  hit: [
    '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
    '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
    '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
    '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
    '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
    '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
    '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
    '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
    '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
    '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
    '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
    '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
    '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
    '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
    '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
    '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
    '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
    '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
  ],
  defence: [
    '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
    '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
    '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
    '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
    '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
    '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
    '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
    '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
  ],
  draw: 'Ничья - это тоже победа!'
};

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

function playerAttack() {
  const attack = {};

  for (const item of $form) {
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

function checkWin() {
  if (player1.hp === 0 || player2.hp === 0) {
    $button.disabled = true;
    createReloadButton();
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(showTitle(player2.name));
    generateLogs('end', player2, player1);
  } else if (player2.hp === 0 && player1.hp > player2.hp) {
    $arenas.appendChild(showTitle(player1.name));
    generateLogs('end', player1, player2);
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.addEventListener(showTitle());
    generateLogs('draw', player1, player2);
  }
}

function timeCorrection() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let sec = date.getSeconds();
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  sec = sec < 10 ? `0${sec}` : sec;
  return `${hours}:${minutes}:${sec}`;
}

function generateLogs(type, player1, player2, hp) {
  const time = timeCorrection();
  const randomNum = logs[type].length - 1;
  let text = '';
  switch (type) {
    case 'start':
      text = logs['start'].replace('[time]', time).replace('[player1]', player1.name).replace('[player2]', player2.name);
      break;
    case 'defence':
      text = `${time}-${logs['defence'][getRandomInt(randomNum)].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name)}`;
      break;
    case 'hit':
      text = `${time} - ${logs['hit'][getRandomInt(randomNum)].replace('[playerKick]', player2.name).replace('[playerDefence]', player1.name)} - ${hp} [${player1.hp}/100]`;
      break;
    case 'end':
      text = logs['end'][getRandomInt(randomNum)].replace('[playerWins]', player1.name).replace('[playerLose]', player2.name);
      break;
    case 'draw':
      text = logs['draw'];
  }

  const p = `<p>${text}</p>`;
  $chat.insertAdjacentHTML('afterbegin', p);
}

$form.addEventListener('submit', function (e) {
  e.preventDefault();

  const enemy = enemyAttack();

  const player = playerAttack();

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

  checkWin();
})

generateLogs('start', player1, player2);
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
