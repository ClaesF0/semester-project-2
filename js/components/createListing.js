import { getToken } from "../local-storage-related"
import { CREATE_LISTING_URL } from "../api-related"


const newListingForm = document.getElementById("newListingForm")

const newListingTitleField = document.getElementById("newListingTitleField")
const newListingDateField = document.getElementById("newListingDateField")
const newListingDescriptionField = document.getElementById("newListingDescriptionField")
const newListingTagsField = document.getElementById("itemTagsField")
const newListingPicsField = document.getElementById("itemPicsField")
const newListingTitleFieldError = document.getElementById("newListingTitleFieldError")
const newListingDateFieldError = document.getElementById("newListingDateFieldError")
const otherErrorField = document.getElementById("otherErrorField");

const newListingTitle = newListingTitleField.value
const newListingDate = newListingDateField.value
const newListingDescription = newListingDescriptionField.value
const newListingTags= newListingTagsField.value
const newListingPics = newListingPicsField.value




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

 const deadLineIso = new Date(newListingDateField.value).toISOString();
  

console.log('newListingTags',newListingTags);
console.log('STRINGIFY newListingTags',JSON.stringify(newListingTags));

//console.log('PARSE newListingTags',JSON.parse(newListingTags));

//const parsedTags = JSON.parse(newListingTags);
//const parsedPics = JSON.parse(newListingPics);
 
  console.log('newListingsPics',);
  
  let newListingValidated = isnewListingTitle && isnewListingDate;

  

  if(newListingValidated) {
    console.log("Validated newListing success");
  const newListingData = {
      "title": newListingTitle, 
      "description": newListingDescription,
      //"tags": parsedTags, 
      //"media": parsedPics, 
      "endsAt": newListingDateField.value 
  };
  const bearerKey = getToken();


  //console.table("newListingData is ok",newListingData);

  
  
  //const USER_LOGIN_ENDPOINT = `${LOGIN_URL}`;

async function createListing() {
try {
const response = await fetch(CREATE_LISTING_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${bearerKey}`
  },
  body: JSON.stringify(newListingData),
  //body: newListingData,
});

if (response.ok) {
  const data = await response.json();
  console.log("SUCCESS POSTING NEW LISTING data fra respons:", data);
  console.log('response suksess',response);
  console.log("returned ID from response", response.id)
  
  //console.log("data.accessToken:", data.accessToken);
  //location.replace("profile.html")
  // save Token
  //saveToken(data.accessToken);
  // token saved in local storage, (const) bearerKey in local-storage-related.js
  //const signInDataToStorage = {
  //  name: data.name,
  //  email: data.email,
  //};
  //console.log("signInDataToStorage", signInDataToStorage);
  //storeUserSession(signInDataToStorage);

  //const detailsPageURL = `detailspage.html?item_id=${data.id}?_seller=true&_bids=true`
  const detailsPageURL = `detailspage.html?item_id=${data.id}`
  location.replace(detailsPageURL);
} else {
  //const errorfromserver = "Error while communicating with server:" + await response.json();
  const errorMessage = "something went wrong";
  console.log('respons failure', response);
  console.log('HERE IS BODY FROM UNSUCCESSFUL', response);
  
  
  throw new Error(errorMessage, response.json())
  //console.log('error from server when creating new post:', errorfromserver);
  //otherErrorField.innerHTML = `The following error occured: ${data.message}`;
}
} catch (e) {
console.log(e);
}
}
createListing();
} else {
otherErrorField.innerHTML = `The following error occured: ${data.message} and ${e}`;
}})