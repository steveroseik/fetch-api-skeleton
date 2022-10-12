// We now import the connection object we exported in db.js.
const db = require("../controllers/db");

// More libraries…
const express = require("express");
const bodyParser = require("body-parser");

const router = express();

router.use(bodyParser.json()); // Automatically parse all POSTs as JSON.
router.use(bodyParser.urlencoded({ extended: true })); // Automatically parse URL parameters

// =======> DO NOT EDIT ANY LINE FROM ABOVE <========//
//                                                   //
// ================================================= //
// ==> INSERT BELOW FETCH RELATED API FUNCTIONS <=== //

// POST request for adding new user to database
router.post("/add_user", function(req, res) {

    let body = req.body;
    let email = body.email;
    let fname = body.firstname;
    let lname = body.lastname;
    let password = password;
    let country = body.country;
    let city = body.city;
    let phone = body.phone;
    let long = 0.0;
    let lat = 0.0;
    let birthdate = body.birthdate;
    let sql = `
        Insert into users values
            (null, "${email}", "${fname}", "${lname}", "${password}", 
            "${country}", "${city}", "${phone}", "${long}", "${lat}", "${birthdate}")
        ;
    `;
    db.query(sql, function (err, result) {
        console.log("Result: " + JSON.stringify(result));
        if (err) {
            retObj = {
                "code": -100,
                "error": err
            }
            return res.send(retObj);
        } else {
            retObj = {
                "code": 200,
                "error": err
            }
            return res.json(retObj);
        }
    });   
});






// =============> END OF FETCH API <================ //
// ================================================= //
//                                                   //
//                                                   //
// BELOW ARE TEMPLATES FOR                           //
// USING GET AND POST REQUESTS                       //
//                                                   //
// ===========> DO NOT EDIT OR DELETE <============= //
//                                                   //
// ================================================= //

// Skeleton for POST request
router.post("/mypostapi", function (req, res) {
    let sql = `
        Your SQL Query Here
    `;
    db.query(sql, function (err, result) {
        console.log("Result: " + JSON.stringify(result));
        if (err) {
            return res.send(err);
        } else {
            let returnedObject = {};
            // Your code here
            return res.json(returnedObject);
        }
    });
});

// Skeleton for GET Request
router.get("/mygetapi", function (req, res) {
    let sql = `
        Your SQL Query Here
    `;
    db.query(sql, function (err, result) {
        console.log("Result: " + JSON.stringify(result));
        if (err) {
            return res.send(err);
        } else {
            let returnedObject = {};
            // Your code here 
            // You can use res.json(result); to send all data as a response 
            return res.json(returnedObject);
        }
    });
});

// ---

// Hello World
router.get("/health", function (req, res) {
    return res.send("ok"); // For plain text, use res.send
});

router.get("/"), function (req, res){
    return res.send("FETCH APP SERVER \n nothing to find here");
}

// Basic Addition POST request
router.post("/add", function (req, res) {
    let body = req.body; // let is like var, but scoped
   
    let num1 = body.num1;
    let num2 = body.num2;

    let result = num1 + num2;

    return res.json({ // For JSON data, use res.json
        "result": result
    });
});


// Basic SQL GET Request
router.get("/countrycodes", function (req, res) {
    let sql = "Select * from Country;"

    db.query(sql, function (err, result) {
        console.log("Result: " + JSON.stringify(result));
        if (err) {
            return res.send(err);
        } else {
            return res.send(result);
        }
    });
});

router.post("/newcountry", function(req, res) {
    let body = req.body;
    
    let name = body.name;
    let code = body.code;
    
    let sql = `
        Insert into Country values
            (null, "${name}", "${code}")
        ;
    `;
    db.query(sql, function (err, result) {
        console.log("Result: " + JSON.stringify(result));
        if (err) {
            return res.send(err);
        } else {
            return res.json(result);
        }
    });   
});

// Initialize server

// var portN = 3000;
// router.listen(portN, () => {
//     console.log(`Running on port %d.`, portN);
//   });

// Export the created router
module.exports = router;


