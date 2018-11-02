const Persona = require("./PersonaSchema");
exports.getPersonas = (req, res) => {
  Persona.find((err, persona) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(persona);
  });
};

exports.getPersona = (req, res) => {
  let id = req.params.id;

  Persona.find({ _id: id }, (err, persona) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(persona);
  });
};

exports.newPersona = (req, res) => {
  const newPersona = new Persona(req.body);
  newPersona.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newPersona);
  });
};

exports.updatePersona = (req, res) => {
  let nombre = req.body.nombre;
  Persona.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nombre },
    (err, todo) => {
      if (err) return res.status(500).send(err);
      return res.send(todo);
    }
  );
};

exports.deletePersona = (req, res) => {
  Persona.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: todo._id
    };
    return res.status(200).send(response);
  });
};
