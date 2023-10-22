	function showTime() {
		var e="",
		t=new Date,
		a=t.
		getHours(),
		n=t.getMinutes(),
		i=t.getSeconds();
		a>24&&(e="Pagi"),
		a>0&&(e="Pagi"),
		a>9&&(e="Siang"),
		a>14&&(e="Sore"),
		a>18&&(e="Malam"),
		24==a&&(a=12),
		a>12&&(a=a),
		a=checkTime(a),
		n=checkTime(n),
		i=checkTime(i),
		document.getElementById("jam").innerHTML=a+":"+n+":"+i+" "+e
	}
	function checkTime(e) {
		return e<10&&(e="0"+e),e
	}
	window.onload=function() {
		countUpFromTime("Sep 15, 2023 00:00:00","umur")
	},
	setInterval(showTime,500);
	
	<!-- INDEXAN -->
	function countUpFromTime(e,t) {
		e=new Date(e).getTime();
		var a=new Date-(e=new Date(e));
		months = Math.floor(a /  (1000 * 60 * 60 * 24 * 31)),
		hariUmur=Math.floor(a/864e5*1),
		jamUmur=Math.floor(a%864e5/36e5*1),
		menitUmur=Math.floor(a%864e5%36e5/6e4*1),
		detikUmur=Math.floor(a%864e5%36e5%6e4/1e3*1);
		var n=document.getElementById(t);
		n.getElementsByClassName("bulan")[0].innerHTML=months,
		n.getElementsByClassName("hari")[0].innerHTML=hariUmur,
		n.getElementsByClassName("jam")[0].innerHTML=jamUmur,
		n.getElementsByClassName("mnt")[0].innerHTML=menitUmur,
		n.getElementsByClassName("dtk")[0].innerHTML=detikUmur,
		clearTimeout(countUpFromTime.interval),countUpFromTime.interval=setTimeout(function() {
			countUpFromTime(e,t)
		},1e3)
	}
	
	<!-- TGL & JAM -->
	var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
	var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum&#39;at", "Sabtu"];
	var date = new Date();
	var day = date.getDate();
	var month = date.getMonth();
	var thisDay = date.getDay(),
	thisDay = days[thisDay];
	var yy = date.getYear();
	var year = (yy < 1000) ? yy + 1900 : yy;
	document.getElementById("tanggal").innerHTML = thisDay + ", " + day + " " + months[month] + " " + year;