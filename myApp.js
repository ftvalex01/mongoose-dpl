require('dotenv').config();
const mongoose = require('mongoose');



const mongoURI = process.env.MONGO_URI;
const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;

const connectionString = `${mongoURI}${mongoUser}:${mongoPassword}`;
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });








let Person = require('./models/personSchema');



createAndSavePerson((err, data) => {
  const personInstance = new Person({
    name: 'Alejandro', 
    age: 30,         
    favoriteFoods: ['potaje lentejas', 'pasta'] 
  });

  // Save the document instance to the database
  personInstance.save(function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
  
});


createAndSavePerson((err, data) => {
  if (err) {
    console.error('Error saving the person:', err);
  } else {
    console.log('Person saved successfully:', data);
  }
});

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
