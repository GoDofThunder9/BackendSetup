const mongoose = require('mongoose');

const descriptionschema = new mongoose.Schema(
    {
        work: {
        type: String,
        required: true
        }
    }
);
const Description = mongoose.model('Description', descriptionschema);
module.exports = Description;