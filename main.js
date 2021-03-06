async function copy (el) {
	let text = $(el).text().trim()

	navigator.clipboard.writeText(text)
	console.log("code-snippet copied")

	action("code-snippet copied")
}

async function action (text, time, color) {
	let curr = Math.random()
	window.current = curr

	$("#action-bar").children(".footer-bar-content").text(text)
	$("#action-bar").css("display", "block")
	$("#action-bar").css("background-color", typeof color == "string" ? color : "var(--actionbar-background)")

	setTimeout(() => {
		if (curr != window.current) return
		$("#action-bar").css("display", "none")
		$("#action-bar").children(".footer-bar-content").text("")
	}, +time || 3000)
}

function toggleCode (el) {
	$(el).parent().children("pre.hljs").css("display", $(el).parent().children("pre.hljs").css("display") == "none" ? "block" : "none")
}

function toggleNavigator (change) {
	$("#navigator-overlay").css("display", change == "off" ? "none" : "block")
	$("#navigator").css("display", change == "off" ? "none" : "block")
}

function toggleLightDark () {
	let lightdark = $.cookie.get("lightdark") == "lightmode" ? "darkmode" : "lightmode"
	$.cookie.set("lightdark", lightdark, { expires: 365 })

	$("#theme").attr("href", `${window.origin}/${lightdark}.css`)
	if (window.location.pathname == "/cookies/") loadActiveCookies()
}

function disableCookieFooter ( el ) {
	$(el).parent().css("display", "none")
	$.cookie.set("cookie-message-disable", "true")

	if (window.location.pathname == "/cookies/") loadActiveCookies()
}
