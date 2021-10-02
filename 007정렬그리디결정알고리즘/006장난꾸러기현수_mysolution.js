function solution(arr){
    let answer=[];
    let anotherArr = Object.assign({},arr); // 배열 깊은 복사;
    // let anotherArr = {...arr};

    arr.sort((a,b,) => a-b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== anotherArr[i]) {
            answer.push(i)
        }
        
    }
    return answer;
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));