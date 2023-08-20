const { strictTransportSecurity } = require('helmet');
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const AlbumSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  year: { type: Date, required: true },
  image: { type: String },
  artist: {
    type: Schema.Types.ObjectId,
    ref: 'Artist',
    required: true,
    autopopulate: true,
  },
});

AlbumSchema.plugin(require('mongoose-autopopulate'));

const Album = model('Album', AlbumSchema);

module.exports = Album;
