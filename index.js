// Code your solution here
function findMatching (source, drivers) {
return source.filter( possibleMatch => 
    possibleMatch.toLowerCase() === drivers.toLowerCase()
    )
}

function fuzzyMatch(source, test) {
    return source.filter( possibleMatch =>
        possibleMatch.toLowerCase().indexOf(test.toLowerCase()) === 0 
    )
}

function matchName(source, sought) {
    return source.filter( record => record.name === sought)
}