import axios from 'axios';

export const isLocalHost = Boolean(window.location.hostname === "localhost" || window.location.hostname === "[::1]" || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))
const SERVER_URL = isLocalHost ? 'http://localhost:5000' : 'https://api.chapelofpeacefuw.org';

export const APP_URL = isLocalHost ? 'http://localhost:3000' : 'https://chapelofpeacefuw.org';

const Axios = axios.create({
    baseURL:  `${SERVER_URL}/api`,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  export default Axios

