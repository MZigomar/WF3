class Case {
    constructor() {
        this.content = '';
        this.empty = true;
    }

    setContent(p) {
        if (this.empty) {
            this.content = p;
            this.empty = false;
        }
    }
    getContent() {
        return this.content;
    }
    isEmpty(){
        return this.empty;
    }

}