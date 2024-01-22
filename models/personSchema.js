const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true  // Hace que el campo 'name' sea obligatorio
    },
    age: Number,
    favoriteFoods: [String]  // Un arreglo de strings
  });
  

// Creación del modelo a partir del esquema
const Person = mongoose.model('Person', personSchema);
// Exportar el modelo si estás usando módulos (opcional)
module.exports = Person;  