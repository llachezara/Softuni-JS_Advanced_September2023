function requestValidator(object) {
    let { method, uri, version, message } = object;

    let methodsArray = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriValidation = /^[a-zA-Z0-9.]+$/g;
    let versionValidation = /^HTTP\/(?:2\.0|1\.1|1\.0|0\.9)$/g;
    let messageValidation =/^[^<>\&'"\\]+$/g;

    //Method/URI/Version/Message

    if (!methodsArray.includes(method)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!(uriValidation.test(uri)) && uri !== '*' || uri === undefined ) {
        
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!(versionValidation.test(version)) || version === undefined) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (!(messageValidation.test(message)) && message !== '' || message === undefined ) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return object;

}

requestValidator({
    method: 'POST',

    version: 'HTTP/2.0',
    message: 'rm -rf /*'
}
)