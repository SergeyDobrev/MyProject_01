var TimerId  = null;
var TimerId1  = null;
var TimerId2  = null;
var TimerId3  = null;

var numBlocksArrayData = [  0, 28, 56, 84,112,140, 28, 56, 84, 112,
						    28,  0, 28, 56, 84,112,140,140,140];
var numBlocksArrayData1 = [ 28,  0,  0,  0,  0, 28, 56, 56, 56, 56,
						   112,140,140,140,140,140,140,112,168];
var numBlocksArrayData2 = [ 28,  0,  0,  0,  0, 28, 56, 56, 56, 56,
						   112,140,140,140,140,140,140,112,168];
var numBlocksArrayData3 = [ 28,  0,  0,  0,  0, 28, 56, 56, 56, 56,
						   112,140,140,140,140,140,140,112,168];

var numBlocksArray1 = new Array;
crNumBlocks(numBlocksArray1, numBlocksArrayData1, '#numberbox1');

var numBlocksArray2 = new Array;
crNumBlocks(numBlocksArray2, numBlocksArrayData2, '#numberbox2');

var numBlocksArray3 = new Array;
crNumBlocks(numBlocksArray3, numBlocksArrayData3, '#numberbox3');

function crNumBlocks(ar, nbad, bid) {

	for (var i = 0; i < nbad.length; i++) {

		ar[i] = document.createElement("div");
		$(bid).append(ar[i]);
		$(ar[i]).addClass('numberbox11');

			 var c = Math.floor(Math.random()*200);
			 if (i % 4 === 0) {var a = (c + 50) * (-1); var b = (c + 50) * (-1)}
		else if (i % 4 === 1) {var a = (c + 50) * (-1); var b =  (c + 50)}
		else if (i % 4 === 2) {var a = (c + 50); var b =  (c + 50) * (-1)}
		else if (i % 4 === 3) {var a = (c + 50); var b =  (c + 50)}

		$(ar[i]).css({"top": numBlocksArrayData[i] + a + "px", "left": nbad[i] + b + "px"});
	}
}

open01('#mindex1');
setTimeout(rotate01, 2000, '#mrotate01');
setTimeout(open02, 3000, '#mindex2');
setTimeout(open03, 5000, '#mindex3', '#mindex4', '#mindex5');
setTimeout(open05, 7000, numBlocksArray1, numBlocksArrayData1);
setTimeout(open07, 8000, '#mindex6');

setTimeout(open01, 11000, '#mindex12');
setTimeout(rotate01, 13000, '#mrotate02');
setTimeout(open02, 15000, '#mindex22');
setTimeout(open03, 17000, '#mindex32', '#mindex42', '#mindex52');
setTimeout(open05, 18000, numBlocksArray2, numBlocksArrayData2);
setTimeout(open07, 19000, '#mindex62');

setTimeout(open01, 20000, '#mindex13');
setTimeout(rotate01, 22000, '#mrotate03');
setTimeout(open02, 24000, '#mindex23');
setTimeout(open03, 26000, '#mindex33', '#mindex43', '#mindex53');
setTimeout(open05, 27000, numBlocksArray3, numBlocksArrayData3);
setTimeout(open07, 28000, '#mindex63');


/*window.onscroll = function() {

var obj = document.querySelector('.level1')
var elemRect = obj.getBoundingClientRect();
console.log(elemRect.top);
		if (elemRect.top < -50 && elemRect.top > - 500) {
			open01('#mindex1');
			clearTimeout(TimerId1);
			TimerId1 = setTimeout(open02,2000);
			clearTimeout(TimerId2);
			TimerId2 = setTimeout(open03,1000);
			clearTimeout(TimerId3);
			TimerId3 = setTimeout(open05,3000);
		}
		if (elemRect.top < -400 && elemRect.top > -1200) open01('#mindex1');;
		if (elemRect.top < -600 && elemRect.top > -2400) open07();
		if (elemRect.top < -800) open01('#mindex12');

		if (elemRect.top < -1200) {
			//close07();
			close05();
			close03();
			close02();
			close01();
		}
		if (elemRect.top < -50 && elemRect.top > - 500) {
			open01(mindex21);
			clearTimeout(TimerId1);
			TimerId1 = setTimeout(open02,2000);
			clearTimeout(TimerId2);
			TimerId2 = setTimeout(open03,1000);
			clearTimeout(TimerId3);
			TimerId3 = setTimeout(open05,3000);
		}

}*/






function open01(m) {
	$(m).fadeIn(2000);
}

function close01() {
	$('#mindex1').slideUp(2000);
}

function open02(m) {
	$(m).slideDown(2000);
}

function close02() {
	$('#mindex2').slideUp(2000);
}

function open03(m1, m2, m3) {
	$(m1).slideDown(2000);
	$(m2).fadeIn(2000);	
	$(m3).slideDown(2000);
}

function close03() {
	$('#mindex3').slideUp();
	$('#mindex4').fadeOut();
	$('#mindex5').slideUp();
}

function open05(ar, nbad) {
	for (var i = 0; i < ar.length; i++) {
		$(ar[i]).fadeIn().animate({"top": numBlocksArrayData[i] + "px",
									  "left": nbad[i] + "px" }, {queue:false});
	}
}

function close05() {
	for (var i = 0; i < numBlocksArray.length; i++) {
			var c = Math.floor(Math.random()*200);
			 if (i % 4 === 0) {var a = (c + 50) * (-1); var b = (c + 50) * (-1)}
		else if (i % 4 === 1) {var a = (c + 50) * (-1); var b =  (c + 50)}
		else if (i % 4 === 2) {var a = (c + 50); var b =  (c + 50) * (-1)}
		else if (i % 4 === 3) {var a = (c + 50); var b =  (c + 50)}
		$(numBlocksArray[i]).fadeOut().animate({"top": numBlocksArrayData1[i] + a + "px",
									  "left": numBlocksArrayData2[i] + b + "px" }, {queue:false});
	}
}


function open07(m) {
	$(m).slideDown(2000);
}

function close07() {
	$('#mindex6').slideUp();
}

function rotate01(m) {

	var TimerId = null;
	clearTimeout(TimerId);

	var x = 0;
	var y = 0;

	for (var i = 0; i < 181; i++) {
		t = 5 * i;
		TimerId = setTimeout(myfun, t, i);
	}

	function myfun(i) {
		document.querySelector(m).style.transform = 
		"rotateX(" + y + i * 2 + "deg)" + 
		"rotateY(" + x + i + "deg)" + "rotateZ(45deg)";
	}
}