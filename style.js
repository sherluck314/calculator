// 设置了严谨的计算方式和漂亮的变换
var message = "";
var flag = 0;
var result = true;
var if_get_result = false;
function precise(s) {//精度判断函数
	var ind = s.indexOf(".");
	if (ind === -1) {
		return s;
	}
	for (var i = 6; i > 0; i--) {
		if (s[ind+i] != '0') {
			break;
		}
	}
	if (ind == 0) {
		return s.substring(0, ind);
	}
	return s.substring(0, ind+i+1);
}
window.onload = function() {//加上这个以后才能
	document.getElementById("7").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug.png)";
		if (result == false && if_get_result == true) {
			if_get_result = false;
			result = true;
			document.getElementById("error").textContent = "";
		}
		flag = 0;
		message += "7";
		document.getElementById("present").textContent = message;
	}
	document.getElementById("8").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug.png)";
		if (result == false && if_get_result == true) {
			if_get_result = false;
			result = true;
			document.getElementById("error").textContent = "";
		}
		flag = 0;
		message += "8";
		document.getElementById("present").textContent = message;
	}
	document.getElementById("9").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug.png)";
		if (result == false && if_get_result == true) {
			if_get_result = false;
			result = true;
			document.getElementById("error").textContent = "";
		}
		flag = 0;
		message += "9";
		document.getElementById("present").textContent = message;
	}
	document.getElementById("1").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug.png)";
		if (result == false && if_get_result == true) {
			if_get_result = false;
			result = true;
			document.getElementById("error").textContent = "";
		}
		flag = 0;
		message += "1";
		document.getElementById("present").textContent = message;
	}
	document.getElementById("2").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug.png)";
		if (result == false && if_get_result == true) {
			if_get_result = false;
			result = true;
			document.getElementById("error").textContent = "";
		}
		flag = 0;
		message += "2";
		document.getElementById("present").textContent = message;
	}
	document.getElementById("3").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug.png)";
		if (result == false && if_get_result == true) {
			if_get_result = false;
			result = true;
			document.getElementById("error").textContent = "";
		}
		flag = 0;
		message += "3";
		document.getElementById("present").textContent = message;
	}
	document.getElementById("4").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug.png)";
		if (result == false && if_get_result == true) {
			if_get_result = false;
			result = true;
			document.getElementById("error").textContent = "";
		}
		flag = 0;
		message += "4";
		document.getElementById("present").textContent = message;
	}
	document.getElementById("5").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug.png)";
		if (result == false && if_get_result == true) {
			if_get_result = false;
			result = true;
			document.getElementById("error").textContent = "";
		}
		flag = 0;
		message += "5";
		document.getElementById("present").textContent = message;
	}
	document.getElementById("6").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug.png)";
		if (result == false && if_get_result == true) {
			if_get_result = false;
			result = true;
			document.getElementById("error").textContent = "";
		}
		flag = 0;
		message += "6";
		document.getElementById("present").textContent = message;
	}
	document.getElementById("0").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug.png)";
		if (result == false && if_get_result == true) {
			if_get_result = false;
			result = true;
			document.getElementById("error").textContent = "";
		}
		flag = 0;
		message += "0";
		document.getElementById("present").textContent = message;
	}
	document.getElementById("+").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug.png)";
		if (result == false && if_get_result == true) {
			if_get_result = false;
			result = true;
			document.getElementById("error").textContent = "";
		}
		flag ++;	
		if (flag > 1) {
			result = false;
		}
		message += "+";
		document.getElementById("present").textContent = message;
	}
	document.getElementById("-").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug.png)";
		if (result == false && if_get_result == true) {
			if_get_result = false;
			result = true;
			document.getElementById("error").textContent = "";
		}
		flag ++;
		if (flag > 1) {
			result = false;
		}
		message += "-";
		document.getElementById("present").textContent = message;
	}
	document.getElementById("*").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug.png)";
		if (result == false && if_get_result == true) {
			if_get_result = false;
			result = true;
			document.getElementById("error").textContent = "";
		}
		flag ++;
		if (flag > 1) {
			result = false;
		}
		message += "*";
		document.getElementById("present").textContent = message;
	}
	document.getElementById("/").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug.png)";
		if (result == false && if_get_result == true) {
			if_get_result = false;
			result = true;
			document.getElementById("error").textContent = "";
		}
		flag ++;
		if (flag > 1) {
			result = false;
		}
		message += "/";
		document.getElementById("present").textContent = message;
	}
	document.getElementById("(").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug.png)";
		if (result == false && if_get_result == true) {
			if_get_result = false;
			result = true;
			document.getElementById("error").textContent = "";
		}
		message += "(";
		document.getElementById("present").textContent = message;
	}
	document.getElementById(")").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug.png)";
		if (result == false && if_get_result == true) {
			if_get_result = false;
			result = true;
			document.getElementById("error").textContent = "";
		}
		message += ")";
		document.getElementById("present").textContent = message;
	}
	document.getElementById(".").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug.png)";
		if (result == false && if_get_result == true) {
			if_get_result = false;
			result = true;
			document.getElementById("error").textContent = "";
		}
		message += ".";
		document.getElementById("present").textContent = message;
	}
	document.getElementById("CE").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug.png)";
		if (result == false && if_get_result == true) {
			if_get_result = false;
			result = true;
			document.getElementById("error").textContent = "";
		}
		message = "";
		document.getElementById("present").textContent = message;
		document.getElementById("error").textContent = message;
	}
	document.getElementById("←").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug.png)";
		if (result == false && if_get_result == true) {
			if_get_result = false;
			result = true;
			document.getElementById("error").textContent = "";
		}
		if (message.length == 0) {
			return;
		}
		message = message.substring(0, message.length-1);
		document.getElementById("present").textContent = message;
	}
	document.getElementById("eva").onclick = function() {
		document.getElementById("menu").style.backgroundImage="url(img/bug1.png)";
		if_get_result = true;
		if (result == false) {
			document .getElementById("error").textContent = message+"是错误表达式";
			message = "";
			return;
		}
		result = false;
		try {
			eval(message);
		}
		catch(e) {
			document.getElementById("error").textContent = message+"是错误表达式";
			message = "";
		}
		var s = eval(message).toString();
		if (s === 'Infinity') {
			document.getElementById("error").textContent = message+"无穷大";
			message = "";
			return;
		}
		message = precise(s);
		document.getElementById("present").textContent = message;
		if_get_result = false;
		result = true;
	}
}

