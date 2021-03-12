$("head").first().append(`<link id=\"theme\" rel=\"stylesheet\" href=\"${window.origin}/${$.cookie.get("lightdark") || "darkmode"}.css\">`)

window.onload = function () {

	/* - CODE - */
	// main
	$("pre.hljs").on("click", ev => copy(ev.target))

	// extend
	$(".extend-code").on("click", ev => toggleCode(ev.target))
	$(".extend-code").css("transition", "1s")


	/* - HEADING - */
	$("#heading, #doc-heading").css("transition", "color 0.4s")


	/* - CONTENT - */
	$(".sub-content-header").css("transition", "color 0.4s")
	$(".sub-content-content").css("transition", "border 0.4s")


	/* - NAVIGATOR - */
	// main
	$("#navigator-heading").css("transition", "color 0.4s")
	$(".navigator-item").css("transition", "background 0.4s")

	// extend
	$("#extend-navigator").on("click", () => toggleNavigator("on"))
	$("#navigator-overlay").on("click", () => toggleNavigator("off"))


	/* - FOOTER - */
	// general
	$("#footer > *").css("transition", "background 0.4s")

	// action-bar
	$("#action-bar-close").on("click", ( ev ) => $(ev.target).parent().css("display", "none"))

	// cookie-bar
	$("#cookie-bar-close").on("click", ( ev ) => disableCookieFooter(ev.target))
	$("#cookie-bar a").css("transition", "0.4s color")

	if ($.cookie.get("cookie-message-disable", { nojson: true }) != "true") $("#cookie-bar").css("display", "block")


	/* - LIGHTDARK - */
	$("#lightdark").on("click", toggleLightDark)
	$("#lightdark").css("transition", "box-shadow 0.4s")


	/* - LINK - */
	$(".property-link, .table a").css("transition", "color 0.4s")


	/* - PROJECT - */
	$(".project").css("transition", "background 0.4s")


	/* - COOKIES - */
	if (window.location.pathname == "/cookies/") loadActiveCookies()

}
