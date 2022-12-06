


function createModal() {
  const modalAccount = document.getElementById('modalAccount');
  modalAccount.innerHTML = `
      <!-- log in Modal -->
<div
  class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="loginModal"
  tabindex="-1"
  aria-labelledby="loginModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
    >
      <form
        id="signin-form"
        action=""
        class="modal-body p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
      >
        <div
          class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
        >
          <p class="text-lg text-center font-medium">Log in</p>
          <button
            type="button"
            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <span
          id="errorMessage"
          class="text-lg font-medium text-red-600"
        ></span>
        <div>
          <label for="email" class="text-sm font-medium">Email</label>
          <div class="relative mt-1">
            <input
              type="email"
              id="emailField"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter email"
            />
            <span
              class="absolute inset-y-0 inline-flex items-center right-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
            <span
              id="emailFieldError"
              class="hidden text-sm ml-4 text-red-600"
            >
              An email address is required</span
            >
            <span
              id="emailInvalidError"
              class="hidden text-sm ml-4 text-red-600"
            >
              Enter a valid noroff.no or stud.noroff.no mail adress</span
            >
          </div>
        </div>
        <div>
          <label for="password" class="text-sm font-medium">Password</label>

          <div class="relative mt-1">
            <input
              type="password"
              id="passwordField"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter password"
            />
            <span
              class="absolute inset-y-0 inline-flex items-center right-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
            <span
              id="passwordFieldError"
              class="hidden text-sm ml-4 text-red-600"
            >
            </span>
          </div>
        </div>
        <span
          id="capsLockReminder"
          class="hidden text-sm ml-4 text-red-600"
        >
          CAPS LOCK IS ON
        </span>
        <button
          type="submit"
          class="block w-full px-5 py-3 text-sm font-medium text-black bg-teal-500 rounded-full"
        >
          Log in
        </button>
        <button
        type="button"
        class="block w-full px-5 py-3 text-sm font-medium text-black bg-blue-500 rounded-full"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
          Create new account
        </button>
        
      </form>
    </div>
  </div>
</div>

<!-- sign up Modal -->
<div
  class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="signupModal"
  tabindex="-1"
  aria-labelledby="signupModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
    >
      <form
        id="signin-form"
        action=""
        class="modal-body p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
      >
        <div
          class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
        >
          <p class="text-lg text-center font-medium">Create new account</p>
          <button
            type="button"
            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <p id="errorMessage" class="text-lg font-medium text-red-600"></p>
      <div>
        <label for="name" class="text-sm font-medium ">Name</label>
        <div class="relative mt-1">
          <input
            type=""
            id="nameField"
            class="w-full p-4 pr-12 text-sm border-2 border-gray-400 rounded-lg shadow-sm"
            placeholder="Enter name (required)"
          />
          <span class="absolute inset-y-0 inline-flex items-center right-4">
          </span>
          <span
                id="nameFieldError"
                class="hidden text-sm ml-4 text-red-600"
        >
            Enter a name
          </span>
        </div>
      </div>
      <div>
        <label for="email" class="text-sm font-medium">Email</label>
        <div class="relative mt-1">
          <input
            type="email"
            id="emailField"
            class="w-full p-4 pr-12 text-sm border-2 border-gray-400 rounded-lg shadow-sm "
            placeholder="Enter email (required)"
          />
          <span class="absolute inset-y-0 inline-flex items-center right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
          <span
                id="emailFieldError"
                class="hidden text-sm ml-4 text-red-600"
        >
            An email address is required</span>
          <span
                id="emailInvalidError"
                class="hidden text-sm ml-4 text-red-600"
        >
            Enter a valid noroff.no or stud.noroff.no mail adress</span>
        </div>
      </div>
      <div>
        <label for="password" class="text-sm font-medium">Password</label>

        <div class="relative mt-1">
          <input
            type="password"
            id="passwordField"
            class="w-full p-4 pr-12 text-sm border-2 border-gray-400 rounded-lg shadow-sm"
            placeholder="Enter password"
          />
          <span class="absolute inset-y-0 inline-flex items-center right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
          <span
                id="passwordFieldError"
                class="hidden text-sm ml-4 text-red-600"
        >
            </span>
        </div>
        <div class="relative mt-1">
          <input
            type="password"
            id="passwordConfirmField"
            class="w-full p-4 pr-12 text-sm border-2 border-gray-400 rounded-lg shadow-sm"
            placeholder="Confirm password"
          />
          <span class="absolute inset-y-0 inline-flex items-center right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
          <span
                id="passwordConfirmFieldError"
                class="hidden text-sm ml-4 text-red-600"
        >
            Passwords are not matching, try again. </span>
        </div>
      </div>
      <div>
        <label for="name" class="text-sm font-medium ">Profile pic</label>
        <div class="relative mt-1">
          <input
            type=""
            id="nameField"
            class="w-full p-4 pr-12 text-sm border-2 border-gray-400 rounded-lg shadow-sm"
            placeholder="Publicly accessible URL for profile pic (optional)"
          />
          <span class="absolute inset-y-0 inline-flex items-center right-4">
          </span>
          
        </div>
      </div>
      <span
                id="capsLockReminder"
                class="hidden text-sm ml-4 text-red-600"
        >
            CAPS LOCK IS ON </span>
        <button
          type="submit"
          class="block w-full px-5 py-3 text-sm font-medium text-black bg-teal-500 rounded-full"
        >
          Sign up
        </button>
        <button
        type="button"
        class="block w-full px-5 py-3 text-sm font-medium text-black bg-blue-500 rounded-full"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
          Use existing account
        </button>
      </form>
    </div>
  </div>
</div>
      `;
}

