const prevButton = document.querySelectorAll(".slide-arrow-prev");
const nextButton = document.querySelectorAll(".slide-arrow-next");

const projects = [
  ['./imgs/pokeTeam1.png', './imgs/pokeTeam2.png', './imgs/pokeTeam3.png'],
  ['./imgs/aniSearch1.png', './imgs/aniSearch2.png', './imgs/aniSearch3.png'],
  ['./imgs/cli1.png', './imgs/cli2.png', './imgs/cli3.png'],
  ['./imgs/chat1.png', './imgs/chat2.png', './imgs/chat1.png'],
];

prevButton.forEach(elem => elem.addEventListener('click', function(e) {
  let img = e.target.parentElement.children[2];
  let project = +e.target.parentElement.classList[1][2];
  let index = +img.classList[0][3];
  if(index == 0) {
    img.src = projects[project][2];
    img.className = 'img2';
  } else {
    img.src = projects[project][index-1];
    img.className = 'img' + Number(index-1);
  }
}))

nextButton.forEach(elem => elem.addEventListener('click', function(e) {
  let img = e.target.parentElement.children[2];
  let project = +e.target.parentElement.classList[1][2];
  let index = +img.classList[0][3];
  if(index == 2) {
    img.src = projects[project][0];
    img.className = 'img0';
  } else {
    img.src = projects[project][index+1];
    img.className = 'img' + Number(index+1);
  }
}))
