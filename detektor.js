/* Dibuat Oleh: Kim T
https://medium.com/creative-technology-concepts-code/detect-device-browser-and-version-using-javascript-8b511906745
*/

(function () {
	'use strict';
	
	var module = {
		options: [],
		header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
		dataos: [
		{ name: "<i class='material-icons'>android</i>Android", value: 'Android', version: 'Android' },
		{ name: "<i class='material-icons'>phone_iphone</i>iPhone", value: 'iPhone', version: 'OS' },
		{ name: "<i class='material-icons'>tablet_mac</i>iPad", value: 'iPad', version: 'OS' },
		{ name: "<i class='material-icons'>laptop_mac</i>Macintosh", value: 'Mac', version: 'OS X' },
		{ name: "<i class='material-icons'>desktop_windows</i>Windows", value: 'Win', version: 'NT' },
		{ name: "<i class='material-icons'>phone_android</i>Windows Phone", value: 'Windows Phone', version: 'OS' },
		{ name: "<i class='material-icons'>computer</i>Linux", value: 'Linux', version: 'rv' },
		{ name: "<i class='material-icons'>tablet_android</i>Kindle", value: 'Silk', version: 'Silk' },
		{ name: "<i class='material-icons'>tablet_android</i>PlayBook", value: 'PlayBook', version: 'OS' },
		{ name: "<i class='material-icons'>phone_android</i>BlackBerry", value: 'BlackBerry', version: '/' },
		{ name: "<i class='material-icons'>computer</i>Palm", value: 'Palm', version: 'PalmOS' }
		],
		databrowser: [
		{ name: "<i class='fa fa-edge'></i> Internet Explorer", value: 'MSIE', version: 'MSIE' },
		{ name: "<i class='fa fa-opera'></i> Opera", value: 'Opera', version: 'Opera' },
		{ name: "<i class='fa fa-chrome'></i> Chrome", value: 'Chrome', version: 'Chrome' },
		{ name: "<i class='fa fa-delicious'></i> BlackBerry", value: 'CLDC', version: 'CLDC' },
		{ name: "<i class='fa fa-firefox'></i> Firefox", value: 'Firefox', version: 'Firefox' },
		{ name: "<i class='fa fa-firefox'></i> Mozilla", value: 'Mozilla', version: 'Mozilla' },
		{ name: "<i class='fa fa-safari'></i> Safari", value: 'Safari', version: 'Version' }
		],
		init: function () {
			var agent = this.header.join(' '),
			os = this.matchItem(agent, this.dataos),
			browser = this.matchItem(agent, this.databrowser);
			return {
				os: os, browser: browser
			};
		},
		matchItem: function (string, data) {
			var i = 0,
			j = 0,
			html = '', regex, regexv, match, matches, version;
			for (i = 0; i < data.length; i += 1) {
				regex = new RegExp(data[i].value, 'i');
				match = regex.test(string);
				if (match) {
					regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
					matches = string.match(regexv);
					version = '';
					if (matches) {
						if (matches[1]) {
							matches = matches[1];
						}
					}
					if (matches) {
						matches = matches.split(/[._]+/);
						for (j = 0; j < matches.length; j += 1) {
							if (j === 0) {
								version += matches[j] + '.';
							} else {
								version += matches[j];
							}
						}
					} else {
						version = '0';
					} return {
						name: data[i].name,
						version: parseFloat(version)
					};
				}
			} return {
				name: 'unknown', version: 0
			};
		}
	};
	var e = module.init(),
	debug = '';
	debug += 'os.name = ' + e.os.name + '<br/>';
	debug += 'os.version = ' + e.os.version + '<br/>';
	debug += 'browser.name = ' + e.browser.name + '<br/>';
	debug += 'browser.version = ' + e.browser.version + '<br/>';
	debug += '<br/>';
	debug += 'navigator.userAgent = ' + navigator.userAgent + '<br/>';
	debug += 'navigator.appVersion = ' + navigator.appVersion + '<br/>';
	debug += 'navigator.platform = ' + navigator.platform + '<br/>';
	debug += 'navigator.vendor = ' + navigator.vendor + '<br/>';
	
	document.getElementById('model').innerHTML = ""+e.os.name+"";
	document.getElementById('versi').innerHTML = ""+e.os.version+"";
	document.getElementById('vendor').innerHTML = ""+navigator.vendor+"";
	document.getElementById('hardware').innerHTML = ""+navigator.platform+"";
	document.getElementById('browser').innerHTML = ""+e.browser.name+"";
	document.getElementById('ver').innerHTML = ""+e.browser.version+"";
}());

var apiLevel = parseInt(navigator.userAgent.match(/Android\s(\d+)/)[1], 10);
document.getElementById('api').innerHTML = apiLevel;