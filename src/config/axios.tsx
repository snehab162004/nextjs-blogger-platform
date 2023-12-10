
import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://api.jsonbin.io/v3',
    headers: {
        'X-Master-Key':'$2a$10$cU4oCzFSwNt5xMXEEKtuJuPw1QLymZOxHU/RXUiKrjg.rZiI2B9OG',
        'X-Access-Key':'$2a$10$SI0qTQ36EBDHD3Yx7DgCC.WSKMROQXcbDXMbt6xB45tz63KhYdDYS'
    }
})