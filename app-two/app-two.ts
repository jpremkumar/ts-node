/// <reference path="../app-one/app-one.ts" />

module NodeServer {
    class Calculator {
        constructor() {
            let helperName = BaseNode.Helper.NAME;
            console.log("Helper Name : " + helperName);
        }
    }
    new Calculator();
}