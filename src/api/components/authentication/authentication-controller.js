const authenticationService = require("./authenticationService");

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await authenticationService.authenticateUser(email);

        if (!user || user.password !== password) {
            return res.status(403).json({ error: "INVALID_PASSWORD" });
        }

        res.json({ status: "success" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    loginController,
};
