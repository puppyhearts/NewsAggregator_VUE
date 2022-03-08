import axios from 'axios'

export default axios.create({
  method: 'GET',
  baseURL: 'https://api.newscatcherapi.com/v2/search',
  headers: {
    'x-api-key': 'pCTPMNWrmhZkoPvIioqpMoEyDpY_O8RUe1GafvpyG3w',
    'x-api-host': 'api.newscatcherapi.com'
  }
})