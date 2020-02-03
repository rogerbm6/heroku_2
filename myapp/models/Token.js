let mongoose = require("mongoose");

let Schema = mongoose.Schema;


let TokenSchema = new Schema({
 _userId: {
   type: mongoose.Schema.Types.ObjectId,
   required: true,
   ref: "Usuario"
 },


 token: {
   type: String,
   required: true
 },


 createAt: {
   type: Date,
   required: true,
   default: Date.now,
   expires: 43200
 }
});
module.exports = mongoose.model("Token", TokenSchema);
