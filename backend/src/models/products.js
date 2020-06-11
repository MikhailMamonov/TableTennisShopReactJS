import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    category: String,
    label: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', ProductSchema);

//export default Product;
