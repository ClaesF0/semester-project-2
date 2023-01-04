import { doc } from 'prettier';

const options = { method: 'GET' };

import moment from "moment/moment";
//let now = moment(new Date()); //todays date

(async function getAllListings() {
  
  const response = await fetch('https://nf-api.onrender.com/api/v1/auction/listings',options,);
  if (response.ok) {
    const selectElement = document.getElementById('selectElement');

selectElement.addEventListener('change', function() {
  const selectedValue = this.value;
  let apiUrl;

  if (selectedValue === 'all') {
    apiUrl = 'https://nf-api.onrender.com/api/v1/auction/listings';
    console.log('apiUrl',apiUrl);
  } else if (selectedValue === 'active') {
    apiUrl = 'https://nf-api.onrender.com/api/v1/auction/listings?_active=true';
    console.log('apiUrl',apiUrl);
  } else if (selectedValue === 'ascendingTitle') {
    apiUrl = 'https://nf-api.onrender.com/api/v1/auction/listings?sort=title&sortOrder=asc';
    console.log('apiUrl',apiUrl);
  } else if (selectedValue === 'descendingTitle') {
    apiUrl = 'https://nf-api.onrender.com/api/v1/auction/listings?sort=title&sortOrder=desc';
    console.log('apiUrl',apiUrl);
  } else if (selectedValue === 'ascendingCreated') {
    apiUrl = 'https://nf-api.onrender.com/api/v1/auction/listings?sort=created&sortOrder=asc';
    console.log('apiUrl',apiUrl);
  } else if (selectedValue === 'descendingCreated') {
    apiUrl = 'https://nf-api.onrender.com/api/v1/auction/listings?sort=created&sortOrder=desc';
    console.log('apiUrl',apiUrl);
  }

  const options = { method: 'GET' };
  const response = fetch(apiUrl, options);
console.log('response',response);

  // process the response here
  
});
  }
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
          console.log("not ended");
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
      });
    })
    .catch((err) => console.error(err));
}());