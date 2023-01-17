import moment from 'moment/moment';
import { collectUserName } from '../local-storage-related';

const now = moment(new Date()); // todays date

function createDetailsPage() {
  const userName = collectUserName();

  const paramString = window.location.search;
  const searchParam = new URLSearchParams(paramString);
  const itemID = searchParam.get('item_id');

  const options = { method: 'GET' };
  const sellerbidsdetailsURL = 'https://nf-api.onrender.com/api/v1/auction/listings/'
    + `${itemID}`
    + '&_bids=true';

  fetch(sellerbidsdetailsURL, options).then((response) => response
    .json()
    .then((response) => {
      const bidCount = response._count.bids;

      const bidsArray = response.bids;

      const bidderNames = bidsArray.map((object) => object.bidderName);
      const bidID = bidsArray.map((object) => object.id);
      const bidAmount = bidsArray.map((object) => object.amount);
      const bidCreated = bidsArray.map((object) => object.created);
      document.title = `Auction details for ${response.title}`;
      let bidHistoryList = '';

      function getOrdinal(num) {
        if (num > 10 && num < 14) {
          return `${num}th`;
        }
        switch (num % 10) {
          case 1:
            return `${num}st`;
          case 2:
            return `${num}nd`;
          case 3:
            return `${num}rd`;
          default:
            return `${num}th`;
        }
      }

      for (let i = 0; i < bidsArray.length; i++) {
        bidHistoryList += `
      <li class="text-gray-400 text-xs font-small mb-1">
      ${getOrdinal(i + 1)} 
      bid was ${bidsArray[i].amount} credits, 
      placed ${moment(bidsArray[i].created).format('MMM Do, k:kk:ss')} 
      by <a class="text-blue-400" href="userprofile.html?user_name=${
  bidsArray[i].bidderName
}">${bidsArray[i].bidderName} 
      </a></li>`;
      }
      let price = '';
      const highestBid = bidsArray.reduce((prev, current) => (prev.amount > current.amount ? prev : current), 0);
      price = highestBid.amount;
      if (bidCount == 0) {
        price = 'No bids yet!';
      } else {
        price = highestBid.amount;
      }

      const { description } = response;
      const itemID = response.id;
      const { title } = response;
      // time
      const { created } = response;
      const deadline = response.endsAt;
      const { updated } = response;
      const deadLineMoment = `${moment(deadline).fromNow()} from now.`;
      const updatedTimestamp = moment(updated).fromNow();
      const createdTimestamp = moment(created).fromNow();
      // img
      const imgArrayLength = response.media.length;
      const imgArray = response.media;
      let firstPic = response.media[0];
      let secondPic = response.media[1];
      let thirdPic = response.media[2];

      if (firstPic == undefined || null || '') {
        firstPic = 'https://www.escapeauthority.com/wp-content/uploads/2116/11/No-image-found.jpg';
      }
      if (secondPic == undefined || null || '') {
        secondPic = 'https://www.escapeauthority.com/wp-content/uploads/2116/11/No-image-found.jpg';
      }
      if (thirdPic == undefined || null || '') {
        thirdPic = 'https://www.escapeauthority.com/wp-content/uploads/2116/11/No-image-found.jpg';
      }

      const sellerName = response.seller.name;
      const sellerEmail = response.seller.email;
      const sellerAvatarURL = response.seller.avatar;

      let loggedInSection = `
    <button
    type="button"
    class="nav-link px-1 py-1 my-0 mx-auto border-2 border-white bg-green-500 text-white font-medium text-xs leading-tight rounded shadow-md hover:text-black hover:bg-green-400 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    data-bs-toggle="modal"
    data-bs-target="#loginModal">
    Log in or sign up to see more details :) 
    </button>
    `;
      if (userName) {
        loggedInSection = `
    <!-- START OF SECTION FOR LOGGED IN USERS-->
<div id="loggedInSection">
<button type="button" class="px-6
      py-2.5
      bg-teal-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-teal-700 hover:shadow-lg
      focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-teal-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" data-bs-toggle="modal" data-bs-target="#biddingModal">
  Bid
</button>
<hr>
<button id="extraInfoBTN" class="block mt-4 px-2 py-1 bg-gray-400 text-white font-small text-xs rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
Extra info
</button>

<a class="block mt-4 px-2 py-1 bg-gray-400 text-white font-small text-xs rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" 
href="userprofile.html?user_name=${sellerName}" data-mdb-ripple="true" data-mdb-ripple-color="light">
All listings by seller → 
</a>
</p>
<div class="collapse" id="collapseExample">
<div class="block p-6 rounded-lg shadow-lg bg-white">
  <p  class="text-gray-400 text-xs font-medium mb-1 flex">Seller:
  <hr>
  <span class="text-gray-500 text-xs font-medium mb-1 flex">
  <img src="${sellerAvatarURL}" alt=""
  class="rounded-full"
    style="height: 40px; width: 40px"
    alt=""
    loading="lazy">
  <a class="p-2 text-blue-400" href="userprofile.html?user_name=${sellerName}">
  ${sellerName}
  </a> 
  </span>
    
  <a class=" text-gray-500 text-xs font-medium" href="mailto:${sellerEmail}">Get in touch: ${sellerEmail}</a>
  </p>
  <hr>
  <p  class="text-gray-400 text-xs font-medium mb-1 flex">Item:
  <p  class="text-gray-400 text-xs font-small mb-1">Unique id: ${itemID}</p>
  <hr>
  <p  class="text-gray-400 text-xs font-small mb-1">Created: ${created}, ${createdTimestamp}</p>
  <hr>
  <p  class="text-gray-400 text-xs font-small mb-1">Updated: ${updated}, ${updatedTimestamp}</p>
        </p>
        <hr>
        
        <p class="text-gray-400 text-xs font-medium mb-1 flex">BIDDING HISTORY</p>
        <ul id="bidHistory">
         ${bidHistoryList}
        </ul>
      </div>
    </div>
  </div>
    <!--END OF SECTION FOR LOGGED IN USERS-->
    `;
      }

      const detailsContainer = document.getElementById('detailsContainer');
      const newPostData = `
    <div class="grid my-0 mx-auto w-full md:w-3/5 sm:w-4/5 lg:w-full ">
    <div class="overflow-hidden lg:inline-flex">
      <div
        id="carouselDarkVariant"
        class="carousel slide carousel-fade carousel-dark relative"
        data-bs-ride="carousel"
      >
        <!-- Indicators -->
        <div
          class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
        >
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div>

        <!-- Inner -->
        <div
          class="carousel-inner relative sm:w-4/5 flex my-0 mx-auto"
        >
          <!-- Single item -->
          <div
            class="carousel-item object-contain active relative float-left w-full inline-flex"
          >
            <img
              src="${firstPic}"
              class="block mx-auto "
              alt=""
            />
            <!--
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-xl">First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
          --></div>

          <!-- Single item -->
          <div
            class="carousel-item relative float-left w-full inline-flex"
          >
            <img
              src="${secondPic}"
              class="block mx-auto "
              alt=""
            />
            <!--
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-xl">Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
          --></div>

          <!-- Single item -->
          <div
            class="carousel-item overflow-hidden relative float-left w-full inline-flex"
          >
            <img
              src="${thirdPic}"
              class="block mx-auto"
              alt=""
            />
            <!--
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-xl">Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
              -->
          </div>
        </div>
        <!-- Inner -->

        <!-- Controls -->
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat bg-gray-400 rounded-full border-2 border-white"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat bg-gray-400 rounded-full border-2 border-white"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!--
      <div id="loginPrompt" class=" relative inline-block shrink-0 lg:hidden">
      
        <div
          class="m-1 p-1 top-0 rounded-lg shadow-lg flex hover:shadow-blue-300 bg-gray-200 max-w-sm"
        >
          <p class="text-gray-700 p-1 text-xs">Log in to bid</p>
          <button
            type="button"
            id="loginBTN"
            class="inline-block mx-3 px-2 py-1 bg-white text-blue-600 font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            Login
          </button>
          -->
        </div>
      </div>
      <br />
      <div class="relative inline-block min-w-[30%] md:block">
      
        <div
          class="m-1 p-3 rounded-lg shadow-lg hover:shadow-blue-300 bg-white "
        >
          <h4
            class="text-gray-900 text-xl leading-tight font-medium mb-2 inline-block"
          >
            ${title}
          </h4>
          <br />
          <p  class="text-gray-400 text-xs font-small mb-1">Ends ${deadLineMoment}</p>          
          <span class="inline-flex">
            <h5 class="text-green-800 text-md leading-tight font-medium mb-2">
            Current bid: ${price}
            </h5>
            <h6
              class="text-green-800 text-md leading-tight font-medium mb-2 px-2"
            >
              Bids: ${bidCount}
            </h6>
          </span>
          <hr>
          <p  class="text-gray-400 text-xs font-small mb-1">Sellers description:</p>  
          <p class="text-gray-700 text-base mb-4">
            ${description} 
          </p>

${loggedInSection}

        </div>
      </div>
    </div>
  </div>       
                `;

      detailsContainer.insertAdjacentHTML('beforeend', newPostData);
    })
    .catch((err) => console.error(err)));
}

createDetailsPage();
