import { render, cleanup, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { HelloWorld } from './HelloWorld';
import { getByText } from '@testing-library/dom';

afterEach(cleanup);

let container: HTMLElement;
describe('HelloWorld component suites tests', () => {
    beforeEach(() => {
        const component = render(
            <HelloWorld
                name="Jean"
                title="Hello world"
                description="Lorem ipsum"
            />
        );
        container = component.container;
    });
    test('Verify displayed', () => {
        expect(container).toBeInTheDocument();
        expect(getByText(container, 'Lorem ipsum')).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: /Hello world, Jean !/i })
        ).toBeInTheDocument();
    });
});
