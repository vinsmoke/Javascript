window.onload=function(){
	function getChild(obj,type){
				//getChild(obj,type) 获取某个对象的子元素
				//obj是一个父节点  
				//type是 个类型  true获得节点和有意义的文本
				//false 获取元素节点
				var type=type?type:false
				var childs=obj.childNodes;
				//console.log(childs)
				var tmp=[];
				if(type===false){//如果是false的话，就要获取元素节点
					for(var i=0;i<childs.length;i++){
						//console.log(childs[i].nodeType)
						if(childs[i].nodeType==1){
							tmp.push(childs[i]);
	
						}
					}
				}
					else if(type==true){//如果是true，则就要获得节点和有意义的文本
						for(var i=0;i<childs.length;i++){
							if(childs[i].nodeType==1||(childs[i].nodeType==3 && !(/^\s+$/.test(childs[i].nodeValue)))){
							tmp.push(childs[i]);
						}							
						}
					}
					return tmp;
				}
				//得到第一个
				function getfist(obj){
					return getChild(obj)[0];
				}
				//得到最后一个
				function getLast(obj){
					return getChilds(obj)[getChilds[obj].length-1]
				}
				//是下一个
				//getNext(obj,type)
				//type  true 识别有意义的文本
				//false 忽略文本
				console.log(getNext(inner));
				insetAfer(div,inner)
				
			function getNext(obj){
				var type=type?type:false;
				var next=obj.nextSibling;
				if(type===false){//首先判断当type的类型是false时，
					if(!next){//判断是不是有下一个节点
						return false;//如果没有的话就返回			 
						}
						while(next.nodeType==3||next.nodeType==8){//如果有的话就循环看是不是注释节点或者是文本节点，如果是这之中的其中一种的话，就获取下一个节点，
							next=next.nextSibling;//获取了下一个节点载付给next
							if(!next){
							return false;			 
						}
						}	
				}else if(type===true){//如果是要获得节点和有意义的文本，
					if(!next){//首先也是要判断是不是有下一个
						return false;//如果没有下一个的话就要返回去			 
						}
						while((next.nodeType==3&&/^\s+$/.test(next.nodeValue))||next.nodeType==8){
							next=next.nextSibling;
							if(!next){
							return false;			 
						}
						}		

				}
				return next;
				}
				//insetAfer(obj,next)后在指定的元素后边添加一个数组
				////obj是要插入的一个元素或者十一对象
				//next是要插入的位置
				////type  true 识别有意义的文本
				//false 忽略文本
				function insertAfer(obj,next,type){
					var type=type?type:false;
					var pos=getNext(next,type);//就是将下一数有意义的数付给pos
					var parent=next.parentNode;//找出他的父元素
					if(!pos){//如果它没有下一元素
						parent.appendChild(obj);//就将指定的元素加载到父元素的最后
					}else{//如果最后有值，那就将最后指定的值放在指定的位置
						parent.insertBefore(obj,pos);
					}
				}
//想获得第几个
function getNum(obj,num){
	return getChilds(obj)[num-1]
}
			}
