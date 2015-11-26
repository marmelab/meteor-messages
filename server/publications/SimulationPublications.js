Meteor.publish('simulations', function() {
    if (this.userId) {
        const user = Meteor.users.findOne(this.userId);

        if (user.superuser) {
            return Simulation.find();
        }

        return Simulation.find({_id: user.simulationId});
    }
})

Meteor.publish('simulations_by_slug', function(slug) {
    return Simulation.find({slug});
});
