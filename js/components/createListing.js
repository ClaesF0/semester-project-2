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
  


  
  
  
  //const USER_LOGIN_ENDPOINT = `${LOGIN_URL}`;

async function createListing() {
try {
const response = await fetch(CREATE_LISTING_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer "+bearerKey
  },
  //body: JSON.stringify(userData),
  body: newListingData,
});

if (response.ok) {
  const data = await response.json();
  console.log("data:", data);
  console.log("data.accessToken:", data.accessToken);
  location.replace("profile.html")
  // save Token
  //saveToken(data.accessToken);
  // token saved in local storage, (const) bearerKey in local-storage-related.js
  //const signInDataToStorage = {
  //  name: data.name,
  //  email: data.email,
  //};
  //console.log("signInDataToStorage", signInDataToStorage);
  //storeUserSession(signInDataToStorage);
  //location.replace("index.html");
} else {
  otherErrorField.innerHTML = `The following error occured: ${data.message}`;
}
} catch (e) {
console.log(e);
}
}
createListing();
} else {
otherErrorField.innerHTML = `The following error occured: ${data.message} and ${e}`;
}})