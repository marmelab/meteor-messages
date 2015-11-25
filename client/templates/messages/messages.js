Meteor.subscribe('messages');

Template.messages.helpers({
    messages: function() {
        const loggedUserId = Meteor.settings.public.loggedUser.id;
        return Message.find({emitter: loggedUserId});
    },
});
