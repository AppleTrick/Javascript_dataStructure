/*
괄호문자제거

입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
*/

function solution(str){  
    let answer = "";
    let stack = [];

    for (const x of str) {
        if (x === "(") {
            stack.push(x);
        }else{
            if (stack.length === 0) {
                answer += x;
            }else{
                if (x===")") {
                    stack.pop();
                }
            }
        }
    }

    return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));