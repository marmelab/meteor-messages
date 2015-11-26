loggedOnly = (redirectRoute) => (context, redirect) => {
    if (!Meteor.userId()) {
        redirect(redirectRoute);
    }
};

unloggedOnly = (redirectRoute) => (context, redirect) => {
    if(Meteor.userId()) {
        redirect(redirectRoute);
    }
};
