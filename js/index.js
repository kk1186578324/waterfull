$(function () {
waterfull();
var count = 0;
var dataInt = {"data":[{"src":'pic10.jpg'}]}
window.onscroll = function(){
	  count++;
	  console.log(count);
	// if(count>160){

	// }else{


	if(scroll){
		var $oParent = $(".main");
		for(var i = 0;i<dataInt.data.length;i++){
			var oBox = $('<div></div>');
			oBox.addClass('box');
			$oParent.append(oBox);
			var oPic =$('<div></div>');
			oPic.addClass('pic');
			oBox.append(oPic);
			var oImg =$('<img>');
			oImg.attr({
				src: "img/" + dataInt.data[i].src
			});
			oPic.append(oImg);
		}

    waterfull();
	}
// }

}


})

function waterfull(){
	var $oParent = $(".main");
	var $boxs = $(".box");
	var boxs = document.getElementsByClassName('box');
	//计算页面的列数
	var $boxW = $boxs[0].offsetWidth;
	console.log($boxW);
	//计算列数
	var cols = Math.floor($(document).width()/$boxW);
	// console.log(cols);
	$oParent.css({
		width:$boxW*cols +"px",
		margin:"0 auto"
	})
	var hArr = [];//存放每列高度的数组
	$boxs.each(function(i,e){
      if(i < cols){
      	hArr.push($(this).height());
      }else{
      	var minH = Math.min.apply(null,hArr);
      	var index = getMinIndex(hArr,minH);
      	var cont = boxs[index].offsetLeft;
      	// console.log(cont);
      	 $boxs.eq(i).css({
      		position:'absolute',
      		top:minH +10 + 'px',
      		left:cont+'px'
      	})
      	hArr[index]+=boxs[i].offsetHeight;
      }
	})
}
function getMinIndex(arr,val){
	for( i in arr){

		if( arr[i] == val){
			return i;
		}
	}
}
function scroll(){
	var $oParent = $(".main");
	var $boxs = $(".box");
	var lastBoxH = $boxs[$boxs.length-1].offsetTop + Math.floor($boxs[$boxs.length-1].offsetHeight/2)
	var scrollTop = document.documentElement.scrollTop;
	var height =  document.documentElement.clientHeight;
	return (lastBoxH<scrollTop+height)?true:false;
}