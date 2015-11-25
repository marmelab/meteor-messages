Template.newMessage.helpers({
    actualGroupUsers: function() {
        return Meteor.settings.public.actualGroup.users;
    },
    groups: function() {
        return Meteor.settings.public.groups;
    },
});

Template.newMessage.events({
    'submit .new-message': function(event) {
        event.preventDefault();

        const subject = event.target.messageSubject.value;
        const body = event.target.messageBody.value;
        const emitter = event.target.messageEmitter.value;
        const recipient = event.target.messageRecipient.value;

        if(!subject || !body || !emitter || !recipient) {
            return;
        }

        Meteor.call('addMessage', {
            subject: subject,
            body: body,
            emitter: emitter,
            recipient: recipient,
        });

        event.target.messageSubject.value = '';
        event.target.messageBody.value = '';
        event.target.messageEmitter.value = '';
        event.target.messageRecipient.value = '';
    }
});
