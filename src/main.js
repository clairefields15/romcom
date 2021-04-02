// Create variables targetting the relevant DOM elements here 👇
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
var savedCovers = document.querySelector('.saved-covers-section');
var clickCounter = 0;

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
homeButton.addEventListener('click', goHome)
randomCoverButton.addEventListener('click', createRandomCover)
saveCoverButton.addEventListener('click', saveCover)
viewSavedButton.addEventListener('click', viewSaved)
makeCoverButton.addEventListener('click', makeNew)
createNewBookButton.addEventListener('click', makeMyBook)


//functions and event handlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomCoverImage(covers) {
  var coverIndex = getRandomIndex(covers);
  coverImage.src = covers[coverIndex];
  return covers[coverIndex]
};

function randomTitle(titles) {
  var titleIndex = getRandomIndex(titles);
  return bookTitle.innerText = titles[titleIndex];
  return titles[titleIndex]
}

function randomTagline1(descriptors) {
  var tagIndex1 = getRandomIndex(descriptors);
  tagline1.innerText = descriptors[tagIndex1];
  return descriptors[tagIndex1]
}

function randomTagline2(descriptors) {
  var tagIndex2 = getRandomIndex(descriptors);
  tagline2.innerText = descriptors[tagIndex2];
  return descriptors[tagIndex2]
}


randomCoverImage(covers);
randomTitle(titles);
randomTagline1(descriptors);
randomTagline2(descriptors);

function createRandomCover() {
  clickCounter = 0
  var cover1 = randomCoverImage(covers);
  var title1 = randomTitle(titles)
  var descriptor1 = randomTagline1(descriptors)
  var descriptor2 = randomTagline2(descriptors)
  currentCover = new Cover (cover1, title1, descriptor1, descriptor2);
}


function saveCover() {
  clickCounter++;
  if (clickCounter === 1) {
    var savedCover = coverImage.src
    var savedTitle = bookTitle.innerText
    var savedDescriptor1 = tagline1.innerText
    var savedDescriptor2 = tagline2.innerText
    var mySavedCover = new Cover (savedCover, savedTitle, savedDescriptor1, savedDescriptor2);
    savedCovers.push(mySavedCover)
    console.log(savedCovers)
  }
}

function goHome() {
  homeSection.classList.remove("hidden");
  formSection.classList.add("hidden");
  randomCoverButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
  homeButton.classList.add("hidden");
}

function viewSaved() {
  var saveHtml = `
  <section class="main-cover">
    <img class="cover-image" src="./assets/prairie.jpg">
    <h2 class="cover-title">Windswept Hearts</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">passion</span> and <span class="tagline-2">woe</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
  </section>
    `;
  homeSection.classList.add("hidden");
  savedSection.classList.remove("hidden");
  formSection.classList.add("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  savedCovers.innerHTML = saveHtml;
  console.log(savedCovers.innerHTML)
}

function makeNew() {
  homeSection.classList.add("hidden");
  formSection.classList.remove("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
}

function makeMyBook (){
  event.preventDefault()

  if (userCoverField.value && userTitleField.value && userTagline1Field.value && userTagline2Field.value) {
    covers.push(userCoverField.value);
    titles.push(userTitleField.value);
    descriptors.push(userTagline1Field.value);
    descriptors.push(userTagline2Field.value);
  } else {
    alert("You have some empty fields! Fill em in.")
  }

  var newUserCover = new Cover (userCoverField.value, userTitleField.value, userTagline1Field.value, userTagline2Field.value);

  goHome();

  //display our new user cover instance in the main cover
  coverImage.src = newUserCover.cover;
  bookTitle.innerText = newUserCover.title;
  tagline1.innerText = newUserCover.tagline1;
  tagline2.innerText = newUserCover.tagline2;

};
