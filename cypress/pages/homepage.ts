import { ProductSlider } from '../components/ProductSlider';

export class HomePage {
    promotionsSlider = new ProductSlider('Акції');

    visit() {
        cy.visit('/');
    }
}