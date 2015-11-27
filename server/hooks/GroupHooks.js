Group.after.insert((userId, group) => {
    const user = Meteor.users.findOne(userId);
    if (!user.superuser) {
        return;
    }

    const simulation = Simulation.findOne(group.simulationId);

    Accounts.createUser({
        username: `${group.login}-${simulation.slug}`,
        password: group.password,
        simulationId: group.simulationId,
    });
});

Group.before.remove((userId, group) => {
    const user = Meteor.users.findOne(userId);
    if (!user.superuser) {
        return;
    }

    const simulation = Simulation.findOne(group.simulationId);

    Meteor.users.remove({
        username: `${group.login}-${simulation.slug}`,
        simulationId: group.simulationId
    });
});
