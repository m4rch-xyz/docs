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
	$(".sub-content-content").css("transition", "border 0.4s")


	/* - NAVIGATOR - */
	// main
	$("#navigator-heading").css("transition", "color 0.4s")
	$(".navigator-item").css("transition", "background 0.4s")

	// extend
	$("#extend-navigator").on("click", () => toggleNavigator("on"))
	$("#navigator-overlay").on("click", () => toggleNavigator("off"))


	/* - FOOTER - */
	$("#footer > *").css("transition", "background 0.4s")


	/* - LIGHTDARK - */
	$("#lightdark").on("click", toggleLightDark)
	$("#lightdark").css("transition", "box-shadow 0.4s")


	/* - LINK - */
	$(".property-link, .table a").css("transition", "color 0.4s")


	/* - ACTION-BAR - */
	$("#action-bar-close").on("click", ev => $(ev.target).parent().css("display", "none"))

		
	/* - PROJECT - */
	$(".project").css("transition", "background 0.4s")

	/* COOKIES */
	if (window.location.pathname == "/cookies/") loadActiveCookies()
	console.log(document.cookie)
}
