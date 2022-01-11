const mongoose = require('mongoose'); 

const switchSchema = new mongoose.Schema ({
    switchType: {
        type: String,
        enum: ["Cherry MX", "Gateron", "Kailh"],
        required: true,
    },
    switchColor: {
        type: String,
        enum: ["Reds", "Yellows", "Blacks", "Blues"],
        required: true,
    },
    switchLube: {
        type: Boolean,
        required: true,
},
});

module.exports = mongoose.model('Switches', switchSchema);