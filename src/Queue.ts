import Node from "./Node";




export default class Queue {


        queue: Array<Node>;
        len: number;

        constructor() {
            this.queue = [];
            this.len = 0;
            }
        
        //check length variable for comments
        public isEmpty() : boolean{
            if(this.len ==0){return true;
            }else{
                return false;
            }
        }
        //remove the element at length-1
        public dequeue(){
            this.len--;
            return this.queue.shift();

            
        }
        //show element at length-1(top of stack)
        public rear(){
            return this.queue[this.len-1];

        }
        public front(){
            return this.queue[0];

        }
        // add an element to top of stack(end of array)
        public enqueue(value: Node){
            this.queue.push(value);
            this.len++;
            
        }
        //return length variable
        public length() : number{
            return this.len;
        }
    }