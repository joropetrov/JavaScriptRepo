class HttpRequest {
    response = undefined;
    fulfilled = false

    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
}
// old and new syntax
function httpRequest(method, uri, version, message) {
    return {
        response: undefined,
        fulfilled: false,
        method,
        uri,
        version,
        message
    }
}