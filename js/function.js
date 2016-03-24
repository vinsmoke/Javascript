//封装
// 获取指定字符串的所有位置方法1
//str 目标字符串
//str1  要找到的字符串

function pos(str,str1){
	for(var i=0;i<str.length;i++){
	if(str.substr(i,str1.length)==str1){
	document.write(i+'<br/>')}
}
}
// 	pos(str,'www');

//封装2  方法2
//str 目标字符串
//str1  要找到的字符串
function pos2(str,str1){
var pos=0;
var num=0;
while(str.match(str1)){
   pos=str.indexOf(str1);
   pos+=num;
   num+=str1.length;
   document.write(pos+'<br/>');
   str=str.slice(0,str.indexOf(str1))+str.slice(str.indexOf(str1)+5)
}
}
// pos2(str,'www');


//push 函数  给数组中添加新的值
// var arr=[1,2,3,4,5,6]
function push(arr){
		if(!(arguments[0] instanceof Array)|| arguments.length<=1)
		{
		return '请输入一个数组';
		}
		else
		{ for(var i=1;i<arguments.length;i++)
			{
				//arguments[0][arguments[0].length]=arguments[i];
				arr[arr.length]=arguments[i];
			}
				return arr.length;
		}
}

//document.write(push(arr,1,2,3,4));



//把数组的空值去掉
// var arr=[1,2, , ,5,7,]
function delnull(arr){
	var newArr=[];
	for(var i=0;i<arr.length;i++){
		if(checkNull(arr[i])){
		push(newArr,arr[i]);
		}
	}
	return newArr;
}

 function checkNull(num){
 	if(num==undefined){
 			return false;
 	}else{
 		return true;
 	}
 }

//  alert(delnull(arr))


//在数组的最前面位置放入新的数
 // var arr=[100,200,300,400,500,100]
 function unshift(arr){
 	if(!(arr instanceof Array)||arguments.length<=1)
		{
		return '请输入一个数组';
		}
		else{
			var newArr=[];
			for(var i=0;i<arr.length;i++){
				newArr[i]=arr[i];				
			}
			//alert(newArr.length);
			// var arr=[];
			arr.length=0;
			for(var j=1;j<arguments.length;j++){
			push(arr,arguments[j]);
			}
			
			for(var k=0;k<newArr.length;k++){
			push(arr,newArr[k]);
			}
		}
		 // alert(arr.length);
		 return arr.length;
 }
    // unshift(arr,0,20,30,40);

//随机取取数组中的数字，并不重复
    // var arr=[2,4,5,6,2,8,9];
    function ranArr(arr,num){
    	var newArr=[];
    	var index;
    	for(var i=0;i<num;i++){
    		index=Math.floor(Math.random()*arr.length);
    		while(panduan(newArr,arr[index])){
    			index=Math.floor(Math.random()*arr.length);
    		}
    		newArr.push(arr[index]);
    	}
    	return newArr;
    }
    function panduan(obj,num){
    		for(var i=0;i<obj.length;i++){
    			if (obj[i]==num){
    				return true;
    			}
    		}
    		return false;
    }
    // ranArr(arr,4);
    // document.write(ranArr(arr,4));

//去除数组中重复的数
// var arr=[2,4,5,5,6,8,6,5,2,10,11,11,8,9];
    function qccf(arr){
    	var newArr=[];
    	for(var i=0;i<arr.length;i++){
    		while(!panduan(newArr,arr[i])){
    			newArr.push(arr[i]);
    		}
    		
    	}
    	return newArr;
    }
    function panduan(obj,num){
    		for(var i=0;i<obj.length;i++){
    			if (obj[i]==num){
    				return true;
    			}
    		}
    		return false;
    }
//     // qccf(arr);
//     document.write(qccf(arr));


//解决 获取class名对象时  兼容性的问题 
// className   要获取的class名 
// range 范围
function getClass(className,range){
	var range=range?range:document;
	if(range.getElementsByClassName){
		return range.getElementsByClassName(className);

	}else{
		var all=range.getELementsByTagName('*');
		var newarr=[];
		for(var i=0;i<all.length;i++){
// 			if(all[i].className==className)
			if(checkClass(all[i],className))//检查class名中有没有要找的class名字符串
			{
					newarr.push(all[i]);
			}
		}
		return newarr;
	}
}
////检查class名中有没有要找的class名字符串
function checkClass(obj,classname){
	var arrC=obj.className.split("");//按空格分割  字符串分割成数组
	for(var i=0;i<arrC.length;i++){
		if(arrC[i]==classname){
			return true;
		}
	}
	return false;
}




//滚动条 点击开始 点击结束
//定时执行函数 setInterval
// window.onload=function(){
// 	var flag=true;
//     var t;
// document.documentElement.onclick=function(){	
	
// 	if(flag){
// 	    t=setInterval(function(){
// 		scrollBy(0,30)
// 	},1000)
// 		flag=false;
// 	}else{
// 		clearInterval(t)
// 		flag=true;
// 	}
	
// }
// }


