window.onload = function () {
	/* - CODE - */
	// main
	$("pre.hljs").on("click", el => copy(el.target))

	// extend
	$(".extend-code").on("click", el => toggleCode(el.target))
	$(".extend-code").css("transition", "1s")


	/* - ACTION-BAR - */
	$("#action-bar-close").on("click", ({ target }) => $(target).parent().css("display", "none"))


	/* - CONTENT - */
	$(".sub-content-content").css("transition", "border 0.4s")


	/* - NAVIGATOR - */
	// main
	$("#navigator-heading").css("transition", "0.4s")
	$(".navigator-top").css("transition", "0.4s")

	// extend
	$("#extend-navigator").on("click", () => toggleNavigator("on"))
	$("#navigator-overlay").on("click", () => toggleNavigator("off"))


	/* - LIGHTDARK - */
	$("#lightdark").on("click", toggleLightDark)
	$("#lightdark").css("transition", "0.4s")


	/* - LINK - */
	$("a").css("transition", "color 0.4s")


	/* - PROJECT - */
	$(".project").css("transition", "0.4s")
}
