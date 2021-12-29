import OutsideClick from "./outside-click";

export default abstract class OutsideClickCollection {
    private items: Array<OutsideClick> = [];
    private registeredEvents: boolean = false;
    private _trigger: CallableFunction|null = null;

    constructor() {
        this.registerEvents();
    }

    protected append(item: OutsideClick) {
        if (this.items.indexOf(item) === -1) {
            this.items.push(item);
        }
    }

    private registerEvents() {
        if (this.registeredEvents) {
            return;
        }
        document.addEventListener('click', event => this.handleDocumentClick(event));
    }

    private handleDocumentClick(event: MouseEvent) {
        const parentsElements = this.getParentsElements(event.target as Element);
        const items = this.items.filter(item => item.getElement());
        const nonClickedItems = items.filter(item => {
            if (!item.getTrigger() || typeof item.getTrigger() !== 'function') {
                return false;
            }
            return parentsElements.includes(item.getElement()) === false;
        });
        nonClickedItems.forEach(item => item.dispatch());
    }

    private getParentsElements(element: Element, parents: Array<Element>|null = null): Array<Element> {
        parents = parents || [element];
        const parent = element.parentElement;
        if (parent) {
            parents.push(parent);
            return this.getParentsElements(parent, parents);
        }
        return parents;
    }

    private getTrigger(): CallableFunction|null {
        return this._trigger;
    }

    protected setTrigger(trigger: CallableFunction) {
        this._trigger = trigger;
    }

    private dispatch() {
        const trigger = this.getTrigger();
        if (trigger && typeof trigger === 'function') {
            trigger();
        }
    }
}

