import { LOGIN_URL, SIGNUP_URL } from "../api-related";
import { saveToken, storeUserSession } from "../local-storage-related";

function createModal() {
  const modalAccount = document.getElementById("modalAccount");
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
      <p class="text-lg mx-auto text-center font-medium">Log in</p>
        <div
          class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
        >
        
          <button
            type="button"
            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          
        </div>
        
        <span
          id="signInErrorMessage"
          class="text-lg font-medium text-red-600"
        ></span>
        <div>
          <label for="email" class="text-sm font-medium">Email</label>
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
          <div class="relative mt-1">
            <input
              type="email"
              id="emailField"
              class="w-full p-4 pr-12 text-sm border-2 border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter email"
            />
            

          </div>
        </div>
        <div>
          <label for="password" class="text-sm font-medium">Password</label>

          <div class="relative mt-1">
            <input
              type="password"
              id="passwordField"
              class="w-full p-4 pr-12 text-sm border-2 border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter password"
            />
            <span
              class="absolute my-4 inline-flex items-center right-4 "
            >
            <!--
            <button id="togglePasswordVisibilityButton">
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
              </button>
              -->
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
        id="signup-form"
        action=""
        class="modal-body p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
      >
      <p class="text-lg text-center mx-auto font-medium">Create new account</p>
        <div
          class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
        >

          <button
            type="button"
            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <p id="signUperrorMessage" class="text-lg font-medium text-red-600"></p>
      <div>
        <label for="name" class="text-sm font-medium ">Name</label>
        <div class="relative mt-1">
          <input
            type=""
            id="signUpnameField"
            class="w-full p-4 pr-12 text-sm border-2 border-gray-400 rounded-lg shadow-sm"
            placeholder="Enter name (required)"
          />
          <span class="absolute inset-y-0 inline-flex items-center right-4">
          </span>
          <span
                id="signUpnameFieldError"
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
            id="signUpemailField"
            class="w-full p-4 pr-12 text-sm border-2 border-gray-400 rounded-lg shadow-sm "
            placeholder="Enter email (required)"
          />
          
          <span
                id="signUpemailFieldError"
                class="hidden text-sm ml-4 text-red-600"
        >
            An email address is required</span>
          <span
                id="signUpemailInvalidError"
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
            id="signUppasswordField"
            class="w-full p-4 pr-12 text-sm border-2 border-gray-400 rounded-lg shadow-sm"
            placeholder="Enter password"
          />
          
          <span
                id="signUppasswordFieldError"
                class="hidden text-sm ml-4 text-red-600"
        >
            </span>
        </div>
        <div class="relative mt-1">
          <input
            type="password"
            id="signUppasswordConfirmField"
            class="w-full p-4 pr-12 text-sm border-2 border-gray-400 rounded-lg shadow-sm"
            placeholder="Confirm password"
          />
          
          <span
                id="signUppasswordConfirmFieldError"
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
            id="signUpnameField"
            class="w-full p-4 pr-12 text-sm border-2 border-gray-400 rounded-lg shadow-sm"
            placeholder="Publicly accessible URL for profile pic (optional)"
          />
          <span class="absolute inset-y-0 inline-flex items-center right-4">
          </span>
          
        </div>
      </div>
      <span
                id="signUpcapsLockReminder"
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

// LOG-IN PAGE
const signInForm = document.querySelector("#signin-form");
const emailField = document.querySelector("#emailField");
const passwordField = document.querySelector("#passwordField");

const emailFieldError = document.querySelector("#emailFieldError");
const emailInvalidError = document.querySelector("#emailInvalidError");
const passwordFieldError = document.querySelector("#passwordFieldError");
const signInErrorMessage = document.querySelector("#signInErrorMessage");

// only noroff adress
const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stud.noroff.no|noroff.no)$/;
//const regExSymbols = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]$/;
const regExSymbols = /^[a-zA-Z0-9.@!#$%&'*+/=?^_`{|}~-]+$/;
// cooperates with the regular expression

function checkInput(form) {
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
    if (!regExSymbols.test(input.value) && input.value.length !== 0) {
      console.log("Input contains invalid characters");
      input.classList.add("error");
      input.nextElementSibling.innerHTML = "Input contains invalid characters";
    } else {
      input.classList.remove("error");
      input.nextElementSibling.innerHTML = "";
      noInvalidSymbols = true;
    }
    if (input.value.length == 0) {
      input.classList.remove("error");
      input.nextElementSibling.innerHTML = "";
    }
  });
}

