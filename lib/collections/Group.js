Group = new Meteor.Collection('groups');

Group.allow({
    insert(userId, group) {
        const existingGroup = Group.find({
            login: group.login,
            simulationId: group.simulationId,
        }).count();

        if (existingGroup) {
            return false;
        }

        const user = Meteor.users.findOne(userId);
        return user.superuser;
    },
    update(userId, group) {
        const user = Meteor.users.findOne(userId);
        return user.superuser;
    },
    remove(userId) {
        const user = Meteor.users.findOne(userId);
        return user.superuser;
    },
});
