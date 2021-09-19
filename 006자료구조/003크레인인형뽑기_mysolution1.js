
function solution(board, moves){       
    let answer = 0;
    let stack = [];
    let n = board.length;
    for (const x of moves) {
        for (let i = 0; i < n; i++) {
            if (board[i][x-1] !== 0) {
                stack.push(board[i][x-1]);
                board[i][x-1] = 0;

                if (stack[stack.length - 1] === stack[stack.length -2]) {
                    stack.pop();
                    stack.pop();
                    answer += 2;
                }

                break;
            }
        }
    }
    // console.log(stack);
    return answer;
}

let a=[
        [0,0,0,0,0],
        [0,0,1,0,3],
        [0,2,5,0,1],
        [4,2,4,4,2],
        [3,5,1,3,1]
    ];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));

