// enabling validation by calling enableValidation()
// pass all the settings on call

//--------------------Function Toggling Button State-------------------->>
function toggleButtonState(inputEls, submitButton, { InactiveButtonClass }) {
  let foundInvalid = false;

  inputEls.forEach((inputEl) => {
    if (!inputEl.validity.valid) {
      foundInvalid = true;
    }
  });

  if (foundInvalid) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
  } else {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
  }
}

//--------------------Function showing input error-------------------->>
function showInputError(formEl, inputEl, options) {
  const { errorClass, inputErrorClass } = config;
  const errorElement = formEl.querySelector(`#${inputEl.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
}

//--------------------Function hiding input error-------------------->>
function hideInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
  const errorElement = formEl.querySelector(`#${inputElement.id}-error`);
  inputEl.classList.remove(inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(errorClass);
}

//--------------------Function checking invalid input-------------------->>
const checkInputValidity = (formEl, inputEl, options) => {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, options);
  } else {
    hideInputError(formEl, inputEl, options);
  }
};

function setEventListener(formEl, options) {
  const inputSelector = options.inputSelector;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  console.log(inputEls);
  const submitButton = formEl.querySelector(".modal__button");

  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, options);
      toggleButtonState(inputEls, submitButton, options);
    });
  });
}

//--------------------Function on Enabling Validation--------------------*/
function enableValidation(options) {
  const formEls = [...document.querySelectorAll(options.formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListener(formEl, options);
    // look for all inputs of form
    // loop through all the inputs to see if all are valid
    // if input is not valid
    // get validation message
    // add error class to input
    // display error message
    // disable button
    // if all inputs are valid
    // enable button
    // reset error messages
  });
}

//--------------------Config Object--------------------*/
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_active",
};

enableValidation(config);
