<<<<<<< HEAD

import axios from 'axios'
=======
import axios from "axios";
>>>>>>> 5376cbafe58be6921cf1d776cf8163ba29dcbb07
const customAxios = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem("access-token"),
    }
})
export default customAxios;