createModal();

import { LOGIN_URL, SIGNUP_URL } from "../api-related";
import {
  getToken,
  saveToken,
  storeUserSession,
  collectUserName,
  clearStorage,
} from "../local-storage-related";

//LOG-IN PAGE
const signInForm = document.querySelector("#signin-form");
const emailField = document.querySelector("#emailField");
const passwordField = document.querySelector("#passwordField");

const emailFieldError = document.querySelector("#emailFieldError");
const emailInvalidError = document.querySelector("#emailInvalidError");
const passwordFieldError = document.querySelector("#passwordFieldError");
const otherErrorField = document.querySelector("#errorMessage");

//only noroff adress
const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stud.noroff.no|noroff.no)$/;

//cooperates with the regular expression
function validEmail(email) {
  return email.match(regEx) ? true : false;
}

function validDomain() {
  if (emailField.value.trim().length && validEmail(emailField.value) === true) {
    emailInvalidError.classList.add("hidden");
    emailField.classList.add("border-green-700");
    validDomain = true;
  } else if (
    emailField.value.trim().length &&
    validEmail(emailField.value) !== true
  ) {
    emailInvalidError.classList.remove("hidden");
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
  } else {
    return true;
  }
}

const capsLockReminder = document.getElementById("capsLockReminder");
signInForm.addEventListener("keyup", function (e) {
  if (e.getModifierState("CapsLock")) {
    capsLockReminder.classList.remove("hidden");
  } else {
    capsLockReminder.classList.add("hidden");
  }
});

