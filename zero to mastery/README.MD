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
`var abc=function(){}`

expression
`var `

>### function vs method
    thisisafunction()
    obj.thisismethod

>### Array
.shift()：移除陣列第一個

.pop()：移除陣列最後一個

.push()：在陣列插入項目

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

