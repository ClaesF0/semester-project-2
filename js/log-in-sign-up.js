import { LOGIN_URL, SIGNUP_URL } from './api-related';
import {
  getToken,
  saveToken,
  storeUserSession,
  collectUserName,
  clearStorage,
} from './local-storage-related';

// LOG-IN PAGE
const signInForm = document.querySelector('#signin-form');
const emailField = document.querySelector('#emailField');
const passwordField = document.querySelector('#passwordField');

const emailFieldError = document.querySelector('#emailFieldError');
const emailInvalidError = document.querySelector('#emailInvalidError');
const passwordFieldError = document.querySelector('#passwordFieldError');
const otherErrorField = document.querySelector('#errorMessage');

// only noroff adress
const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stud.noroff.no|noroff.no)$/;

// cooperates with the regular expression
function validEmail(email) {
  return !!email.match(regEx);
}

function validDomain() {
  if (emailField.value.trim().length && validEmail(emailField.value) === true) {
    emailInvalidError.classList.add('hidden');
    emailField.classList.add('border-green-700');
    validDomain = true;
  } else if (
    emailField.value.trim().length
    && validEmail(emailField.value) !== true
  ) {
    emailInvalidError.classList.remove('hidden');
  }
}

function validPassword(password, confirmPassword) {
  if (!password) {
    return false;
  }
  if (!confirmPassword) {
    return false;
  }
  if (password !== confirmPassword) {
    return false;
  }
  return true;
}

const capsLockReminder = document.getElementById('capsLockReminder');
signInForm.addEventListener('keyup', (e) => {
  if (e.getModifierState('CapsLock')) {
    capsLockReminder.classList.remove('hidden');
  } else {
    capsLockReminder.classList.add('hidden');
  }
});

// user can sign in
if (signInForm) {
  signInForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let isEmailField = false;
    if (emailField.value.trim().length > 0) {
      emailFieldError.classList.add('hidden');
      isEmailField = true;
      emailField.classList.remove('border-red-700');
    } else {
      emailFieldError.classList.remove('hidden');
      emailField.classList.add('border-red-700');
    }

    let validDomain = false;
    if (
      emailField.value.trim().length
      && validEmail(emailField.value) === true
    ) {
      emailInvalidError.classList.add('hidden');
      validDomain = true;
      emailField.classList.remove('border-red-700');
    } else if (
      emailField.value.trim().length
      && validEmail(emailField.value) !== true
    ) {
      emailInvalidError.classList.remove('hidden');
      emailField.classList.add('border-red-700');
    }

    let correctPassword = false;
    if (passwordField.value.trim().length >= 8) {
      passwordFieldError.classList.add('hidden');
      correctPassword = true;
      passwordField.classList.remove('border-red-700');
    } else {
      passwordFieldError.classList.remove('hidden');
      passwordField.classList.add('border-red-700');
      passwordFieldError.innerHTML = `Password of at least 8 letters is required. Please add ${
        8 - passwordField.value.length
      } characters.`;
    }

    const formValidated = isEmailField && validDomain && correctPassword;

    if (formValidated) {
      const userData = {
        email: emailField.value,
        password: passwordField.value,
      };

      const USER_LOGIN_ENDPOINT = `${LOGIN_URL}`;

      async function signInUser() {
        try {
          const response = await fetch(USER_LOGIN_ENDPOINT, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });

          if (response.ok) {
            const data = await response.json();
            // save Token
            saveToken(data.accessToken);
            // token saved in local storage, (const) bearerKey in local-storage-related.js
            const signInDataToStorage = {
              name: data.name,
              email: data.email,
            };
            storeUserSession(signInDataToStorage);
            location.reload();
          } else {
            otherErrorField.innerHTML = `The following error occured: ${data.message}`;
          }
        } catch (e) {
          console.log(e);
        }
      }
      signInUser();
    } else {
      otherErrorField.innerHTML = `The following error occured: ${data.message} and ${e}`;
    }
  });
}

// SIGN-UP

// SIGNUP PAGE
const signUpForm = document.querySelector('#signup-form');
const nameField = document.querySelector('#nameField');

const passwordConfirmField = document.querySelector('#passwordConfirmField');

const signUpFormError = document.querySelector('#signup-formError');
const nameFieldError = document.querySelector('#nameFieldError');

const passwordConfirmFieldError = document.querySelector(
  '#passwordConfirmFieldError',
);

// user can sign up
signUpForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let isNameField = false;
  if (nameField.value.trim().length > 0) {
    nameFieldError.classList.add('hidden');
    isNameField = true;
    nameField.classList.remove('border-red-700');
  } else {
    nameFieldError.classList.remove('hidden');
    nameField.classList.add('border-red-700');
  }

  let isEmailField = false;
  if (emailField.value.trim().length > 0) {
    emailFieldError.classList.add('hidden');
    isEmailField = true;
    emailField.classList.remove('border-red-700');
  } else {
    emailFieldError.classList.remove('hidden');
    emailField.classList.add('border-red-700');
  }

  let validDomain = false;
  if (emailField.value.trim().length && validEmail(emailField.value) === true) {
    emailInvalidError.classList.add('hidden');
    validDomain = true;
    emailField.classList.remove('border-red-700');
  } else if (
    emailField.value.trim().length
    && validEmail(emailField.value) !== true
  ) {
    emailInvalidError.classList.remove('hidden');
    emailField.classList.add('border-red-700');
  }

  // const passwordFieldError = document.querySelector("#passwordFieldError")
  let correctPassword = false;
  if (passwordField.value.trim().length >= 8) {
    passwordFieldError.classList.add('hidden');
    correctPassword = true;
    passwordField.classList.remove('border-red-700');
  } else {
    passwordFieldError.classList.remove('hidden');
    passwordField.classList.add('border-red-700');
    passwordFieldError.innerHTML = `Password of at least 8 letters is required. Please add ${
      8 - passwordField.value.length
    } characters.`;
  }

  let isPasswordRepeated = false;
  if (passwordConfirmField.value.trim().length >= 8) {
    passwordConfirmFieldError.classList.add('hidden');
    isPasswordRepeated = true;
    passwordConfirmField.classList.remove('border-red-700');
  } else {
    passwordConfirmFieldError.classList.remove('hidden');
    passwordConfirmField.classList.add('border-red-700');
  }

  let isPasswordMatching = false;
  isPasswordMatching = validPassword(
    passwordField.value,
    passwordConfirmField.value,
  );
  if (isPasswordMatching) {
    passwordConfirmFieldError.classList.add('hidden');
    isPasswordMatching = true;
  } else {
    passwordConfirmFieldError.classList.remove('hidden');
  }

  const formValidated = isNameField
    && isEmailField
    && validDomain
    && correctPassword
    && isPasswordRepeated
    && isPasswordMatching;

  if (formValidated) {
    const userData = {
      name: nameField.value,
      email: emailField.value,
      password: passwordField.value,
    };

    async function registerNewUser() {
      try {
        const response = await fetch(SIGNUP_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (response.ok) {
          location.replace('signin.html');
        } else {
          errorMessage.innerHTML = `The following error occured: ${data.message}`;
        }
      } catch (e) {
        console.log(e);
      }
    }
    registerNewUser();
  } else {
    console.log('Process failed due to the following error: ', e);
  }
});
