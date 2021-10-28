export function createElement(tag, className) {
  const $elem = document.createElement(tag);

  if (className) {
    $elem.classList.add(className);
  }

  return $elem;
};

export function createReloadButton(wrap) {
  const $wrapButton = createElement('div', 'reloadWrap');
  wrap.appendChild($wrapButton);

  const $button = createElement('button', 'button');
  $wrapButton.appendChild($button);
  $button.innerText = 'Restart';

  $button.addEventListener('click', function () {
    window.location.reload();
  })

  return $wrapButton;
};

export const getRandomInt = (max) => Math.ceil(Math.random() * max);

export function timeCorrection() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let sec = date.getSeconds();
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  sec = sec < 10 ? `0${sec}` : sec;
  return `${hours}:${minutes}:${sec}`;
};