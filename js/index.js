$(function() {
	
	$("body").not(".menu-popup").click(function() {
	//	$(".menu-popup-container").hide();
	});
	
	$(document).on("click", ".ajax-popup", function() {
		ajaxPopup($(this).attr("ajax_file"), $(this).attr("title"), $(this).attr("params"), $(this).attr("closeable"));
		return false;
	});
 
	$(document).on("click", ".close-popup, .close-popup-button", function() {
		clearInterval($(".popup-countdown-timer").attr("intid"));
		$("#popup-window, #filter-mask").remove();
		$("html").css({"overflow" : "auto", "height" : "auto"});
		return false;
	});
	
	$(document).on("click", ".form-submitter", function() {
		$(this).parents("form").submit();
		return false;
	});
	
	$(".menu-popup, .menu-icon").click(function() {
		$(this).next().toggle(0);
		return false;
	});
	
	$(".table-of-contents .f-right a").click(function() {
		if($(this).text() == "скрыть") {
			$(this).text("показать");
		}
		else {
			$(this).text("скрыть");
		}
		$(".table-of-contents ul").toggle(250);
		return false;
	});

	$("a[href*=#]").bind("click", function(e){
		var anchor = $(this);
		var e1 = anchor.attr('href').split("#");
		if(!e1[0]) {
			var st = $("#" + e1[1]).offset().top;
			$('html, body').animate({
				scrollTop: st
			}, 500);
			e.preventDefault();
			return false;
		}
	});

	$(document).on("click", ".payment-methods .variant", function() {
		$(".payment-methods .variant").removeClass("active");
		$(this).addClass("active");
		$("#other-payment-methods").removeAttr("checked");
	});
	
	$(document).on("click", ".choose-payment-method label", function() {
		$(".payment-form, #sms-slowpoke-warning").hide();
		$("#" + $(this).attr("form")).show();
		if($(this).attr("slowpoke")) {
			$("#sms-slowpoke-warning").show();
		}
	});
	
	$(document).on("click", "#other-payment-methods", function() {
		$(".payment-methods .variant").removeClass("active");
	});
	
	$('.duration-selector').on('change', function() {
		var day_type = $('#promo-block-time-selector').find(":selected").attr('day_type');
		var cost = parseInt($(this).find(":selected").attr('cost_value'));
		if(day_type == 2) {
			cost = Math.round((cost + cost * $('#promo-block-time-selector').attr('tomorrow_increase') / 100));
		}
		if(day_type == 3) {
			cost = Math.round((cost + cost * $('#promo-block-time-selector').attr('after_tomorrow_increase') / 100));
		}
		$(this).parents("form").find(".form-submitter .in-button.credits").text(numberWithCommas(cost));
	});
	
	$('#promo-block-time-selector').on('change', function() {
		var day_type = $(this).find(":selected").attr('day_type');
		var cost = parseInt($('.duration-selector').find(":selected").attr('cost_value'));
		if(day_type == 2) {
			cost = Math.round((cost + cost * $(this).attr('tomorrow_increase') / 100));
		}
		if(day_type == 3) {
			cost = Math.round((cost + cost * $(this).attr('after_tomorrow_increase') / 100));
		}
		$(this).parents("form").find(".form-submitter .in-button.credits").text(numberWithCommas(cost));
	});
	
	$(".select-all").on("click", function () {
		$(this).select();
	});
	
	$(".toggle").on("click", function () {
		$("#" + $(this).attr("toggle_id")).toggle(300);
		return false;
	});

	$(".woops-why-not-trigger").on("click", function () {
		if($(this).val() > 1) {
			$(".woops-why-not").show(300);
		}
		else {
			$(".woops-why-not").hide(300);
			$("#reason_why_not").val("");
		}
	});
	
	$(".search-results .refresh-icon").on("click", function () {
		$.ajax({
			type: "POST",
			url: "ajax/update-user-data-by-api.php",
			data: ({twitch_id: $(this).attr('data-twitch-id')}),
			dataType: "html",
			success: function(data) {
				window.location = window.location.href;
			}
		});
		return false;
	});
	
	$(document).on("change", "#blitz_price_trigger", function() {
		if($(this).is(':checked')) {
			$("#bet_input").val($(this).attr("data-blitz-bet"));
		}
		else {
			$("#bet_input").val($(this).attr("data-min-bet"));
		}
	});
	
	$(document).on("input", "#bet_input", function() {
		if($(this).val() != $("#blitz_price_trigger").attr("data-blitz-bet")) {
			$("#blitz_price_trigger").prop("checked", false);
		}
		else {
			$("#blitz_price_trigger").prop("checked", true);
		}
	});
	
	$(".streams-list .item").each(function(indx, element) {
		$(element).find(".stream-img").load(function() {
			$(element).find(".image").css({"background" : "none"});
		}).each(function() {
			if(this.complete) {
				$(this).load();
			}
		});
	});

	$(window).resize(function() {
		adjusting();
	});
	
	$(window).scroll(function() {
		if($('div').is('#popup-window')) {
			/*$("#popup-window").css({"marginTop" : $(window).scrollTop() + "px"});*/
		}
	});

	adjusting();
});

