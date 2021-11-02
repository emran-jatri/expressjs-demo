const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
// imports end

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "name field is required"],
  },
});

userSchema.plugin(mongoosePaginate);

const User = mongoose.model("User", userSchema);

module.exports = User;
