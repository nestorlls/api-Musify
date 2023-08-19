const { compareSync, genSalt, hashSync } = require('bcryptjs');
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  image: { type: String },
});

UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

UserSchema.methods.comparePasswords = function (password) {
  return compareSync(password, this.password);
};

UserSchema.pre('save', (next) => {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  const salt = genSalt(10);
  const passwordHashed = hashSync(user.password, salt);
  user.password = passwordHashed;
  return next();
});

const User = model('User', UserSchema);

module.exports = User;
