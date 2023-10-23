function extensibleObject() {
    return {
        extend: function (object) {
            for (const key of Object.keys(object)) {
                const currProperty = object[key];

                if (typeof currProperty == "function") {
                    const prototypeOfThisObject = Object.getPrototypeOf(this);
                    prototypeOfThisObject[key] = currProperty;
                } else {
                    this[key] = currProperty;
                }
            }
            return this;
        }
    }
}
const myObj = extensibleObject();
const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
console.log(myObj.extend(template))

