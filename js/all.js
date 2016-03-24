//getStyle获取函数
//obj是获取的对象attr是要获取的属性
function getStyle(obj,attr){
	if(obj.currentStyle){//如果有这个属性，则可以ie下运行
return obj.currentStyle[attr]//获取指定函数的属性
}else{
  return getComputedStyle(obj,null)[attr]//是在w3c的环境下，获得指定函数的  
}属性
}
// get class(className)获取指定类名的元素
// className指定的类名
//range是范围
function getClass(className,range){
	var range=range?range:document;
	if(range.getElementsByClassName){//如果游览器里有这个就会返回一个值是在w3c中用
		return range.getElementsByClassName(className);//获取的是一个范围内指定类名的元素
	}else{
		var all=range.getElementsByTagName("*")//获得所有标签的元素
		var newARR=[];
		for(var i=0;i<all.length;i++){
			if(check(all[i].className,className)){
                 newARR.push(all[i])
			}
		}
             return newARR;
	}
}
//check检查函数
//arr是数组num是要检查相等的值
//目的是检查arr数组中arr[i]是否与num相等的值，如果有返回1；没有返回0
function check(obj,num){
	var obj=obj.split(" ");//按空格分割，将字符串分割成数组
for(i=0;i<obj.length;i++){
	if(obj[i]==num){
		return true;
	}
}return false;

}
//copy是复制函数，先判断环境是ie或者w3c
//val是要复制进去的东西
//obj是要传入的对象的id名

function copy(obj,val){
	if(obj.textContent)//IE不能用  textContent是无样式的文本，集合时必须有下标
     {
          if(val==undefined){
               return obj.textContent//如果所复制的值为空的话，就将原来的值返回来
          	}else{
          	obj.textContent=val//如果复制的值有东西，就把所复制的东西返回来
     }
	}else{//innerText是在IE中用
		if(val==undefined){
               return obj.innerText
          	}else{
          	obj.innerText=val
          }
     }
}
//allgain获取(#one,.one,div)样式
//selecter是获取的参数(#one,.one,div)
//
function $(selecter,ranges){
  var ranges=ranges?ranges:document;
	var first=selecter.charAt(0)
       if(first=="."){
       return getClass(selecter.substr(1))
       }else if(first=="#"){
       return ranges.getElementById(selecter.substr(1))
       }else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){//10 是10位
       	return ranges.getElementsByTagName(selecter)
       }else if(/^<[a-z][a-z1-6]{0,10}>$/.test(selecter)){
          return document.createElement(selecter.slice(1,-1))
       }
}
function insertAfter(inner,div,out){//div是要插入的对象 inner是位置,out是父元素
 var a=inner.parentNode;
 var childs=getChilds(a)
 for(var i=0;i<childs.length;i++){
 if(childs[i]==inner){
 var index=i;
 break;
 }
 }
 var after=childs[index+1]
 out.insertBefore(div,after)
}