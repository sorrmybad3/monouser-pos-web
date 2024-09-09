import { useCookies } from 'react-cookie';
import request from 'superagent';

type QueryParams = Record<string, any> | string;
type BodyParams = string | Record<string, any>;

const mainPlatformUrl = 'https://api.example.com'; // Replace with your actual API base URL

const get = (endpoint: string, query: QueryParams = {}) => {
  return request.get(`${mainPlatformUrl}${endpoint}`).query(query);
};

const post = (endpoint: string, body: BodyParams = {}) => {
  return request.post(`${mainPlatformUrl}${endpoint}`).send(body);
};

const getSecured = (endpoint: string, query: QueryParams = {}) => {
  const [cookies] = useCookies(['token']); // Access the token from cookies

  return request
    .get(`${mainPlatformUrl}${endpoint}`)
    .set('Authorization', `Bearer ${cookies.token}`) // Attach the token
    .query(query);
};

//TODO: Add type to body.
const postSecured = (endpoint: string, body: BodyParams = {}) => {
  const [cookies] = useCookies(['token']); // Access the token from cookies

  return request
    .post(`${mainPlatformUrl}${endpoint}`)
    .set('Authorization', `Bearer ${cookies.token}`) // Attach the token
    .send(body);
};

export const main = {
  get,
  post,
  getSecured,
  postSecured,
};
