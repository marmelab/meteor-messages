Template.mainLayout.events({
    'click #logout': function() {
        const simulationSlug = FlowRouter.getParam('simulationSlug');
        let redirect = () => FlowRouter.go('homepage');

        if (simulationSlug) {
            redirect = () => FlowRouter.go('simulation', {simulationSlug});
        }
        Meteor.logout(redirect);
    },
});
