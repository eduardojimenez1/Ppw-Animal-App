const Comentario = require("./ComentarioSchema");
exports.Comentarios = (req, res) => {
  Comentario.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getComentario = (req, res) => {
  let id = req.params.id;

  Comentario.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.newComentario = (req, res) => {
  const newComentario = new Comentario(req.body);
  newComentario.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newComentario);
  });
};

exports.updateComentario = (req, res) => {
  let nombre = req.body.nombre;
  Comentario.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteComentario = (req, res) => {
  Comentario.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
