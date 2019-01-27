var router = require("express").Router()


router.get("/", function (req, res) {
    res.render("index", {
        test: "Hurray!"
    })
})

module.exports = router