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
  const items = response
    .json()
    .then((items) => {
      const itemsMapped = items.map((item) => {
        const allItemInfo = items.title;

        // console.table('item',item);
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
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="detailspage.html" data-mdb-ripple="true" data-mdb-ripple-color="light">
                
                <img class="rounded-t-lg max-w-full object-scale-down h-48 w-96 " src="${mainPic}" alt=""/>
            
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">${title}</h5>
              <p class="text-gray-700 text-base mb-4">${description}</p>
              </a>
              <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
          </div>        
                    `;
        cardsContainer.insertAdjacentHTML('beforeend', newPostData);
      });
    })
    .catch((err) => console.error(err));
}());

// getAllListings ()

/*
const ALL_POST_INFO_URL = "https://nf-api.onrender.com/api/v1/auction/listings";

(async function getAllPosts() {
    const response = await fetch( ALL_POST_INFO_URL )
          .then((response) => {

            //console.log('response',response);
            //return response.json();
          })
          .then((response) => {
            const allPostInfo = response;
            console.log('allPostInfo',allPostInfo);

            const itemTitle = allPostInfo.title;

            const cardsContainer = document.getElementById("cardsContainer")
            let newPostData = `dette er en test
                                <h1>${itemTitle}</h1>

                    `;
                    cardsContainer.insertAdjacentHTML("beforeend", newPostData);
          })
          .catch((err) =>
            console.error("the following error is returned from the api call to get post details:",err, " (NOTE: if the error is 'TypeError: can't access property name, allPostInfo.author is undefined' then just disregard it, clearly it is defined as you can tell from the feed):"
            )
          );
      })();

    //const err = await response.json();
    //alert(`Sorry the following error happened: ${err}`, err);
    //console.log(err);

*/
