export default class FormValidator {
  constructor(options, formElement) {
    this._options = options;
    this._formElement = formElement;
    this._submitButton = this._formElement.querySelector(
      options.submitButtonSelector
    ); //("#modal__button")
  }

  //--------------------Function showing input error-------------------->>
  _showInputError(inputEl) {
    const { inputErrorClass, errorClass } = this._options;
    const errorMessageElement = this._formElement.querySelector(
      `#${inputEl.id}-error`
    ); // name name-error, description description-error

    inputEl.classList.add(inputErrorClass);
    //will get a vaildation message
    //error message
    errorMessageElement.textContent = inputEl.validationMessage;
    //add error class to the input
    errorMessageElement.classList.add(errorClass);
  }

  //--------------------Function hiding input error-------------------->>
  _hideInputError(inputEl) {
    const { inputErrorClass, errorClass } = this._options;

    const errorMessageElement = this._formElement.querySelector(
      `#${inputEl.id}-error`
    ); // banana banana-error
    inputEl.classList.remove(inputErrorClass);
    errorMessageElement.textContent = "";
    errorMessageElement.classList.remove(errorClass);
  }

  //--------------------Function checking invalid input-------------------->>
  _checkInputValidity(inputEls) {
    // input validation
    if (!inputEls.validity.valid) {
      this._showInputError(inputEls);
    } else {
      this._hideInputError(inputEls);
    }
  }

  //--------------------Function Toggling Button State-------------------->>
  _toggleButtonState(inputEl) {
    console.log(inputEl, this._options);
    const { inactiveButtonClass } = this._options;
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
      this._submitButton.classList.remove(inactiveButtonClass);
      this._submitButton.disabled = false;
    }
    //if any inputs are invalid then use disable button
    else {
      this._submitButton.classList.add(inactiveButtonClass);
      this._submitButton.disabled = true;
    }
  }

  //--------------------Function on Setting Event Listeners-------------------->>
  _setEventListeners() {
    // tries to find all the inputs inside of forms
    const { inputSelector, submitButtonSelector } = this._options;
    const inputElement = Array.from(
      this._formElement.querySelectorAll(inputSelector)
    );

    inputElement.forEach((inputEl) => {
      inputEl.addEventListener("input", (evt) => {
        // loop thru all inputs checking whether they are valid
        this._checkInputValidity(inputEl);
        this._toggleButtonState(inputElement); //togglebutton(inputEl, submitbutton, options)
      });
    });
  }
  disableSubmitButton() {
    this._submitButton.classList.add(this._options.inactiveButtonClass);
    this._submitButton.disabled = true;
  }
  //--------------------Function on Enabling Validation-------------------->>
  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}
