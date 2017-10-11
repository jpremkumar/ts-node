var BaseNode;
(function (BaseNode) {
    class Helper {
        constructor() {
            this.addNumbers = (x, y) => {
                return x + y;
            };
        }
    }
    Helper.NAME = "Base Node Server";
    BaseNode.Helper = Helper;
})(BaseNode || (BaseNode = {}));
