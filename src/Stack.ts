import Node from "./Node";




export default class Stack {


        stack: Array<Node>;
        len: number;

        constructor() {
            this.stack = [];
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
        public pop(){
            this.len--;
            return this.stack[this.len];

            
        }
        //show element at length-1(top of stack)
        public peek(){
            return this.stack[this.len-1];

        }
        // add an element to top of stack(end of array)
        public push(value: Node){
            this.stack.push(value);
            this.len++;
            
        }
        //return length variable
        public count() : number{
            return this.len;
        }



    
}