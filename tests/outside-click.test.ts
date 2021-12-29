/**
 * @jest-environment jsdom
 */

import ElementNotFoundError from "../src/errors/element-not-found-error";
import OutsideClick from "../src/outside-click";

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

    test('ensure can dispatch a action when document click has been trigged', () => {
        const outsideClick = makeSut();
        const spy = jest.spyOn(outsideClick, 'dispatch');

        document.body.click();

        expect(spy).toHaveBeenCalled();
    });

    test('ensure it dont dispatch if itself was clicked', () => {
        const outsideClick = makeSut();
        const spy = jest.spyOn(outsideClick, 'dispatch');
        const element = outsideClick.getElement();

        // @ts-ignore
        element.click();

        expect(spy).not.toHaveBeenCalled();
    });
});
