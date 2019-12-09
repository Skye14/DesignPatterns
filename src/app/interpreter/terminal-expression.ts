import { AbstractExpression } from './abstract-expression';
import { Context } from './context';

export class TerminalExpression extends AbstractExpression {

    public interpret(context: Context): void {
        if (context.source[context.position] === context.vocabulary) {
            context.rezult = true;
        } else {
            context.rezult = false;
        }
    }

}
