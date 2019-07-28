#  JavaScript 30

## JavaScript Drum Kit

2018/07/03

>#### 箭頭函式 (Arrow Function)

    //傳統寫法
    var func1 = function(e) { console.log('Hi, ' + e); };
    //箭頭函式寫法
    var func2 = e => console.log('Hi, ' + e);
    //補充:如果該function沒有參數要傳，要帶空括號如下
    var func3 = () => console.log('Hi');

>#### transitionend

    addEventLisenter("transitionend",function(){}) 
    //transitionend為其中一項事件
>#### audio

##### HTML語法

    <audio src=””></audio>
>#### audio.play()

##### JavaScript語法

    element.play()//進行播放
    element.currentTime//指定播放間隔秒數
>#### template (``,${})

用``包住字串，利用`${}`來包變數

    //傳統寫法
    var str = '<div data-key="' + key + '">' +
             '<button>click me</button>' +
             '</div>';
    //template string寫法
    var str = `<div data-key="${key}">
             <button>click me</button>
             </div>`;
>#### Array.from


    //Array.from 是一個將一個物件或是字串轉為陣列格式的語法
    //key1為陣列
    var key1 = Array.from(document.querySelectorAll('.key'));
    //key2為nodeList
    var key2 = document.querySelectorAll(".key");

nodeList很像陣列，但無`array.prototype`上的方法。
最簡單的例子是用`array.push()`去測試，會發現由`querySelectAll`的物件無法用`.push()`

    var testNodeList = document.querySelectAll('.key');
    testNodeList.push('add'); // <--非陣列會報錯TypeError: testNodeList.push is not a function
    
    var testArray = Array.from(testNodeList);
    testArray.push('add'); // <-- 轉為陣列就可以了

-----------------------------------------------
## CSS + JS CLOCK

2018/07/04

>#### transform

    transform-origin: 100%;//將原點轉移到最右邊
    transform: rotate(90deg);

>##### transform-origin
變形的軸心，預設為物件的中心點，
在這個範例中，設定為100%(right)可以使其從時鐘面的中心點開始旋轉。

>##### transform:rotate()
旋轉物件，數值後方要加上角度`deg`，
可超過360度，正值為順時針轉，負值為逆時針旋轉。

>##### transition
    transition: all 0.05s;//轉場畫面的位置與秒數
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);


| CSS語法                                   | JavaScript語法                                   |
| --------------------------------------- | ---------------------------------------------- |
| transition: property time;              | object.style.transition="width 2s"             |
| transition-property: none|all|property; | object.style.transitionProperty="width,height” |
| transition-duration: time;              | object.style.transitionDuration="5s”           |
| transition-timing-function: 如下;         | object.style.transitionTimingFunction="如下”     |
| transition-delay: time;                 | object.style.transitionDelay="2s”              |

| 值                     | 描述                                                          |
| --------------------- | ----------------------------------------------------------- |
| linear                | 規定以相同速度開始至結束的過渡效果（等於cubic-bezier(0,0,1,1)）。                 |
| ease                  | 規定慢速開始，然後變快，然後慢速結束的過渡效果<br>（cubic-bezier(0.25,0.1,0.25,1)）。 |
| ease-in               | 規定以慢速開始的過渡效果（等於cubic-bezier(0.42,0,1,1)）。                   |
| ease-out              | 規定以慢速結束的過渡效果（等於cubic-bezier(0,0,0.58,1)）。                   |
| ease-in-out           | 規定以慢速開始和結束的過渡效果（等於cubic-bezier(0.42,0,0.58,1)）。             |
| cubic-bezier（n，n，n，n） | 在cubic-bezier 函數中定義自己的值。可能的值是0 至1 之間的數值。                    |


>#### Date()

JavaScript語法
時間函式，需搭配new來取得時間函數

    typeof(Date);//function
    typeof(new Date);//object
    
    var now = new Date();
    var seconds = now.getSeconds();//用get擷取Date中的seconds


>#### setInterval

