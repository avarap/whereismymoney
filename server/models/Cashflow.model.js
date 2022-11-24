const { Schema, model, default: mongoose } = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");


const cashFlowSchema = new Schema(
  {
    valueDate: Date,
    description: String,
    totalAmount: Number,
    overall: [
      {
        percentage: Number,
        paid: Boolean,
        user: { type: Schema.Types.ObjectId, ref: "User" },
      },
    ],
    picture: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    // this second object adds: `createdAt`, `updatedAt`
    timestamps: true,
  }
);

cashFlowSchema.plugin(findOrCreate);
const CashFlow = model("CashFlow", cashFlowSchema);

module.exports = CashFlow;
