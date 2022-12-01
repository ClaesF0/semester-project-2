function createDetailsPage(){
    
    const paramString = window.location.search;
    const searchParam = new URLSearchParams(paramString);
    const itemID = searchParam.get("item_id");

    console.log('itemID',itemID);
    
    const options = {method: 'GET'};

fetch('https://nf-api.onrender.com/api/v1/auction/listings/'+`${itemID}`+"?_seller=true&_bids=true", options,)

  .then(response => response.json())
  .then(response => { 
    console.table(response);
    
    const bidCount = response._count.bids;
    //console.log('bidCount',bidCount);
    const bidsArray = response.bids;
    //console.log('bidsArray',bidsArray);
    const price = bidsArray[bidsArray.length - 1].amount;
    //console.log('P R I S ',price);
    
    const created  = response.created;
    const description = response.description;
    const deadline = response.endsAt;
    const itemID = response.id;
    const title = response.title;
    const updated = response.updated;

    let mainPic = response.media[0];
    
    if (mainPic == undefined || null || '') {
      mainPic = 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';
    }
    let imgArrayLength = response.media.length
    console.log('mainPic',mainPic);
    console.log('imgArray',imgArrayLength);

    const tags = response.tags;

    const detailsContainer = document.getElementById('detailsContainer');
    const newPostData = `
    <div class="grid my-0 mx-auto w-full sm:w-4/5">
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
          class="carousel-inner relative w-full object-scale-down overflow-hidden flex"
        >
          <!-- Single item -->
          <div
            class="carousel-item overflow-hidden active relative float-left w-full inline-flex"
          >
            <img
              src="${mainPic}"
              class="block w-full"
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
            class="carousel-item overflow-hidden relative float-left w-full inline-flex"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
              class="block w-full"
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
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
              class="block w-full"
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

      <div id="loginPrompt" class="relative inline-block shrink-0 lg:hidden">
        <div
          class="m-1 p-1 top-0 rounded-lg shadow-lg flex hover:shadow-blue-300 bg-gray-200 max-w-sm"
        >
          <p class="text-gray-700 p-1 text-xs">Log in to bid</p>
          <button
            type="button"
            class="inline-block mx-3 px-2 py-1 bg-white text-blue-600 font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            Login
          </button>
        </div>
      </div>
      <br />
      <div class="relative inline-block min-w-[25%]">
        <div
          class="m-1 p-3 rounded-lg shadow-lg hover:shadow-blue-300 bg-white max-w-sm"
        >
          <h4
            class="text-gray-900 text-xl leading-tight font-medium mb-2 inline-block"
          >
            ${title}
          </h4>
          <br />
          <span class="inline-flex">
            <h5 class="text-green-800 text-md leading-tight font-medium mb-2">
              Current price: ${price}
            </h5>
            <h6
              class="text-green-800 text-md leading-tight font-medium mb-2 px-3"
            >
              Bids: ${bidCount}
            </h6>
          </span>
          <p class="text-gray-700 text-base mb-4">
            ${description} 
          </p>
          <button
            id="bidButton"
            type="button"
            class="text-xs inline-block px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  </div>       
                `;
    detailsContainer.insertAdjacentHTML('beforeend', newPostData);
})
   
  .catch(err => console.error(err));
}

createDetailsPage();

detailsContainer

