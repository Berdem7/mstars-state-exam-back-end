const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToDoListSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Enter the title"],
    },
    checked: {
      type: Boolean,
      required: [true, "Enter whether checked or not"],
    },
    checked_date: {
      type: Date,
      default: undefined,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("ToDoList", ToDoListSchema);
