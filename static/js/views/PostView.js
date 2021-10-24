import AbstractView from "./AbstractView.js";
import loadHTML from "../utils/loadHTML.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Post View. Simple SPA course ")
        this.getHtml()
    }

    async getHtml() {
        console.log(this.params.id)
        const template = await loadHTML('../../templates/postview-template.html', import.meta.url);
        return template
    }
}