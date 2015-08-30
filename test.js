//通过类名获取元素的封装
function getByClass(oParent, oClassName) {
    var aEle = oParent.getElementsByTagName('*');
    var aResult = [];
    for (var i = 0; i < aEle.length; i++) {
        if (aEle[i].className == oClassName) {
            aResult.push(aEle[i]);
        };
    };
    return aResult;
};
// 改变元素样式
function setStyle(name, value) {
    var oDiv = document.getElementById('div1');
    oDiv.style[name] = value;
};
//全选反选
var allNum = document.getElementById('div2').getElementsByTagName('input');

function allChecked() {
    for (var i = 0; i < allNum.length; i++) {
        allNum[i].checked = true;
    };
};

function checkedReversed() {
    for (var i = 0; i < allNum.length; i++) {
        if (allNum[i].checked == true) {
            allNum[i].checked = false;
        } else {
            allNum[i].checked = true;
        };
    };
};
//选项卡
var inputNum = document.getElementById('div3').getElementsByTagName('input');
var divNum = document.getElementById('div4').getElementsByTagName('div');
for (var i = 0; i < inputNum.length; i++) {
    inputNum[i].index = i;
    inputNum[i].onclick = function() {
        for (var i = 0; i < inputNum.length; i++) {
            inputNum[i].className = '';
            divNum[i].style.display = 'none';
        };
        this.className = "active";
        divNum[this.index].style.display = 'block';
    }
};
//简易日历
var oInput = document.getElementById('div5').getElementsByTagName('input');
var activity = document.getElementById('div6');
var arrCalendar = ['11', '22', '33', '44', '55', '66', '77', '88', '99', '1010', '1111', '1212']
for (var i = 0; i < oInput.length; i++) {
    oInput[i].value = i + 1 + '月';
    oInput[i].index = i;
    oInput[i].onclick = function() {
        for (var i = 0; i < oInput.length; i++) {
            oInput[i].className = '';
        };
        this.className = 'active';
        activity.innerHTML = '<h3>' + (this.index + 1) + '月份到啦!' + '</h3>' + '<br/>' + '<p>' + '本月' + arrCalendar[this.index] + '</p>';
    }
};
//隔行变色(%的应用)
var oLi = document.getElementById('ul7').getElementsByTagName('li');
for (var i = 0; i < oLi.length; i++) {
    if (i % 2 == 0) {
        oLi[i].style.background = '#FFCCCC';
    } else {
        oLi[i].style.background = '#FFFF66';
    };
    var oldColor = '';
    oLi[i].onmouseover = function() {
        oldColor = this.style.background;
        this.style.background = 'green';
    }
    oLi[i].onmouseout = function() {
        this.style.background = oldColor;
    }
};
//时间换算
var oInput1 = document.getElementById('changetime');
var sResult = document.getElementById('timechange');
oInput1.onclick = function() {
    var iSeconds = document.getElementById('seconds').value;
    sResult.innerHTML = parseInt(iSeconds / 3600) + '时' + parseInt(iSeconds % 3600 / 60) + '分' + iSeconds % 60 + '秒';
};
//显示当前时间（计时器的使用）
function tick() {
    var oDate = new Date();
    document.getElementById('showtime').innerHTML = '现在时间是' + oDate.getHours() + '时' + oDate.getMinutes() + '分' + oDate.getSeconds() + '秒';
};
setInterval(tick, 1000);
tick();
//延时提示框
var oDiv7 = document.getElementById('div7');
var oDiv8 = document.getElementById('div8');
var timer1;
oDiv7.onmouseover = oDiv8.onmouseover = function() {
    clearTimeout(timer1);
    oDiv8.style.display = 'block';
};
oDiv7.onmouseout = oDiv8.onmouseout = function() {
    timer1 = setTimeout(function() {
        oDiv8.style.display = 'none';
    }, 500);
};
//无缝轮播
var oDiv9 = document.getElementById('photobox');
var oUl1 = document.getElementById('photos');
oUl1.innerHTML += oUl1.innerHTML;
var timer2 = setInterval(move, 30);
function move() {
    oUl1.style.left = oUl1.offsetLeft + 2 + 'px';
    if (oUl1.offsetLeft < -800) {
        oUl1.style.left = '0';
    };
    if (oUl1.offsetLeft > 0) {
        oUl1.style.left = -800 + 'px';
    };
};
oDiv9.onmouseover = function() {
    clearInterval(timer2);
};
oDiv9.onmouseout = function() {
    timer2 = setInterval(move, 30);
};
//动态添加删除
var sContent1 = document.getElementById('content1');
var sBtn1 = document.getElementById('btn1');
var sContent2 = document.getElementById('content2');
var aContent = sContent2.getElementsByTagName('li');
sBtn1.onclick = function() {
        var contentBox = document.createElement('li');
        contentBox.innerHTML = sContent1.value + '<a href="javascript:;">删除</a>';
        if (aContent.length > 0) {
            sContent2.insertBefore(contentBox, aContent[0]);
        } else {
            sContent2.appendChild(contentBox);
        };
        var delContent = sContent2.getElementsByTagName('a');
        for (var i = 0; i < delContent.length; i++) {
            delContent[i].onclick = function() {
                sContent2.removeChild(this.parentNode);
            };
        };
    }
