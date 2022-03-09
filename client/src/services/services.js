import axios from 'axios'

export const dataToDb = (body) => {
    axios.post('/data', body)
}   
 