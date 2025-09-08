const form = document.querySelector("form")
const emailInput = document.querySelector("#email");
const countryInput = document.querySelector("#country");
const postalCodeInput = document.querySelector("#postal-code");
const passwordInput = document.querySelector("#password")
const confirmPsdInput = document.querySelector("#confirm-password")
const errorEmail = document.querySelector(".error-email")
const errorCountry = document.querySelector(".error-country")
const errorPostal = document.querySelector(".error-postal")
const errorPsw = document.querySelector(".error-psw")
const errorConfirmPsw = document.querySelector(".error-confirm-psw")



function validateEmail () {
 const isEmailValid =  !emailInput.validity.typeMismatch && emailInput.value ;
const message = isEmailValid ? "" : "Please Enter a valid Email Address";

  setValidity(emailInput, errorEmail, isEmailValid, message);
}

function validateCountry () {
const isCountryValid = countryInput.value.trim() !== "";

const message = isCountryValid ?  "" : "Please Enter a valid country";
setValidity(countryInput, errorCountry, isCountryValid, message)
}

function validatePostalCode () {

    let postalCode = postalCodeInput.value.trim()
const isPostalCodeValid = postalCode.length === 5 ;
const message = isPostalCodeValid  ? "" : "Please Enter a postal code";
setValidity(postalCodeInput, errorPostal, isPostalCodeValid, message)

}


function validatePassword () {

const isPasswordStrong = passwordInput.value.length > 5 ;
 const message = isPasswordStrong ? "" : "Please Enter a Strong Password";
 setValidity(passwordInput, errorPsw, isPasswordStrong, message);

}

function validateConfirmPsdInput () {
const isPasswordMatch =  confirmPsdInput.value === passwordInput.value;

const message = isPasswordMatch  ? "" : "Password doesnt match";
setValidity(confirmPsdInput, errorConfirmPsw, isPasswordMatch, message);
}

emailInput.addEventListener("input", validateEmail);
countryInput.addEventListener("input", validateCountry);
postalCodeInput.addEventListener("input", validatePostalCode);
passwordInput.addEventListener("input", validatePassword);
confirmPsdInput.addEventListener("input", validateConfirmPsdInput);
//Update password confirmation when main password is changed
passwordInput.addEventListener("input", validateConfirmPsdInput);




emailInput.addEventListener("blur", validateEmail);
countryInput.addEventListener("blur", validateCountry);
postalCodeInput.addEventListener("blur", validatePostalCode);
passwordInput.addEventListener("blur", validatePassword);
confirmPsdInput.addEventListener("blur", validateConfirmPsdInput);
//Update password confirmation when main password is changed
passwordInput.addEventListener("blur", validateConfirmPsdInput);




form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let isEmailValid = validateEmail();
    let isCountryValid = validateCountry();
    let isPostalCode = validatePostalCode();
    let isPasswordValid = validatePassword();
    let isPasswordMatch = validateConfirmPsdInput();

    if (isEmailValid && isCountryValid && isPostalCode && isPasswordValid && isPasswordMatch) {
        alert("High five for you!!")
    } else {
        alert("Please fill out all fields")
    }
})


function setValidity (input, error, isValid, message){
  
    if(isValid) {
        error.textContent = "";
        input.classList.remove("invalid");
        input.classList.add("valid")
    } else {
         error.textContent = message;
        input.classList.add("invalid")
        input.classList.remove("valid")
    }
}