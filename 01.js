const car = {
    Make: "Ford",
    Model: "2022",
    Year: "2019"
}

function displayData(car) {
    for (item in car) {
        console.log(item, ":", car[item])
    }
}

displayData(car);