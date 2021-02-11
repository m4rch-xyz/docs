function loadActiveCookies () {
	$("#cookies").children().remove()

	Object.entries($.cookie.get()).forEach(([n, v]) => $("#cookies").append(`
		<div data-name="${n}" data-value="${v}" class="cookie"><div class="cookie-name">${n}: "<div class="cookie-value">${v}</div>"</div><div class="cookie-delete">delete</div></div>
	`))

	$(".cookie-delete").css("transition", "background 0.4s").on("click", ev => deleteCookie(ev.target))
}

function deleteCookie (el) {
	let name = $(el).parent().attr("data-name")
	
	$.cookie.remove(name)
	action(`deleted cookie "${name}"`)

	loadActiveCookies()

	$("#theme").attr("href", `${window.origin}/${$.cookie.get("lightdark") || "lightmode"}.css`)
}
