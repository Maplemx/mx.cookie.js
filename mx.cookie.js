/*Cookie Manage Easy Tool v 1.0 || Developed By Moxin || Email:maplemx@gmail.com*/
if(typeof($mx) == 'undefined'){var $mx = {};}
(function($){
	//Cookies Management
	$.setCookie = function(key,value,expires,path,domain){
		var cookieContent = '';
		if (key == null || value == null){
			console.log('Cookie key/value not set.');
			return false;
		}
		if (expires == null){expires = 0.5;}
		cookieContent = key + ' = ' + escape(value) + '; ';
		var expiration = new Date((new Date()).getTime() + expires * 3600 * 1000);
		cookieContent = cookieContent + 'expires = ' + expiration.toGMTString() + '; ';
		if (path != null){cookieContent = cookieContent + 'path = ' + path + '; ';}
		if (domain != null){cookieContent = cookieContent + 'domain = ' + domain + '; '}
		cookieContent = cookieContent;
		document.cookie = cookieContent;
		return true;
	}
	$.getCookie = function(key){
		var cookieString = document.cookie.replace(' ','');
		var cookieContents = cookieString.split(';');
		var cookies = new Object;
		for (var i in cookieContents){
			var cookieContent = cookieContents[i].split('=');
			cookies[cookieContent[0]] = unescape(cookieContent[1]);
		}
		return cookies[key];
	}
	$.clearCookie = function(){
		var cookieString = document.cookie.replace(' ','');
		var cookieContents = cookieString.split(';');
		for (var i in cookieContents){
			var cookieContent = cookieContents[i].split('=');
			$.setCookie(cookieContent[0],'',-1);
		}
	}
})($mx);