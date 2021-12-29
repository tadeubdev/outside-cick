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

const makeSut = (): OutsideClick => {
    const elmDiv = document.createElement('div');
    window.document.body.appendChild(elmDiv);

    return new OutsideClick('div');
}

const makeSutPanel = (): OutsideClick => {
    const elmPanel = document.createElement('div');
    return new OutsideClick(elmPanel);
}

describe('Outside click', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    });

    test('ensure it can receive a HTML Element in contructor', () => {
        const outsideClick = makeSutPanel();

        expect(outsideClick).toBeInstanceOf(OutsideClick);
    });

    test('ensure it can receive a string on contructor', () => {
        const outsideClick = makeSut();

        expect(outsideClick).toBeInstanceOf(OutsideClick);
    });

    test('ensure it can transform the string on HTML Element on constructor', () => {
        const outsideClick = makeSut();
        const element = outsideClick.getElement();

        expect(element).toBeInstanceOf(HTMLDivElement);
    });

    test('ensure it throws when an inexistent element has been passed', () => {
        const elmName = 'div';

        expect(() => new OutsideClick(elmName)).toThrowError(ElementNotFoundError);
    });

    test('ensure can create an instance from a static method', () => {
        const outsideClick = makeSut();
        const element = outsideClick.getElement();

        expect(outsideClick).toBeInstanceOf(OutsideClick);
        expect(element).toBeInstanceOf(HTMLDivElement);
    });
});
