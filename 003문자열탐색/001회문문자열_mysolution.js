/*
회문 문자열

앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.

문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.

단 회문을 검사할 때 대소문자를 구분하지 않습니다.
*/

function solution(str){
    let answer = "YES";
    let leng = Math.ceil(str.length/2);
    for (let i = 0; i < leng; i++) {
        if(str[i].toUpperCase()!==str[str.length - 1 - i].toUpperCase()){
            answer = "NO"
            // console.log("비정상");
            break;
        }
        // console.log("정상");
    }
    return answer;
}

let str="gioG";
console.log(solution(str));