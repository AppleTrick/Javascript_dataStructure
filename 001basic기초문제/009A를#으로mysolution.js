/*
A를 #으로

대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.
*/
// 자바스크립트 문법을 2021 부터 지원하기 때문에 다른 방법도 알아볼것
function solution(str){
    let answer = str;
    answer = answer.replaceAll('A','#');
    return answer;
}

let str = 'BANANA'
console.log(solution(str));