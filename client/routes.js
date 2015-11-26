simulationsRoot = FlowRouter.group({
    prefix: '/simulations',
    name: 'simulationsRoot',
});

simulationsRoot.route('/', {
    name: 'simulations',
    triggersEnter: [loggedOnly('homepage')],
    action() {
        BlazeLayout.render('mainLayout', {components: [
            {name: 'newSimulation'},
            {name: 'simulations'},
        ]});
    },
});

simulationsRoot.route('/:simulationSlug/login', {
    name: 'simulation-login',
    triggersEnter: [unloggedOnly('simulations')],
    action() {
        BlazeLayout.render('loginLayout', {components: [
            {name: 'simulationLogin'},
        ]});
    },
});

simulationsRoot.route('/:simulationSlug', {
    name: 'simulation',
    triggersEnter: [loggedOnly('homepage')],
    action() {
        BlazeLayout.render('mainLayout', {components: [
            {name: 'simulation'},
        ]});
    },
});

FlowRouter.route('/', {
    name: 'homepage',
    triggersEnter: [unloggedOnly('simulations')],
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
