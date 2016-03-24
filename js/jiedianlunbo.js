window.onload=function(){
	//获取元素
	var win=$(".banner_img")[0]
	var box=$(".box")[0]
	var as=$("a",box);
	//alert(as);
	var anniul=$(".anniu1")[0];
	var anniur=$(".anniu2")[0];
	//alert(anniul);
	//如果不知道宽度的话，就要获取宽度
	len=as.length;
	//alert(len);
	var aw=parseInt(getStyle(as[0],"width"))
	
	box.style.width=aw*len+"px"
	//alert(box.style.width);
	var t;
	var flag=true;
	t=setInterval(move,1000);
	win.onmouseover=function(){
		clearInterval(t);
	}
	win.onmouseout=function(){
	t=setInterval(move,1000);
	}
		anniul.onclick=function(){
			move();
		}
		anniur.onclick=function(){
			mover();
		}
		/* function move(){
	 	if(!flag){
	 		return;
	 	}
	 	flag=false;
	 	//box 在window中  通过控制定位的left值控制 大小 位置
	 	animate(box,{left:-aw},function(){
	 		var first=getfirst(box);//获取盒子box中的第一个元素
	 		box.style.left="0px";
	 		box.appendChild(first);//将第一个元素  放到box 的最后
	 		flag=true;
	 	})
	 }

	 	function mover(){
	 	if(!flag){
	 		return;
	 	}
	 	flag=false;
	 		var first=getfirst(box);
	 		var last=getlast(box);
	 		box.style.left=-aw+"px";
	 		box.insertBefore(last,first);
	 	animate(box,{left:aw,function(){flag=true;}})*/

function mover(){
	if(!flag){
		return;
		}
		flag=false;
		var first=getfirst(box);
		var last=getlast(box);
		box.style.left=-aw+"px"
		alert(box.style.left);
		//把第一个孩子拿下来
	box.insertBefore(last,first);
		animate(box,{left:aw},function(){
	flag=true;
	});

}
	function move(){
	if(!flag){
		return
		}
		flag=false;
		animate(box,{left:-aw},function(){
		var first=getfirst(box);
		//把第一个孩子拿下来
		box.style.left="0px";
	box.appendChild(first);
	flag=true;
	});

}

}
function getfirst(obj,type){
	return getChilds(obj)[0]
	}
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
	function getlast(obj,type){
	return getChilds(obj)[getChilds[obj].length-1]
	}
