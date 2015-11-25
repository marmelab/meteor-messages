loggedOnlyRoutes = FlowRouter.group({
    prefix: '/simulations',
    name: 'logged',
    triggersEnter: [function(context, redirect) {
        if (!Meteor.userId()) {
            redirect('homepage');
        }
    }],
});

loggedOnlyRoutes.route('/', {
    name: 'simulations',
    action() {
        BlazeLayout.render('mainLayout', {components: [
            {name: 'newSimulation'},
            {name: 'simulations'},
        ]});
    },
});

loggedOnlyRoutes.route('/:simulationSlug', {
    name: 'simulation',
    action() {
        BlazeLayout.render('mainLayout', {components: [
            {name: 'simulation'},
        ]});
    },
});

FlowRouter.route('/', {
    name: 'homepage',
    triggersEnter: [function(context, redirect) {
        if(Meteor.userId()) {
            redirect('simulations');
        }
    }],
    action() {
        BlazeLayout.render('login');
    },
});

FlowRouter.route('/messages', {
    name: 'messages',
    action() {
        BlazeLayout.render('mainLayout', {components: [
            {name: 'newMessage'},
            {name: 'messages'},
        ]});
    },
});

FlowRouter.notFound = {
    action() {
        FlowRouter.redirect('/');
    }
};
