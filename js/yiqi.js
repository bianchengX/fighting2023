// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("是不是这个男的没安排好?");
	   }else if(Dianji==2){
		   		alert("是不是不太符合你的胃口？咱记得下次换个餐厅");
		   		
	   }else if(Dianji==3){
		   		alert("你要不再回去点个甜品尝尝？");
		   		
	   }else if(Dianji==4){
		   		alert("能告诉我你喜欢吃什么吗？一定要让你满意!");
		   		
	  }else if(Dianji==5){
		   		alert("今天不行，改天再来！");
	  }else if(Dianji==6){
		   		alert("也可能是工作太累了，下次休息日吃味道肯定更佳！");
	  }else if(Dianji==7){
		   		alert("不管怎样，后面希望能一起玩哟！");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("❤❤❤ 还是你有品位，给你点个赞，有空我们继续约 ❤❤❤");
	}
	

}