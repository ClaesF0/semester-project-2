import { getToken } from "../local-storage-related"
import { CREATE_LISTING_URL } from "../api-related"



const bearerKey = getToken();
console.log('bearerKey',bearerKey);


const newListingForm = document.getElementById("newListingForm")

const newListingTitleField = document.getElementById("newListingTitleField")
const newListingDateField = document.getElementById("newListingDateField")
const newListingDescriptionField = document.getElementById("newListingDescriptionField")
const newListingTagsField = document.getElementById("itemTagsField")
const newListingPicsArray = document.getElementById("itemPicsField")

const newListingTitleFieldError = document.getElementById("newListingTitleFieldError")
const newListingDateFieldError = document.getElementById("newListingDateFieldError")
const otherErrorField = document.getElementById("otherErrorField");

const newListingTitle = newListingTitleField.value
const newListingDate = newListingDateField.value
const newListingDescription = newListingDescriptionField.value
const newListingTags= itemTagsField.value
const newListingPics = itemPicsField.value


newListingForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  let isnewListingTitle = false;
if (newListingTitleField.value.trim().length > 0) {
  newListingTitleFieldError.classList.add("hidden");
  isnewListingTitle = true;
} else {
  newListingTitleFieldError.classList.remove("hidden");
}

let isnewListingDate = false;
if (newListingDateField.value.trim().length > 0) {
  newListingDateFieldError.classList.add("hidden");
  isnewListingDate = true;
  const deadLineIso = new Date(newListingDateField.value).toISOString();
  console.log('deadLineIso',deadLineIso)
} else {
  newListingDateFieldError.classList.remove("hidden");
}

  //console.log("newListingForm",newListingForm);
  //title
  console.log('newListingTitle',newListingTitle);
  
  //date, time, and iso-format deadline
  console.log('newListingDate',newListingDate);
  const deadLineIso = new Date(newListingDateField.value).toISOString();
  
  
  //console.log('deadLineIso',deadLineIso);

  //description
  console.log('newListingDescription',newListingDescription);
  //tags
  const tagsJsonString = newListingTags;
  const tagsParsedArray = JSON.parse(tagsJsonString);
  console.log('tagsParsed',tagsParsedArray);
  //pics
  const picsJsonString = newListingPics;
  const picsParsedArray = JSON.parse(picsJsonString);
  console.log('picsParsedArray',picsParsedArray);
  
  let newListingValidated = isnewListingTitle && isnewListingDate;

  if(newListingValidated) {
    console.log("Validated newListing success");
  const newListingData = {
      title: newListingTitle, 
      description: newListingDescription,
      tags: tagsParsedArray, 
      media: picsParsedArray, 
      endsAt: deadLineIso 
  };
  //no need to further JSON stringify/parse the object before POST
  const testBodyWithNoAlteration = newListingData;
  //const testBody = JSON.stringify(newListingData);
  //const testBodyWithJson = JSON.parse(newListingData)
  console.log('testBodyWithNoAlteration', testBodyWithNoAlteration);
  //console.log('testBody with stringify', testBody);
  //console.log('testBodyWithJson',testBodyWithJson);
  console.log('sheet er linket og alle er glade');
  


  
  
  /*
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
}*/
  }
})





