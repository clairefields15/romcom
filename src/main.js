var coverImage = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var homeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeCoverButton = document.querySelector('.make-new-button');
var homeSection = document.querySelector('.home-view');
var savedSection = document.querySelector('.saved-view');
var formSection = document.querySelector('.form-view');
var userCoverField = document.querySelector('.user-cover');
var userTitleField = document.querySelector('.user-title');
var userTagline1Field = document.querySelector('.user-desc1');
var userTagline2Field = document.querySelector('.user-desc2');
var createNewBookButton = document.querySelector('.create-new-book-button');
var savedCoversSection = document.querySelector('.saved-covers-section');

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

homeButton.addEventListener('click', goHome);
randomCoverButton.addEventListener('click', createRandomCover);
saveCoverButton.addEventListener('click', saveCover);
viewSavedButton.addEventListener('click', viewSaved);
makeCoverButton.addEventListener('click', makeNew);
createNewBookButton.addEventListener('click', makeMyBook);

savedCoversSection.addEventListener('dblclick', function(event){
  if(event.target.className === 'cover-image'){
    var coverElement = event.target.parentElement;
    var coverId = coverElement.id;
    coverElement.parentNode.removeChild(coverElement);
    for (var i = 0 ; i < savedCovers.length ; i ++) {
      if (savedCovers[i].id === Number(coverId)) {
        savedCovers.splice(i, 1);
      }
    }
  }
});

function goHome() {
  homeSection.classList.remove("hidden");
  formSection.classList.add("hidden");
  randomCoverButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
  homeButton.classList.add("hidden");
  savedCoversSection.innerHTML = ``;
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function randomCoverImage(covers) {
  var coverIndex = getRandomIndex(covers);
  coverImage.src = covers[coverIndex];
  return covers[coverIndex];
};

function randomTitle(titles) {
  var titleIndex = getRandomIndex(titles);
  bookTitle.innerText = titles[titleIndex];
  return titles[titleIndex];
};

function randomTagline1(descriptors) {
  var tagIndex1 = getRandomIndex(descriptors);
  tagline1.innerText = descriptors[tagIndex1];
  return descriptors[tagIndex1];
};

function randomTagline2(descriptors) {
  var tagIndex2 = getRandomIndex(descriptors);
  tagline2.innerText = descriptors[tagIndex2];
  return descriptors[tagIndex2];
};

function createRandomCover() {
  var cover1 = randomCoverImage(covers);
  var title1 = randomTitle(titles);
  var descriptor1 = randomTagline1(descriptors);
  var descriptor2 = randomTagline2(descriptors);
  currentCover = new Cover (cover1, title1, descriptor1, descriptor2);
};

randomCoverImage(covers);
randomTitle(titles);
randomTagline1(descriptors);
randomTagline2(descriptors);

function saveCover() {
  var savedCover = coverImage.src;
  var savedTitle = bookTitle.innerText;
  var savedDescriptor1 = tagline1.innerText;
  var savedDescriptor2 = tagline2.innerText;
  var mySavedCover = new Cover (savedCover, savedTitle, savedDescriptor1, savedDescriptor2);

  var isNewCover = true;
  for(var i = 0 ; i < savedCovers.length ; i++) {
    if(savedCover === savedCovers[i].cover && savedTitle === savedCovers[i].title && savedDescriptor1 === savedCovers[i].tagline1 && savedDescriptor2 === savedCovers[i].tagline2) {
        isNewCover = false;
    }
  }
  if (isNewCover === true) {
    savedCovers.push(mySavedCover);
  }
};

function viewSaved() {
  homeSection.classList.add("hidden");
  savedSection.classList.remove("hidden");
  formSection.classList.add("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");

  renderSavedCovers();
};

function renderSavedCovers() {
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML += `
      <section class="mini-cover" id="${savedCovers[i].id}">
        <img class="cover-image" src="${savedCovers[i].cover}">
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </section>
      `;
  }
};

function makeNew() {
  homeSection.classList.add("hidden");
  formSection.classList.remove("hidden");
  savedSection.classList.add("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  savedCoversSection.innerHTML = ``;
};

function makeMyBook() {
  event.preventDefault();
  if (!userCoverField.value || !userTitleField.value || !userTagline1Field.value || !userTagline2Field.value) {
    return alert("You have some empty fields! Fill em in.");
  }else {
    covers.push(userCoverField.value);
    titles.push(userTitleField.value);
    descriptors.push(userTagline1Field.value);
    descriptors.push(userTagline2Field.value);
    var newUserCover = new Cover (userCoverField.value, userTitleField.value, userTagline1Field.value, userTagline2Field.value);
    goHome();
    coverImage.src = newUserCover.cover;
    bookTitle.innerText = newUserCover.title;
    tagline1.innerText = newUserCover.tagline1;
    tagline2.innerText = newUserCover.tagline2;
  }
};
