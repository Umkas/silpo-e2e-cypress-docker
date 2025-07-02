const sliderLocators = {
    title: 'h2.products-carousel__title',
    teaser: '[aria-label="Карусель товарів"]',
    prevButton: '[aria-label="Прокрутіть ліворуч"]',
    nextButton: '[aria-label="Прокрутити праворуч"]',
    seeMoreButton: '[aria-label="Показати всі продукти"]'
};

export class ProductSlider {
    constructor(private titleText: string) { }

    getTitleEl() {
        return cy.contains(sliderLocators.title, this.titleText);
    }

    getContainer() {
        return this.getTitleEl().parents('.products-carousel');
    }

    getSeeMoreButton() {
        return this.getContainer().find(sliderLocators.seeMoreButton)
    }

    getNextButton() {
        return this.getContainer().find(sliderLocators.nextButton);
    }

    getPrevButton() {
        return this.getContainer().find(sliderLocators.prevButton);
    }

    getAllTeasers() {
        return this.getContainer().find(sliderLocators.teaser);
    }

    getVisibleTeasers() {
        return this.getAllTeasers().filter(':visible');
    }

    clickNext() {
        this.getNextButton().click();
    }

    clickPrev() {
        this.getPrevButton().click();
    }

    clickSeeMore() {
        this.getSeeMoreButton().click();
    }
}