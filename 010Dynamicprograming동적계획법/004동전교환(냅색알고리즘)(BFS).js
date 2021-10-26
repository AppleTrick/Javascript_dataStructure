function solution(m, coin){  
    let answer=0;
    let queue = [];
    queue.push(0);

    let ch = Array.from({length : 300}, ()=> 0);
    let L = 0;

    while(queue.length){

        let len = queue.length;

        for (let i = 0; i < len; i++) {

            let nx = queue.shift();

            for (let x of [nx+1,nx+2,nx+5]) {
                if(x === m){
                    return L+1;
                }

                if(x < 300 && ch[x] === 0){
                    ch[x] = 1;
                    queue.push(x)
                }
            }             
        }
        L++;
    }
    return answer;
}

let arr=[1, 2, 5];
console.log(solution(15, arr));