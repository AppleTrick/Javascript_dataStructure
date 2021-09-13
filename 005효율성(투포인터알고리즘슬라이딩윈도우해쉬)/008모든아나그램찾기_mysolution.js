function isAnagram(str1, str2){
    let map = new Map();

    for (const i in str1) {
        map.set(str1[i], map.get(str1[i])+1 || 1);
    }

    // console.log(map);
    for (const i in str2) {
        map.set(str2[i], map.get(str2[i])-1);
    }

    for (const [key, value] of map) {
        if(value !== 0){
            return 0;
        }
    }
    return 1;
}


function solution(str, anw){
    let len = anw.length;
    let answer = 0;
    let tmp = "";

    for (let i = 0; i < len; i++) {
        tmp += str[i]
    }

    answer += isAnagram(tmp, anw);

    for (let i = len; i < str.length; i++) {
        // console.log("i의 값" , str[i], tmp);
        tmp = tmp.concat(str[i])
        tmp = tmp.slice(1,tmp.length);
        
        answer += isAnagram(tmp, anw);
    }
    return answer;
}

let str="bacaAacba";
let anw="abc";
console.log(solution(str, anw));