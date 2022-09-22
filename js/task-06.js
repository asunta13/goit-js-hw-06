const textInput = document.querySelector("#validation-input");

const inputBlur = (event) => {
	const { dataset, value } = event.target;
	const requiredLength = Number(dataset.length);
	if (requiredLength === value.length) {
		// event.target.classList.add("valid");
		// event.target.classList.remove("invalid");
		changeClass("valid", "invalid", event.target);
	} else {
		// event.target.classList.add("invalid");
		// event.target.classList.remove("valid");
		changeClass("invalid", "valid", event.target);
	}
};

textInput.addEventListener("blur", inputBlur);

function changeClass(add, remove, elem) {
	elem.classList.add(add);
	elem.classList.remove(remove);
}
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
