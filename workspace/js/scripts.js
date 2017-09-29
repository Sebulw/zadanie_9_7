var list = document.getElementById('js-list');
var	add = document.getElementById('js-addElem');
add.addEventListener('click', function() {
	var element = document.createElement('li');
	var elem = document.getElementsByTagName('li').length;
	element.innerHTML = 'item ' + elem;
	list.appendChild(element);
});