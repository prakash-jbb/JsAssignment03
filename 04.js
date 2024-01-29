function hasObjPro(obj, property) {

    // 1st Way Check using object methods
    console.log(obj.hasOwnProperty(property))

    // 2nd Way Check without using object methods
    for (items in obj) {
        if (items == property) {
            let result = `${property} is Presente`
            return result;

        } else {
            let result = `${property} is not Presente`
            return result;
        }
    }
}

let my_obj = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D'
};

console.log(hasObjPro(my_obj, 2))