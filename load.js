window.onload = function () {
	$("pre.hljs").on("click", el => copy(el.target))
	$("#action-bar-close").on("click", ({ target }) => $(target).parent().css("display", "none"))

	$(".extend-code").on("click", el => toggleCode(el.target))
	$(".extend-code").css("transition", "1s")

	$(".sub-content-content").css("transition", "border 0.4s")
	$(".sub-content-content a").css("transition", "color 0.4s")
	$("#navigator-heading").css("transition", "0.4s")
	$(".navigator-top").css("transition", "0.4s")

	$("#extend-navigator").on("click", el => toggleNavigator("on"))
	$("#navigator-overlay").on("click", el => toggleNavigator("off"))

	$(".project").css("transition", "0.4s")

	$("#lightdark").on("click", toggleLightDark)
	$("#lightdark").css("transition", "0.4s")
}
