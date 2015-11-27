Meteor.subscribe('groups');

GroupService = {
    findBySimulation(simulation) {
        return Group.find({
            simulationId: simulation._id,
        });
    },
};