function adjusting() {
	if($('*').is('#twitchFrame')) {
		if($('.container').width() == 1230) {
			var k = 1230;
		}
		else {
			var k = 900;
		}
		$('#twitchFrame').css({'height' : Math.round($('.container').width() * 508 / k + ($('#twitchFrame').attr("player_type") == "old" ? 30 : 0)) + 'px'});
	}
	if($('div').is('.content-left')) {
		$('.content-left').css({'width' : $('.container').width() - 330 + 'px'});
	}
	$(".menu-popup").each(function(indx, element) {
		$(this).next().css({'left' : $(this).offset().left - ($(this).next().outerWidth() - $(this).outerWidth()) + 'px'});
	});
	$("#filter-mask").css("height", $(document).height());
	$(".wrapper").css("min-height", ($(window).height() - $(".footer").outerHeight(true)) + "px");
	adjustFloatBlocks(".benefits-list .item");
	if($(window).width() > 740) {
		$(".header .links .menu-content").show();
	}
	$('.adjustable-input').css({'width' : $('.content-left').width() - 44 + 'px', 'backgroundPosition' : $('.content-left').width() - 26 + 'px -136px'});
	$('.adjustable-submitter').css({'marginLeft' : $('.content-left').width() - 44 + 'px'});
	if($('div').is('.jcarousel')) {
		var cw = $(".jcarousel ul li").length * 67 - 6;
		if(cw < $(".content-left").width()) {
			$(".jcarousel .inner").width(cw);
		}
	}
	$(".streams-list .boost-income").each(function(indx, element) {
		$(element).css({"marginLeft" : ($(element).parents(".image").width() - $(element).width() - 2) + "px"}).fadeIn(500);
	});
}

function strip_tags(str) {return str.replace(/<\/?[^>]+>/gi, '');}

function timer(id) {var t = $("#" + id).text();var hms = t.split(":");var h = parseInt(hms[0]);var m = parseInt(hms[1]);var s = parseInt(hms[2]);if(s == 59) {var s = 0;if(m == 59) {var m = 0;++h;}else {++m;}}else {++s;}if(s < 10) {var s = "0" + s;}if(m < 10) {var m = "0" + m;}if(h < 10) {var h = "0" + h;}$('#' + id).text(h + ':' + m + ':' + s);}

function reverseTimer(id, alert_ajax_file, url, execute_ajax_file) {var t = strip_tags($("#" + id).text());var hms = t.split(":");var hmsl = hms.length;if(hmsl == 3) {var h = parseInt(hms[0]);var m = parseInt(hms[1]);var s = parseInt(hms[2]);}if(hmsl == 4) {var d = parseInt(hms[0]);var h = parseInt(hms[1]);var m = parseInt(hms[2]);var s = parseInt(hms[3]);}if(s == "00") {if(m == "00") {if(h == "00") {if(hmsl == 3 || (hmsl == 4 && d == "00")) {if(alert_ajax_file) {clearInterval($("#" + id).attr("intid"));ajaxPopup(alert_ajax_file, '', '', true);}if(url){$(location).attr('href', url);}if(execute_ajax_file) {clearInterval($("#" + id).attr("intid"));/* execution goes here */}}else {var d = d - 1;var h = 23;var m = 59;var s = 59;}}else {var h = h - 1;var m = 59;var s = 59;}}else {var m = m - 1;var s = 59;}}else {var s = s - 1;}if(s < 10) {var s = "0" + s;}if(m < 10) {var m = "0" + m;}if(h < 10) {var h = "0" + h;}if(d < 10) {var d = "0" + d;}$('#' + id).html((hmsl == 4 ? '<span>' + d + '</span>:' : '') + '<span>' + h + '</span>:<span>' + m + '</span>:<span>' + s + '</span>');}

