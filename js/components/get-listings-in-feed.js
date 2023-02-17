import { check, doc } from "prettier";

import moment from "moment/moment";

const tagCTA = document.getElementById("tagCTA");
const tagElement = document.querySelector(".tag");

// Call the API endpoint to retrieve the listings
fetch("https://nf-api.onrender.com/api/v1/auction/listings")
  .then((response) => response.json())
  .then((data) => {
    // Extract all the tags from the listings
    const tags = data.reduce((acc, listing) => {
      return [...acc, ...listing.tags.filter((tag) => tag !== "")];
    }, []);

    tagElement.addEventListener("click", () => {
      // Get the tag text
      const tagText = tagElement.textContent;
      console.log("tagElement.textContent", tagElement.textContent);

      const tagContainer = document.getElementById("tagContainer");
      // Make TAG BASED API call
      fetch(
        `https://nf-api.onrender.com/api/v1/auction/listings?_tag=${tagText}`
      )
        .then((response) => response.json())
        .then((data) => {
          // Process the data
          console.log("data from tag", data);
        })
        .catch((error) => {
          console.error(error);
        });
    });
    //TAG BASED API CALL END
    // Set up an interval to change the tag element every 3 seconds
    let i = 0;
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * tags.length);
      tagElement.textContent = tags[randomIndex];
      const tagLink = document.createElement("a");
      tagLink.href = `/sandbox.html?&_seller=true&_bids=true&_tag=${tagElement.textContent}`;
      tagLink.textContent = `${tagElement.textContent}`;
      tagElement.innerHTML = "";
      tagElement.appendChild(tagLink);
    }, 4000);
  })
  .catch((error) => {
    console.error(error);
  });
//end of TAGS CTA

const cardsContainer = document.getElementById("cardsContainer");

const options = { method: "GET" };
// let now = moment(new Date()); //todays date

// pagination start
const pagination = document.getElementById("pagination");
const pageLinks = pagination.getElementsByTagName("a");

for (let i = 0; i < pageLinks.length; i++) {
  pageLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    const page = this.innerHTML;
  });
}
// pagination end
//
let apiUrl =
  "https://nf-api.onrender.com/api/v1/auction/listings?&_seller=true&_bids=true&_active=true&"; // default setting should be active stuff

// construct URL start

// start of selecting endpoint

const selectFilterElement = document.getElementById("selectFilterElement");

selectFilterElement.addEventListener("change", function () {
  const selectedEndpoint = this.value;
  if (selectedEndpoint === "all" || undefined) {
    apiUrl =
      "https://nf-api.onrender.com/api/v1/auction/listings?&_active=true&_seller=true&_bids=true&";
  } else {
    apiUrl = `https://nf-api.onrender.com/api/v1/auction/listings?&_seller=true&_bids=true&_active=true&${selectedEndpoint}`;
    apiUrl = apiUrl.replace(selectedEndpoint, selectedEndpoint);
    // apiUrl += selectedEndpoint
  }
  // TODO MAKE an API here with the variable apiUrl
  getAllListings(apiUrl);
});
// end of selecting endpoint

// results per page start
const resultsSelectorForm = document.getElementById("results-per-page-form");
const resultsSelector = document.getElementById("results-per-page");
const resultsPerPage = resultsSelector.value;

resultsSelector.addEventListener("change", async () => {
  const resultsPerPage = resultsSelector.value;
  const limit = `&limit=${resultsPerPage}`;
  apiUrl = apiUrl.replace(/\&limit=\d+/g, "");
  apiUrl += limit;

  getAllListings(apiUrl);
});

// results per page end

// end of sort by active
const activeState = "";
const checkbox = document.getElementById("activeOnly");

function updateURL() {
  if (checkbox.checked && !/\&_active=true/g.test(apiUrl)) {
    apiUrl += "&_active=true";

    getAllListings(apiUrl);
  } else {
    apiUrl = apiUrl.replace(/\&_active=true/g, "");
    getAllListings(apiUrl);
  }
}
checkbox.addEventListener("change", updateURL);
// end of sort by active

async function getAllListings(apiUrl) {
  const response = await fetch(apiUrl, options);
  if (response.ok) {
    const items = await response.json();
    const itemsMapped = items
      .map((item) => {
        const bidCount = item._count.bids;
        const bidsArray = item.bids;
        const highestBid = bidsArray.reduce(
          (prev, current) => (prev.amount > current.amount ? prev : current),
          0
        );
        let currentBid = highestBid.amount;

        if (currentBid == undefined) {
          currentBid = 0;
        }

        const { description } = item;
        const deadline = item.endsAt;
        let deadlineMoment = `Ends ${moment(deadline).fromNow()}`;

        const currentDate = moment();
        if (currentDate.isAfter(deadline)) {
          deadlineMoment = "Listing has ended";
        }

        const itemID = item.id;
        const { title } = item;
        let mainPic = item.media[0];
        if (mainPic === undefined || null || "") {
          mainPic =
            'https://cataas.com/cat/says/No image,random cute cat instead" alt="No image uploaded by user, so a cute cat was generated instead" style="display: flex; object-fit: scale-down;';
        }

        return `
                <div class="border-2 border-gray-300 w-4/5 mx-auto sm:w-60 sm:h-70 p-2 shadow-lg bg-white rounded-lg hover:bg-blue-200 sm:flex-grow">
                    <a href="detailspage.html?item_id=${itemID}?_seller=true&_bids=true" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <p class="text-gray-900 text-xl mb-2">${title}</p>
                        <div class="h-60">
                        
                              <img id="mainPic" class="mx-auto rounded-lg w-full h-full object-scale-down sm:object-cover" src="${mainPic}" alt="picture for the listing called ${title}" onerror="this.onerror=null;this.src='https://cataas.com/cat/says/No image,random cute cat instead';this.style='display: flex; object-fit: scale-down;'" />
                              
                        </div>
                        <div>
                            <p class="text-teal-700 text-md pt-1">Bids: ${bidCount} Current bid: ${currentBid}</p>
                            <p class="text-gray-700 text-md pt-1">${deadlineMoment}</p> 
                            
                        </div>
                    </a>
                </div>
            `;
      })
      .join("");
    cardsContainer.innerHTML = "";
    cardsContainer.insertAdjacentHTML("beforeend", itemsMapped);
  }
}

getAllListings(apiUrl); // when the page is loaded for the first time

// urls should consist of endpoint+active state+number of results
