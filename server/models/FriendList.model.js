const { Schema, model, default: mongoose } = require("mongoose");

const friendListSchema = new Schema(
  {
    alias: {
      type: String,
      required: true,
    },
    name: String,
    email: String,
    picture: String, //opcional
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

friendListSchema.index({ alias: 1, Owner: 1 }, { unique: true });

const FriendList = model("FriendList", friendListSchema);

module.exports = FriendList;
