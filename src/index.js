let started = false;
const items = [];

function generateElementFromString(element) {
    return document.querySelector(element);
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
    document.addEventListener('click', (event) => handleClickOndocument(event));
}

export default function () {
    if (!started) {
        started = true;
        registerClickOnDocument();
    }
    return {
        add(element, clickOutMethod = null, clickInMethod = null) {
            let finalElement = null;
            if (typeof element === 'string') {
                finalElement = generateElementFromString(element);
            } else if (element instanceof Element || element instanceof Document) {
                finalElement = element;
            }
            items.push({
                element: finalElement,
                clickOutMethod: clickOutMethod,
                clickInMethod: clickInMethod,
            });
        },
    };
};

