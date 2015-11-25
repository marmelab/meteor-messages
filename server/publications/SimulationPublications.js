Meteor.publish('simulations', function() {
    if (this.userId) {
        const user = Meteor.users.findOne(this.userId);

        if (user.superuser) {
            return Simulation.find();
        }
    }
})
