const mongoose = require('mongoose');
const Category = mongoose.model('categories');

module.exports = app => {
  app.get(`/api/category`, async (req, res) => {
    let categories = await Category.find();
    return res.status(200).send(categories);
  });

  app.post(`/api/category`, async (req, res) => {
    let category = await Category.create(req.body);
    console.log(req.body);
    return res.status(201).send({
      error: false,
      category
    });
  });

  app.put(`/api/category/:id`, async (req, res) => {
    const { id } = req.params;

    let category = await Category.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      category
    });
  });

  app.delete(`/api/category/:id`, async (req, res) => {
    const { id } = req.params;

    let category = await Category.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      category
    });
  });
};
