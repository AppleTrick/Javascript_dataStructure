/*
대문자 찾기

한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.
*/

// charCodeAt을 이용해서 푸는 방법도 있다.
function solution(str){
    let answer = 0;
    let num = 0;
    for (const x of str) {
        num = x.charCodeAt();
        if(num >= 65 && num <= 90){
            answer++;
        }
    }

    return answer;
}

let str = "KoreaTimeGood"
console.log(solution(str));