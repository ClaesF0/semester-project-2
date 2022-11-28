import { collectUserName, clearStorage, getToken } from '../local-storage-related';

const bearerKey = getToken();

function createHeaderBar() {
  const navBar = document.getElementById('navBar');
  navBar.innerHTML = `
    <nav
    class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
  >
    <div
      class="container-fluid w-full flex flex-wrap items-center justify-between px-6"
    >
      <button
        class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          class="w-6"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </button>
      <div
        class="collapse navbar-collapse flex-grow items-center"
        id="navbarSupportedContent1"
      >
        <a class="text-xl text-white pr-2 font-semibold" href="#">Navbar</a>
        
        <!-- Left links -->
        <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
          <li class="nav-item p-2">
          <!-- Button trigger login modal -->
          <button
            type="button"
            class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            Log in / Sign up
          </button>
          </li>
          <li class="nav-item p-2">
            <a
              class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
              href="#"
              >Team</a
            >
          </li>
          <li class="nav-item p-2">
            <a
              class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
              href="#"
              >Projects</a
            >
          </li>
          <li class="nav-item p-2">
          <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
      <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
      <button class="btn inline-block px-6 py-2.5 bg-teal-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </button>
    </div>
          <li>
        </ul>
        
        <!-- Left links -->
      </div>
                    
      <!-- Collapsible wrapper -->

      <!-- Right elements -->
      <div class="flex items-center relative">
        <!-- Icon -->
        <a
          class="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4"
          href="#"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="shopping-cart"
            class="w-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
            ></path>
          </svg>
        </a>
        <div class="dropdown relative">
          <a
            class="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4 dropdown-toggle hidden-arrow flex items-center"
            href="#"
            id="dropdownMenuButton1"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bell"
              class="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
              ></path>
            </svg>
            <span
              class="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5"
              >1</span
            >
          </a>
          <ul
            class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a
                class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href="#"
                >Action</a
              >
            </li>
            <li>
              <a
                class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href="#"
                >Another action</a
              >
            </li>
            <li>
              <a
                class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href="#"
                >Something else here</a
              >
            </li>
          </ul>
        </div>
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
              src="https://mdbootstrap.com/img/new/avatars/2.jpg"
              class="rounded-full"
              style="height: 25px; width: 25px"
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
                class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href="#"
                >Action</a
              >
            </li>
            <li>
              <a
                class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href="#"
                >Another action</a
              >
            </li>
            <li>
              <a
                class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href="#"
                >Something else here</a
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- Right elements -->
    </div>
  </nav>
      `;
}

const logoutbtn = document.getElementById('logout-btn');

if (logoutbtn) {
  logoutbtn.addEventListener('click', () => {
    clearStorage();
    window.location.replace('/signin.html');
  });
}
// Search for usernames starts here
/*
const searchApiForProfiles = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${bearerKey}`
  }
};

fetch('https://nf-api.onrender.com/api/v1/social/profiles', searchApiForProfiles)
  .then(response => response.json())
  .then((data) => {
    const people = data;
    //console.log('HERE IS THE RAW DATA RECEIVED',data);

    const searchInput = document.getElementById("searchInput");
    const list = document.getElementById("list");

function setList(group){
  clearList();
  for(const person of group){
    const item=document.createElement('li')
    //console.dir("ITEM",item)
    item.classList.add('list-group-item')
    const text = document.createTextNode("username: "+person.name);
    item.appendChild(text);
    list.appendChild(item);
  }
    if (group.length === 0){
      setNoResults();
  }
}

function clearList(){
    while (list.firstChild){
      list.removeChild(list.firstChild);
    }
}

function setNoResults () {

    const item=document.createElement('li')
    item.classList.add('list-group-item')
    const text = document.createTextNode("No matching user found");
    item.appendChild(text);
    list.appendChild(item);
}

function getRelevancy(value, searchTerm){ //maximizing relevancy with origin of amount of search/result match
  if (value === searchTerm) {
    return 2;
  } else if (value.startsWith(searchTerm)) {
    return 1;
  } else if(value.includes(searchTerm)) {
    return 0;
  }
}

searchInput.addEventListener('input', (event) => {
  //console.log(event.target.value)
  let value = event.target.value;
  if (value && value.trim().length > 0) {
      value = value.trim().toLowerCase(); //avoid cAsE sEnsItIvIty IsSueS
      setList(people.filter(person=>{
        return person.name.includes(value);
      }).sort((personA, personB)=>{
        return getRelevancy(personB.name, value) -getRelevancy(personA.name, value);
      })); //her er array som søkes i
  } else {
    clearList();
  }
});
//Search 1 ends here
  }
  )
  .catch(err => console.error(err));

////////Call for post data begins/////////
const searchApiForPosts = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${bearerKey}`
  }
};

fetch('https://nf-api.onrender.com/api/v1/social/posts', searchApiForPosts)
  .then(response => response.json())
  .then((allPostData) => {
    const people = allPostData;
    const searchInput = document.getElementById("searchInput");
    const list = document.getElementById("listTwo");

function setList(group){
  clearList();
  for(const post of group){
    console.log('GROUP',group);

    const item=document.createElement('li')
    item.classList.add('list-group-item')
    //const linkToProfile = `<a href="/profile.html/${person.name}">Profile:${person.name}</a>`;
    const title = document.createTextNode("Post with title: "+'"'+post.title+'"');
    item.appendChild(title);
    list.appendChild(item);
  }
    if (group.length === 0){
      setNoResults();

  }
}

function clearList(){
    while (list.firstChild){
      list.removeChild(list.firstChild);
    }
}

function setNoResults () {
    const item=document.createElement('li')
    item.classList.add('list-group-item')
    const text = document.createTextNode("No results found");
    item.appendChild(text);
    list.appendChild(item);
}

function getRelevancy(value, searchTerm){ //maximizing relevancy with origin of amount of search/result match
  if (value === searchTerm) {
    return 2;
  } else if (value.startsWith(searchTerm)) {
    return 1;
  } else if(value.includes(searchTerm)) {
    return 0;
  }
}

searchInput.addEventListener('input', (event) => {
  //console.log(event.target.value)
  let value = event.target.value;
  if (value && value.trim().length > 0) {
      value = value.trim().toLowerCase(); //avoid cAsE sEnsItIvIty IsSueS
      setList(people.filter(post=>{
        return post.title.includes(value);
      }).sort((postA, postB)=>{
        return getRelevancy(postB.title, value) -getRelevancy(postA.title, value);
      })); //her er array som søkes i
  } else {
    clearList();
  }
});
//Search ends here

  }
  )
  .catch(err => console.error(err));
/////////END OF CALL 2/////////
*/
createHeaderBar();

export { createHeaderBar };
