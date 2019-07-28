# jQuery
2019/07/14

## 基本
>### $("")

等於`document.querySelecotor(``""``)`

    //元素選擇
    $("div")//<div>
    $(".start")//class
    $("#stop")//id
    $("a,p,h1")//選擇多項
    $(this)//當前元素
    $("div:first-of-type")//選取第一個div
    //屬性選擇
    $("[href]") //選取帶有href屬性的元素
    $("[href='#']")//選取帶有href值等於#的元素
    $("[href!='#']")//選取帶有href值不等於#的元素
    $("[href$='.jpg']")//選取帶有href值以".jpg"結尾的元素

>### .text()

設置或檢視所選元素的文本內容(設置內容輸出皆為字串，即使內容中有元素也只是字串)

    $("p").text("Hello world")//輸出字串Hello world
>### .html()

設置或檢視所選元素的內容（包括HTML 標記）

    $("ul").html(<p>hello</p>)//<ul>屬性換成<p>
>### .val()

設置或檢視表單字段的值

    $(selector).val();//檢視元素當前的值(元素若為複數則檢視第一個匹配的值)
    $(selector).val(value);//更改元素內容的值
>### [.attr()](https://juejin.im/post/5bea695ae51d45196e141f7f)

設置或檢視被選元素的屬性和值

    $(selector).attr(attribute)//檢視屬性內容
    $(selector).attr(attribute,value)//更改被選元素的屬性和值
##特效

*callback皆可有可無*

>### 顯示/隱藏
將元素從下到上，或從右下到左上慢慢的縮小折疊至消失或反向出現。

speed可以取以下值："slow"、"fast" 或毫秒。

    $(selector).____(speed,callback);
- .show() 
顯示html元素

- .hide() 
隱藏html元素

- .toggle()
切換顯示與隱藏

>### 淡入/淡出
效果是將元素整體淡化逐漸消失或出現。

speed可以取以下值："slow"、"fast" 或毫秒。

    $(selector).fade___(speed,callback);
    
- .fadeIn()
淡入已隱藏的元素

- .fadeOut()
淡出已顯示的元素

- .fadeToggle()
切換淡入淡出

- .fadeTo()
使已顯示的元素淡入/淡出到指定不透明度(opacity值介於0-1)

    $(selector).fadeTo(speed,opacity,callback);
>### 滑動
    $(selector).slide___(speed,callback);
- slideDown()
出現

- slideUp()
消失

- slideToggle()
切換

>### CSS
有-的內容將-後英文字改為大寫 ex:margin-top變成marginTop

    $(selector).css("propertyname");//檢視css屬性
    $(selector).css("propertyname","value");//設置css屬性
    $(selector).css({"propertyname":"value","propertyname":"value",...});//設置多項css屬性
- .addClass()
新增class

- .removeClass()
移除class

- .toggleClass()
對指定class做切換

## Objective

>### .click()

    $(selector).click(function);

>### .keypress()
與keydown類似，但是keypress是當有字符輸入時執行。

    $(selector).keypress(function);

>### [.on()](https://www.cnblogs.com/sqh17/p/7746418.html)

與`addEvenListener()`相同功能
[有動態事件觸發的功能](http://skaih.logdown.com/posts/712464-jquery-click-on-the-where-different)

    $(selector).on(event,function);
    $(selector).on(event,childSelector,data,function);

>### .append()

在被選元素的結尾（仍然在內部）插入指定內容。
規定要插入的內容（content）可包含HTML 標籤。

    $(selector).append( content )

>### .appendTo()

`append()`和`appendTo()`方法執行的任務相同。不同之處在於：內容和選擇器的位置，以及append()能夠使用函數來附加內容。

    $(content).appendTo(selector)
    
>### [父子元素](https://lvwenhan.com/web-front/373.html)

