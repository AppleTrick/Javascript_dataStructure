function solution(s){
    let answer = 0;
    let tmp;
    let stack = [];
    for (const x of s) {
        if(x === '('){
            stack.push(x);
            tmp = '(';
        }else{
            stack.pop();
            if (tmp = '(') {
                answer += stack.length;
            }else{
                stack.pop();
                answer += 1;
            }
            tmp = ')';
        }
    }


    return answer;
}

let a="(((()(()()))(())()))(()())";
console.log(solution(a));