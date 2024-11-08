const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  enrolledCourses: [String],
}, { timestamps: true });

module.exports = mongoose.model('Student', StudentSchema);