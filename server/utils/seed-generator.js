const faker = require("faker");
const moment = require("moment");
const {organizations} = require('./constants');

function getRandomOrganization() {
  const max = organizations.length - 1;
  return organizations[Math.floor(Math.random() * max)];
}

function generateRandomDate() {
//   function randomDate(start, end) {
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// }

// randomDate(new Date(2012, 0, 1), new Date())

}
function generateRandomUser() {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    org: getRandomOrganization(),
    kudosLastUpdated: new Date()
  }
}

function generateRandomKudos(receiverId, giverId) {
  return {
    receiverId,
    giverId,
    receivedOn: faker.date.past(moment().year(), moment()),// moment().day(-10),
    message: faker.lorem.sentence(7)
  }
}

module.exports = {
  generateRandomUser,
  getRandomOrganization,
  generateRandomKudos
}