describe('Group Service', () => {
    beforeEach(() => {
        MeteorStubs.install();
        mock(window, 'Group');
    });

    afterEach(() => {
        MeteorStubs.uninstall();
    });

    describe('findBySimulation', () => {
        it('should find good groups', () => {
            const result = [{
                name: 'Great group',
                login: 'AYBABTU',
                password: 'allyourbasearebelongtous',
                simulationId: 42,
            }];
            spyOn(Group, 'find').and.returnValue(result);

            expect(GroupService.findBySimulation({_id: 'forty-two'})).toBe(result);
        });
    });
});