function boostScale(id) {var t = $("#" + id).text();var hms = t.split(":");var m = parseInt(hms[1]);var s = parseInt(hms[2]); $(".boost-scale .flap").stop().animate({"marginLeft" : (((m % 1) * 60 + s) * 100 / 59) + "%"}, 300);}

function ajaxPopup(file, title, params, closeable) {
	$.ajax({
		type: "POST",
		url: "/ajax/" + file,
		data: ({title : title, params : params, dwidth : $(document).width()}),
		dataType: "html",
		success: function(data) {
			clearInterval($(".popup-countdown-timer").attr("intid"));
			$("#popup-window, #filter-mask").remove();
			$("body").append('<div id="filter-mask" class="black-mask"></div>');
			$("body").append('<div id="popup-window">' + ((closeable === true || closeable == 'true') ? '<div class="close-popup" title="Закрыть"></div>' : '') + '<div class="inner">' + data + '</div></div>');

			adjustPopup();
		}
	});
}

function adjustPopup() {
	if($("#popup-window").height()) {
		if($("div").is("#popup-window")) {
			$("#filter-mask").css("height", $(document).height()).show();
			$("#popup-window").css({"marginTop" : $(window).scrollTop() + "px"}).animate({ "opacity": "show" }, 300);
			$("html").css({"min-height" : ($("#popup-window").height() + 60) + "px"});
		}
	}
	else {
		setTimeout("adjustPopup()", 100);
	}
}

Number.prototype.formatMoney = function(c, d, t){ var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "." : d, t = t == undefined ? "," : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : ""); };

function slowMotionValue(eq, step, plusminus) {
	if($("div").is(".slow-motion-value:eq(" + eq + ")")) {
		var v = parseFloat($(".slow-motion-value:eq(" + eq + ")").attr("start"));
		var s = parseFloat($(".slow-motion-value:eq(" + eq + ")").attr("stop"));
		if(plusminus == 'plus') {
			v = v + step;
		}
		else {
			v = v - step;
		}
		var vf = (v).formatMoney(2);
		$(".slow-motion-value:eq(" + eq + ")").text(vf);
		$(".slow-motion-value:eq(" + eq + ")").attr({"start" : v});
		if((plusminus == 'plus' && v > s) || (plusminus == 'minus' && v < s)) {
			v = s;
			vf = (v).formatMoney(2);
			$(".slow-motion-value:eq(" + eq + ")").text(vf);
			$(".slow-motion-value:eq(" + eq + ")").attr({"start" : v});
			clearInterval($(".slow-motion-value:eq(" + eq + ")").attr("intid"));
		}
	}
	else {
		return;
	}
}

function spectating(aData) {
	$.ajax({
		type: "POST",
		url: "ajax/spectating.php",
		data: ({aData : aData}),
		dataType: "html",
		success: function(data) {
			if(data) {
				var c = data.split("::");
				
				if(c[4] == 'online') {
					$(".stream-footer .viewers").text(c[0]);
					$(".stream-footer .views").text(c[1]);
					$(".stream-footer .followers").text(c[2]);
				}
				if(c[6] == 'full') {
					if(c[3] <= 0) {
						if(c[9] == 1) {
							clearInterval(convInterval);
							clearInterval(scaleInterval);
							if($(".time-is-money").attr("converting") == "true") {
								ajaxPopup("no-credits.php", '', '', true); $(".time-is-money").attr({"converting" : "false"});
							}
						}
					}
					if(c[4] == 'offline') {
						clearInterval(convInterval);
						clearInterval(scaleInterval);
						clearInterval(specInterval); clearInterval(sessInterval); $(".stream-footer .viewers").hide(); /* only when offline */
						ajaxPopup("went-offline.php", '', '', true);
					}
					if(c[4] == 'online' && c[7] == 'false' && c[10] == 1) {
						var ce = c[5] * 60;
						var oct = $('#credits-earned').text();
						var e1 = oct.split(",");
						var oc = parseFloat(e1[0] + (e1[1] ? e1[1] : ''));
						/*var nc = parseFloat(oc) + parseFloat(ce);*/
						var nc = parseFloat(c[12]);
						$('#credits-earned').attr({'start' : oc, 'stop' : nc});
						var intid = setInterval("slowMotionValue(0, 0.54, 'plus')", 10);
						$("#credits-earned").attr({"intid" : intid});
					}
				}
				if(c[8] == 'true') {
					var rld = $(".stream-body").html(); $(".stream-body").html(rld);
				}
				if(c[11] == 1) {
					$("#current-coef-1").show(); $("#current-coef-2").hide(); $("#current-coef-3").hide();
				}
				else {
					if(c[13] == 0) {
						$("#current-coef-2").show(); $("#current-coef-1").hide(); $("#current-coef-3").hide();
					}
					else {
						$("#current-earning-coeff").text(c[14]);
						$("#current-channels-place").text(c[13]);
						$("#current-coef-3").show(); $("#current-coef-1").hide(); $("#current-coef-2").hide();
					}
				}
			}
		}
	});	
}

