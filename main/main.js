// Write your cade below:
module.exports = function main(a,b) {
    //参数判断，是否为数字
    if (typeof a !== 'number'||typeof a !== 'number') {
        throw 'Not a number';
    }
    var c=a%b;
 
    return c;
    
};