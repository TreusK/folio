const prevButton = document.querySelectorAll(".slide-arrow-prev");
const nextButton = document.querySelectorAll(".slide-arrow-next");

const projects = [
  ['./imgs/pr.png', './imgs/pr2.png', './imgs/pr.png'],
  ['./imgs/pr.png', './imgs/pr2.png', './imgs/pr.png'],
  ['./imgs/pr.png', './imgs/pr2.png', './imgs/pr.png'],
];

prevButton.forEach(elem => elem.addEventListener('click', function(e) {
  let img = e.target.parentElement.children[2];
  let project = +e.target.parentElement.classList[1][2];
  let index = +img.classList[0][3];
  if(index == 0) {
    img.src = projects[project][2];
    img.className = 'img2';
    console.log('img is now ' + img.classList[0])
  } else {
    img.src = projects[project][index-1];
    img.className = 'img' + Number(index-1);
    console.log('img is now ' + img.classList[0])
  }
}))

nextButton.forEach(elem => elem.addEventListener('click', function(e) {
  let img = e.target.parentElement.children[2];
  let project = +e.target.parentElement.classList[1][2];
  let index = +img.classList[0][3];
  if(index == 2) {
    img.src = projects[project][0];
    img.className = 'img0';
    console.log('img is now ' + img.classList[0])
  } else {
    img.src = projects[project][index+1];
    img.className = 'img' + Number(index+1);
    console.log('img is now ' + img.classList[0])
  }
}))
