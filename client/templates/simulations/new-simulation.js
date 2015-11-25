Template.newSimulation.events({
    'change input[name=name]': (event) => {
        const simulationName = event.target.value;
        const slugInput = event.delegateTarget.children[1][1];

        if (simulationName) {
            slugInput.value = slugify(simulationName);
        }
    },
});
