import Node from "./Node";



export default class LinkedList {
    //sentinel : Node;
    head : Node;
    list : Array<Node>;



    constructor(){
        
        //this.sentinel = new Node();
        
        this.list = [];
        this.head = this.list[0];
    }

    public isEmpty(){
        if(this.list.length == 0){
            return true;
        }else{
            return false;
        }
    }
    public add(newNode : Node){
        this.list.push(newNode);
    }
    public next(currentNode : Node){
        let nextIndex = this.list.indexOf(currentNode) + 1;
        return this.list[nextIndex];

    }
}