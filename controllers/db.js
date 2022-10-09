// Importing the mysql library:
//
// Similar to import in Java, however, you can name the library object whatever
// you want on the left hand side.
// I recommend you `const` all your imports.
const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "fdb28.awardspace.net",
    user: "4188187_db",
    password: "a421[1p-1Lx7,}ed",
    database: "4188187_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("Failed to connect to database- throwing error:");
        throw err;
    }
    console.log("Connected to database succesfully.");
});

// Each Javascript file has an optional export. This export can be anything: here I made the connection object the export.
module.exports = connection;