/**
 * @jest-environment jsdom
 */

class ElementNotFoundError extends Error {
    constructor() {
        super('Element not found');
        this.name = 'ElementNotFoundError';
    }
}

class OutsideClick {
    private element: Element|null = null;

    constructor(element: Element|string) {
        this.setElement(element);
    }

    static create(element: Element|string) {
        return new this(element);
    }

    private setElement(element: string | Element) {
        const domElement = typeof element === 'string' ? document.querySelector(element) : element;
        if (!domElement) {
            throw new ElementNotFoundError();
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

        const outsideClick = new OutsideClick('div');

        expect(outsideClick).toBeInstanceOf(OutsideClick);
    });

    test('ensure it can transform the string on HTML Element on constructor', () => {
        window.document.body.appendChild(document.createElement('div'));

        const outsideClick = new OutsideClick('div');
        const element = outsideClick.getElement();

        expect(element).toBeInstanceOf(HTMLDivElement);
    });

    test('ensure it throws when an inexistent element has been passed', () => {
        const elmName = 'div';

        expect(() => new OutsideClick(elmName)).toThrowError(ElementNotFoundError);
    });

    test('ensure can create an instance from a static method', () => {
        window.document.body.appendChild(document.createElement('div'));

        const outsideClick = OutsideClick.create('div');
        const element = OutsideClick.create('div').getElement();

        expect(outsideClick).toBeInstanceOf(OutsideClick);
        expect(element).toBeInstanceOf(HTMLDivElement);
    });
});
