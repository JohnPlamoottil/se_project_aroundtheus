//--------------------Function showing input error-------------------->>
function showInputError(formEl, inputEl, opts) {
  const { inputErrorClass, errorClass } = opts;
  const errorMessageElement = formEl.querySelector(`#${inputEl.id}-error`);

  inputEl.classList.add(inputErrorClass);
  //will get a vaildation message
  //display error message
  errorMessageElement.textContent = inputEl.validationMessage;
  //add error class to the input
  inputEl.classList.add(errorClass);

  //end of function
}

//--------------------Function hiding input error-------------------->>
function hideInputError(formEl, inputEl, opts) {
  const { inputErrorClass, errorClass } = opts;

  const errorMessageElement = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove(inputErrorClass);
  errorMessageElement.textContent = "";
  inputEl.classList.remove(errorClass);
} // end of function

//--------------------Function checking invalid input-------------------->>
function checkInputValidity(formEls, inputEls, opt) {
  //if inputs are invalid
  if (!inputEls.validity.valid) {
    showInputError(formEls, inputEls, opt);
  } // end of if statement
  else {
    hideInputError(formEls, inputEls, opt);
  } // end of else statment
} // end of function

//--------------------Function Toggling Button State-------------------->>
function toggleButtonState(inputEl, btn, opts) {
  const { inactiveButtonClass } = opts;
  inputEls = Array.from(inputEls);

  let isValid = true; // assuming all inputs are true initially
  inputEl.forEach((inputEl) => {
    // if the input validity is true
    if (!inputEl.validity.valid) {
      //if any inputs that are not valid but is Valid then set to false
      isValid = false;
    } // end if statement
  });
  // if any inputs are valid then use enable button
  if (isValid) {
    btn.classList.remove(inactiveButtonClass);
    btn.disabled = false;
  } // end if statment
  //if any inputs are invalid then use disable button
  else {
    btn.classList.add(inactiveButtonClass);
    btn.disabled = true;
  } // end of else statement
} // end of function

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
} // end of function
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
} // end of function

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
