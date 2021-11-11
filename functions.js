/* Functions */

function funcConvert() {
    let question = document.getElementById('question');
    let result = document.getElementById('result');

    let resultStr = "";
    let lines = question.value.split('\n'); console.log(lines);

    for (let i = 0; i < lines.length; i++) {
        resultStr += setSentence(i, lines[i].trim());
    }

    result.value = resultStr;
}

function setSentence(aIndex, aLine) {
    let i = aIndex % 5;
    let lStr = "";

    switch (i) {
        case 0:
            lStr = setPrefix(aLine) + "\n\n";
            break;

        case 4:
            lStr = setNumbering(aLine) + "\n\n";
            lStr += "<END>\n\n";
            break;

        default:
            lStr = setNumbering(aLine) + "\n\n";
    }

    return lStr;
}

function setNumbering(aLine) {
    let l = `<$>${aLine}`;

    if (aLine.endsWith('*')) {
        aLine = aLine.replace(/\*$/g, '');
        l = `<#>${aLine}`;
    }

    return l;
}

function setPrefix(aLine) {
    let prefix = aLine.substring(0, 1);
    aLine = aLine.substring(1);
    let result = "";

    switch (prefix) {
        case '1':
            result = "<NB-COA>";
            break;

        case '2':
            result = "<TH-COA>";
            break;

        case '3':
            result = "<VDT-COA>";
            break;

        case '4':
            result = "<VDC-COA>";
            break;

        default:
            result = prefix;
    }

    return `${result} ${aLine}`;
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}