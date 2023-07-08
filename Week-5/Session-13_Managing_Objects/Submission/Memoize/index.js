const temperatureData = {
    "New York": 20,
    "London": 18,
    "Paris": 22,
    "Tokyo": 25,
    "Sydney": 28,
};

function getTemperatureForCity(){
    let cache = {};
    return(city) => {
        if(!cache[city]){
            cache[city] = temperatureData[city];
        }

        return cache[city];
    }

}

const getTemperature = getTemperatureForCity();

console.log(getTemperature("New York")); // 20
console.log(getTemperature("New York")); // 20 (retrieved from cache)
console.log(getTemperature("London")); // 18
console.log(getTemperature("London")); // 18 (retrieved from cache)