/*
function createListingModal(){
  const modalCreateListing = document.getElementById('modalCreateListing');
  modalCreateListing.innerHTML = `
  <div
  class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="newListingModal"
  tabindex="-1"
  aria-labelledby="newListingModal"
  aria-hidden="true"
>
  <div class="modal-dialog relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
    >
      <form
        id="newListingForm"
        action=""
        class="modal-body p-8 mb-0 space-y-4 rounded-lg shadow-2xl"
      >
        <div
          class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
        >
          <p class="text-lg text-center font-medium">Create new listing INNER HTML ER DETTE</p>
          <button
            type="button"
            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <p
          id="newListingerrorMessage"
          class="text-lg font-medium text-red-600"
        ></p>
        <div>
          <label for="name" class="text-sm font-medium">Title</label>
          <div class="relative mt-1">
            <input
              type=""
              id="newListingTitleField"
              class="w-full p-4 pr-12 text-sm border-2 border-gray-400 rounded-lg shadow-sm"
              placeholder="Enter title (required)"
            />
            <span
              class="absolute inset-y-0 inline-flex items-center right-4"
            >
            </span>
            <span
              id="newListingTitleFieldError"
              class="hidden text-sm ml-4 text-red-600"
            >
              A title is required
            </span>
          </div>
        </div>

        <div
          x-data
          x-init="flatpickr($refs.datetimewidget, {wrap: true, enableTime: true, time_24hr: true, minDate: 'today',  dateFormat: 'M j, Y h:i K', altInput: true,
altFormat: 'j. F Y, H:i'});"
          x-ref="datetimewidget"
          class="flatpickr container mx-auto col-span-6 sm:col-span-6 mt-5"
        >
          <label
            for="datetime"
            class="flex-grow block font-medium text-sm text-gray-700 mb-1"
            >Date and time auction ends</label
          >
          <div class="flex align-middle align-content-center">
            <input
              x-ref="datetime"
              type="text"
              id="newListingDateField"
              data-input
              placeholder="Select deadline (required)"
              class="block w-full pl-4 border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-l-md shadow-sm border-b-2 border-t-2 border-l-2 text-sm font-medium "
            />

            <a
              class="h-11 w-10 input-button cursor-pointer rounded-r-md bg-transparent border-gray-400 border-t-2 border-b-2 border-r-2 pr-12 text-sm shadow-sm"
              title="clear"
              data-clear
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 mt-2 ml-1"
                viewBox="0 0 20 20"
                fill="#c53030"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
          <span
          id="newListingDateFieldError"
          class="hidden text-sm ml-4 text-red-600"
        >
          A deadline is required
        </span>
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.9/flatpickr.min.js"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.9/themes/airbnb.min.css"
        />
        <script
          src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js"
          defer
        ></script>
        <div>
          <label for="description" class="text-sm font-medium"
            >Item description</label
          >
          <div class="relative mt-1">
            <textarea
              type="text"
              id="newListingDescriptionField"
              class="w-full p-4 pr-12 text-sm border-2 border-gray-400 rounded-lg shadow-sm"
              placeholder="Enter description (optional, but preferable)"
            ></textarea>
          </div>
        </div>

        <div class="">
          <div class="relative mt-1">
            <label for="Tags" class="text-sm">Tags</label>
            <input
              type="text"
              class="w-full p-2 pr-12 text-sm border-2 border-gray-400 rounded-lg shadow-sm"
              name="tags"
              id="itemTagsField"
              placeholder="Tags (optional)"
              value=""
              autofocus
            />
          </div>
        </div>
        <script src="https://unpkg.com/@yaireo/tagify"></script>
        <script src="https://unpkg.com/@yaireo/tagify/dist/tagify.polyfills.min.js"></script>
        <script>
          // The DOM element you wish to replace with Tagify
          var input = document.querySelector("input[name=tags]");
          // initialize Tagify on the above input node reference
          new Tagify(input);
        </script>

        <div class="">
          <div class="relative mt-1">
            <label for="Pics" class="block text-sm">Pics</label>
            <input
              type="text"
              class="w-full p-2 pr-12 text-sm border-2 border-gray-400 rounded-lg shadow-sm"
              name="pics"
              id="itemPicsField"
              placeholder="Pics URL (optional but publically accessible)"
              value=""
              autofocus
            />
          </div>
        </div>
        <script src="https://unpkg.com/@yaireo/tagify"></script>
        <script src="https://unpkg.com/@yaireo/tagify/dist/tagify.polyfills.min.js"></script>
        <script>
          // The DOM element you wish to replace with Tagify
          var input = document.querySelector("input[name=pics]");
          // initialize Tagify on the above input node reference
          new Tagify(input);
        </script>
        <span
          id="otherErrorField"
          class=" text-md ml-4 text-red-600"
        >
          
        </span>

        <span class="flex justify-between">
          <button
            type="reset"
            value="Reset"
            class="w-1/3 px-5 py-3 text-sm font-medium border-2 border-red-600 text-black hover:text-white hover:bg-red-600 rounded-full"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="w-1/3 px-5 py-3 text-sm font-medium text-black bg-teal-500 rounded-full hover:shadow-sm"
          >
            Post listing
          </button>
        </span>
      </form>
    </div>
  </div>
</div>
  `;
}

createListingModal();

const newListingForm = document.getElementById("newListingForm")
    const newListingTitleField = document.getElementById("newListingTitleField")
    const newListingDateField = document.getElementById("newListingDateField")
    const newListingDescriptionField = document.getElementById("newListingDescriptionField")
    const newListingTagsField = document.getElementById("itemTagsField")
    const newListingPicsArray = document.getElementById("itemPicsField")
    const newListingTitleFieldError = document.getElementById("newListingTitleFieldError")
    const newListingDateFieldError = document.getElementById("newListingDateFieldError")
    const newListingTitle = newListingTitleField.value
    const newListingDate = newListingDateField.value
    const newListingDescription = newListingDescriptionField.value
    const newListingTags= itemTagsField.value
    const newListingPics = itemPicsField.value
    const otherErrorField = document.getElementById("otherErrorField");
    newListingForm.addEventListener("submit", function (event) {
      event.preventDefault();
      
      let isnewListingTitle = false;
    if (newListingTitleField.value.trim().length > 0) {
      newListingTitleFieldError.classList.add("hidden");
      isnewListingTitle = true;
    } else {
      newListingTitleFieldError.classList.remove("hidden");
    }

    let isnewListingDate = false;
    if (newListingDateField.value.trim().length > 0) {
      newListingDateFieldError.classList.add("hidden");
      isnewListingDate = true;
      const deadLineIso = new Date(newListingDateField.value).toISOString();
      console.log('deadLineIso',deadLineIso)
    } else {
      newListingDateFieldError.classList.remove("hidden");
    }

      //console.log("newListingForm",newListingForm);
      //title
      console.log('newListingTitle',newListingTitle);
      
      //date, time, and iso-format deadline
      console.log('newListingDate',newListingDate);
      const deadLineIso = new Date(newListingDateField.value).toISOString();
      
      
      //console.log('deadLineIso',deadLineIso);

      //description
      console.log('newListingDescription',newListingDescription);
      //tags
      const tagsJsonString = newListingTags;
      const tagsParsedArray = JSON.parse(tagsJsonString);
      console.log('tagsParsed',tagsParsedArray);
      //pics
      const picsJsonString = newListingPics;
      console.log('picsJsonString',picsJsonString);
      const picsParsedArray = JSON.parse(picsJsonString);
      console.log('picsParsedArray',picsParsedArray);
      
      let newListingValidated = isnewListingTitle && isnewListingDate;

      if(newListingValidated) {
        console.log("Validated newListing success");
      const newListingData = {
          title: newListingTitle, 
          description: newListingDescription,
          tags: tagsParsedArray, 
          media: picsParsedArray, 
          endsAt: deadLineIso 
      };
      const testBody = JSON.stringify(newListingData);
      console.log('testBody', testBody);

      
      
      /*
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
      }

      
     

      
      
    
    
    })
  
    */