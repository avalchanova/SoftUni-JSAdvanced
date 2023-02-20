function requestValidator(obj) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let uriPattern = /^[\w.]+$/gm; // uriPattern.test(obj.uri) probably
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let forbiddenCh = ['<', '>', '\\', '&', `'`, `"`]; // escape-ваме \, защото е специален карактър
    //Invalid request header: Invalid {Method/URI/Version/Message}

    if (!validMethods.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }
    if (!obj.hasOwnProperty("uri")) {
        throw new Error("Invalid request header: Invalid URI");
    }
    if (!uriPattern.test(obj.uri) && obj.uri !== "*") {
        throw new Error("Invalid request header: Invalid URI");
    }
    if (!validVersions.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }
    if (!obj.hasOwnProperty("message")) { // слагаме пропъртито message в кавички вместо да го впишем obj.message
        throw new Error("Invalid request header: Invalid Message");
    } else {
        for (let ch of obj.message) {
            if (forbiddenCh.includes(ch)) {
                throw new Error("Invalid request header: Invalid Message");
            }
        }
    }
    return obj;

}
requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}
);