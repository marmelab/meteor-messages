Accounts.onCreateUser((options, user) => {
    const superuser = options.superuser || false;
    user.superuser = superuser;

    if (options.profile) {
        user.profile = options.profile;
    }

    return user;
});


Meteor.startup(() => {
    if(Meteor.users.find().count() === 0) {
        const superuser = Meteor.settings.superuser;
        Accounts.createUser({
            username: superuser.login,
            password: superuser.password,
            superuser: true,
        });
    }
});
