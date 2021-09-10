/*

문자열 압축

알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시 오. 단 반복횟수가 1인 경우 생략합니다.

*/
// 문자열을 하나 추가하고 
// length 에서 하나를 빼는 걸로 쉽게 만들 수 있다.

function solution(str){
    let answer = "";
    let count = 1;
    str = str + " ";
    for (let i = 0; i < str.length-1; i++) {
        if(str[i] === str[i+1]){
            count++;
        }else{
           count > 1 ? answer = answer + str[i] + count : answer = answer + str[i];
           count = 1;
        }
    }
    return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));