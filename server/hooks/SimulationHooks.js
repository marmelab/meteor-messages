Simulation.after.insert((userId, simulation) => {
    const user = Meteor.users.findOne(userId);
    if (!user.superuser) {
        return;
    }

    Group.insert({
        name: 'Animators',
        simulationId: simulation._id,
        login: Meteor.settings.animator.login,
        password: Meteor.settings.animator.password,
        isAnimator: true,
        users: ['Animator'],
    });
});
