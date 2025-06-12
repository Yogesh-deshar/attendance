import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  total_attendance: Number,
  leave_count: Number,
  role: String,
});

const User = mongoose.model("User", userSchema);

export default User;
