const clickToCopy = document.querySelector('.click-to-select');

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

const copyText = (element) => {
	console.log(element);
	navigator.clipboard.writeText(element.innerHTML);
}

tabList.forEach(tab => tab.addEventListener("click", tabClick));
clickToCopy.addEventListener('click', function(){
	copyText(clickToCopy);
});