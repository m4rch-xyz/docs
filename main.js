let lightdark = document.cookie.split(";").map(el => el.split("=")).find(el => el[0] == "lightdark")
lightdark = lightdark ? lightdark[1] : "lightmode"
$("head").first().append(`<link id=\"theme\" rel=\"stylesheet\" href=\"${window.origin}/${lightdark}.css\">`)

async function copy (el) {
	let text = $(el).text()

	navigator.clipboard.writeText(text)
	console.log("code snippet copied")

	action("code-snippet copied", 5000)
}

async function action (text, time, color) {
	let curr = Math.random()
	window.current = curr

	$("#action-bar").children(".action-content").text(text)
	$("#action-bar").css("display", "block")
	$("#action-bar").css("background-color", color || "var(--actionbar-background)")

	setTimeout(() => {
		if (curr != window.current) return
		$("#action-bar").css("display", "none")
		$("#action-bar").children(".action-content").text("")
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
	let lightdark = document.cookie.split(";").map(el => el.split("=")).find(el => el[0] == "lightdark")
	lightdark = lightdark ? lightdark[1] == "lightmode" ? "darkmode" : "lightmode" : "darkmode"

	document.cookie = `lightdark=${lightdark}`

	$("#theme").attr("href", `${window.origin}/${lightdark}.css`)
}
