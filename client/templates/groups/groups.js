Template.groups.onCreated(() => {
    const slug = FlowRouter.getParam('simulationSlug');
    this.simulation = SimulationService.findBySlug(slug);

    if (!this.simulation) {
        FlowRouter.go('simulations');
    }
});

Template.groups.helpers({
    groups: () => GroupService.findBySimulation(this.simulation),
});

Template.groups.events({
    'click table button.delete': (event) => {
        event.preventDefault();

        const groupId = $(event.currentTarget).data('group');
        Group.remove(groupId);
    },
    'click table button.new-user': (event, template) => {
        event.preventDefault();

        const groupId = $(event.currentTarget).data('group');
        const group = Group.findOne(groupId);
        const input = template.find(`.new-user-input[data-group=${groupId}]`);

        if (input.value) {
            let users = group.users || [];
            users.push(input.value);

            Group.update(group._id, {
                $set: {users: users},
            });

            input.value = '';
        }
    },
});

Template.groupUser.events({
    'click a.del-user': (event, template) => {
        event.preventDefault();

        const groupId = $(event.currentTarget).data('group');
        const user = $(event.currentTarget).data('user');
        const group = Group.findOne(groupId);
        const users = group.users || [];

        Group.update(group._id, {
            $set: {users: users.filter((i) => i !== user)}
        });
    },
});
