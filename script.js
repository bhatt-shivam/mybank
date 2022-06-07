
window.onload = () => {
	document.getElementById("title").innerHTML = "<h1>Welcome to My Bank</h1><h3>Banking Service at Door Step</h3><hr>";
	document.getElementById("nav").innerHTML = `
		<a href="index.html" id="HomeLink">Home</a>
		<a href="netbanking.html" id="NetbankingLink">NetBanking</a>
		<a href="services.html" id="ServicesLink">Services</a>
		<a href="aboutus.html" id="AboutLink">About Us</a>
		<a href="contactus.html" id="ContactLink">Contact Us</a>
		<hr>
	`;
	var id = document.getElementsByTagName("body")[0].id + "Link";
	var selected = document.getElementById(id);
	selected.style.fontWeight = "bold";
	selected.style.borderBottom = "3px solid black";
}