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

calculateSum();

calculatorForm.addEventListener("submit", function (event) {
  event.preventDefault();
  calculateSum();
});

function calculateSum() {
  // SELECTORS

  const websiteTypeSelect = document.querySelector(
    "#calculator_form_website_type"
  );
  const websiteCartSelect = document.querySelector(
    "#calculator_form_input_cart input:checked"
  );
  const websiteReceptionSelect = document.querySelector(
    "#calculator_form_input_reception input:checked"
  );
  // VALUES

  const websiteTypeValue = extractPriceFromValue(websiteTypeSelect.value);
  const websiteCartValue = convertCartOptionToPrice(websiteCartSelect.value);
  const websiteReceptionValue = convertReceptionOptionToPrice(
    websiteReceptionSelect.value
  );
  const technologiesValue = getTechnologiesSum(
    technologiesMultiSelect.getValue()
  );

  const totalSum =
    websiteTypeValue +
    technologiesValue +
    websiteCartValue +
    websiteReceptionValue;

  renderSum(totalSum);
}

function renderSum(sum) {
  const costElement = document.querySelector("#calculator_form_total_cost");

  costElement.textContent = "Calculating";

  setTimeout(function () {
    costElement.textContent = "Calculating.";
  }, 250);

  setTimeout(function () {
    costElement.textContent = "Calculating..";
  }, 500);

  setTimeout(function () {
    costElement.textContent = "Calculating...";
  }, 750);

  setTimeout(function () {
    costElement.textContent = sum + "$";
  }, 1000);
}

function convertCartOptionToPrice(option) {
  if (option === "Yes") {
    return 300;
  }

  return 0;
}

function convertReceptionOptionToPrice(option) {
  if (option === "Yes") {
    return 500;
  }

  return 0;
}

function getTechnologiesSum(technologiesArr) {
  let totalSum = 0;
  technologiesArr.forEach(function (tech) {
    totalSum = totalSum + extractPriceFromValue(tech.value);
  });
  return totalSum;
}

function extractPriceFromValue(str) {
  const price = str.match(/:\d+/);

  if (price) {
    return Number(price[0].slice(1)) || 0;
  }

  return 0;
}
