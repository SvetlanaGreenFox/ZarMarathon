export function changeHP(hp) {
  if (this.hp >= hp) {
    this.hp -= hp;
  } else if (this.hp === 0) {
    this.hp;
  } else if (this.hp < hp) {
    this.hp = 0;
  }
}

export function elHP() {
  const $playerLife = document.querySelector('.player' + this.player + ' .life');
  return $playerLife;
}

export function renderHP() {
  const player = this.elHP();
  player.style.width = this.hp + '%';
}