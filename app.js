
const rtfText = require('./rtftoText')

function rtfCleanedTexts(rtfText) {
    const cleanedText = rtfText.replace(); // Remove todos os espaços em branco
    return cleanedText
}
async function reciveRtf(param) {
    console.log(param)
    const textNoRtf = rtfText(param)
    const text = rtfCleanedTexts(textNoRtf).replace(/\\par|\r\n/g, (match) => {
        return match === "\\par" ? "<br />" : "<br/>";
    });
    return text
}

module.exports =  reciveRtf