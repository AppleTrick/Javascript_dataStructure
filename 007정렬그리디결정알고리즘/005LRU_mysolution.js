function solution(size, arr){
    let answer=Array.from( {length:size} , () => 0);
    arr.forEach(element => {
        if(answer.includes(element)) {
            for (let i = size-1; i > 0; i--) {
                answer[i] = answer[i-1];
            }
            answer[0] = element;
        }else{
            answer.unshift(element);
            answer.pop();
        }
        console.log(answer);
    });
    return answer;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));