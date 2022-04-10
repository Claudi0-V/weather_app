const domFactory = ({ name, child = [], attr = {}, textContent = '', eventListeners = [] }) => {
	const elem = document.createElement(name);
	for (key in attr) {
		elem.setAttribute(key, attr[key]);
	}
	if (textContent) {
		elem.textContent = textContent
	}
	if (child.length > 0) {
		const secondElem = child.map((item) => domFactory(item));
		elem.append(secondElem);
	}
	if (eventListeners.length > 0) {
		eventListeners.forEach({name, func} => elem.addEventListener(name, func));
	}
	return elem;
};

const secondObj = {
	name: "img",
	attr: {
		src: "test",
	},
};

const obj = {
	name: "div",
	attr: {
		display: "flex",
		"flex-direction": "row",
	},
	child: secondObj,
	textContent: "123",
	eventListeners: [{name: "click", func: () => console.log("works")}]
};

const test = domFactory(obj);

console.log(test);
