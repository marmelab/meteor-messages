Template.login.onRendered(() => {
    Session.set('loginErrors', null);
});

Template.login.helpers({
    errors: () => Session.get('loginErrors'),
});

Template.login.events({
    'submit .form-signin': function(event) {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        Meteor.loginWithPassword(username, password, (err) => {
            if (err) {
                Session.set('loginErrors', err.reason);
            } else {
                Session.set('loginErrors', null);
                FlowRouter.go('/simulations');
            }
        });

        event.target.username.value = '';
        event.target.password.value = '';
    },
});
