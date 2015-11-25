Meteor.publish('messagecopies', function() {
    return MessageCopy.find();
})
