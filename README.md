# Practice
 
練習的檔案與筆記
practice and notes

# [ES6 - var,let,const](https://wcc723.github.io/javascript/2017/12/20/javascript-es6-let-const/)   

>###`let` 與 `var`
`var`在於變數的範圍在 `function`，而 `let` 的作用域在 block`{}` ，除了 function 以外 `if`、`for` 的 {} 都屬於 let 的作用域。

    for (var i = 0; i < 10; i++) {
      console.log(i);
      setTimeout(function () {
         console.log('這執行第' + i + '次');
         }, 10);
    }
1. ~~這執行第 0 次, 這執行第 1 次, 這執行第 2 次… (延續 10 次)~~
2. 這執行第 10 次… (延續 10 次)

因為 var 會直接將 i 宣告成全域變數，不斷透過 for 迴圈累加，在 setTimeout 實際執行時只會拿到 10 這個數字。

       for (let i = 0; i < 10; i++) {
          console.log(i);
          setTimeout(function () {
            console.log('這執行第' + i + '次');
            }, 10);
       }
       
1. 這執行第 0 次, 這執行第 1 次, 這執行第 2 次… (延續 10 次)
2. ~~這執行第 10 次… (延續 10 次)~~

所以此段要正確地執行，可以使用 let 宣告 i 這個變數，i會被緊緊的鎖在 for… 後方的 {} 內。
>### 如何讓下列正常執行

    for (var i = 0; i < 10; i++) {
      console.log(i);
      setTimeout(function () {
        console.log('這執行第' + i + '次');
      }, 10);
    }
    // Answer
    // for (var i = 0; i < 10; i++) {
    //   (function (j) {
    //     setTimeout(function () {
    //       console.log('這執行第' + j + '次');
    //     }, 10);
    //   })(i);
    // }

這也是 let 的一大特性，他並不會讓整個 window 物件掛上在全域環境所宣告的變數。

    var mom = "老媽";
    let mom = "老媽";
    console.log(window.mom);
    // var 會出現 "老媽"
    // let 會出現 undefined

>### `const` 是宣告一個常數，簡單來說就是不可以再做修改的變數(常數)
const 必須一定要有值
使用 const 宣告的物件或陣列，其內層屬性依然可以做調整，因為物件/陣列是傳參考，所以在此依然可以修改屬性。


