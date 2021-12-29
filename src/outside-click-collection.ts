import OutsideClick from "../tests/outside-click";

export default class OutsideClickCollection {
    private items: Array<OutsideClick> = [];
    private registeredEvents: boolean = false;

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
        for (let item of this.items) {
            item.dispatch();
        }
    }
}
