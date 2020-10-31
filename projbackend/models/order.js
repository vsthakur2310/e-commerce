// // import mongoose from "mongoose";
var mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema;
// const ProductCart = require("../models/productCart");

const ProductCartSchema = new Schema({
  product: {
    type: ObjectId,
    ref: "Product",
  },
  name: String,
  count: Number,
  price: Number,
});

let ProductCart;
try {
  ProductCart = mongoose.model("ProductCart");
} catch (error) {
  ProductCart = mongoose.model("ProductCart", ProductCartSchema);
}

// const ProductCart = mongoose.model("ProductCart", ProductCartSchema);
// module.exports =  mongoose.model.ProductCart || mongoose.model("ProductCart", ProductCartSchema);

const OrderSchema = new Schema(
  {
    products: [ProductCartSchema],
    transaction_id: {},
    amount: { type: Number },
    addresss: String,
    status: {
      type: String,
      default: "Received",
      enum: ["Cancelled", "Delivered", "Shipped", "In-Process", "Received"],
    },
    updated: Date,
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

let Order;
try {
  Order = mongoose.model("Order");
} catch (error) {
  Order = mongoose.model("Order", OrderSchema);
}
// const Order = mongoose.model("Order", OrderSchema);
// module.exports = mongoose.model("Order", OrderSchema);

module.exports = { Order, ProductCart };


function printprops(o)
{
  for(var p in o )
  console.log(p+":" + o[p] + "\n")
}