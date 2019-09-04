var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema ({
    airport: {
         type: String,
         required: true,
         default: "SEA"
    },
    arrivalDate: Date
});

var flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departDate: Date},
    {
    destination: [destinationSchema]    
}, {
    timestamps: true
});
    


module.exports = mongoose.model('Flight', flightSchema);