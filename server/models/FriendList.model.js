const { Schema, model, default: mongoose } = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const friendListSchema = new Schema(
  {
    referenceID: {
      type: String,
      required: true,
    },
    name: String,
    alias: String,
    email: String,
    picture: String,
    Owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

// propertySchema.plugin(autoIncrement.plugin, {
//   model: "FriendList",
//   field: "referenceID",
// });
friendListSchema.index({ referenceID: 1, Owner: 1 }, { unique: true });

const FriendList = model("FriendList", friendListSchema);

module.exports = FriendList;
