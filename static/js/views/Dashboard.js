import AbstractView from "./AbstractView.js";
import loadHTML from "../utils/loadHTML.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard. Simple SPA course ")
    }

    async getHtml() {
        const template = await loadHTML('../../templates/dashboard-template.html', import.meta.url);
        return template
    }
}