//user can sign in
if (signInForm) {
  signInForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let isEmailField = false;
    if (emailField.value.trim().length > 0) {
      emailFieldError.classList.add("hidden");
      isEmailField = true;
      emailField.classList.remove("border-red-700");
    } else {
      emailFieldError.classList.remove("hidden");
      emailField.classList.add("border-red-700");
    }

    let validDomain = false;
    if (
      emailField.value.trim().length &&
      validEmail(emailField.value) === true
    ) {
      emailInvalidError.classList.add("hidden");
      validDomain = true;
      emailField.classList.remove("border-red-700");
    } else if (
      emailField.value.trim().length &&
      validEmail(emailField.value) !== true
    ) {
      emailInvalidError.classList.remove("hidden");
      emailField.classList.add("border-red-700");
    }

    let correctPassword = false;
    if (passwordField.value.trim().length >= 8) {
      passwordFieldError.classList.add("hidden");
      correctPassword = true;
      passwordField.classList.remove("border-red-700");
    } else {
      passwordFieldError.classList.remove("hidden");
      passwordField.classList.add("border-red-700");
      passwordFieldError.innerHTML =
        "Password of at least 8 letters is required. Please add " +
        (8 - passwordField.value.length) +
        " characters.";
    }

    let formValidated = isEmailField && validDomain && correctPassword;

    if (formValidated) {
      console.log("Validation success");
      const userData = {
        email: emailField.value,
        password: passwordField.value,
      };

      const USER_LOGIN_ENDPOINT = `${LOGIN_URL}`;

      async function signInUser() {
        try {
          const response = await fetch(USER_LOGIN_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });

          if (response.ok) {
            const data = await response.json();
            console.log("data:", data);
            console.log("data.accessToken:", data.accessToken);
            //location.replace("index.html")
            // save Token
            saveToken(data.accessToken);
            // token saved in local storage, (const) bearerKey in local-storage-related.js
            const signInDataToStorage = {
              name: data.name,
              email: data.email,
            };
            console.log("signInDataToStorage", signInDataToStorage);
            storeUserSession(signInDataToStorage);
            location.replace("index.html");
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

//SIGN-UP

    //import { LOGIN_URL, SIGNUP_URL } from "../api-related";

//SIGNUP PAGE
const signUpForm = document.querySelector("#signup-form");
const nameField = document.querySelector("#nameField");
//const emailField = document.querySelector("#emailField")
//const passwordField = document.querySelector("#passwordField")
const passwordConfirmField = document.querySelector("#passwordConfirmField");

const signUpFormError = document.querySelector("#signup-formError");
const nameFieldError = document.querySelector("#nameFieldError");
//const emailFieldError = document.querySelector("#emailFieldError")
//const emailInvalidError = document.querySelector("#emailInvalidError")
//const passwordFieldError = document.querySelector("#passwordFieldError")
const passwordConfirmFieldError = document.querySelector(
  "#passwordConfirmFieldError"
);
//const otherErrorField = document.querySelector("#errorMessage")

// checked

//register user

//only noroff adress
//const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stud.noroff.no|noroff.no)$/;

//cooperates with the regular expression
    //function validEmail(email) {
    //  return email.match(regEx) ? true : false;
    //}

    //function validDomain() {
  if (emailField.value.trim().length && validEmail(emailField.value) === true) {
    emailInvalidError.classList.add("hidden");
    emailField.classList.add("border-green-700");
    validDomain = true;
  } else if (
    emailField.value.trim().length &&
    validEmail(emailField.value) !== true
  ) {
    emailInvalidError.classList.remove("hidden");
  }
    //}

    //function validPassword(password, confirmPassword) {
      //if (!password) {
      //  return false;
      //}
      //if (!confirmPassword) {
      //  return false;
      //}
      //if (password !== confirmPassword) {
      //  return false;
      //} else {
      //  return true;
      //}
    //}
/*
const capsLockReminder = document.getElementById("capsLockReminder");
signUpForm.addEventListener('keyup', function (e) {
    if (e.getModifierState('CapsLock')) {
        capsLockReminder.classList.remove("hidden");
    } else {
        capsLockReminder.classList.add("hidden");
    }
}
);
*/
//user can sign up
signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let isNameField = false;
  if (nameField.value.trim().length > 0) {
    nameFieldError.classList.add("hidden");
    isNameField = true;
    nameField.classList.remove("border-red-700");
  } else {
    nameFieldError.classList.remove("hidden");
    nameField.classList.add("border-red-700");
  }

  let isEmailField = false;
  if (emailField.value.trim().length > 0) {
    emailFieldError.classList.add("hidden");
    isEmailField = true;
    emailField.classList.remove("border-red-700");
  } else {
    emailFieldError.classList.remove("hidden");
    emailField.classList.add("border-red-700");
  }

  let validDomain = false;
  if (emailField.value.trim().length && validEmail(emailField.value) === true) {
    emailInvalidError.classList.add("hidden");
    validDomain = true;
    emailField.classList.remove("border-red-700");
  } else if (
    emailField.value.trim().length &&
    validEmail(emailField.value) !== true
  ) {
    emailInvalidError.classList.remove("hidden");
    emailField.classList.add("border-red-700");
  }

  //const passwordFieldError = document.querySelector("#passwordFieldError")
  let correctPassword = false;
  if (passwordField.value.trim().length >= 8) {
    passwordFieldError.classList.add("hidden");
    correctPassword = true;
    passwordField.classList.remove("border-red-700");
  } else {
    passwordFieldError.classList.remove("hidden");
    passwordField.classList.add("border-red-700");
    passwordFieldError.innerHTML =
      "Password of at least 8 letters is required. Please add " +
      (8 - passwordField.value.length) +
      " characters.";
  }

  let isPasswordRepeated = false;
  if (passwordConfirmField.value.trim().length >= 8) {
    passwordConfirmFieldError.classList.add("hidden");
    isPasswordRepeated = true;
    passwordConfirmField.classList.remove("border-red-700");
  } else {
    passwordConfirmFieldError.classList.remove("hidden");
    passwordConfirmField.classList.add("border-red-700");
  }

  let isPasswordMatching = false;
  isPasswordMatching = validPassword(
    passwordField.value,
    passwordConfirmField.value
  ); // true // false
  if (isPasswordMatching) {
    passwordConfirmFieldError.classList.add("hidden");
    isPasswordMatching = true;
  } else {
    passwordConfirmFieldError.classList.remove("hidden");
  }

  let formValidated =
    isNameField &&
    isEmailField &&
    validDomain &&
    correctPassword &&
    isPasswordRepeated &&
    isPasswordMatching;

  if (formValidated) {
    const userData = {
      name: nameField.value,
      email: emailField.value,
      password: passwordField.value,
    };

    // const REGISTER_USER_URL_ENDPOINT = USER_SIGNUP_URL;

    async function registerNewUser() {
      try {
        const response = await fetch(SIGNUP_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (response.ok) {
          console.log("New user sucessfully registered");
          location.replace("signin.html");
        } else {
          errorMessage.innerHTML = `The following error occured: ${data.message}`;
        }
      } catch (e) {
        console.log(e);
      }
    }
    registerNewUser();
  } else {
    console.log("Process failed due to the following error: ", e);
  }
});