require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
	const connection = mongoose
		.connect('mongodb://localhost:27017/CrudAppAmit')
		.then((result) => console.log("Connected to database"))
		.catch((err) => console.log("could not connect to database"));
};
