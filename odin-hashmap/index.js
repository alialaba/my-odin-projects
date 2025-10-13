class HashMap {
    constructor (load_factor, capacity = 16) {
      this.load_factor = load_factor;
      this.capacity = capacity;
      this.buckets = Array(capacity);
      this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
        let primeNumber = 31;
        for(let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {

        //Get the hash code to find the bucket;
        const index = this.hash(key);

        // If the bucket doesn't exist, initialize it as an empty array
        if(!this.buckets[index]) {
           this.buckets[index] = [];
           
        }
        
        // Look through the bucket to see if this key already exists
        for (let i = 0; i < this.buckets[index].length; i++){
            if(this.buckets[index][i][0] === key) {
                this.buckets[index][i][1] = value;
                return;
            }
        }
        

        // Key doesn't exist, add it as a new entry
           this.buckets[index].push([key, value]);
           this.size++;
        

        // Check if we've exceeded the load factor
        if(this.size / this.capacity > this.load_factor) {
            this.resize();
        }
        

        
    }

    resize() {
       const oldBuckets = this.buckets;

       this.capacity *= 2;

       this.buckets = Array(this.capacity);

       this.size = 0;

       for(let i = 0; oldBuckets.length; i++) {
        if(oldBuckets[i]) {
            for (let j = 0; j < oldBuckets[i].length; i++) {
                const [key, value] = oldBuckets[i][j];
                this.set(key, value);
                
            }
        }
       }

    }

    get(key) {
       const index = this.hash(key);

          if(!this.buckets[index]) {
            return null;
          }

       for (let i = 0; i < this.buckets[index].length; i++) {
        if(this.buckets[index][i][0] === key){
           return this.buckets[index][i][1]
        }
       }
    }

    has(key) {
      const index = this.hash(key);

      if(!this.buckets[index]){
        return false;
      }

      for(let i = 0; i < this.buckets[index].length; i++) {
        if(this.buckets[index][i][0] == key) {
            return true
        }
        
      }
      return false;
    }

    remove(key) {
        const index = this.hash(key);
        if(!this.buckets[index]) {
            return false;
        }

        for(let i = 0; i < this.buckets[index].length; i++) {
             if(this.buckets[index][i][0] === key) {
               this.buckets[index].splice(i, 1)
                this.size--
                return true;
             }
        }
        // Key wasn't found
        return false;
    }

    length(){
        return this.size;
    }

    clear(){
        this.buckets = Array(this.capacity);
        this.size = 0;
    }

    keys(){
        let keysArray = [];

        for (let i = 0; i < this.buckets.length; i++) {
            if(this.buckets[i]) {
                for (let j = 0; j < this.buckets[i].length; j++) {
                    keysArray.push(this.buckets[i][j][0])  //push keys
                    
                }
            }
            
        }

        return keysArray;
    }

    values() {
        let valuesArray = [];
        for (let i = 0; i < this.buckets.length; i++) {
            if(this.buckets[i]) {
                for (let j = 0; j < this.buckets[i].length; j++) {
                    valuesArray.push(this.buckets[i][j][1])  //push values
                    
                }
            }
            
        }

        return valuesArray;
    }

    entries() {
        let entriesArray = [];
        for (let i = 0; i < this.buckets.length; i++) {
            if(this.buckets[i]) {
                for (let j = 0; j < this.buckets[i].length; j++) {
                    entriesArray.push(this.buckets[i][j])
                    
                }
            } 
        }

        return  entriesArray;
    }


}

 const test = new HashMap(0.75)

 test.set("name", "Ali");
 test.set("age", 11);
 test.set("city", "NYC")
console.log(test.get("name"));   
console.log(test.get("age")); 
console.log(test.has("name"))
// console.log(test.remove("name"))
// console.log(test.has("name"))
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());

test.clear();
console.log(test.length());
console.log(test.keys());



