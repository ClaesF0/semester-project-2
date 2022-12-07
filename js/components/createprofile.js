import {
    collectUserName, 
    getToken
} from '../local-storage-related';

async function createProfile() {
    const profileContainer = document.getElementById("profilecontainer")
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
        const profilecontent = `
        <div class="grid my-0 mx-auto w-full sm:w-4/5">
        <div class="text-center">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
          class="rounded-full w-32 mb-4 mx-auto"
          alt="Avatar"
        />
        <h5 class="text-xl font-medium leading-tight mb-2">John Doe</h5>
        <p class="text-gray-500">Web designer</p>
      </div>
      
      <div>
            
        
        `
        profileContainer.insertAdjacentHTML('beforeend', profilecontent);

    }
    
    )
    
    //.then(response => console.log("response",response))
 
    .catch(err => console.error(err));
}

createProfile()

       /*
        const count = response._count
        const avatar = response.avatar
        const credits = response.credits
        const email = response.email
        const wins = response.length
        console.log('count',count);
        console.log('avatar',avatar);
        console.log('credits',credits);
        console.log('email',email);
        console.log('wins',wins);
        */
        
        /*
                _count: Object { listings: 1 }
​                avatar: "https://i.imgflip.com/bz9fj.jpg?a463104"
                credits: 1000
                email: "wobelibob@stud.noroff.no"
                name: "wobelibob"
                wins: Array []
        */