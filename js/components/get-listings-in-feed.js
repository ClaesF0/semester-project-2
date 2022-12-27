import { doc } from 'prettier';

const options = { method: 'GET' };

(async function getAllListings() {
  const response = await fetch(
    'https://nf-api.onrender.com/api/v1/auction/listings',
    options,
  );
  if (response.ok) {
    console.log('RESPONS OK', response);
  }
  const items = response.json()
    .then((items) => {
      const itemsMapped = items.map((item) => {
        const allItemInfo = items.title;

        console.table('item',item);
        const bidCount = item._count.value;
        const { created } = item;
        const { description } = item;
        const deadline = item.endsAt;
        const itemID = item.id;
        const { title } = item;
        const { updated } = item;
        let mainPic = item.media[0];
        if (mainPic == undefined || null || '') {
          mainPic = 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';
        }
        const { tags } = item;
        /*

            media: Array [ "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-f3qxzs_4923c203.jpeg" ]
            tags: Array []

*/
        const cardsContainer = document.getElementById('cardsContainer');
        const newPostData = `
        <div class=" border-2 border-gray-200 w-40 max-h-70 m-1 p-1 shadow-lg bg-white max-w-20 rounded  hover:bg-blue-100">
        <a href="detailspage.html?item_id=${itemID}?_seller=true&_bids=true" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img class="rounded-lg h-35 object-contain" src="${mainPic}" alt=""/>
            <div class="">
            BIDCOUNT
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