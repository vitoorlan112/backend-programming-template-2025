const authenticationRepository = require("./authenticationRepository");

async function authenticateUser(email) {
    return authenticationRepository.getUserByEmail(email);
}

module.exports = {
    authenticateUser,
};