JavsScript語法
定時器，有兩個參數`setInterval(function, time)`

    typeof(Date);//function
    typeof(new Date);//object
    var now = new Date();
    var seconds = now.getSeconds();//用get擷取Date中的 
    seconds

----------
## CSS-Variables

2018/07/04

>#### :root

`:root` 選擇器匹配文檔根元素。
在HTML 中，根元素始終是html 元素。

>#### dataset

用`dataset`可以取出對象的`data-*`屬性，也等同於`getAttribute`

    <div id="test" data-no="123"></div>
    document.querySelector("# test").dataset.no // 輸出123
    document.querySelector("# test").getAttribute("data-no"); // 輸出123
>#### style.setProperty()

等同於style.PropertyName

    style.setProperty("padding", "15px");
    // 等同於
    style.padding = "15px";

在實際應用中，前者的做法會很方便帶參數進去。

## Array-Cardio-Day-1

2019/07/04


>#### Array.filter()

filter() 會回傳一個陣列，其條件是 return 後方為 true 的物件，很適合用在搜尋符合條件的資料。

    var fifteen = inventors.filter(a => (a.year < 1600 && a.year >= 1500));
    //一般寫法
    var fifteenst = [];
        for (var i = 0; i < inventors.length; i++) {
          if (inventors[i].year < 1600 && inventors[i].year >= 1500)
            fifteenst.push(inventors[i].first + " " + inventors[i].last);
        }


>#### Array.map()

使用 map() 時他需要回傳一個值，他會透過函式內所回傳的值組合成一個陣列。

- 如果不回傳則是 `undefined`
- 回傳數量等於原始陣列的長度

這很適合將原始的變數運算後重新組合一個新的陣列。

    var fullname = inventors.map(a => (a.first + " " + a.last));


    var mapEmpty = people.map(function(item, index, array){
    });
    console.log(mapEmpty);    // [undefined, undefined, undefined, undefined]
    var mapAgeThan5 = people.map(function(item, index, array){
      return item.age > 5;    // 比較大於五歲的
    });
    console.log(mapAgeThan5); // [true, true, false, false]
    var mapAgeThan5_2 = people.map(function(item, index, array){
      // 錯誤示範
      if (item.age > 5) {
        return item;              // 回傳大於五歲的
      }
      return false;               // 別以為空的或是 false 就不會回傳
    });
    console.log(mapAgeThan5_2);   // [{name: 'Casper'...}, {name: 'Wang'...}, false, false]
    var mapEat = people.map(function(item, index, array){
      if (item.like !== '蘿蔔泥') {
        return `${item.like} 好吃`;
      } else {
        return `${item.like} 不好吃`;
      }
    });
    console.log(mapEat);          // ["鍋燒意麵 好吃", "炒麵 好吃", "蘿蔔泥 不好吃", "蘿蔔泥 不好吃"]
>#### Array.sort()

更改陣列順序

    var birthdate = inventors.sort((a, b) => a.year > b.year ? 1 : -1);


>#### Array.reduce()

    //Array.reduce(total,value,index, array)
    var live = inventors.reduce((total, inventor) => { return total + (inventor.passed - inventor.year) }, 0);//0為設定total的起始值


    var ans = data.reduce(abc,{}); //利用預設值將reduce()的第一個參數設定為空物件total={}
        function abc(total, value) {
          console.log(total, value);
          if (!total[value]) {
            total[value] = 0;
          }//判斷total{}中若無value，則放進去value=0進去
          total[value]++;//每次都將value加一
          return total;
        }

首先
接著做一個判斷來決定建立物件內容或著使已建立內容累加總數!

>#### .split

將陣列中以某個字元為基準切開

    var people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick']
    var alpha = people.sort((a, b) => {
        var [alast, afirst] = a.split(", ");//'Beck, Glenn'切開後變為兩個項目'Beck','Glenn'
        var [blast, bfirst] = b.split(", ");
        return alast > blast ? 1 : -1;
    })


## Flex Panels Image Gallery

2019/07/04

>#### Flex()

