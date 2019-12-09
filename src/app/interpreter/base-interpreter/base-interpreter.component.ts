import { NonterminalExpression } from './../nonterminal-expression';
import { Context } from './../context';
import { Component } from '@angular/core';

@Component({
    selector: 'app-base-interpreter',
    templateUrl: './base-interpreter.component.html',
    styleUrls: ['./base-interpreter.component.css']
})
export class BaseInterpreterComponent {
    private context = new Context();
    public word1 = 'aaa';
    public word2 = 'aab';
    public result1: string;
    public result2: string;

    constructor() {
        this.context.vocabulary = 'a';
    }

    public getResult1(): void {
        this.context.source = this.word1;
        const expression = new NonterminalExpression();
        expression.interpret(this.context);

        if (this.context.rezult) {
            this.result1 = `Yes, such a word can be in this dictionary`;
        } else {
            this.result1 = `Nope, such a word cannot be in this dictionary`;
        }

    }

    public getResult2(): void {
        this.context.source = this.word2;
        const expression = new NonterminalExpression();
        expression.interpret(this.context);

        if (this.context.rezult) {
            this.result2 = `Yes, such a word can be in this dictionary`;
        } else {
            this.result2 = `Nope, such a word cannot be in this dictionary`;
        }

    }
}
