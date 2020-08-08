// home section
const pageTitle = document.getElementById('title');
pageTitle.innerText = config.title;
const homePhoneEl = document.querySelector('.home-wrapper .phone-number');
homePhoneEl.innerText = config.phoneNumbers[0];

// about section
const aboutTextEl = document.getElementById('about-text');
let aboutText = '';
config.aboutText.paragraphs.forEach((paragraph) => {
    aboutText += `<p class="card-text">${paragraph}</p>`;
});
aboutTextEl.innerHTML = aboutText;
// rooms section
const roomsWrapper = document.getElementById('rooms-wrapper');
config.rooms.forEach((room, index) => {
  const {title, description, list} = room;
  const slideNumber = index + 1;

  let items = '';
  list.forEach((item) => {
    items += `<li class="list-item"><img src="./img/list-arrow.png" class="list-arrow-icon" alt="list-arrow">${item}</li>`;
  });

  const slideContent = `
    <div class="rooms-row">
    <article class="room-info">
    <h3 class="room-title">${title}</h3>
    <p class="description">${description}</p>
    <ul>${items}</ul>
    </article>
    <div class="room-img room-img-50 slide${slideNumber} photo-1"></div>
    </div>
    <div class="rooms-row">
    <div class="room-img room-img-30 slide${slideNumber} photo-2"></div>
    <div class="room-img room-img-30 slide${slideNumber} photo-3"></div>
    <div class="room-img room-img-30 slide${slideNumber} photo-4"></div>
    </div>
    `;

  const slideEl = document.createElement('div');
  slideEl.classList.add('carousel-item');

  if (index === 0) {
    slideEl.classList.add('active');
  }

  slideEl.innerHTML = slideContent;
  roomsWrapper.appendChild(slideEl);
});

// comments section
const commentsWrapper = document.getElementById('comments-wrapper');
config.comments.forEach((comment, index) => {
  const {name, profession, date, comment: commentText} = comment;
  const articleEl = document.createElement('article');
  articleEl.classList.add('comments-card');
  const commentNumber = index + 1;
  const commentContent = `
    <div class="card-title-row">
    <img src="./img/comments/comment${commentNumber}.png" alt="comment" class="card-img">
    <div class="commentator-container">
    <span class="commentator-name">${name}</span>
    <span class="commentator-info">${profession}</span>
    <span class="commentator-date">${date}</span>
    </div>
    </div>
    <p class="comment">${commentText}</p>          
    `;
  articleEl.innerHTML = commentContent;
  commentsWrapper.appendChild(articleEl);
});

// contacts section
const { contacts: { phoneTypeTitles, address }, phoneNumbers } = config;
const addressEl = document.getElementById('address');
addressEl.innerText = address;
const phoneTypeEl = document.getElementById('phone-type');
const phonesEl = document.getElementById('contact-phones');

phoneTypeEl.innerText = phoneNumbers.length > 1 ? phoneTypeTitles.several : phoneTypeTitles.single;
phonesEl.innerHTML = phoneNumbers.join('<br/>');
