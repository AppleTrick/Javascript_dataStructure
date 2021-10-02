


function solution(size, arr){
    let answer = Array.from({length:size}, () => 0);
    arr.forEach(element => {
        let pos = -1;
        for (let i = 0; i < size; i++) {
            if(element === answer[i]){
                pos = i; // hit or miss 확인
            }        
        }

        if(pos === -1){
            for (let i = size-1; i >= 1; i--) {
                answer[i] = answer[i-1]
            }
        }else{
            for (let i = pos; i >= 1; i--) {
                answer[i] = answer[i-1]
            }
        }

        answer[0] = element;
        console.log(answer);
    });

}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));