module.exports = function(a, b) {
    if(b === 1) return a;
    if(typeof a == 'number') return a * b;
    if(typeof a == 'string') {
        var result = '';
        for(var i = 0; i < b; i++) result += a;
        return result;
    }
    if(a instanceof Array) {
        var result = [];
        for(var i = 0; i < b; i++) {
            [].push.apply(result, a);
        }
        return result;
    }
    var result = [];
    for(var i = 0; i < b; i++) result.push(a);
    return result;
};