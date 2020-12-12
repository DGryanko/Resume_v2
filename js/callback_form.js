const callbackThanks = document.querySelector("#request_received");
const clientName = document.querySelector("#client_name");
const clientPhone = document.querySelector("#client_phone");
const clientEmail = document.querySelector("#client_email");
const callBackForm = document.querySelector(".callback_form_container");

clientPhone.addEventListener("click", function () {
  if (!clientPhone.value.trim()) {
    clientPhone.value = "+380";
  }
});

clientPhone.addEventListener("blur", function () {
  if (clientPhone.value === "+380") {
    clientPhone.value = "";
  }
});

callBackForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let errInForm = false;
  if (!clientName.value.trim()) {
    clientName.classList.add("callback_form_input_err");
    errInForm = true;
  } else {
    clientName.classList.remove("callback_form_input_err");
  }

  if (!clientEmail.value.trim() || !isEmailValid(clientEmail.value)) {
    clientEmail.classList.add("callback_form_input_err");
    errInForm = true;
  } else {
    clientEmail.classList.remove("callback_form_input_err");
  }
  if (!clientPhone.value.trim() || !isPhoneValid(clientPhone.value)) {
    clientPhone.classList.add("callback_form_input_err");
    errInForm = true;
  } else {
    clientPhone.classList.remove("callback_form_input_err");
  }
  if (errInForm) {
    return;
  }

  let text =
    "Перезвонить клиенту: " +
    clientName.value +
    " " +
    clientPhone.value +
    " " +
    "почта: " +
    clientEmail.value;

  sendMessage(text);

  clientName.value = "";
  clientPhone.value = "";
  clientEmail.value = "";

  callbackThanks.classList.add("modal_active");
  setTimeout(function () {
    callbackThanks.classList.remove("modal_active");
  }, 2000);
});

function isPhoneValid(phone = "") {
  const regexp = /(\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4})/;

  return phone.match(regexp);
}
function isEmailValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

// отправить в чат телеги:

function sendMessage(text) {
  console.log("Working");

  let message = {
    chat_id: "-410799147",

    text: text,
  };

  // тестовый, токен не прячу))
  let botTest =
    "https://api.telegram.org/bot1405552116:AAFvvwLD0PXECjBuRamrSrA0xmbuzNxlbQE/sendMessage";
  fetch(botTest, {
    method: "POST",
    body: JSON.stringify(message),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}
