import axios from 'axios';

const client = axios.create({
    baseURL:'https://localhost:8080/api/',
    timeout:1000,
    header:{'X-Custom-Header':'foobar'}
});
export default client;

