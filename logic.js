var caseArray = [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], ['b', 'a', 'e', 'i', 'l', 'o', 'r', 'u', 'y'], ['c', 'a', 'e', 'h', 'i', 'l', 'o', 'r', 'u', 'y'], ['d', 'a', 'e', 'i', 'l', 'o', 'r', 'u', 'y'], ['e', 'a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], ['f', 'a', 'e', 'h', 'i', 'l', 'o', 'r', 'u', 'y'], ['g', 'a', 'e', 'h', 'i', 'l', 'o', 'r', 'u', 'y'], ['h', 'a', 'e', 'i', 'o', 'u', 'y'], ['i', 'a', 'b', 'd', 'e', 'f', 'g', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'v', 'x', 'z'], ['j', 'a', 'e', 'i', 'o', 'u', 'y'], ['k', 'a', 'e', 'i', 'l', 'o', 'r', 'u', 'y'], ['l', 'a', 'e', 'i', 'o', 'u', 'y'], ['m', 'a', 'e', 'i', 'o', 'u', 'y'], ['n', 'a', 'e', 'i', 'o', 'u', 'y'], ['o', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'], ['p', 'a', 'e', 'h', 'i', 'l', 'o', 'r', 'u', 'y'], ['q', 'a', 'e', 'i', 'o', 'u'], ['r', 'a', 'e', 'i', 'o', 'u', 'y'], ['s', 'a', 'c', 'e', 'h', 'i', 'l', 'm', 'n', 'o', 'p', 't', 'u', 'w', 'y'], ['t', 'a', 'e', 'h', 'i', 'l', 'o', 'r', 'u', 'w', 'y'], ['u', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'x', 'z'], ['v', 'a', 'e', 'i', 'l', 'o', 'r', 'u', 'y'], ['w', 'a', 'e', 'h', 'i', 'o', 'r', 'u', 'y'], ['x', 'a', 'e', 'i', 'o', 'u', 'y'], ['y', 'a', 'e', 'i', 'o', 'u'], ['z', 'a', 'e', 'i', 'l', 'o', 'u', 'y']];
var name = '';
var tempLetterAmount = Math.floor(Math.random() * (10 - 3)) + 3;
var paragraphh = document.getElementById('paragraph');
var headerr = document.getElementById('header');
var buttonn = document.getElementById('button');
var nameHoldingAreaa = document.getElementById('nameHoldingArea')
var aVariableForANumberCauseItWasBeingSMRT = 10;
function randomLetter(number) {
    if (number > 0) {
        --number;
        if (name === '') {
            name += caseArray[Math.floor(Math.random() * (caseArray.length - 1))][0].toUpperCase();
            randomLetter(number);
         } else {
            switch (name[name.length - 1].toLowerCase()) {
                case 'a':
                    name += caseArray[0][Math.floor(Math.random() * caseArray[0].length)].toLowerCase();
                break;
                case 'b':
                    name += caseArray[1][Math.floor(Math.random() * caseArray[1].length)].toLowerCase();
                break;
                case 'c':
                    name += caseArray[2][Math.floor(Math.random() * caseArray[2].length)].toLowerCase();
                break;
                case 'd':
                    name += caseArray[3][Math.floor(Math.random() * caseArray[3].length)].toLowerCase();
                break;
                case 'e':
                    name += caseArray[4][Math.floor(Math.random() * caseArray[4].length)].toLowerCase();
                break;
                case 'f':
                    name += caseArray[5][Math.floor(Math.random() * caseArray[5].length)].toLowerCase();
                break;
                case 'g':
                    name += caseArray[6][Math.floor(Math.random() * caseArray[6].length)].toLowerCase();
                break;
                case 'h':
                    name += caseArray[7][Math.floor(Math.random() * caseArray[7].length)].toLowerCase();
                break;
                case 'i':
                    name += caseArray[8][Math.floor(Math.random() * caseArray[8].length)].toLowerCase();
                break;
                case 'j':
                    name += caseArray[9][Math.floor(Math.random() * caseArray[9].length)].toLowerCase();
                break;
                case 'k':
                    name += caseArray[10][Math.floor(Math.random() * caseArray[10].length)].toLowerCase();
                break;
                case 'l':
                    name += caseArray[11][Math.floor(Math.random() * caseArray[11].length)].toLowerCase();
                break;
                case 'm':
                    name += caseArray[12][Math.floor(Math.random() * caseArray[12].length)].toLowerCase();
                break;
                case 'n':
                    name += caseArray[13][Math.floor(Math.random() * caseArray[13].length)].toLowerCase();
                break;
                case 'o':
                    name += caseArray[14][Math.floor(Math.random() * caseArray[14].length)].toLowerCase();
                break;
                case 'p':
                    name += caseArray[15][Math.floor(Math.random() * caseArray[15].length)].toLowerCase();
                break;
                case 'q':
                    name += caseArray[16][Math.floor(Math.random() * caseArray[16].length)].toLowerCase();
                break;
                case 'r':
                    name += caseArray[17][Math.floor(Math.random() * caseArray[17].length)].toLowerCase();
                break;
                case 's':
                    name += caseArray[18][Math.floor(Math.random() * caseArray[18].length)].toLowerCase();
                break;
                case 't':
                    name += caseArray[19][Math.floor(Math.random() * caseArray[19].length)].toLowerCase();
                break;
                case 'u':
                    name += caseArray[20][Math.floor(Math.random() * caseArray[20].length)].toLowerCase();
                break;
                case 'v':
                    name += caseArray[21][Math.floor(Math.random() * caseArray[21].length)].toLowerCase();
                break;
                case 'w':
                    name += caseArray[22][Math.floor(Math.random() * caseArray[22].length)].toLowerCase();
                break;
                case 'x':
                    name += caseArray[23][Math.floor(Math.random() * caseArray[23].length)].toLowerCase();
                break;
                case 'y':
                    name += caseArray[24][Math.floor(Math.random() * caseArray[24].length)].toLowerCase();
                break;
                case 'z':
                    name += caseArray[25][Math.floor(Math.random() * caseArray[25].length)].toLowerCase();
                break;
            }
            randomLetter(number);
        }
    } else {
        console.log(name);
        insertName()
    }

}
function hideAndReveal() {
    headerr.style.textDecoration = 'underline';
    buttonn.innerText = 'Generate More Names';
}
function insertName() { 
        tempLetterAmount = Math.floor(Math.random() * (10 - 3)) + 3;
    if (paragraphh.innerText === '~UniquelyElite~') {
        paragraphh.innerText = '';
        nameHoldingAreaa.innerHTML = '<ul> <div id="forTheListItems"> <li>' + name + '</li> </div> </ul>';
        name = '';
        repeaterThingyMajiggy(aVariableForANumberCauseItWasBeingSMRT);
    } else {
        var listOfNames = document.getElementById('forTheListItems');
        console.log(listOfNames);
        listOfNames.innerHTML += '<li>' + name + '</li>';
        name = '';
        repeaterThingyMajiggy(aVariableForANumberCauseItWasBeingSMRT);
    }
}
function repeaterThingyMajiggy(numberOfTimes) {
    if (numberOfTimes > 0) {
        --aVariableForANumberCauseItWasBeingSMRT;
        randomLetter(tempLetterAmount);
    } else {
        aVariableForANumberCauseItWasBeingSMRT = 10;
        console.log('nothing');
    }
}