display: flex
把該容器設定為flex模式，容器內的子元素都成為一個flex

flex: flex-grow flex-shrink flex-basis
flex的簡寫，第一個為占比、第二個為壓縮值、第三個為默認尺寸

flex-direction
flex排列的方向，`colume`(垂直向)或`row`(水平向)，預設為`row`

includes()

    function toggleActive(e) {
        if (e.propertyName.includes("flex")) {  //若e.propertyName中含有flex則為true
            this.classList.toggle("open-active");
        }
    }


## Ajax Type Ahead(未學)

2019/07/05

>#### RegExp()

Regular Expression

    //single character單一字元
    \d //0-9
    \w //A-Z a-z 0-9
    \s //空白鍵,Tab
    //若使用大寫則為反向.ex:\W 為非A-Z a-z 0-9
    .  //任何字元
    \i //進行不分大小寫的搜尋

    // quantifies
    * //0 or more
    + //1 or more
    ? //0 or 1
    {min,max} //最大最小值
    {n} //數量

    //position
    ^  //開頭
    $  //結尾
    \b //邊界

    [] //符合[]內的任意一個選項. [abd]等於a or b or d
    [0-9] //-如果不是在開頭,就算是範圍不是字元.
    [^0-5]{3}//此時^為反向的意思.ex:選擇三個字元內有0-5以外的 
## Array Cardio Day 2

2019/07/07

>#### .every()

every() 可以檢查所有的陣列是否符合條件，這僅會回傳一個值 true or false，可以用來檢查陣列中的內容是否符合特定條件。every() 需完全符合

    //Array.every(function(item, index, array){};
    var ans = array.every(function(item, index, array){
      return item.age > 10 });// false: 只要有部分不符合，則為 false
    var ans2 = array.every(function(item, index, array){
      return item.age < 25 });// true: 全部 age 都小於 25
>#### .some()

some() 與 every() 非常接近，都是回傳 true or false，差異僅在 every() 需完全符合，some() 僅需要部分符合。

    //Array.some(function(item, index, array){};
    var ans = people.some(function(item, index, array){
      return item.age > 10 
    });// true: 只要有部分符合，則為 true 
    var ans2 = people.some(function(item, index, array){
      return item.age < 25
    });// true: 只要有部分符合，則為 true 
    var ans2 = people.some(function(item, index, array){
      return item.age > 25
    });// false: 全部都不符合則為 false


>#### .splice()

    //Array.splice(index,howmany,item1,...,itemN)
    var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    
    animals.splice(1, 0);//output:['ant', 'camel', 'duck', 'elephant']
    animals.splice(1, 1,"dog");//output:['ant', 'dog', 'camel', 'duck', 'elephant']
    animals.splice(1, 0,"dog");//output:['ant',"dog",'bison', 'camel', 'duck', 'elephant']
    animals.splice(1, 2,"dog","cat");//output:['ant',"dog","cat", 'duck', 'elephant']
    animals.splice(1, 3,"dog");//output:['ant',"dog", 'elephant']
>#### .slice()

`slice()` 方法會回傳一個新陣列物件，為原陣列選擇之 `begin` 至 `end`（不含 `end`）部分的淺拷貝（shallow copy）。而原本的陣列將不會被修改。
`slice()`若沒指定開始與結束位置則複製原陣列

    //Array.slice(begin,end)
    var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    animals.slice(2);//output:["camel", "duck", "elephant"]
    animals.slice(2, 4);//output:["camel", "duck"]
    animals.slice(1, 5);//output:["bison", "camel", "duck", "elephant"]
>#### .find

find() 與 filter() 很像，但 find() 只會回傳一次值，且是第一次為 true 的值。

    var findEmpty = people.find(function(item, index, array){
    });
    console.log(findEmpty);          // 沒有條件，會是 undefined
    var findAgeThan5 = people.find(function(item, index, array){
      return item.age > 5;           // 取得大於五歲的
    });
    console.log(findAgeThan5);       // 雖然答案有兩個，但只會回傳 Casper 這一個物件
    var findLike = people.find(function(item, index, array){
      return item.like === '蘿蔔泥';  // 取得陣列 like === '蘿蔔泥'
    });
    console.log(findLike);           // 雖然答案有兩個，但只會回傳第一個 Bobo 物件

