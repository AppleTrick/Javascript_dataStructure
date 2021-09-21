function solution(n,k){
    let queue = Array.from({length : n} , (v,i) => v = i+1);
    let answer;
    while(queue.length){
        for(let i = 1; i < k; i++){
            queue.push(queue.shift());
        }
        queue.shift();
        if (queue.length === 1) {
            answer = queue.shift();
        }
    }

    return answer;
}

console.log(solution(8,3));