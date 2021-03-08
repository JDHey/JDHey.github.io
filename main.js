function calculate() {
    alphabetNums = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqr', 'tuv', 'wxy']
    number = document.getElementById("textNumbers").value;
    possiblePerms = []
    for (var i = 0; i < number.length; i++) {
        ///alert(alphabetNums[number.charAt(i)-2]);
        possiblePerms.push(alphabetNums[number.charAt(i)-2])
    }
    getAllPermutations(possiblePerms);
}

function getAllPermutations(arrayOfSets) {
    possiblePermutations = 3**arrayOfSets.length
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
