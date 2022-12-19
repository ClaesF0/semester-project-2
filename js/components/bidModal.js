import {getToken} from "../local-storage-related"
import {collectUserName} from "../local-storage-related"
import {GET_PROFILEINFO_URL} from "../api-related"

let params = (new URL(document.location)).searchParams;
let item_id = params.get('item_id');





async function createBidModal() {
const bearerKey = getToken();
const userKey = collectUserName();
console.log('userKey from bidModal',userKey);
console.log('bearerKey from bidmodal', bearerKey);

  const options = {
    method: 'GET',
    headers: {
      Authorization: "Bearer "+ `${bearerKey}`
    }
  };
  const profileResponse = await fetch(GET_PROFILEINFO_URL, options);
  

fetch('https://api.noroff.dev/api/v1/auction/listings/'+`${item_id}`+'&_bids=true', options)
  .then(postResponse => postResponse.json())
  .then(postResponse => {console.log("postResponse",postResponse)
//console.log('bids',postResponse.bids.pop().amount);
const currentBid = postResponse.bids.pop().amount;

  
/*
  id: "1f157fb6-362b-489d-8c28-f6b332dab2fb", 
  title: "zzzz", description: "", 
  media: (1) […], tags: (1) […], 
  created: "2022-12-16T20:35:05.858Z", 
  updated: "2022-12-16T20:35:05.858Z", 
  endsAt: "2022-12-16T00:38:00.000Z",

  bids: [], 
  seller: {…}, … }
  ​
  _count: Object { bids: 0 }
  ​
  bids: Array []
  ​
  created: "2022-12-16T20:35:05.858Z"
  ​
  description: ""
  ​
  endsAt: "2022-12-16T00:38:00.000Z"
  ​
  id: "1f157fb6-362b-489d-8c28-f6b332dab2fb"
  ​
  media: Array [ "https://placeimg.com/250/180/arch" ]
  ​
  seller: Object { name: "gabriel", email: "gabriel@stud.noroff.no", avatar: null, … }
  ​
  tags: Array [ "" ]
  ​
  title: "zzzz"
  ​
  updated: "2022-12-16T20:35:05.858Z"
*/
  
  if (profileResponse.ok){
    console.log('this is profileResponse from bidModal.js',profileResponse);
    }
    const profileDetails = profileResponse.json()
    .then((profileDetails) => {

      console.log('profileDetails',profileDetails);
      
    


    console.log("Bidmodal linked");
    const modalBiddingContainer = document.getElementById('modalBidding');
    const balance = profileDetails.credits
    const bidModalRendered = 
    `
    <!-- Modal -->
<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="biddingModal" tabindex="-1" aria-labelledby="biddingModalLabel" aria-hidden="true">
  <div class="modal-dialog relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal mx-auto text-gray-800" id="exampleModalLabel">Bidding</h5>
      </div>
      <div class="modal-body relative p-4">
    <div class="flex justify-center">
      <div class="mb-3 xl:w-96">
        <label for="exampleNumber0" class="form-label inline-block mb-2 text-gray-700"
          >How much do you wish to bid?</label
        >
        <p class="text-xs text-gray-500">Available balance: ${balance} credits</p>
        <input
          type="number"
          class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
          id="exampleNumber0"
          placeholder="Your bid must exceed ${currentBid} credits"
        />
        <p id="noUnderbid" class="text-red-600">Bid cannot be lower than previous bid</p>
        <p id="noFunds" class="text-red-600">Bid cannot exceed your balance</p>
      </div>
    </div>
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-evenly p-4 border-t border-gray-200 rounded-b-md">
        <button type="button" class="px-6
          py-2.5
          bg-red-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-red-700 hover:shadow-lg
          focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-red-800 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal">Close</button>
        <button type="button" class="px-6
      py-2.5
      bg-green-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-green-700 hover:shadow-lg
      focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-green-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1">Place bid</button>
      </div>
    </div>
  </div>
</div>
    `;
    modalBiddingContainer.insertAdjacentHTML('beforeend', bidModalRendered)
  }
  

  ).catch(err => console.error("during bidding the following error occured:",err));
})}


  createBidModal();
  
