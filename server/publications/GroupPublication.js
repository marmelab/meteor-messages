Meteor.publish('groups', function(simulationId = null) {
    if (!this.userId) {
        return;
    }

    const user = Meteor.users.findOne(this.userId);
    const simulation = (simulationId) ? Simulation.findOne(simulationId) : null;

    if (user.superuser) {
        return Group.find();
    }

    if (simulation) {
        return Group.find({
            simulationId: simulation._id,
        });
    }
})
