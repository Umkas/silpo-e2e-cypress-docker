describe('[US-1] Відображення акційних товарів у продуктовому слайдері "Акції" та коректна робота товарного слайдеру', () => {
    const allowedUrls = [
        'https://silpo.ua/',
        'https://www.silpo.us/'
    ];




    it('[US-1-CK-1] сторінка silpo.ua має завантажується менше ніж за 3 секунди', () => {
        cy.visit('/');

        cy.window().then((win) => {
            const { loadEventEnd, navigationStart } = win.performance.timing;
            const loadTime = loadEventEnd - navigationStart;
            console.log(`Час завантаження: ${loadTime}`);
            expect(loadTime).to.be.lessThan(3000);
        });
    });

    it('[US-1-CK-2] має повернути статус-код 200 для головної', () => {
        cy.request('/').then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('[US-1-CK-3] має бути коректний <title> і URL головної сторінки', () => {
        cy.visit('/');

        cy.title().should('include', 'Сільпо');
        cy.url().then((url) => {
            expect(allowedUrls).to.include(url);
        });
        // cy.url().should('eq', 'https://www.silpo.ua/');
    });
});

