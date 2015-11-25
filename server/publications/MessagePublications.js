Meteor.publish('messages', function() {
    const loggedUserId = Meteor.settings.public.loggedUser.id;
    return Message.find({
        $or: [
            {emitter: loggedUserId},
            {recipient: loggedUserId},
        ],
    });
})
