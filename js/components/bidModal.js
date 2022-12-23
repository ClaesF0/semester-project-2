import {getToken} from "../local-storage-related"
import {collectUserName} from "../local-storage-related"
import {GET_PROFILEINFO_URL} from "../api-related"
import {CREATE_LISTING_URL} from "../api-related"

let params = (new URL(window.location)).searchParams;
let item_id = params.get('item_id');
let seller = params.get('seller');

const paramString = window.location.search;
const searchParam = new URLSearchParams(paramString);
const postId = searchParam.get("post_id");

(async function createBidModal() {
const bearerKey = getToken();
const userKey = collectUserName();

  const options = {
    method: 'GET',
    headers: {
      Authorization: "Bearer "+ `${bearerKey}`
    }
  };
  const profileResponse = await fetch(GET_PROFILEINFO_URL, options);
  
fetch(CREATE_LISTING_URL+'/'+`${item_id}`+'?_seller=true&_bids=true', options)
  .then(postResponse => postResponse.json())
  .then(postResponse => {
const bidsArray = postResponse.bids;
const highestBid = bidsArray.reduce(
  (prev, current) => {
    return prev.amount > current.amount ? prev : current
  }
);

const currentBid = highestBid.amount;

  if (profileResponse.ok){
    }
    const profileDetails = profileResponse.json()
    .then((profileDetails) => {

    const modalBiddingContainer = document.getElementById('modalBidding');
    const balance = profileDetails.credits
    const bidModalRendered = 
    `
    <!-- Modal -->
<form class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
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
          value="${(currentBid + 1)} credits"
          min="${(currentBid + 1)}"
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
          id="bidInputField"
          placeholder="Current bid at ${currentBid} credits"
        />
        <p id="noUnderbid" class="text-red-600 hidden">Your bid must be higher than the current bid</p>
        <p id="noFunds" class="text-red-600 hidden">Bid cannot exceed your balance</p>
        <p id="bidError" class="text-red-600"></p>
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
        <button type="submit" id="bidBtn" class="px-6 py-2.5
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
</form>
    `;
    modalBiddingContainer.insertAdjacentHTML('beforeend', bidModalRendered);
    
    //user can bid
    if (biddingModal) {
      const bidBtn = document.getElementById("bidBtn");

      biddingModal.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const noUnderbid = document.getElementById("noUnderbid");
        const noFunds = document.getElementById("noFunds");
        const bidError = document.getElementById("bidError");

        let isNotUnderbid = false;
        if (bidInputField.value > highestBid) 
        {
          noUnderbid.classList.add("hidden");
          isNotUnderbid = true;
        } else {
          noUnderbid.classList.remove("hidden");
          bidError.innerHTML =
            "Your bid must be at least " +
            ((highestBid +1 - bidInputField.value)) +
            " credits more.";
        }

        let isNotInsufficientFunds = false;
        if (bidInputField.value < balance) 
        {
          noFunds.classList.add("hidden");
          isNotInsufficientFunds = true;
        } else {
          noFunds.classList.remove("hidden");
          bidError.innerHTML =
            "Your bid is " +
            ((bidInputField.value - balance)) +
            " credits more than your balance :/ ";
        }
    
        let bidValidated = isNotUnderbid && isNotInsufficientFunds;
        
        const bid = parseInt(bidInputField.value)
        if (bidValidated) {
          console.log("bid validation success");
          const newBidData = {
            "amount": bid,
          };
          
          const PLACE_BID_URL = CREATE_LISTING_URL + `/${item_id}/bids`;
    
          async function placeBid() {
            try {
              const response = await fetch(PLACE_BID_URL, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${bearerKey}`
                },
                body: JSON.stringify(newBidData),
              });
              
              if (response.ok) {
                const data = await response.json();
                console.log('response.json()',response.json());
                console.log(" bid placed successfully, here is data:", data);
                alert("Bid placed successfully! :)")
              } else {
                bidError.innerHTML = `The following error occured: ${data.message}`;
              }
            } catch (e) {
              console.log(e);
            }
          }
          placeBid();
        } else {
          bidError.innerHTML = `The following error occured: ${data.message} and ${e}`;
        }
      });
    }
  }
  ).catch(err => console.error("during bidding the following error occured:",err));
})}())