//表格操作，添加，删除，搜索（忽略大小写，模糊搜索，空格拆分搜索）
var sContent3 = document.getElementById('content3');
var sContent4 = document.getElementById('content4');
var sContent5 = document.getElementById('content5');
var cBtn2 = document.getElementById('btn2');
var cBtn3 = document.getElementById('btn3');
var tBy1 = document.getElementById('tby1');
var idNumb=tBy1.rows.length;
cBtn2.onclick = function() {
    var newAdd = document.createElement('tr');
    var idNum = document.createElement('td');
    var nameAdd = document.createElement('td');
    var ageAdd = document.createElement('td');
    var ctrlAdd = document.createElement('td');
    idNumb = idNumb+1;
    idNum.innerHTML = idNumb;
    nameAdd.innerHTML = sContent3.value;
    ageAdd.innerHTML = sContent4.value;
    ctrlAdd.innerHTML = '<a href="javascript:;">删除</a>';
    newAdd.appendChild(idNum);
    newAdd.appendChild(nameAdd);
    newAdd.appendChild(ageAdd);
    newAdd.appendChild(ctrlAdd);
    tBy1.appendChild(newAdd);
    delCtrl();
}
var delCtrl = function() {
    var delArr = tBy1.getElementsByTagName('a');
    for (var i = 0; i < delArr.length; i++) {
        delArr[i].onclick = function() {
            tBy1.removeChild(this.parentNode.parentNode);
        }
    };
}
delCtrl();
cBtn3.onclick = function() {
    var rowsArr = document.getElementById('tab1').tBodies[0].rows;
    for (var i = 0; i < rowsArr.length; i++) {
        var cellsArr = rowsArr[i].cells;
        rowsArr[i].style.background = '';
        for (var j = 0; j < cellsArr.length; j++) {
            var cellContent=cellsArr[j].innerHTML.toLowerCase();
            var inputContent=sContent5.value.toLowerCase();
            var inputArr=inputContent.split(' ');
            for (var k = 0; k < inputArr.length; k++) {
                if (cellContent.search(inputArr[k])!==-1 ) {
                cellsArr[j].parentNode.style.background = 'yellow';
                break;
                }
            };

        };
    };
}
//list排序
var btn4=document.getElementById('btn4');
var ul8=document.getElementById('sortlist');
var aLi1=ul8.getElementsByTagName('li');
var arrLi=[];
btn4.onclick=function(){
    for (var i = 0; i < aLi1.length; i++) {
        arrLi[i]=aLi1[i];
    };
    arrLi.sort(function(a,b){
        var a=parseInt(a.innerHTML),b=parseInt(b.innerHTML);
        return a-b;
    });
    for (var i = 0; i < arrLi.length; i++) {
        ul8.appendChild(arrLi[i]);
    };
}
//侧边栏分享
var dpl=document.getElementById('div9');
var oShare=document.getElementById('span1');
oShare.onmouseover={
    alert('aaaa');
    setInterval(function(){
        alert('aaa');
        dpl.offsetLeft=dpl.offsetLeft+300+'px';
    },30);

}