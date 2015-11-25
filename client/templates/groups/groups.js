Template.groups.onCreated(() => {
    const slug = FlowRouter.getParam('simulationSlug');
    this.simulation = SimulationService.findBySlug(slug);

    if (!this.simulation) {
        FlowRouter.go('simulations');
    }
});

Template.groups.helpers({
    groups: () => GroupService.findBySimulation(this.simulation),
});

Template.groups.events({
    'click table button': (event) => {
        event.preventDefault();

        const groupId = $(event.currentTarget).data('id');
        Group.remove(groupId);
    },
});