signInForm.addEventListener("input", (e) => {
  e.preventDefault();
  checkInput(signInForm);
});

function validEmail(email) {
  return !!email.match(regEx);
}

emailField.addEventListener("submit", function validDomain() {
  if (emailField.value.trim().length && validEmail(emailField.value) === true) {
    emailInvalidError.classList.add("hidden");
    emailField.classList.remove("border-red-700");
    emailField.classList.add("border-green-700");
    validDomain = true;
  } else if (
    emailField.value.trim().length &&
    validEmail(emailField.value) !== true
  ) {
    emailInvalidError.classList.remove("hidden");
    emailField.classList.remove("border-green-700");
    emailField.classList.add("border-red-700");
  } else if (emailField.value.length === 0) {
    emailInvalidError.classList.add("hidden");
    emailField.classList.remove("border-green-700");
    emailField.classList.remove("border-red-700");
  }
});

passwordField.addEventListener("input", (password, confirmPassword) => {
  if (!password) {
    console.log("passordfeil 1");
    return false;
  }
  if (!confirmPassword) {
    console.log("passordfeil 2 en bokstav -> ikke bekreftet ennå");
    return false;
  }
  if (password !== confirmPassword) {
    console.log("passordfeil 3 tomt felt");
    return false;
  }
  console.log("passord uten feil 1");
  return true;
});

const capsLockReminder = document.getElementById("capsLockReminder");
signInForm.addEventListener("keyup", (e) => {
  if (e.getModifierState("CapsLock")) {
    capsLockReminder.classList.remove("hidden");
  } else {
    capsLockReminder.classList.add("hidden");
  }
});

// user can sign in
if (signInForm) {
  signInForm.addEventListener("submit", (event) => {
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
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });

          if (response.ok) {
            const data = await response.json();
            location.reload();
            saveToken(data.accessToken);
            // token saved in local storage, (const) bearerKey in local-storage-related.js
            const signInDataToStorage = {
              name: data.name,
              email: data.email,
            };
            storeUserSession(signInDataToStorage);
            location.reload();
          } else {
            const JSONresponse = await response.json();
            const errorMessage = JSONresponse.errors[length].message;
            console.log("feil 1", errorMessage);
            signInErrorMessage.innerHTML = `The following error occured: ${errorMessage}`;
          }
        } catch (e) {
          console.log("feil 2", data);
          console.log("e", e);
        }
      }
      signInUser();
    } else {
      console.log("feil 3");
      capsLockReminder.innerHTML = `The following error occured: ${data.message} and ${e}`;
    }
  });
}

// SIGN-UP RELATED SECTION OF CODE

// SIGNUP PAGE
const signUpForm = document.querySelector("#signup-form");
const signUpnameField = document.querySelector("#signUpnameField");
const signUpemailField = document.querySelector("#signUpemailField");
const signUppasswordField = document.querySelector("#signUppasswordField");
const signUppasswordConfirmField = document.querySelector(
  "#signUppasswordConfirmField"
);

const signUpFormError = document.querySelector("#signup-formError");
const signUpnameFieldError = document.querySelector("#signUpnameFieldError");
const signUpemailFieldError = document.querySelector("#signUpemailFieldError");
const signUpemailInvalidError = document.querySelector(
  "#signUpemailInvalidError"
);
const signUppasswordFieldError = document.querySelector(
  "#signUppasswordFieldError"
);
const signUppasswordConfirmFieldError = document.querySelector(
  "#signUppasswordConfirmFieldError"
);
const signUperrorMessage = document.querySelector("#signUperrorMessage");

// register user

// only noroff adress cooperates with following regex:
// const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(stud.noroff.no|noroff.no)$/;

function signUpvalidEmail(email) {
  return !!email.match(regEx);
}

