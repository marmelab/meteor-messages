Meteor.subscribe('simulations');

SimulationService = {
    findAll() {
        return Simulation.find();
    },
    findBySlug(slug) {
        return Simulation.findOne({slug});
    },
};
