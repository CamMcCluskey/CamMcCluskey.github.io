const getArrayFromClassName = (className => {
	return Array.from(document.getElementsByClassName(className))
})

const tabList = getArrayFromClassName("tab");
const pageList = getArrayFromClassName("page");

function tabClick() {
	if (this.classList.contains("active")){
		return
	}
	refreshPage(this.id);
}

const refreshPage = (id) => {
	tabList.forEach(tab => tab.classList.remove("active"));
	document.getElementById(id).classList.add("active");
	pageList.forEach(page => page.hidden = true);
	document.querySelector("." + id).hidden = false;
}

tabList.forEach(tab => tab.addEventListener("click", tabClick));