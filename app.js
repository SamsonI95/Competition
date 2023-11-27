//user profile dropdown function
function toggleDropdown() {
  const dropdownList = document.getElementById("right-panel-dropdown");
  dropdownList.style.display =
    dropdownList.style.display === "block" ? "none" : "block";
}

// Ensures the dropdown is closed when the page loads
window.addEventListener("load", function () {
  var dropdown = document.getElementById("right-panel-dropdown");
  dropdown.style.display = "none";
});

//user profile notification dropdown function
function toggleBellDropdown() {
  const dropdownList = document.getElementById("notify-nav");
  dropdownList.style.display =
    dropdownList.style.display === "inline-flex" ? "none" : "inline-flex";
}

// Ensures the dropdown is closed when the page loads
window.addEventListener("load", function () {
  var dropdown = document.getElementById("notify-nav");
  dropdown.style.display = "none";
});

//controllong arrow flipping
const mainItems = document.querySelectorAll(".main-item");

mainItems.forEach((mainItem) => {
  mainItem.addEventListener("click", () => {
    mainItem.classList.toggle("main-item--open");
  });
});

//toggle selection visibility
function toggleSelectDropdown() {
  const dropdownList = document.getElementById("checkBoxForm");
  dropdownList.style.display =
    dropdownList.style.display === "block" ? "none" : "block";
}

// Ensures the dropdown is closed when the page loads
window.addEventListener("load", function () {
  var dropdown = document.getElementById("checkBoxForm");
  dropdown.style.display = "none";
});

function toggleSelectItem() {
  const checkboxes = document.querySelectorAll(".checkbox-btn");
  const accordionContents = document.querySelectorAll(".accordion-content");
  let checkedContent = null;

  for (let i = 0; i < checkboxes.length; i++) {
    const checkbox = checkboxes[i];
    const accordionContent = accordionContents[i];

    if (checkbox.checked) {
      if (!checkedContent) {
        checkedContent = accordionContent;
      } else {
        // Hide previously checked content
        checkedContent.style.maxHeight = null;
        checkedContent.style.backgroundColor = null;
        checkedContent.style.borderRadius = null;
      }

      // Show the current checked content
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      accordionContent.style.backgroundColor = "#f3f3f3";
      accordionContent.style.borderRadius = "10px";
      checkedContent = accordionContent;
    } else {
      // Hide the content if the checkbox is unchecked
      accordionContent.style.maxHeight = null;
      accordionContent.style.backgroundColor = null;
      accordionContent.style.borderRadius = null;
    }
  }
}

//checkmark animation function
document
  .getElementById("checkmarkRadio")
  .addEventListener("click", function () {
    this.classList.add("loading");
    setTimeout(() => {
      this.classList.remove("loading");
    }, 2000); // Adjust the duration in milliseconds as needed
  });

// checkmark counter and progress bar function
const radioForm = document.getElementById("checkBoxForm");
const counterElement = document.getElementById("counter");
const progressBarElement = document.getElementById("progress-bar");
let counter = 0;

radioForm.addEventListener("change", function () {
  const checkedRadios = document.querySelectorAll(".checkbox-btn:checked");
  counter = checkedRadios.length;

  counterElement.textContent = `${counter}/5 completed`;
  progressBarElement.value = counter;
});

