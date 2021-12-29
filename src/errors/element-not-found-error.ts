export default class ElementNotFoundError extends Error {
    constructor() {
        super('Element not found');
        this.name = 'ElementNotFoundError';
    }
}
