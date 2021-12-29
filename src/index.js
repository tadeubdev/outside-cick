let started = false;
const items = [];

function generateElementFromString(element) {
    return document.querySelector(element);
}

function mountElementBeforeAdd(element) {
    if (typeof element === 'string') {
        return generateElementFromString(element);
    }
    if (element instanceof Element || element instanceof Document) {
        return element;
    }
    throw new Error('Element must be a string or a DOM element');
}

function getParentsElements(element, parents) {
    parents = parents || [element];
    const parent = element.parentElement;
    if (parent) {
        parents.push(parent);
        return getParentsElements(parent, parents);
    }
    return parents;
}

function handleClickOndocument(event) {
    const parentsElements = getParentsElements(event.target);
    const nonClickedItems = items.filter(item => {
        if (item.clickOutMethod === undefined) {
            return false;
        }
        if (item.elmAction && parentsElements.includes(item.elmAction)) {
            return false;
        }
        return parentsElements.includes(item.element) === false;
    });
    nonClickedItems.forEach(item => item.clickOutMethod());
    const clickedItems = items.filter(item => {
        if (item.clickInMethod === undefined) {
            return false;
        }
        if (item.elmAction && parentsElements.includes(item.elmAction)) {
            return true;
        }
        return parentsElements.includes(item.element);
    });
    clickedItems.forEach(item => item.clickInMethod());
}

function registerClickOnDocument() {
    if (started) {
        return;
    }
    started = true;
    document && document.addEventListener('click', (event) => handleClickOndocument(event));
}

export function add(element, clickOutMethod = null, clickInMethod = null) {
    registerClickOnDocument();
    element = mountElementBeforeAdd(element);
    items.push({ element, clickOutMethod, clickInMethod });
};

