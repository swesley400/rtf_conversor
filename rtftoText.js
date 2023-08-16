const replaceAll = require('replaceall')

const rtfCharactersMap = [
    {
        "key": "\’21",
        "value": "!"
    },
    {
        "key": "\’22",
        "value": "\""
    },
    {
        "key": "\’23",
        "value": "#"
    },
    {
        "key": "\’24",
        "value": "$"
    },
    {
        "key": "\’25",
        "value": "%"
    },
    {
        "key": "\’26",
        "value": "&"
    },
    {
        "key": "\’27",
        "value": "'"
    },
    {
        "key": "\’28",
        "value": "("
    },
    {
        "key": "\’29",
        "value": ")"
    },
    {
        "key": "\’2a",
        "value": "*"
    },
    {
        "key": "\’2b",
        "value": "+"
    },
    {
        "key": "\’2c",
        "value": ","
    },
    {
        "key": "\’2d",
        "value": "-"
    },
    {
        "key": "\’2e",
        "value": "."
    },
    {
        "key": "\’2f",
        "value": "/"
    },
    {
        "key": "\’30–\’39",
        "value": "0–9"
    },
    {
        "key": "\’3a",
        "value": ":"
    },
    {
        "key": "\’3b",
        "value": ";"
    },
    {
        "key": "\’3c",
        "value": "<"
    },
    {
        "key": "\’3d",
        "value": "="
    },
    {
        "key": "\’3e",
        "value": ">"
    },
    {
        "key": "\’3f",
        "value": "?"
    },
    {
        "key": "\’40",
        "value": "@"
    },
    {
        "key": "\’41",
        "value": "A"
    },
    {
        "key": "\’42",
        "value": "B"
    },
    {
        "key": "\’43",
        "value": "C"
    },
    {
        "key": "\’44",
        "value": "D"
    },
    {
        "key": "\’45",
        "value": "E"
    },
    {
        "key": "\’46",
        "value": "F"
    },
    {
        "key": "\’47",
        "value": "G"
    },
    {
        "key": "\’48",
        "value": "H"
    },
    {
        "key": "\’49",
        "value": "I"
    },
    {
        "key": "\’4a",
        "value": "J"
    },
    {
        "key": "\’4b",
        "value": "K"
    },
    {
        "key": "\’4c",
        "value": "L"
    },
    {
        "key": "\’4d",
        "value": "M"
    },
    {
        "key": "\’4e",
        "value": "N"
    },
    {
        "key": "\’4f",
        "value": "O"
    },
    {
        "key": "\’50",
        "value": "P"
    },
    {
        "key": "\’51",
        "value": "Q"
    },
    {
        "key": "\’52",
        "value": "R"
    },
    {
        "key": "\’53",
        "value": "S"
    },
    {
        "key": "\’54",
        "value": "T"
    },
    {
        "key": "\’55",
        "value": "U"
    },
    {
        "key": "\’56",
        "value": "V"
    },
    {
        "key": "\’57",
        "value": "W"
    },
    {
        "key": "\’58",
        "value": "X"
    },
    {
        "key": "\’59",
        "value": "Y"
    },
    {
        "key": "\’5a",
        "value": "Z"
    },
    {
        "key": "\’5b",
        "value": "["
    },
    {
        "key": "\’5c",
        "value": "\\"
    },
    {
        "key": "\’5d",
        "value": "]"
    },
    {
        "key": "\’5e",
        "value": "^"
    },
    {
        "key": "\’5f",
        "value": "_"
    },
    {
        "key": "\’60",
        "value": "`"
    },
    {
        "key": "\’61",
        "value": "a"
    },
    {
        "key": "\’62",
        "value": "b"
    },
    {
        "key": "\’63",
        "value": "c"
    },
    {
        "key": "\’64",
        "value": "d"
    },
    {
        "key": "\’65",
        "value": "e"
    },
    {
        "key": "\’66",
        "value": "f"
    },
    {
        "key": "\’67",
        "value": "g"
    },
    {
        "key": "\’68",
        "value": "h"
    },
    {
        "key": "\’69",
        "value": "i"
    },
    {
        "key": "\’6a",
        "value": "j"
    },
    {
        "key": "\’6b",
        "value": "k"
    },
    {
        "key": "\’6c",
        "value": "l"
    },
    {
        "key": "\’6d",
        "value": "m"
    },
    {
        "key": "\’6e",
        "value": "n"
    },
    {
        "key": "\’6f",
        "value": "o"
    },
    {
        "key": "\’70",
        "value": "p"
    },
    {
        "key": "\’71",
        "value": "q"
    },
    {
        "key": "\’72",
        "value": "r"
    },
    {
        "key": "\’73",
        "value": "s"
    },
    {
        "key": "\’74",
        "value": "t"
    },
    {
        "key": "\’75",
        "value": "u"
    },
    {
        "key": "\’76",
        "value": "v"
    },
    {
        "key": "\’77",
        "value": "w"
    },
    {
        "key": "\’78",
        "value": "x"
    },
    {
        "key": "\’79",
        "value": "y"
    },
    {
        "key": "\’7a",
        "value": "z"
    },
    {
        "key": "\’7b",
        "value": "{"
    },
    {
        "key": "\’7c",
        "value": "|"
    },
    {
        "key": "\’7d",
        "value": "}"
    },
    {
        "key": "\’7e",
        "value": "~"
    },
    {
        "key": "\’7f",
        "value": " "
    },
    {
        "key": "\’80",
        "value": ""
    },
    {
        "key": "\’81",
        "value": " "
    },
    {
        "key": "\’82",
        "value": "͵"
    },
    {
        "key": "\’83",
        "value": "ƒ"
    },
    {
        "key": "\’84",
        "value": ",,"
    },
    {
        "key": "\’85",
        "value": "..."
    },
    {
        "key": "\’86",
        "value": "†"
    },
    {
        "key": "\’87",
        "value": "‡"
    },
    {
        "key": "\’88",
        "value": "∘"
    },
    {
        "key": "\’89",
        "value": "‰"
    },
    {
        "key": "\’8a",
        "value": "Š"
    },
    {
        "key": "\’8b",
        "value": "‹"
    },
    {
        "key": "\’8c",
        "value": "Œ"
    },
    {
        "key": "\’8d",
        "value": " "
    },
    {
        "key": "\’8e",
        "value": "Ž"
    },
    {
        "key": "\’8f",
        "value": " "
    },
    {
        "key": "\’90",
        "value": " "
    },
    {
        "key": "\’91",
        "value": "‘"
    },
    {
        "key": "\’92",
        "value": "’"
    },
    {
        "key": "\’93",
        "value": "“"
    },
    {
        "key": "\’94",
        "value": "”"
    },
    {
        "key": "\’95",
        "value": "•"
    },
    {
        "key": "\’96",
        "value": "–"
    },
    {
        "key": "\’97",
        "value": "—"
    },
    {
        "key": "\’98",
        "value": "~"
    },
    {
        "key": "\’99",
        "value": "™"
    },
    {
        "key": "\’9a",
        "value": "š"
    },
    {
        "key": "\’9b",
        "value": "›"
    },
    {
        "key": "\’9c",
        "value": "œ"
    },
    {
        "key": "\’9d",
        "value": " "
    },
    {
        "key": "\’9e",
        "value": "ž"
    },
    {
        "key": "\’9f",
        "value": "Ÿ"
    },
    {
        "key": "\~",
        "value": " "
    },
    {
        "key": "\'a1",
        "value": "¡"
    },
    {
        "key": "\'a2",
        "value": "¢"
    },
    {
        "key": "\'a3",
        "value": "£"
    },
    {
        "key": "\'a4",
        "value": "¤"
    },
    {
        "key": "\'a5",
        "value": "¥"
    },
    {
        "key": "\'a6",
        "value": "¦"
    },
    {
        "key": "\'a7",
        "value": "§"
    },
    {
        "key": "\'a8",
        "value": "¨"
    },
    {
        "key": "\'a9",
        "value": "©"
    },
    {
        "key": "\'aa",
        "value": "ª"
    },
    {
        "key": "\'ab",
        "value": "«"
    },
    {
        "key": "\'ac",
        "value": "¬"
    },
    {
        "key": "\-",
        "value": "-"
    },
    {
        "key": "\'ae",
        "value": "®"
    },
    {
        "key": "\'af",
        "value": "¯"
    },
    {
        "key": "\'b0",
        "value": "°"
    },
    {
        "key": "\'b1",
        "value": "±"
    },
    {
        "key": "\'b2",
        "value": "²"
    },
    {
        "key": "\'b3",
        "value": "³"
    },
    {
        "key": "\'b4",
        "value": "´"
    },
    {
        "key": "\'b5",
        "value": "µ"
    },
    {
        "key": "\'b6",
        "value": "¶"
    },
    {
        "key": "\'b7",
        "value": "·"
    },
    {
        "key": "\'b8",
        "value": "¸"
    },
    {
        "key": "\'b9",
        "value": "¹"
    },
    {
        "key": "\'ba",
        "value": "º"
    },
    {
        "key": "\'bb",
        "value": "»"
    },
    {
        "key": "\'bc",
        "value": "¼"
    },
    {
        "key": "\'bd",
        "value": "½"
    },
    {
        "key": "\'be",
        "value": "¾"
    },
    {
        "key": "\'bf",
        "value": "¿"
    },
    {
        "key": "\'c0",
        "value": "À"
    },
    {
        "key": "\'c1",
        "value": "Á"
    },
    {
        "key": "\'c2",
        "value": "Â"
    },
    {
        "key": "\'c3",
        "value": "Ã"
    },
    {
        "key": "\'c4",
        "value": "Ä"
    },
    {
        "key": "\'c5",
        "value": "Å"
    },
    {
        "key": "\'c6",
        "value": "Æ"
    },
    {
        "key": "\'c7",
        "value": "Ç"
    },
    {
        "key": "\'c8",
        "value": "È"
    },
    {
        "key": "\'c9",
        "value": "É"
    },
    {
        "key": "\'ca",
        "value": "Ê"
    },
    {
        "key": "\'cb",
        "value": "Ë"
    },
    {
        "key": "\'cc",
        "value": "Ì"
    },
    {
        "key": "\'cd",
        "value": "Í"
    },
    {
        "key": "\'ce",
        "value": "Î"
    },
    {
        "key": "\'cf",
        "value": "Ï"
    },
    {
        "key": "\'d0",
        "value": "Ð"
    },
    {
        "key": "\'d1",
        "value": "Ñ"
    },
    {
        "key": "\'d2",
        "value": "Ò"
    },
    {
        "key": "\'d3",
        "value": "Ó"
    },
    {
        "key": "\'d4",
        "value": "Ô"
    },
    {
        "key": "\'d5",
        "value": "Õ"
    },
    {
        "key": "\'d6",
        "value": "Ö"
    },
    {
        "key": "\'d7",
        "value": "×"
    },
    {
        "key": "\'d8",
        "value": "Ø"
    },
    {
        "key": "\'d9",
        "value": "Ù"
    },
    {
        "key": "\'da",
        "value": "Ú"
    },
    {
        "key": "\'db",
        "value": "Û"
    },
    {
        "key": "\'dc",
        "value": "Ü"
    },
    {
        "key": "\'dd",
        "value": "Ý"
    },
    {
        "key": "\'de",
        "value": "Þ"
    },
    {
        "key": "\'df",
        "value": "ß"
    },
    {
        "key": "\'e0",
        "value": "à"
    },
    {
        "key": "\'e1",
        "value": "á"
    },
    {
        "key": "\'e2",
        "value": "â"
    },
    {
        "key": "\'e3",
        "value": "ã"
    },
    {
        "key": "\'e4",
        "value": "ä"
    },
    {
        "key": "\'e5",
        "value": "å"
    },
    {
        "key": "\'e6",
        "value": "æ"
    },
    {
        "key": "\'e7",
        "value": "ç"
    },
    {
        "key": "\'e8",
        "value": "è"
    },
    {
        "key": "\'e9",
        "value": "é"
    },
    {
        "key": "\'ea",
        "value": "ê"
    },
    {
        "key": "\'eb",
        "value": "ë"
    },
    {
        "key": "\'ec",
        "value": "ì"
    },
    {
        "key": "\'ed",
        "value": "í"
    },
    {
        "key": "\'ee",
        "value": "î"
    },
    {
        "key": "\'ef",
        "value": "ï"
    },
    {
        "key": "\'f0",
        "value": "ð"
    },
    {
        "key": "\'f1",
        "value": "ñ"
    },
    {
        "key": "\'f2",
        "value": "ò"
    },
    {
        "key": "\'f3",
        "value": "ó"
    },
    {
        "key": "\'f4",
        "value": "ô"
    },
    {
        "key": "\'f5",
        "value": "õ"
    },
    {
        "key": "\'f6",
        "value": "ö"
    },
    {
        "key": "\'f7",
        "value": "÷"
    },
    {
        "key": "\'f8",
        "value": "ø"
    },
    {
        "key": "\'f9",
        "value": "ù"
    },
    {
        "key": "\'fa",
        "value": "ú"
    },
    {
        "key": "\'fb",
        "value": "û"
    },
    {
        "key": "\'fc",
        "value": "ü"
    },
    {
        "key": "\'fd",
        "value": "ý"
    },
    {
        "key": "\'fe",
        "value": "þ"
    },
    {
        "key": "\'ff",
        "value": "ÿ"
    }
]


