// let A = [[1,2,3],[3,4,5]]
// sum=0
// for(let i=0;i<2;i++)
// for(j=0;j<3;j++)
// sum+=A[i][j]

// console.log(sum)

// const numbers = [15.5, 2.3, 1.1, 4.7];

// console.log(numbers.reduce((total, num) => {return total + Math.round(num)}, 0));


// let arr = [1, 2, 3, 4, 5];
// console.log(arr.map(x => x*x));

// function sum(n) {
//     if (n == 0)
//         return n;
//     else
//         return n + sum(n - 1);
// }
// sum(8);


// function fun(a, b) {
//     if (b == 0)
//         return 0;
//     if (b % 2 == 0)
//         return fun(a + a, Math.floor(b / 2));

//     return fun(a + a, Math.floor(b / 2)) + a;
// }


// function recursive_get_len(s, len) {
//     if (s[len] === undefined) {
//         return 0;
//     }
//     return __________;
// }
// let s = "abcdef";
// let len = recursive_get_len(s, 0);
// console.log(len)

// function my_recursive_function(n) {
//     if (n == 0)
//         return
//     console.log(n)
//     my_recursive_function(n - 1);
// }

// my_recursive_function(10);



// function fn(num) {
//     if (num < 2) {
//         return num;
//     }
//     else {
//         return fn(num - 1) + fn(num - 2);
//     }
// }

// console.log(fn(6))




// function factorial(number) {
//     if (number == 0) {
//         return 1;
//     }
//     return factorial(number - 1);
// }

// console.log(factorial(5));



if (this.isEmpty()) {
    return undefined;
}

let result = this.items[this.front];
this.items[this.front] = 0;
this.front++;
return result;