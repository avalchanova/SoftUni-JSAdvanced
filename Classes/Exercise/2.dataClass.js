class Request {
    constructor(method, uri, version, message) {
        this.method = method,
            this.uri = uri,
            this.version = version,
            this.message = message,
            this.response = undefined,
            this.fulfilled = false;
    } // even though we do not set the response and the fulfilled properties through the constructure,
    // we can later initiate them with this and set their values
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
