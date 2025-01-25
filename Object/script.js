
// Object 

const person = {
    name: 'Jhon',
    age: 30
}
console.log(person)
console.log(typeof person)

const symB = Symbol('key')
const mobileModel  = {
    brand: 'Samsung',
    modelName: 's21 ultra',
    processor: 'Snapdragon Gen 3',
    camera: ['200MP', '12MP', '10MP'],
    'warenty year': 1,
    [symB]: 'mykey',
    brandModel: function() {
        return `Mobile brand is ${this.brand} and model is ${this.modelName}`;
    },
    batary: {
        mah: 5000
    }
}
console.log(mobileModel.brandModel());

console.log(mobileModel);
console.log(mobileModel.brand);
console.log(mobileModel[symB]);
console.log(mobileModel['warenty year']);
mobileModel.brand = 'Iphone';
console.log(mobileModel)
console.log(mobileModel['brand']);
console.log(mobileModel.hasOwnProperty('camera'))
console.log(mobileModel.batary.mah)

const obj1 = {
    a: 1,
    b: 2,
    c: 3
}

const obj2 = {
    p: 4,
    q: 5,
    r: 6
}

const obj3 = {
    x: 7,
    y: 8,
    z: 9
}

const objFinal = {obj1, obj2, obj3}

console.log(Object.assign({}, obj1, obj2, obj3))
console.log(objFinal);


//constructor object 

 function stuDents(first, last) {
    (this.firstName = first), (this.lastName = last);
}
const person1 = new stuDents('Ali', 'hossaain')
person1.age = 32
const person2 = new stuDents('Ifti', 'hasan')
person2.age = 40
console.log(person1);
console.log(person2);




// Array 

const arr = ['HTML', 'CSS', 'JavaScript', 'React',];
arr[4] = 'Vue.js';


console.log(arr.splice(2, 0, 'Tailwin', 'Saas'))
console.log(arr)
console.log(arr.splice(0, 3))

console.log(arr)
console.log(arr.at(3));
console.log(arr[1])
console.log(typeof arr)
console.log(arr[4])
console.log(arr.toString())
console.log(arr.join(' * '))
console.log(arr)
console.log(arr[arr.length - 1])
// Delete or Remove last item
arr.pop();

// Add last item
arr.push('Java')

// Add first item
arr.unshift('Python');

// Delete first item 
arr.shift();
console.log(arr)


const x = [1, 2, 3]
const y = [4, 5, 6]
const p = [7, 8, 9]
const z = x.concat(y, p)
console.log(z)

const num = [[9, 8, 7],
             [6, 5, 4, [0, 1, 2, 3]],
             [3, 2, 1]]

console.log(num)
console.log(num.flat())




/// new data 

const date = new Date();
console.log(date)
console.log(typeof date) 

