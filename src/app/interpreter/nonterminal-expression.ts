import { TerminalExpression } from './terminal-expression';
import { Context } from './context';
import { AbstractExpression } from './abstract-expression';

export class NonterminalExpression extends AbstractExpression {
    private nonterminalExpression: AbstractExpression;
    private terminalExpression: AbstractExpression;

    public interpret(context: Context): void {
        if (context.position < context.source.length) {
            this.terminalExpression = new TerminalExpression();
            this.terminalExpression.interpret(context);
            context.position++;

            if (context.rezult) {
                this.nonterminalExpression = new TerminalExpression();
                this.terminalExpression.interpret(context);
            }
        }
    }
}
