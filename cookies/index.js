function loadActiveCookies () {
	$("#cookies").children().remove()

	if (!document.cookie) return
	let cookies = document.cookie.split(";").map(el => el.split("="))

	cookies.forEach(([n, v]) => $("#cookies").append(`
	<div data-name="${n}" data-value="${v}" class="cookie"><div class="cookie-name">${n}: "<div class="cookie-value">${v}</div>"</div><div class="cookie-delete">delete</div></div>
	`))

	$(".cookie-delete").css("transition", "background 0.4s").on("click", ev => deleteCookie(ev.target))
}

function deleteCookie (el) {
	let name = $(el).parent().attr("data-name")
	let cookies = document.cookie.split(";").filter(el => el.split("=")[0] == name)

	cookies.forEach(c => document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"))

	loadActiveCookies()
}