>#### .findIndex() 

與find() 很像，但是是回傳index的位置。

    var index = comments.findIndex(comment => comment.id === 823423);


## Fun with HTML5 Canvas

2019/07/07

>#### Canvas

`CanvasRenderingContext2D.canvas` 屬性是 Canvas API 的一部分，是對與給定上下文關聯的`HTMLCanvasElement`對象的只讀引用。如果没有 `<canvas>` 元素與之對應，對象值為`null`。

    //基本設定
    <canvas id="canvas"></canvas>;


    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.canvas // HTMLCanvasElement
>#### .lineJoin()

轉折處的樣式,`miter`為預設.

![](https://mdn.mozillademos.org/files/237/Canvas_linejoin.png)

1. “round”圓形為底 
2. “bevel"三角形為底 
3. "miter”菱形為底

>#### .lineCap()

起始與結尾的樣式,`butt`為預設.

![](https://mdn.mozillademos.org/files/236/Canvas_linecap.png)

1. “butt”橫線 
2. ”round”圓形 
3.”square”方形

>#### 畫線設置

    //畫線設置
    ctx.beginPath();//設置一個新的路徑
    ctx.moveTo(50,50);//將一個新的子路徑的起始點移動到(x,y)坐標的方法
    ctx.lineTo(200, 50);//使用直線連接子路徑的終點到(x,y)座標的方法(但不會畫線)
    ctx.stroke();//繪製當前或已經存在的路徑的方法
>#### .strokeStyle

    ctx.strokeStyle = color;
    ctx.strokeStyle = gradient;
    ctx.strokeStyle = pattern;
>#### hsl

    hsl(hue(色調deg), saturation(飽和度%), lightness(亮度%))

##### hue
為調色盤上的角度,範圍為0-360. 0為紅色, 120為綠色, 240為藍色.

##### saturation
用百分比%表示. 0%為灰階, 100%為全彩.

##### lightness
用百分比%表示. 0%為黑色, 100%為白色.


## 14 Must Know Dev Tools Tricks

2019/07/08

>#### console

    console.log()
    console.dir()//顯示屬性
    //.log("%s",value)
    console.log("Hello I am a %s string!", "shit")
    //.log("%c",style)
    console.log("%c I am a good man", "font-size:50px; background:red;text-shadow:5px 5px 0 blue")
    console.warn()//警告標示+()
    console.error()//錯誤標示+()
    console.info()//訊息標示+(),但在實作時無法顯示
    console.assert(1 === 2, "yap")//當判斷式為false才會顯示錯誤標示+()
    console.clear();//清除console內所有內容
    console.group()//建立一個訊息群組,以console.group()開始,console.groupEnd()結束
    console.groupCollapsed()//與console.group()一樣,不過默認設置為摺疊訊息
    console.groupEnd()//群組結束
    console.count()//計算次數
    console.time()//計時器，開始計時間，與timeEnd()一起使用，用於算出一個操作所花費的準確時間。
    console.timeEnd()//計時結束
    console.table()//以表格方式顯示數據
## Hold Shift to Check Multiple Checkboxes

2019/07/08

>#### .shiftKey

偵測shiftKey是否使用中, 然後回傳true or false

>#### .checked

偵測checkbox是否被選取, 然後回傳true or fals

## Custom HTML5 Video Player

2019/07/08

>#### video

##### .play
播放

##### .pause
暫停

##### .paused 
video暫停時為true 播放時為 false

##### .currentTime
正在播放的時間點

##### .duration
影片總長

##### .volume
聲音

##### .playbackRate
播放速率


>#### parseFloat(string)

可解析一個字符串，並返回一個浮點數。
該函數指定字符串中的首個字符是否是數字。如果是，則對字符串進行解析，直到到達數字的末端為止，然後以數字返回該數字，而不是作為字符串。

>#### .flexBasis

定義活動式項目的初始

## Key Sequence Detection (KONAMI CODE)

2019/07/09

>#### .join()

    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var energy1 = fruits.join();//Banana,Orange,Apple,Mango
    var energy2 = fruits.join(" and ");//Banana and Orange and Apple and Mango


## Slide In on Scroll

2019/07/10
>#### .offsetTop
容器內相對於高度的位移量

>#### window.scrollY
滾輪Y軸位移量

>#### window.innerHeight
視窗高度

Object and Arrays - Reference VS Copy

2019/07/10


陣列的複製

為了避免Call by refrence時會去異動到原本的陣列，就要先把原本的陣列做一次複製，有以下幾種方法：

Array.prototype.Slice()
    var arr = ['a', 'b'];
    var arr2 = arr.slice();
    console.log(arr, arr2);// ['a', 'b'] ['a', 'b']
    arr2[1] = 'c';
    console.log(arr, arr2);// ['a', 'b'] ['a', 'c']
Array.prototype.concat() 

使用`concat()`可以合併陣列，所以如果使用空陣列來合併原陣列，
也會達到複製整個陣列的效果：

    var arr = ['a', 'b'];
    var arr2 = [].concat(arr);
    console.log(arr, arr2);// ['a', 'b'] ['a', 'b']
    arr2[1] = 'c';
    console.log(arr, arr2);// ['a', 'b'] ['a', 'c']

.concat()語法

    //string.concat(string1, string2, ..., stringX)
    var str1 = "Hello ";
    var str2 = "world!";
    var n = str1.concat(str2);//Hello world!
Spread syntax …

ES6的`Spread`語法，複製方法如下：

    var arr = ['a', 'b'];
    var arr2 = [...arr];
    console.log(arr, arr2);// ['a', 'b'] ['a', 'b']
    arr2[1] = 'c';
    console.log(arr, arr2);// ['a', 'b'] ['a', 'c']
Array.from() 

同為ES6的`Array.from()`也可以快速達到複製的效果：
註：`Array.from()`可將物件複製後轉換為陣列

    var arr = ['a', 'b'];
    var arr2 = Array.from(arr);
    console.log(arr, arr2);// ['a', 'b'] ['a', 'b']
    arr2[1] = 'c';
    console.log(arr, arr2);// ['a', 'b'] ['a', 'c']
物件的複製

物件也會有call by refrence的特性，所以與陣列相同，方法如下：

Object.assign() 

使用`Object.assign()`來做，指定一個空的物件並把目標對象塞進去：

    var obj = { a: 1, b: 2 };
    var obj2 = Object.assign({}, obj);
    console.log(obj, obj2);// { a: 1, b: 2 } { a: 1, b: 2 }
    obj2.b = 20;
    console.log(obj, obj2);// { a: 1, b: 2 } { a: 1, b: 20 }

 `Object.assign` 只會對 object 的子項目做 clone，下一層的則會建立 reference，所以指向的 `childrenObject` 會是同一個。 要解決這個問題的話可以使用 `lodash` 的 `clonedeep`：

    import cloneDeep = from 'lodash.clonedeep';
    const test = {
      childrenKey: 'value',
      childrenObject: {
        keyA: 'value a',
        keyB: 'value b'
      }
    }
    const cloneA = cloneDeep(test);
    const cloneB = cloneDeep(test);
JSON.parse * JSON.stringify

利用`JSON.parse * JSON.stringify`來把目標對象作轉換賦值的動作， 不論目標對象是什麼型別，都可用來做複製：
JSON.stringify：將JavaScript值(通常為對象或陣列)轉為字串
JSON.parse：將數據轉為JavaScript值(通常為對象或陣列)

    //Array
    var arr = ['a', 'b'];
    var arr2 = JSON.parse(JSON.stringify(arr));
    console.log(arr, arr2);// ['a', 'b'] ['a', 'b']
    arr2[1] = 'c';
    console.log(arr, arr2);// ['a', 'b'] ['a', 'c']
    
    //Object
    var obj = { a: 1, b: 2 };
    var obj2 = JSON.parse(JSON.stringify(obj));
    console.log(obj, obj2);// { a: 1, b: 2 } { a: 1, b: 2 }
    obj2.b = 3;
    console.log(obj, obj2);// { a: 1, b: 3 } { a: 1, b: 3 }


LocalStorage(未學會)
CSS Text Shadow Mouse Move Effect

2019/07/10

.X .Y & .offsetX .offsetY

.X .Y為視窗之XY座標值，.offsetX.offsetY為容器內的XY座標值

Math.round()

取整數

解構賦值(Destructuring assignment) 

透過解構賦值，可以把直接把物件/陣列中的值塞入變數中。

    // 下面這段等同於 var height = hero.offsetHeight;
    var{ offsetHeight: height } = hero;
    // 下面這段等同於 var x = e.offsetX;
    var{ offsetX: x } = e;
Sorting Band Names without articles

2019/07/11

RegExp()

i：不分大小寫

    new RegExp("regexp","i"); //函式
    /regexp/i; //縮寫
    var str="Visit RUnoob";
    var patt1=/runoob/i; 
    console.log(str.match(patt1)) //["RUnoob", index: 6, input: "Visit RUnoob", groups: undefined]


    /^(a |the |an )/i
    //開頭(^)含有a or the or an ((a |the |an ))不管大小寫(i)
.trim()

方法用於刪除字符串的頭尾空格，不會改變原始字符串。

    var str = "       Runoob        ";
    alert(str.trim());//Runoob
Tally String Times with Reduce

2019/07/11


data

在`querySelector`中使用`[data-element]`呼叫，若要使用`element`之內容用`.dataset.element`

    var timesArray = Array.from(document.querySelectorAll("[data-time]"))
    var seconds = timesArray
          .map(a => a.dataset.time)
.map(parseFloat)

從map中即將輸出的字串轉換為數字。

    .map(timestr => {
                var [min, sec] = timestr.split(":").map(parseFloat)
    //上式等同於  var[mins, secs] = timeCode.split(':').map(function(str){
          //     return parseFloat(str);}
    });

數學式
parseInt()無條件捨去
Math.ceil()無條件進位
Math.round()四捨五入
Math.floor()無條件捨去

    //四捨五入到num後面的n位
    function getResult(num,n){
    return Math.round(num*Math.pow(10,n))/Math.pow(10,n);
    
Unreal Webcam Fun(未學會)


Speech Detection(未學會)
Geolocation
Follow Along Link Highlight

2019/07/11

mouseover VS mouseenter
- `mouseover`：會冒泡，當項目的子項目被指到時也會驅動。
- `mouseenter`：不會冒泡，也就是說當指針從它的子層物理空間移到它的物理空間上時不會觸發
mouseout VS mouseleave
- `mouseout`：會冒泡，當指針離開元素或離開元素的後代（or）（即使指針仍在元素內）時，會觸發`mouseout`。
- `mouseleave`：不會冒泡，當指針離開元素及其所有後代時（and），會觸發`mouseleave`。

結論：
mouseenter：當鼠標移入某元素時觸發。
mouseleave：當鼠標移出某元素時觸發。
mouseover：當鼠標移入某元素時觸發，移入和移出其子元素時也會觸發。
mouseout：當鼠標移出某元素時觸發，移入和移出其子元素時也會觸發。

appendChild()

方法可向節點的子節點列表的末尾添加新的子節點。

getBoundingClientRect()

回傳`DOMRect物件`可以取得當前項目的位置資料。
`DOMRect` 對象包含了一組用於描述邊框的唯讀屬性：x、y、left、top、right和bottom。除了 width 和 height 外的值都是相對於左上角位置。

![getBoundingClientRect示例圖](https://mdn.mozillademos.org/files/15087/rect.png)

translate(x, y)
     highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    //translate(x, y):從原本項目移動x,y距離。
