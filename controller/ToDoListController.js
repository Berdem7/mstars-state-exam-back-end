const ToDoList = require("../model/ToDoList");

const get_list = (req, res, next) => {
  ToDoList.find({}, null, { sort: { created_at: -1 } }, function (err, data) {
    if (err) next;
    res.json(data);
  });
};

const create_list = async (req, res, next) => {
  const reqBody = req.body;
  let newList = new ToDoList({
    title: reqBody.title,
    checked: reqBody.checked,
  });
  newList
    .save()
    .then((data) => {
      console.log(data);
    })
    .catch(next);
  res.send("Success");
};

const delete_list = (req, res, next) => {
  ToDoList.findOneAndRemove({ _id: req.params.id }, function (err, data) {
    if (err) next;
    res.send("deleted");
  });
};

const update_list = async (req, res, next) => {
  ToDoList.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      checked: req.body.checked,
    },
    function (err, data) {
      if (err) next;
      console.log(req.body);
      res.send("updated");
    }
  );
};

const check_list = (req, res, next) => {
  ToDoList.findByIdAndUpdate(
    req.params.id,
    {
      checked: req.body.checked,
    },
    function (err, data) {
      if (err) next;
      res.send("checked");
    }
  );
};

module.exports = {
  get_list,
  create_list,
  delete_list,
  update_list,
  check_list,
};
