const { Users } = require("../../../models"); // Sesuaikan dengan path model Anda

async function getUserByEmail(email) {
    return Users.findOne({ email }); // Mencari user berdasarkan email
}

module.exports = {
    getUserByEmail,
};
