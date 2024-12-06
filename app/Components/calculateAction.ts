interface CalculatorInterface {
  result: string;
}

class Calculator implements CalculatorInterface {
  private static instance: Calculator;
  constructor() {}
  private _result = "";
  // Helper function to define operator precedence
  private precedence: Record<"+" | "-" | "*" | "/" | "%", number> = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "%": 3,
  };

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new Calculator();
    return this.instance;
  }

  public set result(newRes: string) {
    this._result = newRes;
  }

  public get result(): string {
    return this._result;
  }

  // Convert the infix expression to postfix using a stack
  private infixToPostfix(): string[] {
    const expression = this._result;
    const output = [];
    const operators = [];

    for (const token of expression.match(
      /(\d+(\.\d+)?|\%|\+|\-|\*|\/|\(|\))/g
    ) || []) {
      if (!isNaN(Number(token))) {
        output.push(token); // Add numbers directly to output
      } else if (token === ".") {
        output.push(token);
      } else if (token === "(") {
        const index = expression.indexOf("(") - 1;
        if (/^[0-9%]$/g.test(expression[index])) {
          operators.push("*");
        }
        operators.push(token); // Push opening parenthesis to operators stack
      } else if (token === ")") {
        // Pop until the matching "(" is found
        while (operators.length && operators[operators.length - 1] !== "(") {
          output.push(operators.pop()!);
        }
        operators.pop(); // Remove "("
      } else {
        // Handle operators based on precedence
        while (
          operators.length &&
          operators[operators.length - 1] in this.precedence &&
          this.precedence[token as "+" | "-" | "*" | "/" | "%"] <=
            this.precedence[
              operators[operators.length - 1] as "+" | "-" | "*" | "/" | "%"
            ]
        ) {
          output.push(operators.pop()!);
        }
        operators.push(token);
      }
    }

    // Append remaining operators
    while (operators.length) {
      output.push(operators.pop()!);
    }

    return output;
  }

  // Evaluate the postfix expression
  private evaluatePostfix(postfix: string[]): number {
    const stack: number[] = [];
    // const stackPercent: number[] = [];
    for (const token of postfix) {
      if (!isNaN(Number(token))) {
        stack.push(Number(token)); // Push numbers to stack
      } else {
        const b = stack.pop()!;
        const a = stack.pop()!;
        switch (token) {
          case "+":
            stack.push(this.addition(a, b));
            break;
          case "-":
            stack.push(this.subtraction(a, b));
            break;
          case "*":
            stack.push(this.multiplication(a, b));
            break;
          case "/":
            stack.push(this.division(a, b));
            break;
        }
      }
    }
    return stack[0];
  }

  // Calculate result
  calculate() {
    const postfix = this.infixToPostfix();
    return this.evaluatePostfix(postfix);
  }

  private subtraction(input1: number, input2: number): number {
    return input1 - input2;
  }

  private addition(input1: number, input2: number): number {
    return input1 + input2;
  }

  private division(input1: number, input2: number): number {
    return input1 / input2;
  }

  private multiplication(input1: number, input2: number): number {
    return input1 * input2;
  }

  AC() {
    this._result = "";
  }
}

export default Calculator;
