import axios from 'axios';

export default {
  getAllCategories: async () => {
    let res = await axios.get(`/api/category`);
    return res.data || [];
  }
};
