import AbstractView from "./AbstractView.js";
import loadHTML from "../utils/loadHTML.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts. Simple SPA course ")
    }

    async getHtml() {
        const template = await loadHTML('../../templates/posts-template.html', import.meta.url);
        return template
    }
}
