export interface ResponseObject {
	code: number;
	message: string;
	data: [] | object;
}

export interface HtmlElement {
	id: string;
	classList: string[];
	innerHTML: string;
	style: object;
	onclick: () => void;
	oninput: () => void;
	onsubmit: () => void;
	onkeydown: () => void;
	onkeyup: () => void;
	onkeypress: () => void;
	onblur: () => void;
	onfocus: () => void;
	target: HTMLFormElement;
	currentTarget: object;
}
