const Actividade = require("./ActividadeSchema");
exports.getActividades = (req, res) => {
  Actividade.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getActividade = (req, res) => {
  let id = req.params.id;

  Actividade.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.newActividade = (req, res) => {
  const newActividade = new Actividade(req.body);
  newActividade.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newActividade);
  });
};

exports.updateActividade = (req, res) => {
  let nombre = req.body.nombre;
  Actividade.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteActividade = (req, res) => {
  Actividade.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
