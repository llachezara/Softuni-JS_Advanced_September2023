function sortBy2Criteria(array) {
    let newArray = array.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length
        }
        return a.localeCompare(b);
    })

    return newArray.join('\n');
}
console.log(sortBy2Criteria(['alpha', 
'beta', 
'gamma']

));