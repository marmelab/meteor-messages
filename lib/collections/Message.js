Message = new Meteor.Collection('messages');

Message.allow({
    insert(userId, message) {
        const loggedUserId = Meteor.settings.public.loggedUser.id;
        return Message.emitter === loggedUserId;
    },
});
