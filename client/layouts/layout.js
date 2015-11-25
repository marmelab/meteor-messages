Template.mainLayout.events({
    'click #logout': function() {
        Meteor.logout(() => FlowRouter.go('/'));
    },
});
