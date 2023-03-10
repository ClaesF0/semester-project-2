// NOTE THIS IS WORKING BUT ALSO PARTLY WORK IN PROGRESS,
// PLS DISREGARD CONSOLE LOGS, COMMENTED CODE ETC
import { getToken } from "../local-storage-related";
import { CREATE_LISTING_URL } from "../api-related";

const newListingForm = document.getElementById("newListingForm");

const newListingTitleField = document.getElementById("newListingTitleField");
const newListingDateField = document.getElementById("newListingDateField");
const newListingDescriptionField = document.getElementById(
  "newListingDescriptionField"
);
const newListingTagsField = document.getElementById("itemTagsField");
const newListingPicsField = document.getElementById("itemPicsField");
const newListingTitleFieldError = document.getElementById(
  "newListingTitleFieldError"
);
const newListingDateFieldError = document.getElementById(
  "newListingDateFieldError"
);
const otherErrorField = document.getElementById("otherErrorField");

const newListingTitle = newListingTitleField.value;
const newListingDate = newListingDateField.value;
const newListingDescription = newListingDescriptionField.value;

const newListingTags = newListingTagsField.value;
const newListingPics = newListingPicsField.value;

newListingForm.addEventListener("submit", (event) => {
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
  } else {
    newListingDateFieldError.classList.remove("hidden");
  }

  const deadLineIso = new Date(newListingDateField.value).toISOString();

  var tagifyTags = new Tagify(newListingTagsField);
  const tags = tagifyTags.value.map((tag) => tag.value);
  console.log("tags", tags);

  var tagifyPics = new Tagify(newListingPicsField);
  const pics = tagifyPics.value.map((pic) => pic.value);
  console.log("pics", pics);

  //var tagifyTags = new Tagify(newListingTagsField, {
  //  originalInputValueFormat: (newListingTags) =>
  //    newListingTags.map((item) => item.value).join(","),
  //});
  //
  //console.log("tagifyTags", tagifyTags);
  //console.table("tagifyTags.value", tagifyTags.value);
  //
  //console.log("newListingTags", newListingTags);
  //console.log("STRINGIFY tagifyTags.value", JSON.stringify(tagifyTags.value));
  //console.log("PARSE tagifyTags.value", JSON.parse(tagifyTags.value));
  //const parsedTags = JSON.parse(newListingTags);
  //const parsedPics = JSON.parse(newListingPics);
  console.log("newlistingpicsfield", newListingPicsField);
  console.log("pics", pics);
  console.log("tags", tags);
  console.log("newListingTitle", newListingTitle);
  console.log("newListingDescription", newListingDescription);

  const newListingValidated = isnewListingTitle && isnewListingDate;

  if (newListingValidated) {
    console.log("Validated newListing success");
    const newListingData = {
      title: newListingTitle,
      description: newListingDescription,
      tags: tags,
      media: pics,
      endsAt: deadLineIso,
    };
    //newListingDateField.value,
    const bearerKey = getToken();
    console.log("newListingData", newListingData);
    // const USER_LOGIN_ENDPOINT = `${LOGIN_URL}`;

    async function createListing() {
      try {
        const response = await fetch(CREATE_LISTING_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${bearerKey}`,
          },
          body: JSON.stringify(newListingData),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("SUCCESS POSTING NEW LISTING data fra respons:", data);
          console.log("response suksess", response);
          console.log("returned ID from response", response.id);

          const detailsPageURL = `detailspage.html?item_id=${data.id}?_seller=true&_bids=true`;
          location.replace(detailsPageURL);
        } else {
          // const errorfromserver = "Error while communicating with server:" + await response.json();
          const errorMessage = "something went wrong";
          console.log("respons failure", response);
          console.log("HERE IS BODY FROM UNSUCCESSFUL", response);

          throw new Error(errorMessage, response.json());
          // console.log('error from server when creating new post:', errorfromserver);
        }
      } catch (e) {
        console.log(e);
      }
    }
    createListing();
  } else {
    otherErrorField.innerHTML = `The following error occured: ${data.message} and ${e}`;
  }
});
