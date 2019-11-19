// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }
    
    size() {
        let count = 0;
        let currNode = this.head;
        while(currNode) {
            count++;
            currNode = currNode.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let currNode = this.head;
        while(currNode.next !== null) {
            currNode = currNode.next;
        }
        return currNode;
    }

    clear() {
        this.head = null;
    }   

    removeFirst() {
        /* if(this.head) {
            this.head = this.head.next;
        } else {
            return;
        } */

        /* I can also do code re-use to maximize efficiency
        amd write less code */
        this.removeAt(0);
    }

    removeLast() {
        /* if(!this.head) {
            return;
        }
        if(!this.head.next) {
            this.head = null;
            return;
        }
        let currNode =  this.head;
        while(currNode.next.next != null) {
            currNode = currNode.next;
        }
        currNode.next = null; */

        this.removeAt(this.size() - 1);
    }

    insertLast(data) {
        let lastNode = new Node(data);

        if(!this.head) {
            this.head = lastNode;
            return;
        }

        /* let currNode = this.head;
        while(currNode.next) {
            currNode = currNode.next;
        } */
        let currNode = this.getLast();
        currNode.next = lastNode;
    }

    getAt(index) {
        if(!this.head) {
            return null;
        }

        let currNode = this.head;
        let counter = 0;
        while(currNode) {
            if(counter === index){
                return currNode; 
            }
            counter++;
            currNode = currNode.next;
        }
        return null; 
    }

    removeAt(index) {
        
        if(!this.head) {
            return;
        }
        
        if(index === 0 ) {
            this.head = this.head.next;
            return;
        }
        
        let prevNode = this.getAt(index - 1);
        let currNode = this.getAt(index);

        if(!prevNode || !currNode) {
            return null;
        }
        //remove CurrNode
        prevNode.next = currNode.next;
    }

    insertAt(data, index) {

        if(!this.head) {
            this.head = new Node(data);
        }

        if(index === 0 ) {
            this.head = new Node(data, this.head);
            return;
        }

        const prevNode = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, prevNode.next);
        prevNode.next = node;
    }
}

module.exports = { Node, LinkedList };
