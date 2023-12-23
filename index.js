function sum(x){
    return function sumY(y){
        return function sumZ(z){
            return x + y + z
        }
    }
}

var resultX = sum(10);
console.log(resultX);
var resuntY = resultX(20);
console.log(resuntY);
var resuntZ = resuntY(30);
console.log(resuntZ);