/* eslint-disable no-plusplus */
import './style.css';
import './assets/click.wav';
import './assets/lose.wav';
import './assets/start.wav';
import './assets/flag.mp3';
import './assets/win.wav';

const main = () => {
  const soundCreator = (src) => {
    const audio = new Audio();
    audio.src = src;
    audio.autoplay = true;
    audio.volume = 0.3;
  };

  const soundClick = () => {
    soundCreator('./assets/click.wav');
  };

  const soundBoom = () => {
    soundCreator('./assets/lose.wav');
  };

  const soundStart = () => {
    soundCreator('./assets/start.wav');
  };

  const soundFlag = () => {
    soundCreator('./assets/flag.mp3');
  };

  const soundWin = () => {
    soundCreator('./assets/win.wav');
  };

  const createElement = (el, tag) => {
    const element = document.createElement(tag);
    element.classList.add(el);
    return element;
  };

  const scoreTable = createElement('scoreTable', 'div');
  document.body.append(scoreTable);

  const counterFlag = createElement('counterFlag', 'div');
  scoreTable.append(counterFlag);

  const counterFlagsPicture2 = createElement('counterPicture2', 'img');
  counterFlag.append(counterFlagsPicture2);

  const counterFlagsPicture1 = createElement('counterPicture1', 'img');
  counterFlag.append(counterFlagsPicture1);

  const counterFlagsPicture0 = createElement('counterPicture0', 'img');
  counterFlag.append(counterFlagsPicture0);

  const face = createElement('face', 'img');
  scoreTable.append(face);

  const counterTime = createElement('counterTime', 'div');
  scoreTable.append(counterTime);

  const counterTimePicture2 = createElement('counterPicture2', 'img');
  counterTime.append(counterTimePicture2);

  const counterTimePicture1 = createElement('counterPicture1', 'img');
  counterTime.append(counterTimePicture1);

  const counterTimePicture0 = createElement('counterPicture0', 'img');
  counterTime.append(counterTimePicture0);

  const container = createElement('container', 'div');
  document.body.append(container);

  for (let i = 0; i < 100; i++) {
    const block = createElement('block', 'div');
    container.append(block);
  }

  const list = [...document.querySelectorAll('.block')];

  const rundomNumber = () => Math.floor(Math.random() * 100);

  const amountOfMines = 20;

  const rundomMines = [];

  const mines = [];

  const numbersOfMinesArr = [];
  for (let i = 0; i < 100; i++) {
    numbersOfMinesArr.push(0);
  }

  const blocksAround = [-1, -9, -10, -11, 1, 9, 10, 11];
  const blocksRightСolumnAround = [-1, -10, -11, 9, 10];
  const blocksLeftСolumnAround = [-9, -10, 1, 10, 11];

  const colors = ['', 'blue', 'green', 'red', 'darkblue', 'brown', 'darkviolet', 'darkyellow', 'white'];

  const emptyBlocksField = (event) => {
    if (numbersOfMinesArr[list.indexOf(event)] === 0) {
      for (let j = 0; j < blocksAround.length; j++) {
        if ((list.indexOf(event) - blocksAround[j] >= 0)
      && ((list.indexOf(event) - blocksAround[j]) < list.length)
      && !(((list.indexOf(event) - blocksAround[j]) + 1) % 10 === 0)
      && !(((list.indexOf(event) - blocksAround[j]) + 10) % 10 === 0)
      && !list[list.indexOf(event) - blocksAround[j]].classList.contains('opened')
        ) {
          list[list.indexOf(event) - blocksAround[j]].classList.add('opened');
          list[list.indexOf(event) - blocksAround[j]].classList.remove('flag');
          if (numbersOfMinesArr[list.indexOf(event) - blocksAround[j]] === 0) {
            emptyBlocksField(list[list.indexOf(event) - blocksAround[j]]);
          }
        }
        if ((list.indexOf(event) - blocksRightСolumnAround[j] >= 0)
      && ((list.indexOf(event) - blocksRightСolumnAround[j]) < list.length)
      && (((list.indexOf(event) - blocksRightСolumnAround[j]) + 1) % 10 === 0)
      && !list[list.indexOf(event) - blocksRightСolumnAround[j]].classList.contains('opened')
        ) {
          list[list.indexOf(event) - blocksRightСolumnAround[j]].classList.add('opened');
          list[list.indexOf(event) - blocksRightСolumnAround[j]].classList.remove('flag');
          if (numbersOfMinesArr[list.indexOf(event) - blocksRightСolumnAround[j]] === 0) {
            emptyBlocksField(list[list.indexOf(event) - blocksRightСolumnAround[j]]);
          }
        }
        if ((list.indexOf(event) - blocksLeftСolumnAround[j] >= 0)
      && ((list.indexOf(event) - blocksLeftСolumnAround[j]) < list.length)
      && (((list.indexOf(event) - blocksLeftСolumnAround[j]) + 10) % 10 === 0)
      && !list[list.indexOf(event) - blocksLeftСolumnAround[j]].classList.contains('opened')
        ) {
          list[list.indexOf(event) - blocksLeftСolumnAround[j]].classList.add('opened');
          list[list.indexOf(event) - blocksLeftСolumnAround[j]].classList.remove('flag');
          if (numbersOfMinesArr[list.indexOf(event) - blocksLeftСolumnAround[j]] === 0) {
            emptyBlocksField(list[list.indexOf(event) - blocksLeftСolumnAround[j]]);
          }
        }
      }
    }
  };

  const addNumberFunction = () => {
    list.forEach((el) => {
      if (el.classList.contains('opened') && numbersOfMinesArr[list.indexOf(el)] > 0) {
        el.innerText = numbersOfMinesArr[list.indexOf(el)];
        el.style.color = colors[numbersOfMinesArr[list.indexOf(el)]];
      }
    });
  };

  const numbersCounter = () => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].classList.contains('mine') && !((i + 1) % 10 === 0) && !((i + 10) % 10 === 0)) {
        for (let j = 0; j < blocksAround.length; j++) {
          numbersOfMinesArr[i - blocksAround[j]] += 1;
        }
      }
      if (list[i].classList.contains('mine') && ((i + 1) % 10 === 0)) {
        for (let j = 0; j < blocksLeftСolumnAround.length; j++) {
          numbersOfMinesArr[i - blocksLeftСolumnAround[j]] += 1;
        }
      }
      if (list[i].classList.contains('mine') && ((i + 10) % 10 === 0)) {
        for (let j = 0; j < blocksRightСolumnAround.length; j++) {
          numbersOfMinesArr[i - blocksRightСolumnAround[j]] += 1;
        }
      }
    }
  };

  const minesFunction = () => {
    for (let i = 0; i < rundomMines.length; i++) {
      const mine = list[rundomMines[i]];
      mine.classList.add('mine');
      mines.push(mine);
    }
  };

  const rundomMinesFunction = (firstClickBlock) => {
    while (rundomMines.length < amountOfMines) {
      const number = rundomNumber();
      if (rundomMines.indexOf(number) === -1 && number !== firstClickBlock) {
        rundomMines.push(number);
      }
    }
  };

  const counterTimePictureArr = [counterTimePicture0, counterTimePicture1, counterTimePicture2];
  const counterFlagsPictureArr = [counterFlagsPicture0, counterFlagsPicture1, counterFlagsPicture2];

  const displayTimeFlags = (number, arr) => {
    const arrNumbers = number.toString().split('').reverse();
    if (arrNumbers.length === 3) {
      arr[0].style.backgroundImage = `url("./assets/d${arrNumbers[0]}.svg")`;
      arr[1].style.backgroundImage = `url("./assets/d${arrNumbers[1]}.svg")`;
      arr[2].style.backgroundImage = `url("./assets/d${arrNumbers[2]}.svg")`;
    }
    if (arrNumbers.length === 2) {
      arr[0].style.backgroundImage = `url("./assets/d${arrNumbers[0]}.svg")`;
      arr[1].style.backgroundImage = `url("./assets/d${arrNumbers[1]}.svg")`;
      arr[2].style.backgroundImage = 'none';
    }
    if (arrNumbers.length === 1) {
      arr[0].style.backgroundImage = `url("./assets/d${arrNumbers[0]}.svg")`;
      arr[1].style.backgroundImage = 'none';
      arr[2].style.backgroundImage = 'none';
    }
  };

  const displayTime = (number) => {
    if (number > 999) {
      displayTimeFlags('999', counterTimePictureArr);
    } else {
      displayTimeFlags(number, counterTimePictureArr);
    }
  };

  let seconds = 0;
  const time = () => {
    seconds += 1;
    displayTime(seconds);
  };

  const timer = setInterval(() => time(), 1000);

  let amountOfClicks = 0;

  const gameOver = () => {
    let counter = 0;
    list.forEach((el) => (el.classList.contains('opened') ? counter += 1 : counter += 0));
    if (list.length - rundomMines.length === counter) {
      soundWin();
      setTimeout(() => { clearInterval(timer); alert(`Hooray! You found all mines in ${seconds} seconds and ${amountOfClicks} moves!`); }, 200);
    }
  };

  const counterPicture = (number) => {
    displayTimeFlags(number, counterFlagsPictureArr);
  };

  const amountOfFlags = () => {
    let flagsNumber = amountOfMines;
    list.forEach((el) => {
      if (el.classList.contains('flag')) {
        flagsNumber -= 1;
      }
    });
    counterPicture(flagsNumber);
  };

  amountOfFlags();

  const contextmenuFunction = (event) => {
    event.preventDefault();
    if (!event.target.classList.contains('opened')) {
      soundFlag();
      event.target.classList.toggle('flag');
    }
    amountOfFlags();
  };

  const clickFunction = (event) => {
    amountOfClicks += 1;
    if (!event.target.classList.contains('flag')) {
      if (event.target.classList.contains('mine')) {
        mines.forEach((element) => {
          element.classList.add('mines');
        });
        event.target.classList.remove('mines');
        face.classList.add('deadFace');
        soundBoom();
        event.target.classList.add('boom');
        container.removeEventListener('click', clickFunction);
        container.removeEventListener('contextmenu', contextmenuFunction);
        setTimeout(() => { clearInterval(timer); alert('Game over. Try again'); }, 200);
      }
      if (!event.target.classList.contains('opened') && !event.target.classList.contains('mine')) {
        soundClick();
        event.target.classList.add('opened');
        emptyBlocksField(event.target);
        addNumberFunction();
        gameOver();
      }
    }
  };

  const firstClickFunction = (event) => {
    amountOfClicks += 1;
    if (!event.target.classList.contains('flag')) {
      event.target.classList.add('opened');
      const firstClickBlock = list.indexOf(event.target);
      soundClick();
      rundomMinesFunction(firstClickBlock);
      minesFunction();
      numbersCounter();
      emptyBlocksField(event.target);
      addNumberFunction();
      container.removeEventListener('click', firstClickFunction);
      container.addEventListener('click', clickFunction);
    }
  };

  const gameRestart = () => {
    document.body.innerHTML = '';
    main();
    soundStart();
  };

  container.addEventListener('click', firstClickFunction);

  container.addEventListener('contextmenu', contextmenuFunction);

  face.addEventListener('click', gameRestart);
};

main();