function replaceCharactersRtfToText(rtf = ''){
    rtfCharactersMap.forEach((charKey) => {
        rtf = replaceAll(charKey.key, charKey.value, rtf)
    })
    return  rtf
}


function rtfToText(rtf = '') {
    rtf = rtf
            .replace(/\\par[d]?/g, "")
            .replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "")
            .replace(/(.*?)«/g, "")
            .replace(/↵↵/g, "↵")
            .replace(/↵/g, "\n");

    rtf = replaceCharactersRtfToText(rtf);
    rtf = rtf.replace(/\\/g, '');
    return rtf.trim();
}

const rtfContent = "{\\rtf1\\ansi\\ansicpg1252\\deff0{\\fonttbl{\\f0\\fnil\\fcharset0 Times New Roman;}{\\f1\\fnil\\fcharset0 Arial;}}\n{\\colortbl ;\\red0\\green0\\blue0;}\n\\viewkind4\\uc1\\pard\\cf1\\lang1046\\f0\\fs20\\par\nLAUDO:\\par\n\\par\n1-  Inspe\\'e7\\'e3o: Normal.\\par\n\\par\n2-  Toque retal: Indolor, com o\\'f4nus esfincteriano normal e com a presen\\'e7a de mam\\'edlo hemorroid\\'e1rio interno.\\par\n\\par\n3-  Introdu\\'e7\\'e3o do aparelho sob vis\\'e3o direta com boa toler\\'e2ncia ao exame. Canal anal em vis\\'e3o frontal com a presen\\'e7a de ma-\\par\n     m\\'edlo hemorroid\\'e1rio interno (Foto 01).Observa-se na luz intestinal pequena quantidade de l\\'edquido claro e de res\\'edduos fecais.\\par\n     Toda a mucosa do reto (Foto 02) e do sigm\\'f3ide (Foto 03) foi bem examinada e encontra-se sem altera\\'e7\\'f5es. Em retrovis\\'e3o,\\par\n     observa-se a presen\\'e7a de mam\\'edlo hemorroid\\'e1rio interno de m\\'e9dio a grande tamanho (Foto 04).\\par\n\\par\nCONCLUS\\'c3O:\\par\n\\par\n1-  Doen\\'e7a hemorroid\\'e1ria interna de grau II/III.\\par\n2-  Retossigmoidoscopia endoscopicamente normal.          \\cf0\\f1\\par\n}"


module.exports = rtfToText
