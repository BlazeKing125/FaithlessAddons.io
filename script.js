document.addEventListener("DOMContentLoaded", function() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const displayArea = document.getElementById("displayArea");

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
      displaySelectedOptions();
    });
  });

  function displaySelectedOptions() {
    const selectedOptions = Array.from(checkboxes).filter(function(checkbox) {
      return checkbox.checked;
    });

    displayArea.innerHTML = "";

    selectedOptions.forEach(function(option) {
      const optionName = option.parentNode.querySelector(".option-text").textContent;
      const optionElement = document.createElement("div");
      optionElement.classList.add("selected-option");
      optionElement.textContent = optionName;
      displayArea.appendChild(optionElement);
    });
  }
});
