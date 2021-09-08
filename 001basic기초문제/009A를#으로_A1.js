/*
A를 #으로

대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.
*/
// for문을 이용한 방법
function solution(str){
    let answer = '';
    for (const x of str) {
        if(x === 'A'){
            answer+='#';
        }else{
            answer+=x;
        }
    }
    return answer;
}

let str = 'BANANA'
console.log(solution(str));