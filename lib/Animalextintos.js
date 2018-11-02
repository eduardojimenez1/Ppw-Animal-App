const Animalextinto = require("./AnimalextintoSchema");
exports.getAnimalextintos = (req, res) => {
  Animalextinto.find((err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.getAnimalextinto = (req, res) => {
  let id = req.params.id;

  Animalextinto.find({ _id: id }, (err, user) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
};

exports.newAnimalextinto = (req, res) => {
  const newAnimalextinto = new Animalextinto(req.body);
  newAnimalextinto.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newAnimalextinto);
  });
};

exports.updateAnimalextinto = (req, res) => {
  let nombre = req.body.nombre;
  Animalextinto.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deleteAnimalextinto = (req, res) => {
  Animalextinto.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
