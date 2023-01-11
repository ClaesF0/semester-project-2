import { check, doc } from 'prettier';
const cardsContainer = document.getElementById('cardsContainer');

const options = { method: 'GET' };

import moment from "moment/moment";
//let now = moment(new Date()); //todays date

//pagination start
const pagination = document.getElementById('pagination');
const pageLinks = pagination.getElementsByTagName('a');

for (let i = 0; i < pageLinks.length; i++) {
  pageLinks[i].addEventListener('click', function(event) {
    event.preventDefault();
    const page = this.innerHTML;
    console.log(`Navigating to page ${page}`);
  });
}
//pagination end




let apiUrl = 'https://nf-api.onrender.com/api/v1/auction/listings?&_active=true&'; //default setting should be active stuff



//construct URL start

//start of selecting endpoint

const selectFilterElement = document.getElementById('selectFilterElement');

selectFilterElement.addEventListener('change', function (){
  const selectedEndpoint = this.value;
  if (selectedEndpoint === 'all' || undefined) {
    apiUrl = 'https://nf-api.onrender.com/api/v1/auction/listings?&_active=true&';
  } else {
    apiUrl = `https://nf-api.onrender.com/api/v1/auction/listings?&_active=true&${selectedEndpoint}`;
    apiUrl = apiUrl.replace(selectedEndpoint, selectedEndpoint)
    //apiUrl += selectedEndpoint
  }
  // TODO MAKE an API here with the variable apiUrl
  getAllListings(apiUrl);
});
//end of selecting endpoint

//results per page start
const resultsSelectorForm = document.getElementById('results-per-page-form');
const resultsSelector = document.getElementById('results-per-page');
const resultsPerPage = resultsSelector.value;


resultsSelector.addEventListener('change', async function () {
  const resultsPerPage = resultsSelector.value;
  const limit = `&limit=${resultsPerPage}`;
  console.log('limit',limit);
  apiUrl = apiUrl.replace(/\&limit=\d+/g, "")
  apiUrl += limit

  getAllListings(apiUrl);

})

//results per page end

//end of sort by active 
let activeState = "";
const checkbox = document.getElementById('activeOnly');

function updateURL() {
  
  if (checkbox.checked && !/\&_active=true/g.test(apiUrl)) {
    apiUrl += '&_active=true';

    getAllListings(apiUrl);
  } else {
    apiUrl = apiUrl.replace(/\&_active=true/g, "")
    getAllListings(apiUrl);
  }
}
checkbox.addEventListener('change', updateURL);
//end of sort by active 


async function getAllListings(apiUrl) {
  const response = await fetch(apiUrl, options);
  if (response.ok) {
    const items = await response.json();
    const itemsMapped = items.map((item) => {
      const bidCount = item._count.bids;
      const {description} = item;
      let deadline = item.endsAt;
      let deadlineMoment = "Ends in " + moment(deadline).fromNow();

      let currentDate = moment();
      if (currentDate.isAfter(deadline)) {
        deadlineMoment = "Listing has ended";
      }

      const itemID = item.id;
      const {title} = item;
      let mainPic = item.media[0];
      if (mainPic === undefined || null || '') {
        mainPic = 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';
      }
      return (`
                <div class=" border-2 border-gray-200 w-40 h-70 m-1 p-1 shadow-lg bg-white max-w-20 rounded  hover:bg-blue-100 sm:w-60">
                    <a href="detailspage.html?item_id=${itemID}?_seller=true&_bids=true" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <div class="">
                              <img class="mx-auto rounded-sm h-40 w-auto object-cover" src="${mainPic}" alt=""/>
                        </div>
                        <div>
                            <p class="text-gray-700 text-xs pt-1">Bids: ${bidCount}</p>
                            <p class="text-gray-700 text-xs pt-1">${deadlineMoment}</p> 
                            <p class="text-gray-900 text-medium font-medium mb-2">${title}</p>
                            <p class="text-gray-700 text-xs">${description}</p>
                        </div>
                    </a>
                </div>
            `);
    }).join('');
    cardsContainer.innerHTML = '';
    cardsContainer.insertAdjacentHTML('beforeend', itemsMapped);
  }
}

getAllListings(apiUrl); // when the page is loaded for the first time

//urls should consist of endpoint+active state+number of results
