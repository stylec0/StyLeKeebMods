const mongoose = require('mongoose'); 

const keyboardTypeSchema = new mongoose.Schema ({
    size: {
        type: String,
        enum: ["40%", "60-65%", "75%", "TKL(80%)", "100%"],
        required: true,
    },
    keyboardType: {
        type: String,
        enum: ["Tofu", "NovelKeys", "Drop", "Epomaker"],
        required: true,
    },
});


const keyboardSchema = new mongoose.Schema ({
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        keyboard: [keyboardTypeSchema],
    })


module.exports = mongoose.model('Keyboard', keyboardSchema);