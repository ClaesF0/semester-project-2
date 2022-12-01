import {
  collectUserName,
  clearStorage,
  getToken,
} from '../local-storage-related';

const bearerKey = getToken();

function createHeaderBar() {
  const navBar = document.getElementById('navBar');
  navBar.innerHTML = `
  <nav
  class="relative w-full flex flex-wrap items-center justify-between p-2 bg-teal-700 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
>
<div class="mx-auto my-0">
  <div class="flex justify-center">
    <div class="xl:w-96">
      <div class="input-group relative flex flex-wrap items-stretch w-full">
        <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
        <button class="btn inline-block px-6 bg-teal-500 border-emerald-50 border-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
  <div class="container-fluid w-full flex flex-wrap items-center justify-between ">
    
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
    
    <div class="collapse navbar-collapse m:flex-grow items-center " id="navbarSupportedContent1">
      <a class="text-xl text-white pr-2 font-semibold" href="index.html">Navbar</a>
      <!-- Left links -->
      <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
        <li class="nav-item p-2">
          <a class="nav-link text-white" href="#">Dashboard</a>
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
        <li class="nav-item">
            
      <!-- Button trigger login modal -->
      <button
        type="button"
        class="px-6 py-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        Log in / Sign up
      </button>
      
        </li>
      </ul>
      <!-- Left links -->
    </div>
    
    <!-- Collapsible wrapper -->

    <!-- Right elements -->
    <div class="flex items-center relative border-2 border-cyan-500">
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
