const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/GraphQL', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
    console.log('data base connected');
});
const Event = mongoose.model("Event", {

    eventId: {
        type: Number
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    location: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    eventDateTime: {
        type: Date
    },
    empId: {
        type: String
    },
    rewardPoints: {
        type: String
    }
});

module.exports = Event;