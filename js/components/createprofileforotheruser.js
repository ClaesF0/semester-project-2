import moment from 'moment/moment';
import { collectUserName, getToken } from '../local-storage-related';

const now = moment(new Date()); // todays date

async function createProfileForOtherUser() {
  const profileContainer = document.getElementById('profilecontainer');
  const userListingsContainer = document.getElementById(
    'userListingsContainer',
  );

  const token = getToken();

  const paramString = window.location.search;
  const searchParam = new URLSearchParams(paramString);
  const userName = searchParam.get('user_name');

  const auth = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(
    'https://api.noroff.dev/api/v1/auction/profiles/' + `${userName}`,
    auth,
  );
  if (response.ok) {
  }
  const data = response
    .json()
    .then((data) => {
      const count = data._count.listings;
      let avatar = data.avatar;
      console.log('data.avatar',data.avatar);
      

      if (avatar == undefined || null || '' || !avatar.length) {
        avatar = 'https://cataas.com/cat/says/no picture, have this cute cat instead';
      }
      console.log('avatar', avatar);

      const { credits } = data;
      const { email } = data;
      const wins = data.wins.length;
      const profilecontent = `
      
      <div class="grid my-0 mx-auto w-full sm:w-4/5 grid-cols-2 ">
        <div class="text-center md:text-left">
        <div class="rounded-full w-60 h-60 mx-auto  md:mx-0">
          <img
            src="${avatar}"
            class="rounded-full w-60 h-60 mb-4 mx-auto object-cover md:mx-0"
            alt="Avatar"
          />
        </div>
        </div>
        <div class="p-1">
          <div>
            
            <div>
            <h5 class="w-48 text-xl font-medium leading-tight mb-2">${userName}</h5>
            <p class="text-blue-500 text-sm"><a href="mailto:${email}">${email}</a></p>
          </div>
            <p class="text-gray-500 text-sm">${wins} wins and ${data._count.listings} listings</p>
          
            </div>

          <span class="gap-1 md:inline-flex text-center">
            <div class="flex p-1 bg-gray-100 w-30 h-12 rounded-sm w-fit">
              <img src="./img/wallet.svg" alt="" class="h-10" />
              <p class="py-2" id="currentBalance">${credits} Credits</p>
              
            </div>
          </span>

        </div>

      </div>


      <h3 class="text-lg text-center mx-auto">${userName}'s ${data._count.listings} listings:</h3>
      
      `;
      profileContainer.insertAdjacentHTML('beforeend', profilecontent);

      const newPicField = document.querySelector('#newPicField');
      const picErrorField = document.querySelector('#picErrorField');
      const newPicForm = document.querySelector('#newPicForm');
      const bearerKey = getToken();
      (async function getAllListingsByUser() {
        const response = await fetch(
          'https://api.noroff.dev/api/v1/auction/profiles/'
            + `${userName}`
            + '/listings'
            + '?_seller=true&_bids=true',
          auth,
        );
        if (response.ok) {
          const items = response
            .json()
            .then((items) => {
              const itemsMapped = items.map((item) => {
                const bidCount = item._count.bids;
                const bidsArray = item.bids;
                const highestBid = bidsArray.reduce((prev, current) => (prev.amount > current.amount ? prev : current), 0);
                let price = highestBid.amount;
                if (bidCount == 0) {
                  price = 'No bids yet!';
                } else {
                  price = highestBid.amount;
                }

                const { created } = item;
                const { description } = item;
                const deadline = item.endsAt;

                const createdMoment = moment(created).toString();

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
                <div class="flex sm:w-4/5 md:flex-cols mx-auto ">
                
                <a href="detailspage.html?item_id=${itemID}?_seller=true&_bids=true" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <div class=" sm:flex border-t-2 border-gray-300 pb-1 pt-4">
                    <div class="w-auto min-h-60 mx-auto md:mx-0 ">
                    <img
                      src="${mainPic}"
                      class="w-60 h-60 mb-4 mx-auto object-cover md:mx-0 "
                      alt="Avatar"
                    />
                  </div>
                  <div class="pl-4 sm:w-4/5">
                      
                        <h3 class="text-lg font-bold text-center mx-auto md:text-left px-1 text-blue-700">${title}</h3>
                        <p class="text-gray-700 text-base px-1">Bids: ${bidCount} price: ${price}</p>
                        <p class="text-gray-500 text-xs font-medium flex p-1">Created ${deadlineMoment}, on ${createdMoment}, </p>
                        <p class="text-gray-500 text-xs font-medium flex p-1">Description:</p>
                        <p class="text-gray-700 px-1 text-base">${description}</p>
                      
                      </div>
                    </div>
                    </a>
                </div>
                <hr class="flex flex-grow sm:w-4/5 mx-auto">
                    `;
                userListingsContainer.insertAdjacentHTML(
                  'beforeend',
                  userListings,
                );
              });
            })
            .catch((err) => console.error(err));
        }
      }());
    })
    .catch((err) => console.error(err));
}

createProfileForOtherUser();
