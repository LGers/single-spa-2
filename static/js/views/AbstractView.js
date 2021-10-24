export default class {
    constructor(params) {
        // super()
        this.params = params

        console.log(this.params)
    }

    setTitle(title) {
        document.title = title
    }

    async getHtml() {
        return ""
    }
}