simulationsRoot = FlowRouter.group({
    prefix: '/simulations',
    name: 'simulationsRoot',
});

simulationsRoot.route('/', {
    name: 'simulations',
    triggersEnter: [authenticatedOnly('homepage')],
    action() {
        BlazeLayout.render('mainLayout', {components: [
            {name: 'newSimulation'},
            {name: 'simulations'},
        ]});
    },
});

simulationsRoot.route('/:simulationSlug/login', {
    name: 'simulation-login',
    triggersEnter: [anonymousOnly('simulations')],
    action() {
        BlazeLayout.render('loginLayout', {components: [
            {name: 'simulationLogin'},
        ]});
    },
});

simulationsRoot.route('/:simulationSlug', {
    name: 'simulation',
    triggersEnter: [authenticatedOnly('homepage')],
    action() {
        BlazeLayout.render('mainLayout', {components: [
            {name: 'simulation'},
        ]});
    },
});

FlowRouter.route('/', {
    name: 'homepage',
    triggersEnter: [anonymousOnly('simulations')],
    action() {
        BlazeLayout.render('loginLayout', {components: [
            {name: 'login'},
        ]});
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
