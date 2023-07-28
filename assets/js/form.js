const model = document.querySelector('.model');
const contactBtn = document.querySelector('.button');
const closeBtn = document.querySelector('.close');

contactBtn.addEventListener('click', openModel);
closeBtn.addEventListener('click', closeModel);
window.addEventListener('click', outsideClick);

function openModel() {
  model.style.display = 'block';    
  console.log('hello');
}

function closeModel() {
  model.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == model) {
    closeModel()
  }
}