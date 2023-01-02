import { doc } from 'prettier';

const options = { method: 'GET' };

import moment from "moment/moment";
let now = moment(new Date()); //todays date

(async function getAllListings() {

  
  /*
  const filters = document.getElementById('filters');
  console.log('filters select elemenet is here',filters);
  let filter = ''

  filters.addEventListener('change', function() {
    console.log('filter button pressed',);
    
    const selectedValue = this.value;
    if (selectedValue === 'all') {
      (filter = '')
    } else if (selectedValue === 'active') {
      (filter = '?_active=true')
    } else if (selectedValue === 'ascending') {
      (filter = '?sort=title&sortOrder=asc')
    } else if (selectedValue === 'descending') {
      (filter = '?sort=created&sortOrder=desc')
    } 
  });
*/
  
  const response = await fetch('https://nf-api.onrender.com/api/v1/auction/listings',options,);
  if (response.ok) {
    //console.log('RESPONS OK', response);
    const selectElement = document.getElementById('selectElement');

selectElement.addEventListener('change', function() {
  const selectedValue = this.value;
  let apiUrl;

  if (selectedValue === 'all') {
    apiUrl = 'https://nf-api.onrender.com/api/v1/auction/listings';
  } else if (selectedValue === 'active') {
    apiUrl = 'https://nf-api.onrender.com/api/v1/auction/listings?_active=true';
  } else if (selectedValue === 'ascending') {
    apiUrl = 'https://nf-api.onrender.com/api/v1/auction/listings?sort=title&sortOrder=asc';
  } else if (selectedValue === 'descending') {
    apiUrl = 'https://nf-api.onrender.com/api/v1/auction/listings?sort=title&sortOrder=desc';
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
        const deadline = item.endsAt;
        const deadlineMoment = moment(deadline).fromNow();
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
        <div class=" border-2 border-gray-200 w-40 max-h-70 m-1 p-1 shadow-lg bg-white max-w-20 rounded  hover:bg-blue-100">
        <a href="detailspage.html?item_id=${itemID}?_seller=true&_bids=true" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img class="rounded-lg h-35 object-contain" src="${mainPic}" alt=""/>
            <div class="">
            <p class="text-gray-700 text-xs pt-1">Bids: ${bidCount}</p>
            <p class="text-gray-700 text-xs pt-1">End: ${deadlineMoment}</p> 
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