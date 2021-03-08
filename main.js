function calculate() {
    alphabetNums = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    number = document.getElementById("textNumbers").value;
    possiblePerms = []
    for (var i = 0; i < number.length; i++) {
        ///alert(alphabetNums[number.charAt(i)-2]);
        possiblePerms.push(alphabetNums[number.charAt(i)-2])
    }
    //getAllPermutations(possiblePerms);
    document.getElementById('output').innerHTML = ''
    graph('',possiblePerms)
}


function graph(charList, arrayOfSets) {
    if (arrayOfSets.length == 0) {
        var listItem = document.createElement("li");
        var listItemText = document.createTextNode(charList);
        listItem.appendChild(listItemText);
        document.getElementById('output').appendChild(listItem);
        console.log(charList)
        return null
    } else {
        for (var char = 0; char < arrayOfSets[0].length; char++) {
            graph(charList + arrayOfSets[0].charAt(char), arrayOfSets.slice(1))
        }
    }
}
/*
function getAllPermutations(arrayOfSets) {
    possiblePermutations = getAllCharacterLength(arrayOfSets)*arrayOfSets.length
    perm = ''
    for (var i = 0; i < possiblePermutations; i++) {
        perm = i.toString(3)
        s = ''

        //Pad with zeros at the start
        while (perm.length < arrayOfSets.length) {
            perm = '0' + perm
        }

        for (var eachSet = 0; eachSet < arrayOfSets.length; eachSet++) {
            s += arrayOfSets[eachSet].charAt(perm[eachSet])
        }

        
        var listItem = document.createElement("li");
        var listItemText = document.createTextNode(s);
        listItem.appendChild(listItemText);
        document.getElementById('output').appendChild(listItem);
    }
}

function getAllCharacterLength(arrayOfSets) {
    count = 0;
    for (var eachSet = 0; eachSet < arrayOfSets.length; eachSet++) {
        count += arrayOfSets[eachSet].length
    }
    return count
} */


/*
    create a queue Q
    enqueue v onto Q
    mark v
    while Q is not empty do
        w ← Q.dequeue()
        if w is what we are looking for then
            return w
        for all edges e in G.adjacentEdges(w) do
            x ← G.adjacentVertex(w, e)
            if x is not marked then
                mark x
                enqueue x onto Q
    return null

               678 = [MNO, PQRS, TUV] 
               */