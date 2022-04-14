// Global variables:

var ideaList = [];
var favoriteIdeas = [];
var brandNewIdea = "";


// Query Selectors:

var saveButton = document.querySelector(".save-button");
var formTitle = document.getElementById("title");
var formBody = document.getElementById("body");
var newCardTitle = document.getElementById("new-title");
var newCardBody = document.getElementById('new-body');
let savedCardSection = document.querySelector(".throwaway-grid-container")

// Event listeners:

saveButton.addEventListener("click", saveIdea);
saveButton.addEventListener("click", clearInput);
saveButton.addEventListener("mouseover", validateForm);

function validateForm() {
  if (formBody.value && formTitle.value) {
    saveButton.classList.add("active")
    return true;
  }
}

// Functions and event handlers:


//   Instantiates new idea(object) >> pushes idea(object) to array
function saveIdea() {
  event.preventDefault();
  if (formBody.value && formTitle.value){
  brandNewIdea = createNewInstance(formTitle.value, formBody.value);
  renderDisplay(brandNewIdea.title, brandNewIdea.body);
  }
}

function renderDisplay(title, body) {
  if (checkForDuplicate(title, body) === "Taken") {
    console.log("no")
  } else {
      ideaList.push(brandNewIdea);
      let htmlString = brandNewIdea.generateHtml();
      let inner = document.createElement("div");
      inner.innerHTML = htmlString
      savedCardSection.appendChild(inner)
  }
}

// -- Checks ideaList for a duplicate card
function checkForDuplicate(title, body) {
  for (let i = 0; i < ideaList.length; i++) {
    if (ideaList[i].body === body && ideaList[i].title === title) {
      console.log("Taken")
      return "Taken"
    }
  }
}

//   Instantiates new idea(object)
function createNewInstance(title, body) {
  return new Idea(title, body);
}

//   Push object to array
function pushToArray(brandNewIdea) {
  ideaList.push(brandNewIdea);
}

function clearInput() {
  formTitle.value = '';
  formBody.value = '';
}
