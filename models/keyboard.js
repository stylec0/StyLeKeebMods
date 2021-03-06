const mongoose = require('mongoose'); 

const commentSchema = new mongoose.Schema ({ ////< --Embedded
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    userName: {
        type: String,
    },
    content: String,
    },
{
    timestamps: true,
})

const keyboardSchema = new mongoose.Schema ({
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        name: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            enum: ["40%", "60-65%", "75%", "TKL(80%)", "100%"],
            required: true,
},
        keyboardModel: {
            type: String,
            enum: ["Tofu", "NovelKeys", "Drop", "Epomaker", "GMMK", "Keychron", "KDBFans", "FreeBird", "GamaKay"],
            required: true,
},
        switchType: {
            type: String,
            enum: ["Cherry MX", "Gateron", "Kailh", "Durock"],
            required: true,
},
        switchColor: {
            type: String,
            enum: ["Reds", "Yellows", "Blacks", "Blues", "Silvers"],
            required: true,
},
    comments: [commentSchema]
})


module.exports = mongoose.model('Keyboard', keyboardSchema);

