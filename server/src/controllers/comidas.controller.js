const comidaCtrl ={};
const Comida = require('../models/Comidas');

comidaCtrl.getComidas = async (req,res) => {
    const comidas = await Comida.find()
    res.json(comidas);
};
comidaCtrl.createComida = async (req,res) => {
    const newComida= new Comida(req.body);
    await newComida.save();
    res.send({message: 'Comida creada'});
};
comidaCtrl.getComida = (req,res) => {};
comidaCtrl.editComidas = (req,res) => {};
comidaCtrl.deleteComidas = (req,res) => {};

module.exports = comidaCtrl;