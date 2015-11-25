Simulation = new Meteor.Collection('simulations');

SimulationSchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Simulation name',
    },
    slug: {
        type: String,
        label: 'Simulation slug',
        unique: true,
    },
    startDate: {
        type: Date,
        label: 'Simulation start date',
    },
    endDate: {
        type: Date,
        label: 'Simulation end date',
    },
    createdAt: {
        type: Date,
        label: 'Simulation date of creation',
        denyUpdate: true,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else {
                this.unset();
            }
        },
    },
});

Simulation.attachSchema(SimulationSchema);

Simulation.allow({
    insert(userId, simulation) {
        const user = Meteor.users.findOne(userId);
        return user.superuser;
    },
});
