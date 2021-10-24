import AbstractView from "./AbstractView.js";
import loadHTML from "../utils/loadHTML.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings. Simple SPA course ")
    }

    async getHtml() {
        const template = await loadHTML('../../templates/settings-template.html', import.meta.url);
        return template
    }
}