import ElementNotFoundError from "./errors/element-not-found-error";
import OutsideClickCollection from "./outside-click-collection";

export default class OutsideClick extends OutsideClickCollection {
    private element: Element|null = null;

    constructor(element: Element|string) {
        super();
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
        this.append(this);
    }

    getElement(): Element|null {
        return this.element;
    }

    dispatch() {
        //
    }
}
