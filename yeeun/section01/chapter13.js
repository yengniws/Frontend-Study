// 1. 콜백함수
function main(value) {
    // console.log(value);
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}

// function sub() {
//     console.log("i am sub");
// }

// main(sub);

// main(function sub() {
//     console.log("i am sub");
// });

// main(function() {
//     console.log("i am sub");
// });

main(() => {
    console.log("i am sub");
});

// 2. 콜백함수의 활용
// function repeat(count) {
//     for (let idx = 1; idx <= count; idx++) {
//         console.log(idx);
//     }
// }

// function repeatDouble(count) {
//     for (let idx = 1; idx <= count; idx++) {
//         console.log(idx * 2);
//     }
// }

// repeat(5); // 1 2 3 4 5
// repeatDouble(5); // 2 4 6 8 10

function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

// repeat(5, function(idx) {
//     console.log(idx); // 1 2 3 4 5
// });

repeat(5, (idx) => {
    console.log(idx); // 1 2 3 4 5
});

repeat(5, (idx) => {
    console.log(idx * 2); // 2 4 6 8 10
});