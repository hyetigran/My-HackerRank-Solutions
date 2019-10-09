function migratoryBirds(arr) {
    arr.sort(function (a, b) { return a - b })
    let birdObj = {};
    let maxEl = arr[0]
    let maxCount = 1

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i]
        if (birdObj[el] == null) {
            birdObj[el] = 1;
        } else {
            birdObj[el]++
        }
        if (birdObj[el] > maxCount) {
            maxEl = el;
            maxCount = birdObj[el]
        }

    }
    console.log(maxEl)
    return maxEl
}