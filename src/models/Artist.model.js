const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ArtistSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
});

const Artist = model('Artist', ArtistSchema);

module.exports = Artist;
