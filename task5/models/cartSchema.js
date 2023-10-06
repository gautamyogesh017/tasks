const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 },
        price: { type: Number, default: 0 },
      },
    ],
    total_Amount: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Carts = mongoose.model("Cart", cartSchema);

module.exports = Carts;
