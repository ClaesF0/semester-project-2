function createDetailsPage(){
    
    const paramString = window.location.search;
    const searchParam = new URLSearchParams(paramString);
    const itemID = searchParam.get("item_id");

    console.log('itemID',itemID);
    
    const options = {method: 'GET'};

fetch('https://nf-api.onrender.com/api/v1/auction/listings/'+`${itemID}`, options,)

  .then(response => response.json())
  .then(response => { 
    console.table('response',response);
    
    const bidCount = response._count.value;
    const { created } = response;
    const { description } = response;
    const deadline = response.endsAt;
    const itemID = response.id;
    const { title } = response;
    const { updated } = response;
    let mainPic = response.media[0];
    if (mainPic == undefined || null || '') {
      mainPic = 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg';
    }
    const { tags } = response;

    const detailsContainer = document.getElementById('detailsContainer');
    const newPostData = `
        <div class="rounded-lg shadow-lg bg-white max-w-sm rounded shadow-md hover:bg-blue-100">
        <a href="detailspage.html?item_id=${itemID}" data-mdb-ripple="true" data-mdb-ripple-color="light">
            
            <img class="rounded-t-lg max-w-full object-scale-down h-48 w-96 " src="${mainPic}" alt=""/>
        
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">${title}</h5>
          <p class="text-gray-700 text-base mb-4">${description}</p>
          </a>
          <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
        </div>
      </div>        
                `;
    detailsContainer.insertAdjacentHTML('beforeend', newPostData);
})
   
  .catch(err => console.error(err));
}

createDetailsPage();

detailsContainer