function signUpvalidDomain() {
  if (
    signUpemailField.value.trim().length &&
    signUpvalidEmail(signUpemailField.value) === true
  ) {
    signUpemailInvalidError.classList.add("hidden");
    signUpemailField.classList.add("border-green-700");
    signUpvalidDomain = true;
  } else if (
    signUpemailField.value.trim().length &&
    signUpvalidEmail(signUpemailField.value) !== true
  ) {
    signUpemailInvalidError.classList.remove("hidden");
  }
}

function signUpvalidPassword(password, confirmPassword) {
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

const signUpcapsLockReminder = document.getElementById(
  "signUpcapsLockReminder"
);
signUpForm.addEventListener("keyup", (e) => {
  if (e.getModifierState("CapsLock")) {
    signUpcapsLockReminder.classList.remove("hidden");
  } else {
    signUpcapsLockReminder.classList.add("hidden");
  }
});

// user can sign up
signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let signUpisNameField = false;
  if (signUpnameField.value.trim().length > 0) {
    signUpnameFieldError.classList.add("hidden");
    signUpisNameField = true;
    signUpnameField.classList.remove("border-red-700");
  } else {
    signUpnameFieldError.classList.remove("hidden");
    signUpnameField.classList.add("border-red-700");
  }

  let signUpisEmailField = false;
  if (signUpemailField.value.trim().length > 0) {
    signUpemailFieldError.classList.add("hidden");
    signUpisEmailField = true;
    signUpemailField.classList.remove("border-red-700");
  } else {
    signUpemailFieldError.classList.remove("hidden");
    signUpemailField.classList.add("border-red-700");
  }

  let signUpvalidDomain = false;
  if (
    signUpemailField.value.trim().length &&
    signUpvalidEmail(signUpemailField.value) === true
  ) {
    signUpemailInvalidError.classList.add("hidden");
    signUpvalidDomain = true;
    signUpemailField.classList.remove("border-red-700");
  } else if (
    signUpemailField.value.trim().length &&
    signUpvalidEmail(signUpemailField.value) !== true
  ) {
    signUpemailInvalidError.classList.remove("hidden");
    signUpemailField.classList.add("border-red-700");
  }

  let signUpcorrectPassword = false;
  if (signUppasswordField.value.trim().length >= 8) {
    signUppasswordFieldError.classList.add("hidden");
    signUpcorrectPassword = true;
    signUppasswordField.classList.remove("border-red-700");
  } else {
    signUppasswordFieldError.classList.remove("hidden");
    signUppasswordField.classList.add("border-red-700");
    signUppasswordFieldError.innerHTML = `Password of at least 8 letters is required. Please add ${
      8 - signUppasswordField.value.length
    } characters.`;
  }

  let signUpisPasswordRepeated = false;
  if (signUppasswordConfirmField.value.trim().length >= 8) {
    signUppasswordConfirmFieldError.classList.add("hidden");
    signUpisPasswordRepeated = true;
    signUppasswordConfirmField.classList.remove("border-red-700");
  } else {
    signUppasswordConfirmFieldError.classList.remove("hidden");
    signUppasswordConfirmField.classList.add("border-red-700");
  }

  let signUpisPasswordMatching = false;
  signUpisPasswordMatching = signUpvalidPassword(
    signUppasswordField.value,
    signUppasswordConfirmField.value
  ); // true // false
  if (signUpisPasswordMatching) {
    signUppasswordConfirmFieldError.classList.add("hidden");
    signUpisPasswordMatching = true;
  } else {
    signUppasswordConfirmFieldError.classList.remove("hidden");
  }

  const signUpformValidated =
    signUpisNameField &&
    signUpisEmailField &&
    signUpvalidDomain &&
    signUpcorrectPassword &&
    signUpisPasswordRepeated &&
    signUpisPasswordMatching;

  if (signUpformValidated) {
    const userData = {
      name: signUpnameField.value,
      email: signUpemailField.value,
      password: signUppasswordField.value,
    };

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
          location.reload();
        } else {
          signUperrorMessage.innerHTML = `The following error occured: ${data.message}`;
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
