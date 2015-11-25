Meteor.subscribe('simulations');

SimulationService = {
    findAll() {
        return Simulation.find();
    },
};
