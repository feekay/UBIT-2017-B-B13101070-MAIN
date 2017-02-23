var Calculator = (function () {
    function Calculator() {
        this.operation = "+";
        this.answer = 0;
    }
    Calculator.prototype.executeOperation = function (value) {
        switch (this.operation) {
            case '+':
                this.answer += value;
                break;
            case '*':
                this.answer *= value;
                break;
            case '-':
                this.answer -= value;
                break;
            case '/':
                if (value != 0) {
                    this.answer /= value;
                }
                break;
        }
    };
    ;
    Calculator.prototype.add = function (value) {
        this.executeOperation(value);
        this.operation = "+";
    };
    ;
    Calculator.prototype.sub = function (value) {
        this.executeOperation(value);
        this.operation = "-";
    };
    ;
    Calculator.prototype.multiply = function (value) {
        this.executeOperation(value);
        this.operation = "*";
    };
    ;
    Calculator.prototype.divide = function (value) {
        this.executeOperation(value);
        this.operation = "/";
    };
    ;
    Calculator.prototype.result = function (value) {
        //console.log(this.answer);
        this.executeOperation(value);
        this.operation = "+";
        return this.answer;
    };
    ;
    return Calculator;
}());
;
