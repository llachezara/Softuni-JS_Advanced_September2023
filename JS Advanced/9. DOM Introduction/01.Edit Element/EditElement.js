function editElement(reference, matcher, replacer) {
    let element = reference;
    let regEx = new RegExp(matcher, 'g');
    element.textContent = element.textContent.replace(regEx, replacer);
}