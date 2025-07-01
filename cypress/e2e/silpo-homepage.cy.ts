describe('Відображення акційних товарів у продуктовому слайдері "Акції" та коректна робота товарного слайдеру', () => {
    it('Сторінка silpo.ua завантажується менше ніж за 3 секунди', () => {
        cy.visit('https://silpo.ua');

        cy.window().then((win) => {
            const { loadEventEnd, navigationStart } = win.performance.timing;
            const loadTime = loadEventEnd - navigationStart;
            expect(loadTime).to.be.lessThan(3000);
        });
    });


});

