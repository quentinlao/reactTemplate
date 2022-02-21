/// <reference types="cypress" />

import { expect } from 'chai';

describe('Welcoming flow', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.request('GET', '/helloworld.json').should((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('Check navigating', () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'React App template');

        cy.get('#helloWorldId').should('be.visible');
        cy.get('[data-test-id="descriptionId"]').should(
            'contain',
            'Lorem ipsum'
        );
    });
});
