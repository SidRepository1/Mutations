var Event = require('./Mongoose');
//  Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

const resolvers = {
    Query: {
        Event: () => { return EventData; },
        getEventById: (_, data) => {
            var _id = data.id;
            return EventData.filter(event => { return event.id == _id; });
        }
    },
    Mutation: {
        addEvent: (_, data) => {
            EventData.push(data);
            return EventData;
        }
    }
};

var EventData = [
    {
        id: 100,
        eventId: 1,
        title: 'shila',
        location: {
            cor: [18, 20]
        }

    },
    {
        id: 200,
        eventId: 2,
        title: 'mira',
        location: {
            cor: [18, 20]
        }
    },
    {
        id: 300,
        eventId: 3,
        title: 'kina',
        location: {
            cor: [18, 20]
        }
    }
];

module.exports = resolvers;