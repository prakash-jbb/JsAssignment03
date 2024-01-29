function propertiesCount(obj) {
    const obj_keys = Object.keys(obj);
    const keys_length = obj_keys.length;
    console.log(keys_length)
}

let my_obj = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D'
};

propertiesCount(my_obj)