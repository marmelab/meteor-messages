authenticatedOnly = (redirectRoute) => (context, redirect) => {
    if (!Meteor.userId()) {
        redirect(redirectRoute);
    }
};

anonymousOnly = (redirectRoute) => (context, redirect) => {
    if(Meteor.userId()) {
        redirect(redirectRoute);
    }
};
