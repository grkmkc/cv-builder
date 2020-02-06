import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/api/user`);
    return res.data || [];
  },
  getUserFields: async id => {
    let res = await axios.post(`/api/user`, {
      _id: id
    });
    return res.data || [];
  }
};
