class Calculator {
    operation: string = "+";
    answer: number = 0;

    executeOperation(value: number) {
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
    add(value: number) {
        this.executeOperation(value);
        this.operation = "+";
    };

    sub(value: number) {
        this.executeOperation(value);
        this.operation = "-";
    };

    multiply(value: number) {
        this.executeOperation(value);
        this.operation = "*";
    };

    divide(value: number) {
        this.executeOperation(value);
        this.operation = "/";
    };

    result(value: number):number {
        //console.log(this.answer);
        this.executeOperation(value);
        this.operation = "+";
        return this.answer;
    };
};
