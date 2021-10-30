function solution(m, coin){  
    let answer=0;
    let dy = Array.from({length : m+1} , ()=> 1000);
    dy[0] = 0;
    for (let i = 0; i < coin.length; i++){ // 동전의 종류 만큼 돈다
        for(let j = coin[i]; j <= m; j++ ){ 
            dy[j] = Math.min(dy[j], dy[j-coin[i]]+1)
            console.log(dy);
        }
    }

    answer = dy[m];
    return answer;
    
}

let arr=[1, 2, 5];
console.log(solution(15, arr));

/*

feedback 1.
일단 이해가 안된다..
dy[j - coin[i] ] + 1 의 의미?

feedback 2.
dy[i]의 의미
i의 값에 들어갈 수 잇는 동전종류 수
- coin[i] 해당코인의 금액은 제외하고
+ 1 방법의 개수 추가



*/