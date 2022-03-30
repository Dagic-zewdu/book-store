import axios from 'axios';

const baseUrl = axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/5rjoLG3JDRfqAXdddAHX',
});

export default baseUrl;
