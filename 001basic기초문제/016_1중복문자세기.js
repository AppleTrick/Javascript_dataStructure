function solution(str,char){
    let answer = 0;
    let pos = str.indexOf(char);
    while(pos!==-1){
        answer++;
        pos = str.indexOf(char,pos+1);
    }

    return answer;

}

let str =  "ksekksetkestttp";
console.log(solution(str,'t'));