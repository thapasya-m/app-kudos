const faker = require("faker");
const moment = require("moment");
const { organizations } = require("./constants");

function getRandomOrganization() {
  const max = organizations.length;
  const random = Math.floor(Math.random() * max);
  return organizations[random];
}

function generateRandomUser() {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    org: getRandomOrganization(),
    kudosLastUpdated: new Date()
  };
}

function generateRandomKudos(receiverId, giverId) {
  return {
    receiverId,
    giverId,
    receivedOn: moment().day(-10),
    message: faker.lorem.sentence(7)
  };
}

function generateRandomOrganizations() {
  return {
    name: faker.company.companyName()
  }
}

module.exports = {
  generateRandomUser,
  getRandomOrganization,
  generateRandomKudos,
  generateRandomOrganizations
};
