var mongoose = require('mongoose');
var faker = require("faker");

const organizations = [
  mongoose.Types.ObjectId('5e42cecd1c9d440000328afb'),
  mongoose.Types.ObjectId('5e42cecd1c9d440000328afc'),
  mongoose.Types.ObjectId('5e42cecd1c9d440000328afd'),
]

function getRandomOrganization() {
  const max = organizations.length;
  return organizations[Math.floor(Math.random() * Math.floor(max))];
}

function generateRandomUser() {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    organizationId: getRandomOrganization()
  }
}

module.exports = generateRandomUser;