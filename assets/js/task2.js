// use export for task 1
class RangeValidator {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    set from(value) {
        if(typeof value !== 'number') {
            throw TypeError("'from' value must be number")
        }
        if (value > this._to) {
            throw RangeError(`'from' value - ${value} must be more or equal to ${this._to}`);
        }
        this._from = value;
    }

    get from() {
        return this._from;
    }

    set to(value) {
        if(typeof value !== 'number') {
            throw TypeError("'to' value must be number")
        }
        if (value < this._from) {
            throw RangeError(`'to' value - ${value} must be less or equal to ${this._from}`);
        }
        this._to = value;
    }

    get to() {
        return this._to;
    }

    get range() {
        return Object.values(this);
    }

    isValid(value) {
        if(typeof value !== 'number') {
            throw TypeError("Checked value must be number")
        }
        return value >= this.from && value <= this.to;
    }
}

try {
    const range1 = new RangeValidator(1, 5.5) // Відпрацьовує
    // const range1 = new RangeValidator(10, 5.5) // ПОМИЛКА! (оскільки має бути from <= to)
    
    // Робота сетерів
    range1.from = 5; // Відпрацьовує
    // range1.from = 200; // ПОМИЛКА! (оскільки не має бути більше заданого вище в конструкторі to: 5.5)
    
    range1.to = 80; // Відпрацьовує
    // range1.to = -55; // ПОМИЛКА! (оскільки не має бути менше заданого вище from
    
    // Робота гетерів
    console.log(range1.from) // => 5
    console.log(range1.to) // => 80
    
    // Робота геттера range
    console.log(range1.range) // => [5, 80]
    
    // Робота validate
    console.log(range1.isValid(10)) // => true (оскільки належить діапазону [5, 80])
    console.log(range1.isValid(100)) // => false (оскільки не належить діапазону [5, 80])
} catch (err) {
    console.error('err ->', err)
}
