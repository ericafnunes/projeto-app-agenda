import axios from 'axios';

export default axios.create({
  baseURL: 'https://cubos-api-contacts.herokuapp.com',
});