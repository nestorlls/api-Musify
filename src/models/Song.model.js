const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const SongSchema = new Schema({
  number: { type: Number, required: true },
  name: { type: String, required: true },
  duration: { type: Number, required: true },
  file: { type: String },
  album: {
    type: Schema.Types.ObjectId,
    ref: 'Album',
    required: true,
    autopopulate: true,
  },
});

SongSchema.plugin(require('mongoose-autopopulate'));

const Song = model('Song', SongSchema);

module.exports = Song;
