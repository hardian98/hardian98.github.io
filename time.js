	// 6-01-2024
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
	
	// Sambutan
	day = new Date()
	hr = day.getHours()
	
	if ((hr==1) || (hr==2))
	document.getElementById("ucapan").innerHTML = "Selamat Pagi.<br/>Kebangun, ya?";

	if (hr==3)
	document.getElementById("ucapan").innerHTML = "Tidur lagi, yuk.<br/>Tapi jangan lupa untuk charge ponselmu, ya.";

	if (hr==4)
	document.getElementById("ucapan").innerHTML = "Mau lanjut tidur apa belum tidur, nih?";

	if (hr==5)
	document.getElementById("ucapan").innerHTML = "Jam 5 Pagi.<br/>Tidak lupa untuk mengisi daya ponselmu, kan?";

	if (hr==6)
	document.getElementById("ucapan").innerHTML = "Saya harap kamu tidak lupa me-charge ponselmu semalam.";
	
	if ((hr==7) || (hr==8))
	document.getElementById("ucapan").innerHTML = "Selamat Pagi.<br/>Selamat Beraktifitas.";
	
	if ((hr==9) || (hr ==10) || (hr== 11))
	document.getElementById("ucapan").innerHTML = "Selamat Bekerja.";
	
	if (hr==12)
	document.getElementById("ucapan").innerHTML = "Waktunya makan siang.<br/>Bagaimana kondisi baterai ponselmu siang ini?";
	
	if ((hr==13) || (hr==14))
	document.getElementById("ucapan").innerHTML = "Selamat Siang.<br/>Selalu perhatikan suhu ponselmu.";
	
	if ((hr==15) || (hr==16))
	document.getElementById("ucapan").innerHTML = "Masih baik-baik saja?";
	
	if (hr==17)
	document.getElementById("ucapan").innerHTML = "Butuh pengisian?";
	
	if (hr==18)
	document.getElementById("ucapan").innerHTML = "Hari yang bagus!<br/>Berapa % daya baterai ponselmu?";
	
	if ((hr==19) || (hr==20))
	document.getElementById("ucapan").innerHTML = "Selamat Beristirahat.";
	
	if ((hr==21) || (hr==22))
	document.getElementById("ucapan").innerHTML = "Waktunya Tidur?<br/>Atau masih menikmati santaimu?";
	
	if ((hr==23) || (hr==0))
	document.getElementById("ucapan").innerHTML = "Saatnya Tidur.<br/>Jangan lupa istirahatkan dan charge ponselmu.";
	// End -->
	
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