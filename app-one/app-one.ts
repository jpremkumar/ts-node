module BaseNode {
    export class Helper {
        static NAME = "Base Node Server";
        addNumbers: (x: number, y: number) => number;
        constructor() {

            this.addNumbers = (x: number, y: number): number => {
                return x + y;
            }
        }
    }
}