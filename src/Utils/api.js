import axios from 'axios';

module.exports = {
  fetchSongs: (url) => {
    //const encodedURI = 'UITestData.json';
    return axios.get(url)
      .then((response) => {
          console.log(response);
          const songs = response.data;
      // Alphabetically sort response by Merchant Name
        // const locations = response.data.sort((a, b) => {
        //   if (a.location.merchant_name.toLowerCase() < b.location.merchant_name.toLowerCase()) return -1;
        //   if (a.location.merchant_name.toLowerCase() > b.location.merchant_name.toLowerCase()) return 1;
        //   return 0;
        // });
        return songs;
      });
  },
};