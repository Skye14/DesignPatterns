import { Srtategy } from './strategy';

export class BubbleSort extends Srtategy {

    public sort(array: number[]): number[] {
        for (let i = 1; i < array.length; i++) {
            for (let j = 0; j < array.length - 1; j++) {

                if (array[j] > array[j + 1]) {
                    const swap = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = swap;
                }
            }
        }
        return array;
    }
}
