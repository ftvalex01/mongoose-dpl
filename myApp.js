require('dotenv').config();
const mongoose = require('mongoose');



const mongoURI = process.env.MONGO_URI;
const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;

const connectionString = `${mongoURI}${mongoUser}:${mongoPassword}`;
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });


let Person = require('./models/personSchema');



const createAndSavePerson = (done) => {
  const personInstance = new Person({
    name: 'Alejandro', 
    age: 30,         
    favoriteFoods: ['potaje de lentejas', 'pasta'] 
  });

  // Save the document instance to the database
  personInstance.save(function(err, data) {
    if (err) {
      done(err, null);
    } else {
      done(null, data);
    }
  });
};



const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) {
      done(err);
    } else {
      done(null, data);
    }
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name:personName},(err,data)=>{
    if (err) {
      done(err);
    } else {
      done(null, data);
    }
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, data) => {
    if (err) {
      done(err);
    } else {
      done(null, data);
    }
  });
};


const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data) => {
    if (err) {
      done(err);
    } else {
      done(null, data);
    }
  });
};
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";


  Person.findById(personId, (err, person) => {
    if (err) {
      done(err);
    } else {

      person.favoriteFoods.push(foodToAdd);

    
      person.save((err, updatedPerson) => {
        if (err) {
          done(err);
        } else {
          done(null, updatedPerson);
        }
      });
    }
  });
};


const findAndUpdate = (personName, done, ) => {
  const ageToSet = 20;

  Person.findByIdAndUpdate({ name: personName },{ new: true }, (err, person) => {
    if (err) {
      done(err);
    } else {

      person.age.push(ageToSet);

    
      person.save((err, updatedPerson,) => {
        if (err) {
          done(err);
        } else {
          done(null, updatedPerson);
        }
      });
    }
  });
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
