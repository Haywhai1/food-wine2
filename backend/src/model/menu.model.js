const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Dish name is required"],
      trim: true,
    },
    description: {
        type: String,
        required: [true, "Dish name is required"],
        trim: true,
      },
    // category: {
    //   type: String,
    //   enum: [
    //     "Appetizer",
    //     "Main Course",
    //     "Dessert",
    //     "Beverage",
    //     "Drinks",
    //     "Other",
    //   ],
    //   required: [true, "Category is required"],
    // },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0.01, "Price must be greater than 0"],
    },
    image: {
      type: String,
      required: true, 
      default: "",
    },
    rating: {
        type: Number,
        min: 1.5,
        max: 5.5,
        default: 3.5, // or any value in that range
    },
    isAvailable: {
      type: Boolean,
      default: true, 
    },
    // createdBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);
const MenuItem = mongoose.model("Menu", menuSchema);

module.exports = MenuItem;
