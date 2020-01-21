import axios from 'axios';

export default {
  postAll: data => {
    axios
      .post(`/api/register`, {
        data
      })
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
