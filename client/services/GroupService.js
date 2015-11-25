Meteor.subscribe('groups');

GroupService = {
    findBySimulation(simulationId) {
        return Group.find({
            simulationId,
        });
    },
};
