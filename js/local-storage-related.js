const bearerKey = "token";
const userKey = "user";
const avatarKey = "avatar";

function saveToken(token) {
  saveToStorage(bearerKey, token);
}

function getToken() {
  return getFromStorage(bearerKey);
}

// save user object
function storeUserSession(user) {
  saveToStorage(userKey, user);
}

function collectUserName() {
  const user = getFromStorage(userKey);
  if (userKey) {
    return user.name;
  }
  return null;
}

fetch(`https://api.noroff.dev/api/v1/auction/profiles/${collectUserName()}`, {
  method: "GET",
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("avatar", data.avatar);
  })
  .catch((error) => console.log(error));

// function which save data to the local storage
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// function which gets data from the local storage
function getFromStorage(key) {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value); // convert to JS
  }
  return [];
}

function clearStorage() {
  localStorage.clear();
}

function saveAmount(amount) {
  saveToStorage(amountKey, amount);
}

function getCreditAmount() {
  const availableCreditAmount = getFromStorage(amountKey);
  if (availableCreditAmount) {
    return availableCreditAmount;
  }
  return null;
}

const amountKey = "amount";
const creditKey = "credit";

export {
  getToken,
  saveToken,
  storeUserSession,
  collectUserName,
  clearStorage,
  getCreditAmount,
};
