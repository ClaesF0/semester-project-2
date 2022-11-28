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
