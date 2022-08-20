require('dotenv').config();
var mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;
const personSchema = new Schema({
  name: { type: String, required: true },
  age: {type:Number,required:true},
  favoriteFoods: [String]
});

const Person = mongoose.model("Person",personSchema)

const createAndSavePerson = (done) => {
  var chase = new Person({name:"Chase",age:20,favoriteFoods:["Steak"]})
  chase.save(function(err,data){
    if(err){
      return console.log(err)
    }
    done(null,data)
  })
};

var arrayOfPeople = [
  {name:"Nick",age:10,favoriteFoods:[]},
  {name:"Bubu",age:25,favoriteFoods:[]},
  {name:"Mam",age:21,favoriteFoods:[]}
]

const findPeopleByName = function(personName, done){
  Person.find({name: personName}, function(err, data){
    if(err) return console.log(err);
    done(null, data);
  })
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
