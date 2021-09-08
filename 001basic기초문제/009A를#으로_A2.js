/*
A를 #으로

대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.
*/
// 정규식으로 하는 방법
function solution(str){
    // string 은 값이 복사 된다. 배열객체처럼 주소 참조가 되지 않는다.
    let answer = str;
    answer = answer.replace(/A/g,'#');
    return answer;
}

let str = 'BANANA'
console.log(solution(str));