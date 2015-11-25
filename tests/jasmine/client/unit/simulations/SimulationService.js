describe('Simulation Service', () => {
    beforeEach(() => {
        MeteorStubs.install();
        mock(window, 'Simulation');
    });

    afterEach(() => {
        MeteorStubs.uninstall();
    });

    describe('findAll', () => {
        it('should find empty', () => {
            const result = {};
            spyOn(Simulation, 'find').and.returnValue(result);

            expect(SimulationService.findAll()).toBe(result);
        });

        it('should find same simulations', () => {
            const result = {
                name: 'First simulation',
                slug: 'first-simulation',
            };
            spyOn(Simulation, 'find').and.returnValue(result);

            expect(SimulationService.findAll()).toBe(result);
        })
    });
});
