const technologiesSelect = document.querySelector(
  "#calculator_form_technologies"
);
const calculatorForm = document.querySelector("#calculator_form");

const technologiesMultiSelect = new Choices(technologiesSelect, {
  allowSearch: false,
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  removeItems: true,
  removeItemButton: true,
  editItems: false,
  duplicateItemsAllowed: false,
  delimiter: ",",
  paste: true,
  searchEnabled: false,
  searchChoices: true,
  searchResultLimit: -1,
  position: "auto",
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  placeholder: true,
  noChoicesText: "No available options",
  itemSelectText: "Click to select",
  classNames: {
    containerInner: "choices__inner tech-input-container",
    input: "choices__input",
  },
});


calculatorForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const websiteTypeSelect = document.querySelector(
    "#calculator_form_website_type"
  );

  const websiteTypeValue = websiteTypeSelect.value;

  const technologiesValue = technologiesMultiSelect.getValue()
  console.log(technologiesValue);
});

