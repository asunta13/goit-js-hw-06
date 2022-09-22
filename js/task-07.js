const refs = {
	inputFontSizeControl: document.querySelector("#font-size-control"),
	text: document.querySelector("#text"),
};

refs.text.style.fontSize = refs.inputFontSizeControl.value + "px";

refs.inputFontSizeControl.addEventListener("input", onInputChange);

function onInputChange(event) {
	refs.text.style.fontSize = `${event.currentTarget.value}px`;
}
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text,
// оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
