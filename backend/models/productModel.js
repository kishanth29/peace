const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    maxlength: [100, "Product name cannot exceed 100 characters"],
  },
  price: {
    type: Number,
    required: true,
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "please enter product description"],
  },
  ratings: {
    type: String,
    default: 0,
  },
  images: [
    {
      image: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter product category"],
    enum: {
      values: [
        'workouts',
        'yoga',
        'articles',
        'receipes'
        
      ],
      message: "Please select correct category",
    },
  },
  seller: {
    type: String,
    required: [true, "Please enter product seller"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    maxLength: [20, "Product stock cannot exceed 20"],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
      },
      rating: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      }
    }
  ],
  user:{
    //  take id from mongo bd database
    type: mongoose.Schema.Types.ObjectId
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

let schema = mongoose.model(`product`, productschema);

module.exports = schema;