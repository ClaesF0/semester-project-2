import { collectUserName } from "../js/local-storage-related";
const userName = collectUserName();

const BASE_URL_FOR_API = "https://nf-api.onrender.com/api/v1/auction/";

// AUTH
const LOGIN_URL = BASE_URL_FOR_API + "auth/login";
const SIGNUP_URL = BASE_URL_FOR_API + "auth/register";

//POSTS
const CREATE_LISTING_URL = BASE_URL_FOR_API + "listings";
/*
const READ_POSTS_URL = BASE_URL_FOR_API + "api/v1/social/posts"
const RETRIEVE_POST_BY_ID = BASE_URL_FOR_API + "api/v1/social/posts"
const GET_USERS_OWN_POSTS_URL = BASE_URL_FOR_API + `api/v1/social/profiles/${userName}?_posts=true`
const DELETE_USER_POST_BY_ID = BASE_URL_FOR_API + `api/v1/social/posts`
const UPDATE_USERS_POST_URL = BASE_URL_FOR_API + `api/v1/social/posts/`
*/
//PROFILES GET

const GET_PROFILEINFO_URL = BASE_URL_FOR_API + "/api/v1/social/profiles/";

export {
  BASE_URL_FOR_API,
  LOGIN_URL,
  SIGNUP_URL,
  //CREATE_POST_URL,
  //READ_POSTS_URL,
  //GET_USERS_OWN_POSTS_URL,
  //DELETE_USER_POST_BY_ID,
  //GET_PROFILEINFO_URL,
  //UPDATE_USERS_POST_URL,
  //RETRIEVE_POST_BY_ID,
};
