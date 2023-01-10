import { check, doc } from 'prettier';

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








let apiUrl = 'https://nf-api.onrender.com/api/v1/auction/listings';
//urls should consist of endpoint+active state+number of results


//construct URL start 

//start of selecting endpoint
const selectFilterElement = document.getElementById('selectFilterElement');
let selectedEndpoint; 
selectFilterElement.addEventListener('change', async function() {
  const selectedEndpoint = this.value;
  if (selectedEndpoint === 'all') {
    apiUrl = 'https://nf-api.onrender.com/api/v1/auction/listings';
    await getAllListings(apiUrl)
    console.log('apiUrl',apiUrl);
  } else { 
    apiUrl = 'https://nf-api.onrender.com/api/v1/auction/listings'+`${selectedEndpoint}`;
    console.log('apiUrl endpoint inside function',apiUrl);
    console.log('selectedEndpoint inside function',selectedEndpoint);
    return selectedEndpoint
  }
});
console.log('selectedEndpoint after function',selectedEndpoint);
//end of selecting endpoint  

//results per page start
const resultsSelectorForm = document.getElementById('results-per-page-form');
const resultsSelector = document.getElementById('results-per-page');
const resultsPerPage = resultsSelector.value;
const limit = `?limit=${resultsPerPage}`;
console.log('limit',limit);

resultsSelector.addEventListener('change', async function () {
  console.log('resultsPerPage',resultsPerPage);
  
})

//results per page end
let activeState = "";
const checkbox = document.getElementById('activeOnly');
function updateURL() {
  if (checkbox.checked) {
    activeState += '?_active=true';
  } else {
    activeState = activeState.replace("?_active=true", "");
  }
  console.log("activeState inside checkbox",activeState);
}
checkbox.addEventListener('change', updateURL);

console.log('apiUrl AFTER CHECKBOX',apiUrl);

  //make a loop to construct it as it happens 


let baseUrl = selectedEndpoint;
let variables = [selectedEndpoint, activeState, limit];

for (let i = 0; i < variables.length; i++) {
baseUrl += selectedEndpoint, activeState, limit///*'?' +*/ variables[i] /*+ '='*/ //+ values[i];
console.log('baseUrl inside loop', baseUrl);

}

console.log("baseUrl",baseUrl); 

//end of loop 





async function getAllListings(URL) {
  
  const response = await fetch(URL,options,);
  if (response.ok) {}
  const items = response.json()
    .then((items) => {
      const itemsMapped = items.map((item) => {
        const allItemInfo = items.title;

        //console.table('item',item);
        const bidCount = item._count.bids;
        const { created } = item;
        const { description } = item;
        let deadline = item.endsAt;
        let deadlineMoment = "Ends in " + moment(deadline).fromNow();
        //console.log('now',now);
        
        let currentDate = moment();
        if (currentDate.isAfter(deadline)) {
          deadlineMoment = "Listing has ended"
        } else {
          //console.log("not ended");
        }
        
        const itemID = item.id;
        const { title } = item;
        const { updated } = item;
        let mainPic = item.media[0];
        if (mainPic == undefined || null || '') {
          mainPic = 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';
        }
        const { tags } = item;
        //console.log('item._count',item._count.bids);
        
        const cardsParent = document.getElementById('cardsParent');
        //cardsParent.innerHTML = "";

        const cardsContainer = document.getElementById('cardsContainer');
        //const cardsContainer = document.createElement('div');
        //cardsContainer.className = "inline-flex flex-wrap justify-evenly"
        //cardsParent.append(cardsContainer)


        //cardsContainer.innerHTML = "";
        
        const newPostData = `
        <div class=" border-2 border-gray-200 w-40 h-70 m-1 p-1 shadow-lg bg-white max-w-20 rounded  hover:bg-blue-100 sm:w-60">
        <a href="detailspage.html?item_id=${itemID}?_seller=true&_bids=true" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <div class="">
        <img class="mx-auto rounded-sm h-40 w-auto object-cover" src="${mainPic}" alt=""/>
        </div>
            <div class="">
            THIS IS INNERHTML IN CALL NUMBER ONE 
            ONE
            ONE
            <p class="text-gray-700 text-xs pt-1">Bids: ${bidCount}</p>
            <p class="text-gray-700 text-xs pt-1">${deadlineMoment}</p> 
              <p class="text-gray-900 text-medium font-medium mb-2">${title}</p>
              <p class="text-gray-700 text-xs">${description}</p>
            </a>
            </div>
          </div>        
                    `;
                    
        cardsContainer.insertAdjacentHTML('beforeend', newPostData);
      });
    })
    .catch((err) => console.error(err));
};

getAllListings(apiUrl)






  //const options = { method: 'GET' };
  const responseTWO = await fetch(apiUrl, options);
  console.log('apiUrl ETTER FETCH 2',apiUrl);
  //console.log('dette er responseTWO RETT ETTER FETCH',responseTWO);
  
if (responseTWO.ok) {
  //console.log("second response RECEIVED")
  cardsContainer.innerHTML = "";
}

const items = responseTWO.json()
  .then((items) => {
    const itemsMapped = items.map((item) => {
      const allItemInfo = items.title;

      //console.table('item',item);
      const bidCount = item._count.bids;
      const { created } = item;
      const { description } = item;
      let deadline = item.endsAt;
      let deadlineMoment = "Ends in " + moment(deadline).fromNow();
      //console.log('now',now);
      
      let currentDate = moment();
      if (currentDate.isAfter(deadline)) {
        deadlineMoment = "Listing has ended"
      } else {
        //console.log("not ended");
      }
      
      const itemID = item.id;
      const { title } = item;
      const { updated } = item;
      let mainPic = item.media[0];
      if (mainPic == undefined || null || '') {
        mainPic = 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';
      }
      const { tags } = item;
      //console.log('item._count',item._count.bids);
      
      const cardsParent = document.getElementById('cardsParent');
      //cardsParent.innerHTML = "";

      const cardsContainer = document.getElementById('cardsContainer');
  
      const newPostData = `
      <div class=" border-2 border-gray-200 w-40 h-70 m-1 p-1 shadow-lg bg-white max-w-20 rounded  hover:bg-blue-100 sm:w-60">
      <a href="detailspage.html?item_id=${itemID}?_seller=true&_bids=true" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <div class="">
      <img class="mx-auto rounded-sm h-40 w-auto object-cover" src="${mainPic}" alt=""/>
      </div>
          <div class="">
          <p class="text-gray-700 text-xs pt-1">Bids: ${bidCount}</p>
          <p class="text-gray-700 text-xs pt-1">${deadlineMoment}</p> 
            <p class="text-gray-900 text-medium font-medium mb-2">${title}</p>
            <p class="text-gray-700 text-xs">${description}</p>
          </a>
          </div>
        </div>        
                  `;
                  
      cardsContainer.insertAdjacentHTML('beforeend', newPostData);
      //cardsParent.insertAdjacentHTML('beforebegin', newPostData);
    });
  })
  .catch((err) => console.error(err));
  // process the response here
  




