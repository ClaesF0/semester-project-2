import {
    collectUserName, 
    getToken
} from '../local-storage-related';
import moment from "moment/moment";
let now = moment(new Date()); //todays date

async function createProfile() {
    const profileContainer = document.getElementById("profilecontainer")
    const userListingsContainer = document.getElementById("userListingsContainer")
    console.log('profcont',profileContainer);
    
    const token = getToken();
    const userName = collectUserName();
    //console.log(userName, "her er username og en gang til", userName)
    
    const paramString = window.location.search;
    const searchParam = new URLSearchParams(paramString);
    const user_name = searchParam.get("user_name");
    console.log('user_name',user_name);

    const auth = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    
    const response = await fetch("https://api.noroff.dev/api/v1/auction/profiles/"+`${userName}`, auth)
    if (response.ok) {
        console.log('halla respons ok',response);
    }
    const data = response.json() 
    .then((data) => {
        console.table(data)
        const count = data._count.listings
        const avatar = data.avatar
        const credits = data.credits
        const email = data.email
        const wins = data.wins.length
        console.log('count',count);
        console.log('avatar',avatar);
        console.log('credits',credits);
        console.log('email',email);
        console.log('wins',wins);
        const profilecontent = `<div class="md:hidden my-0 mx-auto w-full sm:w-4/5 grid grid-cols-2">
        <div class="text-center md:text-left">
          <img
            src="${avatar}"
            class="rounded-full w-auto h-auto mb-4 mx-auto  md:mx-0"
            alt="Avatar"
          />

          <form id="newPicForm">
<div class="flex justify-center">
  <div>
    <div class="dropdown relative">
      <button
        class="
          dropdown-toggle
          text-xs text-gray-500 bg-blue-300 px-1 rounded-full
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        New pic
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
      </button>
      <ul
        class="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
        aria-labelledby="dropdownMenuButton1"
      >
      <div>
      <label for="name" class="text-sm font-medium ">URL for new profile pic</label>
      <div class="relative mt-1">
      
        <input
          type=""
          id="newPicField"
          class="w-full p-4 pr-12 text-sm border-2 border-gray-400 rounded-lg shadow-sm"
          placeholder="Publicly accessible URL for profile pic (optional)"
        />
        <span class="absolute inset-y-0 inline-flex items-center right-4">
        </span>
        
      </div>
    </div>
    <span
              id="picErrorField"
              class="hidden text-sm ml-4 text-red-600"
      >
          CAPS LOCK IS ON </span>
      <button
        type="submit"
        class="block w-full px-5 py-3 text-sm font-medium text-black bg-teal-500 rounded-full"
      >
        Set as new pic
      </button>
      </ul>
    </div>
  </div>
</div>
</form>
        </div>
        <div class="p-1">
          <div>
            <h5 class="text-xl font-medium leading-tight mb-2">${userName}</h5>
            <p class="text-gray-500 text-sm">${email}</p>
            <p class="text-gray-500 text-sm">${wins} wins and ${data._count.listings} listings</p>
          </div>
          <span class="inline-flex text-center">
            <div class="flex p-1 my-1 bg-gray-100 w-48 h-12 rounded-sm">
              <img src="./img/wallet.svg" alt="" class="h-10" />
              <p class="p-2" id="currentBalance">${credits} Credits</p>
              
            </div>
            
          </span>
          
          <span class="inline-flex text-center">
            <button class="flex p-1 my-1 bg-orange-300 w-48 h-12 rounded-full">
              <img src="./img/gavel.svg" alt="" class="px-2 h-9" />
              <p class="p-2" id="currentBalance">New Listing</p>
            </button>
          </span>

        </div>

      </div>

      <div class="hidden md:block w-4/5 my-0 mx-auto grid">
        <div class="mx-auto">
          <img
            src="${avatar}"
            class="rounded-full w-32"
            alt="Avatar"
          />     
  <div class="pl-0">
  
  <form id="newPicForm">
<div class="flex justify-center">
  <div>
    <div class="dropdown relative">
      <button
        class="
          dropdown-toggle
          text-xs text-gray-500 bg-blue-300 px-1 rounded-full
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        New pic
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
      </button>
      
      <ul
        class="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
        aria-labelledby="dropdownMenuButton1"
      >
      
      <div>
      <label for="name" class="text-sm font-medium ">URL for new profile pic</label>
      <div class="relative mt-1">
      
        <input
          type=""
          id="newPicField"
          class="w-full p-4 pr-12 text-sm border-2 border-gray-400 rounded-lg shadow-sm"
          placeholder="Publicly accessible URL for profile pic (optional)"
        />
        <span class="absolute inset-y-0 inline-flex items-center right-4">
        </span>
        
      </div>
    </div>
    <span
              id="picErrorField"
              class="hidden text-sm ml-4 text-red-600"
      >
          CAPS LOCK IS ON </span>
      <button
        type="submit"
        class="block w-full px-5 py-3 text-sm font-medium text-black bg-teal-500 rounded-full"
      >
        Set as new pic
      </button>
      </ul>
    </div>
  </div>
</div>

</form>

        </div>
        <hr class="my-2" />
        <span class="flex">
          <div flex>
            <h5 class="w-48 text-xl font-medium leading-tight mb-2">${userName}</h5>
            <p class="text-gray-500">${email}</p>
          </div>
          <div class="flex p-1 mx-auto bg-gray-100 w-48 h-12 rounded-sm">
            <img src="./img/wallet.svg" alt="" class="h-10" />
            <p class="p-2" id="currentBalance">${credits} Credits</p>
          </div>
          <button class="flex p-1 bg-orange-300 w-48 h-12 rounded-full">
            <img src="./img/gavel.svg" alt="" class="px-2 h-9" />
            <p class="p-2" id="currentBalance">New Listing</p>
          </button>
        </span>
        <span class="inline-flex text-center"> </span>
      </div>
      
      <h3 class="text-lg text-center mx-auto">${userName} has ${wins} wins and ${data._count.listings} listings</h3>
      
      `
        profileContainer.insertAdjacentHTML('beforeend', profilecontent);

        const newPicField = document.querySelector("#newPicField");
        const picErrorField = document.querySelector("#picErrorField");
        const newPicForm = document.querySelector("#newPicForm");
        const bearerKey = getToken();
        newPicForm.addEventListener("submit", function (event) {
          event.preventDefault();
        
        const newPicData = {
          avatar: newPicField.value,
        };
    
        async function newProfilePic() {
          try {
            const response = await fetch(USER_LOGIN_ENDPOINT, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${bearerKey}`
              },
              body: JSON.stringify(newPicData),
            });
            
    
            if (response.ok) {
              const data = await response.json();
              console.log("data after newpic:", data);
              location.reload();
            } else {
              picErrorField.innerHTML = `The following error occured: ${data.message}`;            
            }
          } catch (e) {
            console.log(e);
          }
        }
        newProfilePic();
    })


        (async function getAllListingsByUser() {
          const response = await fetch(
            "https://api.noroff.dev/api/v1/auction/profiles/"+`${userName}`+"/listings"+"?_seller=true&_bids=true",
            auth,
          );
          if (response.ok) {

          const items = response.json()
            .then((items) => {
              const itemsMapped = items.map((item) => {
                
                
                const bidCount = item._count.bids;
                const bidsArray = item.bids;
                const highestBid = bidsArray.reduce((prev, current) => {return prev.amount > current.amount ? prev : current}, 0);
                let price = highestBid.amount;
                if (bidCount == 0 ) {
                  price = "No bids yet!";
                } else {
                  price = highestBid.amount;
                }

                const {created} = item;
                const { description } = item;
                const deadline = item.endsAt;
                const laget = item.created
                console.log('LAGET',laget);
                const createdMoment = moment(created).toString();

                console.log('createdMomentcreatedMomentcreatedMoment',createdMoment);
                
                const deadlineMoment = moment(deadline).fromNow();

                const itemID = item.id;
                const { title } = item;
                const { updated } = item;
                let mainPic = item.media[0];
                if (mainPic == undefined || null || '') {
                  mainPic = 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';
                }
                const { tags } = item;

                    const userListings = `
                    <hr class="my-2" />
                
                <div class="flex flex-grow sm:w-4/5 mx-auto">
                <a href="detailspage.html?item_id=${itemID}?_seller=true&_bids=true" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <div class="inline-flex md:flex-nowrap border-t-2 border-grey-500">
                      <hr />
                      <div>
                        <img
                          id="listingImg"
                          class="object-scale-down max-h-32"
                          src="${mainPic}"
                          alt=""
                          style="min-width: 8rem"
                        />
                      </div>
                      <span class="p-2 mx-1">
                        <h3 class="text-medium text-center mx-auto md:text-left px-1">${title}</h3>
                        <hr />
                        <p class="text-gray-700 text-base px-1">Bids: ${bidCount} price: ${price}</p>
                        <p class="text-gray-500 text-xs font-medium flex p-1">Created ${deadlineMoment}, on ${createdMoment}, </p>
                        <p class="text-gray-500 text-xs font-medium flex p-1">Description:</p>
                        <p class="text-gray-700 px-1 text-base">${description}</p>
                      </span>
                    </div>
                    </a>
                </div>
                    `
                    userListingsContainer.insertAdjacentHTML('beforeend', userListings)
              });
            })
            .catch((err) => console.error(err));
    }}());
    }
    )
    .catch(err => console.error(err));

}

createProfile()