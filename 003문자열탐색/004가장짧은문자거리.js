/*
가장 짧은 문자거리
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.
*/

 function solution(str, ch){
    let answer;
    str = str.split(ch);
    console.log(str);

    str = str.map(element => {
        let newstr = ""
        for (let i = 0; i < Math.ceil(element.length/2); i++) {
            newstr = newstr + (i + 1);
        }
        for (let i = Math.floor(element.length/2); i > 0 ; i--) {
            newstr = newstr + (i);
        }
        return newstr
    })
    str = str.join(0);
    str = str.split('').join(' ');
    // console.log(str);
    return str;
}

let str="teachermode";
console.log(solution(str, 'e'));