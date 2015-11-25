Group = new Meteor.Collection('groups');

Group.allow({
    insert(userId, simulation) {
        const user = Meteor.users.findOne(userId);
        return user.superuser;
    },
});
