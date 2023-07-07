class Food{
    constructor(value){
        this.food = value;
        this.next = null;
    }
}

class foodlist {
    constructor(value){
        const food = new Food(value)
        this.head = food;
        this.tail = this.head;
        this.length = 1;
    }

    push (value){
        if( this.length === 0 ){
            return undefined
        } else {
            const food = new Food(value);
            let temp = this.tail;
            temp.next = food
            this.tail = temp.next;
            this.length++;
        }

        return this
    }

    pop(){
        if(this.length === 0) return undefined
        let temp = this.head
        let pre = this.head
        while(temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre
        pre.next = null

        this.length--;
        return temp
    }

    get(index){
        if(this.length === 0 ) return undefined
        if (index < 0 || index > this.length) return undefined

        let temp = this.head
        for(let i = 0; i < index; i++) {
            temp = temp.next
        }

        return temp

    }

    unshift(){
        if (!this.head) return undefined
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null
        this.length--;
        return temp

    }


    remove(index){
        if (index < 0 || index > this.length) return undefined
        if (index === 0) return this.unshift();
        if(index === this.length) return this.pop();
        let temp = this.get(index - 1);
        let next = temp.next;
        temp.next = next.next;
        next.next = null
        this.length--;
        return this;

    }

    loop(){
        this.tail.next = this.head;
    }

    grabvalue(randnum){

        let arrow = this.head
        for(let i = 0; i<randnum; i++){
            arrow = arrow.next
        }

        return arrow.food
    }


}

class block {
    constructor(value) {
        this.value = value
        this.below = null
    }
}

class foodstack {
    constructor(value) {
        const block1 = new block(value);
        this.top = block1
        this.below = this.top
        this.length = 1
    }

    addtostack(value) {
        if (this.length === 0 ) return undefined;
        const newblock = new block(value);
        newblock.below = this.top;
        this.top = newblock;
        this.length++;
    }

    pop(){
        if (this.length === 0 ) return undefined
        let temp = this.top
        this.top = this.top.below;
        temp.below = null
        return temp

    }




}