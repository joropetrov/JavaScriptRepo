class Stringer {
    constructor(stringValue, length) {
        this.innerString = stringValue;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength = this.innerLength - length > 0 ? this.innerLength - length : 0 ;
    }

    toString() {
        // if (!this.innerLength === 0) {
        //     return "..."
        // } nenujno

        return this.innerString.slice(0, this.innerLength) + (this.innerLength >= this.innerString.length ? '' : '...')
    }
}