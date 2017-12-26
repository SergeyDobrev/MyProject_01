		myfun41()
		myfun1()
		myfun2()
		myfun3()
		myfun4()



window.onscroll = function() {


var obj = document.querySelector('.Level1')
var elemRect = obj.getBoundingClientRect();
console.log(elemRect.top);
		if (elemRect.top < -100) {
			myfun5()

		} else if (elemRect.top < -150) {
			myfun5()
			myfun6()


		} else if (elemRect.top < -200) {
			myfun5()
			myfun6()
			createNumBlocks2()

		} else if (elemRect.top < -250) {
			myfun5()
			myfun6()
			createNumBlocks2()
			myfun7()

		} else if (elemRect.top < -300) {
			myfun5()
			myfun6()
			createNumBlocks2()
			myfun7()			
			myfun8()

		} 


}


var numBlocksArray = new Array;
var numBlocksArrayData1 = [  0, 28, 56, 84,112,140, 28, 56, 84, 112,
						    28,  0, 28, 56, 84,112,140,140,140];
var numBlocksArrayData2 = [ 28,  0,  0,  0,  0, 28, 56, 56, 56, 56,
						   112,140,140,140,140,140,140,112,168];
	for (var i = 0; i < numBlocksArrayData1.length; i++) {
		numBlocksArray[i] = document.createElement("div");
		$("#numberbox1").append(numBlocksArray[i]);
		$(numBlocksArray[i]).addClass("numberbox11");
			var c = Math.floor(Math.random()*200);
			 if (i % 4 === 0) {var a = (c + 50) * (-1); var b = (c + 50) * (-1)}
		else if (i % 4 === 1) {var a = (c + 50) * (-1); var b =  (c + 50)}
		else if (i % 4 === 2) {var a = (c + 50); var b =  (c + 50) * (-1)}
		else if (i % 4 === 3) {var a = (c + 50); var b =  (c + 50)}

		var x = numBlocksArrayData1[i] + a;
		var y = numBlocksArrayData2[i] + b;
		$(numBlocksArray[i]).css({"top": x + "px",
								  "left": y + "px"});
	}
function createNumBlocks() {
	for (var i = 0; i < numBlocksArray.length; i++) {
		$(numBlocksArray[i]).fadeIn(3000);
	}
}

function createNumBlocks2() {
	for (var i = 0; i < numBlocksArray.length; i++) {
		$(numBlocksArray[i]).fadeIn().animate({"top": numBlocksArrayData1[i] + "px",
									  "left": numBlocksArrayData2[i] + "px" }, {queue:false});
	}
}



function myfun1() {
	$('#index4').slideUp(3000);
}

function myfun2() {
	$('#index3').slideUp(2000);
}


function myfun3() {
	$('#index2').slideUp(3000);
	$('#index21').fadeOut(4000);
	$('#index23').fadeOut(2000);	
	$('#index24').fadeOut(2000);
	$('#index25').fadeOut(2000);
	$('#index26').fadeOut(2000);	
}

function myfun4() {
	$('#index1').slideUp(2000);
}

function myfun41() {
	$('#index5').slideUp(2000);
}

function myfun5() {
	$('#index1').slideDown(2000);
}

function myfun6() {
	$('#index2').slideDown(3000);
	$('#index21').fadeIn(4000);	
	$('#index23').fadeIn(2000);	
	$('#index24').fadeIn(2000);
	$('#index25').fadeIn(2000);
	$('#index26').fadeIn(2000);

	$('#index3').slideDown(2000);	
}

function myfun7() {
	$('#index4').slideDown(3000);
}

function myfun8() {
	$('#index5').slideDown(3000);
}

function myfun9() {
	var obj = document.querySelector('#index6');
	$('#index6').animate({"rotateZ": "180deg"}, 3000);
}

