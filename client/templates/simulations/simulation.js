Template.simulation.onCreated(() => {
    const slug = FlowRouter.getParam('simulationSlug');
    this.simulation = Simulation.findOne({slug});

    if (!this.simulation) {
        FlowRouter.go('simulations');
    }
});

Template.simulation.helpers({
    simulation: () => this.simulation,
});
