
function createBidModal() {
    console.log("Bidmodal linked");
    const modalBidding = document.getElementById('modalBidding');
    const balance = "some number 123"
    modalBidding.innerHTML = 
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
        <p class="text-xs text-gray-500">Available balance: ${balance}</p>
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
          placeholder="Number input"
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
  }

  console.log("Bidmodal after");
  
  
  createBidModal();
  
