function commonCharacterCount(s1, s2) {
    let result = 0
    let sArr = s2.split("")
    let sObj = s1.split("").reduce((acc, cur) => {
        if(acc[cur]) {
            acc[cur]++
        }
        else{
            acc[cur] = 1
        }
        return acc
        }, {})

    for(let i = 0; i < sArr.length; i++) {
        if(sObj[sArr[i]] > 0) {
            result++
            sObj[sArr[i]]--
        }
    }
    return result
}