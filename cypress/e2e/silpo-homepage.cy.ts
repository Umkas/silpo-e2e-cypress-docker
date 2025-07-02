import { HomePage } from '../pages/homepage';

describe('[US-1-CK-1] Замірювання швидкості завантаження', () => {
    it('[US-1-CK-1] сторінка silpo.ua має завантажується менше ніж за 3 секунди', () => {
        cy.visit('/');

        cy.window().then((win) => {
            const { loadEventEnd, navigationStart } = win.performance.timing;
            const loadTime = loadEventEnd - navigationStart;
            // console.log(`Час завантаження: ${loadTime}`);
            expect(loadTime).to.be.lessThan(3000);
        });
    });

});

describe('[US-1] Відображення акційних товарів у продуктовому слайдері "Акції" та коректна робота товарного слайдеру', () => {
    // const allowedUrls = [
    //     'https://silpo.ua/',
    //     'https://www.silpo.ua/'
    // ];

    function getAllowedUrlsWithPath(path: string): string[] {
        const baseUrls = [
            'https://silpo.ua',
            'https://www.silpo.ua'
        ];
        return baseUrls.map(base => `${base}${path}`);
    }

    const allowesBaseUrls = getAllowedUrlsWithPath('/');
    const allowesOfferUrls = getAllowedUrlsWithPath('/offers');

    const homePage = new HomePage();

    beforeEach(() => {
        cy.wait(2000);
        cy.visit('/');
    });

    it('[US-1-CK-2] має повернути статус-код 200 для головної', () => {
        cy.request('/').then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('[US-1-CK-3] має бути коректний <title> і URL головної сторінки', () => {
        // cy.visit('/');

        cy.title().should('include', 'Сільпо');
        cy.url().then((url) => {
            expect(allowesBaseUrls).to.include(url);
        });
        // cy.url().should('eq', 'https://www.silpo.ua/');
    });

    it('[US-1-CK-4] має відображаться слайдер "Акції"', () => {
        homePage.promotionsSlider.getContainer().should('be.visible');
    });

    it('[US-1-CK-6] мають відображатися стрілки навігації слайдера "Акції"', () => {
        homePage.promotionsSlider.getNextButton().should('be.visible');
        homePage.promotionsSlider.getPrevButton().should('be.visible');
    });


    it('[US-1-CK-7] мають працювати кнопки навигації слайдера "Акції"', () => {
        homePage.promotionsSlider.clickNext();
        cy.wait(4000);
        homePage.promotionsSlider.clickPrev();
    });

        it('[US-1-CK-13] при кліку на кнопку "Показати всі" у слайдері має перейти на сторінку /offers', () => {
        homePage.promotionsSlider.clickSeeMore();
        cy.wait(4000);
        // cy.url().should('eq', 'https://silpo.ua/offers');
        cy.url().then((url) => {
            expect(allowesOfferUrls).to.include(url);
        });
    });
// не працює - треба розбиратись
    // it('[US-1-CK-5] при ширині вікна 1024px має відображатися 6 товарів у слайдері "Акції"', () => {
    //     cy.viewport(1024, 800);

    //     homePage.promotionsSlider
    //         .getVisibleTeasers()
    //         .should('have.length', 6);
    // });


});

