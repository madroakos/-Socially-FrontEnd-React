const BASE_URL = 'http://localhost:8080';
const LOGIN_URL = `${BASE_URL}/api/auth/login`;
const REGISTER_URL = `${BASE_URL}/api/auth/register`;
const VALIDATE_URL = `${BASE_URL}/api/auth/validateToken`;
const POSTS_URL = `${BASE_URL}/posts`;
const POSTS_BY_USER_URL = `${BASE_URL}/postsByUser`;
const SUBMIT_POST_URL = `${BASE_URL}/submitPost`;
export {LOGIN_URL, REGISTER_URL, VALIDATE_URL, POSTS_URL, POSTS_BY_USER_URL, SUBMIT_POST_URL};