export default class Node {
    private _value: any;
    private nextNode;

    constructor(value: any = null) {
        this._value = value;
        this.nextNode = null;
    }

    public get value() {
        return this._value;
    }

    public set value(val) {
        this._value = val;
    }

    public setNextNode(otherNode : Node){
        this.nextNode = otherNode;
    }

    public next(){
        return this.nextNode;
    }

    
}