function adjustFloatBlocks(selector) {
	var mh = 0;
	$(selector).css({"height" : "auto"});
	$(selector).each(function(indx, element) {
		if($(this).height() > mh) {
			mh = $(this).height();
		}
	});
	$(selector).height(mh);
}

function thisChannelViewersList(id) {
	$.ajax({
		type: "POST",
		url: "ajax/this-channel-viewers-list.php",
		data: ({id: id}),
		dataType: "html",
		success: function(data) {
			if(data) {
				$("#this-channel-viewers-list").html(data);
			}
		}
	});
}

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function zeroTimeCatcher(id, type) {
	var t = strip_tags($("#" + id).text());var hms = t.split(":");var hmsl = hms.length;if(hmsl == 3) {var h = parseInt(hms[0]);var m = parseInt(hms[1]);var s = parseInt(hms[2]);}if(hmsl == 4) {var d = parseInt(hms[0]);var h = parseInt(hms[1]);var m = parseInt(hms[2]);var s = parseInt(hms[3]);}
	
	if((!d || d == 0) && h == 0 && m == 0 && s <= 59) {
		$(".buy-ticket-button").hide();
		$(".cant-buy-ticket-text").show();
	}
	
	if((d ? d : 0) + h + m + s == 0) {
		clearInterval($("#ajax-update-data-intid").attr("intid"));
		$.ajax({
			type: "POST",
			url: "ajax/spin-roulette.php",
			data: ({type: type}),
			dataType: "html",
			success: function(data) {
				if(data) {
					var cl = $(".jcarousel ul li").length;
					var eqc = 0;
					while(cl < 100 - 1) {
						cl = $(".jcarousel ul li").length;
						$(".jcarousel ul li:eq(" + eqc + ")").clone().appendTo(".jcarousel ul");
						eqc++;
					}
		
					var y = $(".jcarousel [data-uid=" + data + "]:last");
					y.addClass("winner");
					var x = y.index();
					var o = x * 67 + 33 - $(".jcarousel .inner").width() / 2 + getRandomInt(-20, 20);
					for(i=1;i<=7;i++) {
						$(".jcarousel ul li:eq(" + i + ")").clone().appendTo(".jcarousel ul");
					}
					$(".jcarousel ul").animate({marginLeft: 15}, 400).delay(150).animate({marginLeft: "-" + o}, 10000, function(){$(".jcarousel li").not(".winner").animate({opacity: 0.3}, 1000); setTimeout(function() {document.location.href='loto' + ((!type || type == 1) ? '' : (type == 2 ? '@t=2' : (type == 3 ? '@t=3' : '')))}, 3000)});
					clearInterval($("#" + id).attr("intid-2"));
				}
			}
		});
	}
}

function updateLotoData(type) {
	$.ajax({
		type: "POST",
		url: "ajax/update-loto-data.php",
		data: ({type: type}),
		dataType: "html",
		success: function(data) {
			if(data) {
				var c = data.split("::");
				$("#ajax-current-prize-fund").html(c[0]);
				$("#ajax-how-many-tickets").html(c[1]);
				$("#ajax-how-many-chances").html(c[2]);
				$("#ajax-loto-users-list").html(c[3]);
				
				var cw = $(".jcarousel ul li").length * 67 - 6;
				if(cw < $(".content-left").width()) {
					$(".jcarousel .inner").width(cw);
				}
				else {
					$(".jcarousel .inner").css({"width" : "100%"});
				}
			}
		}
	});
}