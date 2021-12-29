/**
 * @jest-environment jsdom
 */

class OutsideClick {
    private element: Element|null = null;

    constructor(element: Element|string) {
        this.setElement(element);
    }

    private setElement(element: string | Element) {
        const domElement = typeof element === 'string' ? document.querySelector(element) : element;
        if (!domElement) {
            throw new Error('Error when trying to set element');
        }
        this.element = domElement;
    }

    getElement(): Element|null {
        return this.element;
    }
}

describe('Outside click', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    });

    test('ensure it can receive a HTML Element in contructor', () => {
        const elmPanel = document.createElement('div');

        const outsideClick = new OutsideClick(elmPanel);

        expect(outsideClick).toBeInstanceOf(OutsideClick);
    });

    test('ensure it can receive a string on contructor', () => {
        window.document.body.appendChild(document.createElement('div'));
        const elmName = 'div';

        const outsideClick = new OutsideClick(elmName);

        expect(outsideClick).toBeInstanceOf(OutsideClick);
    });

    test('ensure it can transform the string on HTML Element on constructor', () => {
        window.document.body.appendChild(document.createElement('div'));
        const elmName = 'div';

        const outsideClick = new OutsideClick(elmName);
        const element = outsideClick.getElement();

        expect(element).toBeInstanceOf(HTMLDivElement);
    });
});
