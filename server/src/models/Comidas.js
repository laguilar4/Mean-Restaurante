const {Schema, model} = require ('mongoose');

const comidasSchema= new Schema(
    {
    nombre: {type: String, required:true},
    descripcion: {type: String, required:true},
    precio: {type: Number, required:true},
},{
    timestamps:true,
    versionKey:false
})

module.exports = model("Comidas", comidasSchema);