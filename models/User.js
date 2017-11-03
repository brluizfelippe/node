const mongoose = require("mongoose");
//const Schema = mongoose.Schema same way to express const { Schema } = mongoose;
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

mongoose.model("users", userSchema);
