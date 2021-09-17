// 투포인터 알고리즘 
// 슬라이딩 윈도우
// 해쉬맵


function compareMaps(map1, map2){
    // 두개의 맵이 같은지 다른지

    // 크기가 같은지
    if(map1.size !== map2.size){
        return false;
    }

    for (const [key,value] of map1) {
        if (!map2.has(key) || map2.get(key)!== value) {
            return false;
        }
    }

    return true;

}


function solution(s, t){
    let answer = 0;
    let tH = new Map();
    let sH = new Map();


    // 뒤에 3개 비교 map 세팅
    for(let x of t){
        if(tH.has(x)){
            tH.set(x,tH.get(x)+1);
        }else{
            tH.set(x,1);
        }
    }
    // 뒤에 맵 길이 정하기 = 2
    let len = t.length-1;

    //초기 앞에 맵 세팅 한개 전까지 세팅
    for(let i = 0; i < len; i ++){
        if(sH.has(s[i])){
            sH.set(s[i],sH.get(s[i])+1);
        }else{
            sH.set(s[i],1);
        }
    }

    let lt = 0;

    // 초기 앞에 문자 한거 하나 전 부터 끝까지 함
    for (let rt = len; rt < s.length; rt++) {
        if(sH.has(s[rt])){
            sH.set(s[rt],sH.get(s[rt])+1);
        }else{
            sH.set(s[rt],1);
        }
        // 비교
        if (compareMaps(sH,tH)) {
            answer++;
        }
        sH.set(s[lt] , sH.get(s[lt])-1);

        if (sH.get(s[lt]) === 0 ) {
            sH.delete(s[lt]);
        }

        lt++;
    }


    return answer;
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));