class Player {
  constructor({ player, name, hp, img }) {
    this.player = player;
    this.name = name;
    this.hp = hp;
    this.img = img;
  }

  changeHP(hp) {
    if (this.hp >= hp) {
      this.hp -= hp;
    } else if (this.hp === 0) {
      this.hp;
    } else if (this.hp < hp) {
      this.hp = 0;
    }
  }

  elHP() {
    const $playerLife = document.querySelector('.player' + this.player + ' .life');
    return $playerLife;
  }

  renderHP() {
    const player = this.elHP();
    player.style.width = this.hp + '%';
  }
}

export const player1 = new Player({
  player: 1,
  name: 'Liukang',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
});

export const player2 = new Player({
  player: 2,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
})
