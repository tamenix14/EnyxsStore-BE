const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    maxLength: [100, "Product name cannot exceed 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxlength: [5, "Product price cannot exceed 5 characters"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please select category for this product"],
    enum: {
      values: [
        "Phone",
        "Smart watch",
        "Headphone",
      ],
      message: "Please select correct category for product",
    },
  },
  color: {
    type: String,
    enum: ["Black", "Brown", "Silver", "White", "Blue", "Ocean"],
  },
  brand: {
    type: String,
    required: [true, "Please select brand for this product"],
    enum: {
      values: [
        "Apple",
        "Asus",
        "Samsung",
        "Nokia",
        "Xiaomi",
        "Oppo",
        "Vsmart",
        "Huawei",
      ],
      message: "Please select correct brand for product",
    },
  },
  seller: {
    type: String,
    required: [true, "Please enter product seller"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    maxLength: [5, "Product stock cannot exceed 5 characters"],
    default: 0,
  },
  // Technical specifications
  screensize: {
    type: String,
    required: [true, "Please enter Screen size"],
  },
  screentechnology: {
    type: String,
    required: [true, "Please enter Screen Technology"],
  },
  ramcapacity: {
    type: String,
    required: [true, "Please enter Ram Capacity"],
  },
  internalmemory: {
    type: String,
    required: [true, "Please enter Internal Memory"],
  },
  battery: {
    type: String,
    required: [true, "Please enter Battery"],
  },
  operatingsystem: {
    type: String,
    required: [true, "Please enter Operating System"],
  },
  material: {
    type: String,
    required: [true, "Please select material for this product"],
    enum: {
      values: [
        "Plastic",
        "Metal",
        "Glass",
      ],
      message: "Please select correct material for product",
    },
  },


  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  },
});

module.exports = mongoose.model("Product", productSchema);
