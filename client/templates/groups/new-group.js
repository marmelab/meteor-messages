Template.newGroup.onCreated(() => {
    const slug = FlowRouter.getParam('simulationSlug');
    this.simulation = SimulationService.findBySlug(slug);

    if (!this.simulation) {
        FlowRouter.go('simulations');
    }
});

Template.newGroup.events({
    'submit form': (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const login = event.target.login.value;
        const password = event.target.password.value;

        if (!name || !login || !password) {
            return;
        }

        Group.insert({
            name,
            login,
            password,
            simulationId: this.simulation._id,
            users: [],
        });

        event.target.name.value = '';
        event.target.login.value = '';
        event.target.password.value = '';
    },
});
