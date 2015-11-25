Meteor.subscribe('simulations');

Template.simulations.helpers({
    simulations: () => SimulationService.findAll(),
});
