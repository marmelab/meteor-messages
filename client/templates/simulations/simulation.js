Template.simulation.onCreated(() => {
    const slug = FlowRouter.getParam('simulationSlug');
    this.simulation = SimulationService.findBySlug(slug);

    if (!this.simulation) {
        FlowRouter.go('simulations');
    }
});

Template.simulation.helpers({
    simulation: () => this.simulation,
});
