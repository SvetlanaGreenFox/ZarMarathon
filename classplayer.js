export class Player {
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
