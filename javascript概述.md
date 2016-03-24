# javascript 概述

## 基础逻辑处理部分
    ###分支(逻辑操作)

    ###循环运算符
	### 函数(对语言的扩展)
	```javascript
	var vr = 1;//Number
	var vr = "1";//String
	var vr = [1,2,3]//Arry
	var vr ={q:1,b:2} //Object
	var vr =function(){}//Function
	var vr = true//Boolean
	var vr = undefined 
	var vr = null
	```javascript
	###逻辑运算符
	+ - * % 
	=== !!==   >　<  >=  <=
	 && || !
	 ###逻辑运算
	 if()
	 if()else 
	 if()else if()eles if()
	  swith(x){
	  case 1:
	   break;
	   case 2:
	   break;
	   default:
	   brak
	  } 
	  for(var i= 0 ; k=12;i<100;i++){

	  }
	  while(){

	  }
	  do{}while()
	  function xx(){

	  }
	var fn=function(x1,x2){
	//arguments
	}
	fn(a,b)
	//数组的常用方法
	//函数的常用方法 bind apply call
	//字符穿的常用方法
	//对象的增删改查 原型链
	//数字对象身上的方法 toFixed()
	//Math对象身上的方法
	functionA(c){
	this.x=c;
	}
	A.prototype.console= function(){
	console.log()
	}
	var obj=new A(1);
	obj.console
###  针对特定逻辑用途的部分
	> 当js来游览器运行的那一刻
	> 浏览器会创建一个window对象
	> window对象中很多属性和方法
	> 这些属性和方法不用加window.就能使用

	dom 对象  dom集合
	setInterval
		document.getElementById();


## 选取元素

		*el = document.getElementById();
		*el = document.getElementsByClassName()
		*el = document.getElementsByTagName();
		*el = document.getElementsByName();

###筛选元素
* el.parentNode
	*el.Childs;
	*el.fistChild;
	*el.lastChild;
	*el.nextSibling
	*el.previouSibling	
### 操作样式
  el.style.color="red"


### 获取位置信息
	window.screen.height;
	window.innerWidth;
	document.documentElement.ClientWidth;
	widow.screenLeft;
	offsetHeight;
	offsetLeft;
	offsetParent;
	offsetTop;
	offsetWidth;


### 操作属性
	el.setAttribute();
	el.className();
	el.id()
### 节点操作
	*appendChild
	*insetBefore
### 其他
innerLTML;
innerText;
textConten;
```javascript
var a=23;
var c=function(){
	console.log(1);
}
```javascript