function login(token) {	
	location.href = 'https://discordapp.com/activity'
	document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
}
