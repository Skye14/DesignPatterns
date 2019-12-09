import { Context } from './context';

export abstract class AbstractExpression {
   public abstract interpret(context: Context): void;
}
