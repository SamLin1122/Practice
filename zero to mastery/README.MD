# NOTES

>### CSS Grid

    .container{
        gird-gap:
        grid-template-columns: 1fr 1fr 2fr 
        grid-template-row:repeat(3,1fr) or repeat(auto-fill,minmax(200px,1fr))
        justify-items:
        align-items:
        }
    
    .item{
        grid-colimn:spam 2
        grid-row:1/4
        justify-self:
        align-self:
        }


>### function
function 宣告 declaration 
`function Hello(){}`

function 表達式 expression
`var abc = function(){}`

expression
`var a = 1 `

>### function vs method
    thisisafunction()
    obj.thisismethod

>### Array
.shift()：移除陣列第一個

.pop()：移除陣列最後一個

.push()：在陣列最後面插入項目

.concat([])：在陣列中加入陣列後產生一個新的陣列,並不會改變原本陣列

>### [setInterval() 和 clearInterval()](http://www.runoob.com/jsref/met-win-setinterval.html)
    function move() {
    var elem = document.getElementById("myBar"); 
    var width = 0;
    var id = setInterval(frame, 10);
        function frame() {
            if (width == 100) {
                clearInterval(id);
            } 
            else {
                width++; 
                elem.style.width = width + '%'; 
            }
        }
    }
>## switch
多重if的用法
若要用於判斷式則不加""

    switch (direction) {
            case "forward":
                break;
                whatHappens = "you encounter a monster";
            case "back":
                whatHappens = "you arrived home";
                break;
                break;
            case "right":
                return whatHappens = "you found a river";
                break;
            case "left":
                break;
                whatHappens = "you run into a troll";
                break;
            default:
                whatHappens = "please enter a valid direction";
        }

>### .forEach() .map() .filter() .reduce

    let newArray = []
    array.forEach(e => newArray.push(e.username+"!"))

    let newArray1 = array.map(e => e.username+"?")

    let newArray2 = array.filter(e => e.team=="red").map(e=>e.username)

    let newArray = array.reduce((sum, e)=> { return sum+e.score},0)

>## 陣列與物件複製

陣列複製後產生新的陣列
    let a=[1,2,3,4]
    let b=[].concat([a])// 宣告b為空陣列後加入a陣列
    let c=[...a]
    
obj複製後產生新物件
    let obj={a:"A",b:"B",c:"C"}
    let clone1=Object.assign({},obj)
    let clone2={...obj}
    let superclone=JSON.parse(JSON.stringify(obj))

## ES7
>### 平方
    const square=(x)=> x**2
>### 次方
    const cube=(y)=>y**3
## ES8
在開頭加入10個空白
    "hello".padstart(10)//"          hello"
在結尾加入5個空白
    "hello".padend(5)//"hello     "

#### Object.values()  Object.entries

    let obj={a:"A",b:"B",c:"C"}
    Object.values(obj).forEach(value=>console.log(value))
    //A
    //B
    //C
    Object.entries(obj).forEach(value=>console.log(value))
    //["a","A"]
    //["b","B"]
    //["c","C"]
    Object.entries(obj).map(value=>value[1])
    // ["A", "B", "C"]

>### for(of) for(in)
#### for(of)用在陣列與字串,無法用在obj
    let obj={a:"A",b:"B",c:"C"}
    const basket=["apple","banana","orange"]
    
    for(item of basket){
    console.log(item)
    }
    //apple
    //banana
    //orange
    for(item of "basket"){
    console.log(item)
    }
    //b
    //a
    //s
    //k
    //e
    //t

#### for(in)主要用在物件
    for(item in basket){
    console.log(item)
    }
    //0
    //1
    //2
    for(item in "basket"){
    console.log(item)
    }
    //0
    //1
    //2
    //3
    //4
    //5
    for(item in basket){
    console.log(item)
    }
    //0
    //1
    //2
