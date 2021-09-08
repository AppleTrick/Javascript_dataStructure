/*
대소문자 변환

대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.
*/

function solution(str){
    let answer = "";
    for (const x of str) {
        if(x===x.toUpperCase()){
            answer+=x.toLowerCase();
        }else if(x===x.toLowerCase()){
            answer+=x.toUpperCase();
        }
    }
    return answer;
}

let str = "StuDY"
console.log(solution(str));