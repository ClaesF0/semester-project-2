import { collectUserName, getToken } from "../local-storage-related";

const bearerKey = getToken();

function clearStorage() {
  localStorage.clear();
  location.replace("index.html");
}

function createHeaderBar() {
  const navBar = document.getElementById("navBar");
  const userName = collectUserName();

  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");

  // Search for usernames starts here

  const searchApiForProfiles = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${bearerKey}`,
    },
  };

  fetch(
    "https://nf-api.onrender.com/api/v1/auction/profiles/",
    searchApiForProfiles
  )
    .then((response) => response.json())
    .then((data) => {
      const people = data;

      const searchInput = document.getElementById("search-input");
      const list = document.getElementById("list");

      function setList(group) {
        clearList();
        for (const person of group) {
          const item = document.createElement("li");

          item.classList.add("list-group-item");

          const a = document.createElement("a");

          const linkUserProfileFromSearch = `userprofile.html?user_name=${person.name}`;
          a.href = linkUserProfileFromSearch;

          const text = document.createTextNode(`user: ${person.name}`);
          a.appendChild(text);
          list.appendChild(a);
          item.appendChild(a);
          list.appendChild(item);
        }
        if (group.length === 0) {
          setNoResults();
        }
      }

      function clearList() {
        while (list.firstChild) {
          list.removeChild(list.firstChild);
        }
      }

      function setNoResults() {
        const item = document.createElement("li");
        item.classList.add("list-group-item");
        const text = document.createTextNode("No matching user found");
        item.appendChild(text);
        list.appendChild(item);
      }

      function getRelevancy(value, searchTerm) {
        // maximizing relevancy with origin of amount of search/result match
        if (value === searchTerm) {
          return 2;
        }
        if (value.startsWith(searchTerm)) {
          return 1;
        }
        if (value.includes(searchTerm)) {
          return 0;
        }
      }

      searchInput.addEventListener("input", (event) => {
        let { value } = event.target;

        if (value && value.trim().length > 0) {
          value = value.trim().toLowerCase(); // avoid cAsE sEnsItIvIty IsSueS

          setList(
            people
              .filter((person) => person.name.includes(value))

              .sort(
                (personA, personB) =>
                  getRelevancy(personB.name, value) -
                  getRelevancy(personA.name, value)
              )
          ); // her er array som søkes i
        } else {
          clearList();
        }
      });
      // Search 1 ends here
    })
    .catch((err) => console.error(err));

  /// /////Call for listing data begins/////////
  const searchApiForPosts = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${bearerKey}`,
    },
  };

  fetch(
    "https://nf-api.onrender.com/api/v1/auction/listings",
    searchApiForPosts
  )
    .then((response) => response.json())
    .then((allPostData) => {
      const listings = allPostData;
      const searchInput = document.getElementById("search-input");
      const list = document.getElementById("listTwo");

      function setList(group) {
        clearList();
        for (const post of group) {
          const item = document.createElement("li");

          item.classList.add("list-group-item");

          const a = document.createElement("a");

          const linkListingFromSearch = `detailspage.html?item_id=${post.id}?_seller=true&_bids=true`;
          a.href = linkListingFromSearch;

          const title = document.createTextNode(`Listing: ${post.title}`);
          a.appendChild(title);
          list.appendChild(a);
          item.appendChild(a);
          list.appendChild(item);
        }
        if (group.length === 0) {
          setNoResults();
        }
      }

      function clearList() {
        while (list.firstChild) {
          list.removeChild(list.firstChild);
        }
      }

      function setNoResults() {
        const item = document.createElement("li");
        item.classList.add("list-group-item");
        const text = document.createTextNode("No listing results found");
        item.appendChild(text);
        list.appendChild(item);
      }

      function getRelevancy(value, searchTerm) {
        // maximizing relevancy with origin of amount of search/result match
        if (value === searchTerm) {
          return 2;
        }
        if (value.startsWith(searchTerm)) {
          return 1;
        }
        if (value.includes(searchTerm)) {
          return 0;
        }
      }

      searchInput.addEventListener("input", (event) => {
        let { value } = event.target;

        if (value && value.trim().length > 0) {
          value = value.trim().toLowerCase(); // avoid cAsE sEnsItIvIty IsSueS

          setList(
            listings
              .filter((post) => post.title.toLowerCase().includes(value))

              .sort(
                (postA, postB) =>
                  getRelevancy(postB.title.toLowerCase(), value) -
                  getRelevancy(postA.title.toLowerCase(), value)
              )
          ); // her er array som søkes i
        } else {
          clearList();
        }
      });
      // Search ends here
    })
    .catch((err) => console.error(err));
  /// //////END OF CALL 2/////////
  console.log(
    'localStorage.getItem("avatar", data.avatar)',
    localStorage.getItem("avatar")
  );

  let headerLinks = `
  <button
  type="button"
  class="nav-link p-1 sm:p-3 my-0 mx-auto border-2 border-white bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:text-black hover:bg-green-400 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
  data-bs-toggle="modal"
  data-bs-target="#loginModal">
  Log in / Sign up
  </button>
  `;
  if (userName) {
    headerLinks = `
    <!-- Icon -->
          <div class="dropdown relative">
            <a
              class="dropdown-toggle flex items-center hidden-arrow"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="${localStorage.getItem("avatar")} || ../profileicon.svg "
                class="rounded-full"
                style="height: 50px; width: 50px"
                alt=""
                loading="lazy"
              />
            </a>
            <ul
              class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a
                  class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-green-400"
                  href="profile.html"
                  >${userName}'s profile</a
                >
              </li>
              <li>
              <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-green-400"
              href="createlisting.html"
              >Create Listing</a
            >
                <!--
                <button
                  type="button"
                  class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-green-400"
                  data-bs-toggle="modal"
                  data-bs-target="#newListingModal"
                >
                  Create listing
                </button>
                -->
              </li>
              <li>
                <button type="button" id="logout-btn" class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent border-2 border-red-600 rounded-md text-black hover:text-white hover:bg-red-600">
                    Log Out</button>
              </li>
            </ul>
          </div>
    `;
  }
  navBar.innerHTML = `
  <nav
  class="mx-auto my-0 relative w-full flex items-center justify-between p-2 py-5 bg-teal-700 text-gray-200 navbar navbar-expand-lg navbar-light"
>    
  <div class="mx-auto my-0 container-fluid w-full flex justify-evenly sm:w-4/5 ">
    <a class="text-xl text-white font-semibold p-2" href="index.html">
        <img src="../homeicon.svg" alt=""
        class=""
            style="height: 30px; width: 30px"
            alt=""
            loading="lazy">
    </a>
    
    <div class="mx-auto my-0">
        <div class="flex justify-center">
          <div class="xl:w-96">
            <div class="input-group w-[200px] relative flex items-stretch md:w-[400px]">
              <input id="search-input" type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
              <button id="search-button" class="btn px-6 bg-teal-500 border-emerald-50 border-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" >
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
      </div>
      

     <!-- Right elements -->
     <div class="flex items-center relative">
        ${headerLinks}
    </div>
      <!-- Right elements -->
      <!-- Button trigger login modal -->
  </div>
    <br>
  </div>
  <br>
    
</nav>

  <div class="  list-none flex justify-center mx-auto text-md font-normal bg-opacity-75 bg-teal-700 text-white shadow-lg ">
  <br>
  <ul class="bg-teal-700 mx-auto z-10 px-4 absolute leading-loose md:w-[440px]">
  <li id="list" class=""></li>
  <li id="listTwo" class=""></li>
  </ul>
  <br>
  </div>
  `;
  const logoutbtn = document.getElementById("logout-btn");

  if (logoutbtn) {
    logoutbtn.addEventListener("click", () => {
      clearStorage();
      window.location.replace("index.html");
    });
  }
}

createHeaderBar();
