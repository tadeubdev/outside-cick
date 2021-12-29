import ElementNotFoundError from "./errors/element-not-found-error";
import OutsideClickCollection from "./outside-click-collection";

export default class OutsideClick extends OutsideClickCollection {
    private element: Element;

    constructor(element: Element|string) {
        super();
        const domElement = typeof element === 'string' ? document.querySelector(element) : element;
        if (!domElement) {
            throw new ElementNotFoundError();
        }
        this.element = domElement;
        this.append(this);
    }

    static create(element: Element|string) {
        return new this(element);
    }

    getElement(): Element {
        return this.element;
    }

    trigger(trigger: CallableFunction) {
        this.setTrigger(trigger);
    }
}
