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
          <button
            id="newPic"
            class="text-xs text-gray-500 bg-blue-300 px-1 rounded-full"
          >
            New pic
          </button>
        </div>
        <div class="">
          <div>
            <h5 class="text-xl font-medium leading-tight mb-2">${userName}</h5>
            <p class="text-gray-500">${email}</p>
          </div>
          <span class="inline-flex text-center">
            <div class="flex p-1 my-1 bg-gray-100 w-48 h-12 rounded-sm">
              <img src="./img/wallet.svg" alt="" class="h-10" />
              <p class="p-2" id="currentBalance">${credits}</p>
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
          <button
            id="newPic"
            class="mx-9 p-1 text-xs text-gray-500 bg-blue-200 rounded-full"
          >
            New pic
          </button>
        </div>
        <hr class="my-2" />
        <span class="flex">
          <div flex>
            <h5 class="w-48 text-xl font-medium leading-tight mb-2">${userName}</h5>
            <p class="text-gray-500">${email}</p>
          </div>
          <div class="flex p-1 mx-auto bg-gray-100 w-48 h-12 rounded-sm">
            <img src="./img/wallet.svg" alt="" class="h-10" />
            <p class="p-2" id="currentBalance">${credits}</p>
          </div>
          <button class="flex p-1 bg-orange-300 w-48 h-12 rounded-full">
            <img src="./img/gavel.svg" alt="" class="px-2 h-9" />
            <p class="p-2" id="currentBalance">New Listing</p>
          </button>
        </span>
        <span class="inline-flex text-center"> </span>
      </div>
      <h3 class="text-lg text-center mx-auto">${data._count.listings} Listings</h3>
        `
        profileContainer.insertAdjacentHTML('beforeend', profilecontent);

        (async function getAllListingsByUser() {
          const response = await fetch(
            "https://api.noroff.dev/api/v1/auction/profiles/"+`${userName}`+"/listings",
            auth,
          );
          if (response.ok) {
           // console.log('RESPONS OK', response);
          }
          const items = response.json()
            .then((items) => {
              const itemsMapped = items.map((item) => {
                console.log('item',item);
                
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

                    const userListings = `
                    <hr class="my-2" />
                
                <div class="flex flex-grow sm:w-4/5 mx-auto">
                    <div class="inline-flex md:flex-nowrap p-2 border-t-2 border-grey-500">
                      <hr />
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69l12PewMsuh12EEsFLwjP8TIXTlVTJjzlA&usqp=CAU"
                          alt=""
                          style="min-width: 8rem"
                        />
                      </div>
                      <span class="p-2 mx-1">
                        <h3 class="text-lg text-center mx-auto md:text-left">${title}</h3>
                        <hr />
                        <p class="text-lg text-gray-700 px-1">Bud: 32 pris:654</p>
                        <p class="text-lg text-gray-700 px-1">Tid: 654654</p>
                        <p class="px-1">
                          Lorem descripshun blblbl blblbl kgkgk l lø kgkg oom okok o ko ko
                          kokkk kok ok k ij yuh uuh uhuhu hhh uhuh hhhuuu huhu hvordan
                          brytes teksten på denne linja egentlig
                        </p>
                      </span>
                    </div>
                </div>
                    `
                    userListingsContainer.insertAdjacentHTML('beforeend', userListings)
              });
            })
            .catch((err) => console.error(err));
        }());



    }
    
    )
    
    //.then(response => console.log("response",response))
 
    .catch(err => console.error(err));
}

createProfile()

       