const mongoose = require('mongoose');
const Sections = mongoose.model('sections');
const User = mongoose.model('user');

module.exports = app => {
  app.get(`/api/section`, async (req, res) => {
    let sections = await Sections.find();
    return res.status(200).send(sections);
  });

  app.post(`/api/section`, async (req, res) => {
    console.log(req.body);
    let name = req.body.name;
    let _id;
    User.findOne({ name: name }, function(err, result) {
      if (err) {
        console.log(err);
      }
      if (result) {
        console.log(result._id, 'result');
        /* _id = result._id; */
        _id = result._id;
      }
    }).then(async () => {
      console.log(_id, 'id');
      Object.assign(req.body, { _id: _id });
      console.log(req.body, 'body');
      let section = await Sections.create(req.body);
      return res.status(201).send({
        error: false,
        section
      });
    });
  });

  /*  app.put(`/api/section/:id`, async (req, res) => {
    const { id } = req.params;

    let section = await Sections.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      section
    });
  });

  app.delete(`/api/section/:id`, async (req, res) => {
    const { id } = req.params;

    let section = await Sections.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      section
    });
  }); */
};
