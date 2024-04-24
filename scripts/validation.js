//--------------------Function showing input error-------------------->>
function showInputError(formEl, inputEl, options) {
  const { inputErrorClass, errorClass } = options;
  const errorMessageElement = formEl.querySelector(`#${inputEl.id}-error`); // name name-error, description description-error

  inputEl.classList.add(inputErrorClass);
  //will get a vaildation message
  //error message
  errorMessageElement.textContent = inputEl.validationMessage;
  //add error class to the input
  errorMessageElement.classList.add(errorClass);
}

//--------------------Function hiding input error-------------------->>
function hideInputError(formEl, inputEl, options) {
  const { inputErrorClass, errorClass } = options;

  const errorMessageElement = formEl.querySelector(`#${inputEl.id}-error`); // banana banana-error
  inputEl.classList.remove(inputErrorClass);
  errorMessageElement.textContent = "";
  errorMessageElement.classList.remove(errorClass);
}

//--------------------Function checking invalid input-------------------->>
function checkInputValidity(formEls, inputEls, options) {
  // input validation
  if (!inputEls.validity.valid) {
    showInputError(formEls, inputEls, options);
  } else {
    hideInputError(formEls, inputEls, options);
  }
}

//--------------------Function Toggling Button State-------------------->>
function toggleButtonState(inputEl, btn, options) {
  console.log(inputEl, btn, options);
  const { inactiveButtonClass } = options;
  inputEl = Array.from(inputEl);

  let isValid = true; // assuming all inputs are true initially
  inputEl.forEach((inputEl) => {
    // if the input validity is true
    if (!inputEl.validity.valid) {
      //if any inputs that are not valid but is Valid then set to false
      isValid = false;
    }
  });
  // if any inputs are valid then use enable button
  if (isValid) {
    btn.classList.remove(inactiveButtonClass);
    btn.disabled = false;
  }
  //if any inputs are invalid then use disable button
  else {
    btn.classList.add(inactiveButtonClass);
    btn.disabled = true;
  }
}

//--------------------Function on Setting Event Listeners-------------------->>
function setEventListeners(formElements, options) {
  // tries to find all the inputs inside of forms
  const { inputSelector, submitButtonSelector } = options;
  const inputElement = Array.from(formElements.querySelectorAll(inputSelector));
  const submitButton = formElements.querySelector(submitButtonSelector); //("#modal__button")
  inputElement.forEach((inputEl) => {
    inputEl.addEventListener("input", (evt) => {
      // loop thru all inputs checking whether they are valid
      checkInputValidity(formElements, inputEl, options);
      toggleButtonState(inputElement, submitButton, options); //togglebutton(inputEl, submitbutton, options)
    });
  });
}
//--------------------Function on Enabling Validation-------------------->>
function enableValidation(setup) {
  const allFormElements = Array.from(
    document.querySelectorAll(setup.formSelector)
  );
  allFormElements.forEach((formEl) => {
    formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formEl, setup);
  });
}

//--------------------Config Object-------------------->>
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_active",
};

enableValidation(config);
