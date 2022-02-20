import { render, cleanup, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { HelloWorld, sumFunction } from './HelloWorld';
import { getByText } from '@testing-library/dom';

afterEach(cleanup);

/**
 * uncomment code to cover component hello world
 */
let container: HTMLElement;
describe('HelloWorld component suites tests', () => {
    beforeEach(() => {
        // const component = render(
        //     <HelloWorld
        //         name="Jean"
        //         title="Hello world"
        //         description="Lorem ipsum"
        //     />
        // );
        // container = component.container;
    });
    test('Verify displayed', () => {
        expect(sumFunction(1, 2)).toEqual(3);
        // expect(container).toBeInTheDocument();
        // expect(getByText(container, 'Lorem ipsum')).toBeInTheDocument();
        // expect(
        //     screen.getByRole('heading', { name: /Hello world, Jean !/i })
        // ).toBeInTheDocument();
    });
});
