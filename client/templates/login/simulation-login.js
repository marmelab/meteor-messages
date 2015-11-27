Template.simulationLogin.onCreated(function() {
    const slug = FlowRouter.getParam('simulationSlug');
    this.subscribe('simulations_by_slug', slug);
});

Template.simulationLogin.onRendered(function() {
    Session.set('loginErrors', null);
});

Template.simulationLogin.helpers({
    errors() {
        Session.get('loginErrors');
    },
    simulation() {
        const slug = FlowRouter.getParam('simulationSlug');
        return SimulationService.findBySlug(slug);
    },
});

Template.simulationLogin.events({
    'submit .form-signin': function(event) {
        event.preventDefault();
        const slug = FlowRouter.getParam('simulationSlug');
        const simulation = SimulationService.findBySlug(slug);

        const givenUsername = event.target.username.value;
        const username = `${givenUsername}-${simulation.slug}`;
        const password = event.target.password.value;

        Meteor.loginWithPassword(username, password, (err) => {
            if (err) {
                Session.set('loginErrors', err.reason);
            } else {
                Session.set('loginErrors', null);
                FlowRouter.go('messages', {
                    simulationSlug: simulation.slug,
                });
            }
        });

        event.target.username.value = '';
        event.target.password.value = '';
    },
});
