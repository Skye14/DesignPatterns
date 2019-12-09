import { Srtategy } from './strategy';

export class InsertionSort extends Srtategy {

    public sort(array: number[]): number[] {
        for (let i = 1; i < array.length; i++) {
            const current = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > current) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = current;
        }
        return array;
    }
}
