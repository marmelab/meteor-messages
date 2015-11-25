Meteor.methods({
    addMessage(message) {
        return Message.insert(message);
    },
});
