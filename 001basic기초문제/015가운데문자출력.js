/*
가운데 문자 출력

소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
*/

function solution(str){
    let answer = "";

    let num = str.length / 2;
    
    if(str.length % 2 === 0){
        answer = answer + str[num-1] + str[num];
    }else{
        answer = str[Math.ceil(num)-1];
    }

    return answer;
}

let str = "stuudy"

console.log(solution(str));