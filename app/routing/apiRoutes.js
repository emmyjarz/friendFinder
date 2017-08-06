var friendsArr = require("../data/friends");

module.exports = (app) => {


    app.get("/api/friendsList", (req, res) => {
        res.json(friendsArr);
    });

    app.post("/api/friendsList", (req, res) => {
        friendsArr.push(req.body);
        res.json(friendsArr);
    });
}