//获取目标对象的属性值 解决兼容性的问题
// obj  要操作的对象
// attr   对象的属性  "width"
function getstyle(obj,attr){
			// return getComputedStyle(obj,null)[attr];
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}
			else{
				return getComputedStyle(obj,null)[attr];
			}
		}



		//区分 类名 id名 标签名的函数
		// var aa=$(".one");
		//如何区分
		// #one
		// .one
		// div
		//<div> 创建一个div
		// alert(aa)
		// selecter  指定的标签名 类名  id名 
		// ranges  操作的范围  
		function $(selecter,ranges){
			var ranges=ranges?ranges:document;
			var first=selecter.charAt(0);//返回在指定位置的字符串
			if(first=='#'){
				return document.getElementById(selecter.substring(1));//截取字符串 substring(起始，结束)不包括结束位置
			}
			else if(first=='.'){
				return getClass(selecter.substring(1),ranges);//类函数
			}else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){//匹配名字是否符合标准//正则表达式
				return ranges.getElementsByTagName(selecter);

			}else if(/^<[a-z][a-z1-6]{0,10}>$/.test(selecter)){
				//判断输入的是一个<div>新的div时
				return ranges.createElement(selecter.slice(1,-1));
			}
			}
			



			//封装  传入class名  进行内容的复制
			//将一个对象中的内容复制到另一个对象中
			//obj  目标中的对象
			//obj1  要给它复制内容的对象
	function setContent(obj,obj1){
		var one=document.getElementById(obj);
		var inputs=document.getElementsByTagName('input')[0];
		var two=document.getElementById(obj1);
		alert(one.innerHTML);
		inputs.onclick=function(){

		var con=one.innerHTML;//原样内容赋值 包括css样式
		two.innerHTML=con;
		// var con=one.textContent;//只拿回文本 不包括css
		// two.textContent=con;
		// var con=one.innerText;//只拿回文本 不包括css
		// two.innerText=con;
	}
	
}


//获取 目标对象中的文本内容
// val  内容 要写的内容
function getContent(obj,val){
	if(obj.textContent){
		if(val==undefined){
			return obj.textContent;
		}
		else{
			 obj.textContent=val;
		}
	}else{
		if(val===undefined){
			return obj.innerText;
		}
		else{
			 obj.innerText=val;
		}
	}
}


//动画
//obj   目标操作对象
//attrObj   操作的属性

//animate(one,{width:500,height:500,left:1000})
/*function animate(obj,attrObj,callback){
	var t=setInterval(function(){
		var speed=10;
		for(var i in attrObj){
			var begin=parseInt(getstyle(obj,i))
		

		if(begin>attrObj[i]){
			clearInterval(t);
			if(callback){
				callback();
			}
		}
		obj.style[i]=begin+speed+"px";
}

	},60)
}
	*/


//动画缓动
//obj   目标操作对象
//attrObj   操作的属性

//animate(one,{width:500,height:500,left:1000},10000)
	/*function animate(obj,attrObj,dur,callback){
			var time=0;
			var end={};
			for(var i in attrObj){
				end[i]=attrObj[i];
			}

		var t=setInterval(function(){
			for(var i in attrObj){
				var cha=end[i]-parseInt(getstyle(obj,i));
				if(time>=dur){
					clearInterval(t);
					obj.style[i]=end[i];
					if(callback){
						callback();
						}
				}

				//  cha    dur
				//change   time   //cha/dur = change/time
				obj.style[i]=cha*time/dur+parseInt(getstyle(obj,i))+"px";
			}
		},60)
		time+=60;
} */


//获取某个对象的子元素 
// getChilds(obj,type)
// obj   父元素
// type  true   获取父元素里面的元素节点 和有意义的文本
//       false   只获取父元素里面的元素节点

		function getChilds(obj,type){
			var type=type?type:false
			var childs=obj.childNodes;
			var temp=[];
			if(type===false){
				for(var i=0;i<childs.length;i++){
						if(childs[i].nodeType==1){
								temp.push(childs[i]);
				
					}
				}
			}else if(type===true){
				for(var i=0;i<childs.length;i++){
                if(childs[i].nodeType==1||(childs[i].nodeType==3 && !(/^\s+$/.test(childs[i].nodeValue)))){
						temp.push(childs[i]);
						alert(temp.length)
								}
							}
						}
				
				return temp;
			}

//获取目标元素中有意义的最后一个节点
function getlast(obj,type){
	return getChilds(obj)[getChilds[obj].length-1]
	}

//获取目标元素中有意义的第一个节点
function getfirst(obj,type){
	return getChilds(obj)[0]
	}

//获取目标元素中有意义的指定节点	
function getNum(obj,num){
			return getChilds(obj)[num];
		}





		//getNext(obj ,type)
       //type   true    识别有意义的文本
               // false    忽略文本

       function getNext(obj,type){
       		var type=type?type:false;
       		var next=obj.nextSibling;
       		if(type===false){
       			if(!next){
       				return false;
       			}
       			while(next.nodeType==3||next.nodeType==8){
       				next=next.nextSibling;
       				if(!next){
       				return false;
       			}
       			}

       		}
       		else if(type===true){
       			if(!next){
       				return false;
       			}
       			while((next.nodeType==3&&/^\s+$/.test(next.nodeValue))||next.nodeType==8){
       				next=next.nextSibling;
       				if(!next){
       				return false;
       			}

       		}
       		return next;
       }


       //insertAfter(obj,next,type)
       // obj:要插入的元素  对象
       // next:要插入的位置
       // type true 识别有意义的文本
       //      false  忽略文本

       //
       function insertAfter(obj,next,type){
       	var type=type?type:false;
       	var pos=getNext(next,type);
       	var parent=next.parentNode;
       	if(!pos){
       		parent.appendChild(obj);

       	}else{
       		parent.insertBefore(obj,pos);
       	}
       }