// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(router) {
    router.get("/", function(req, res) {
        burger.selectBurgers(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
    });
    
    router.post("/api/burgers", function(req, res) {
        burger.insertBurger(req.body.burger_name, function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });
    });
    
    router.put("/api/burgers/:id", function(req, res) {
      var condition = {id: req.params.id}
    
      console.log("condition", condition);
    
      burger.updateBurger(
        {
            devoured: true
        },
        condition,
        function(result) {
          if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
    
        }
      );
    });
};