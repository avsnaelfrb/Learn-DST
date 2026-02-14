import * as mammoth from 'mammoth'
import path from 'path'

const readDocx = async (filename:string) => {
    const rawText = await mammoth.extractRawText({
        path: path.join(__dirname, `../src/${filename}.docx`)
    })

    const cleanText = rawText.value.split('\n').map(l => l.trim()).filter(Boolean)
    const normalize = normalizeEnum(cleanText)
    console.log(normalize);
}

const normalizeEnum = (lines: string[]): string[] => {
    const enumRegex = /([A-Z]\.|(?<!\()[a-z]\))/g
    const delimiter = '|||'

    return lines.flatMap(line => 
        line.replace(enumRegex, `${delimiter}$1`).split(delimiter).map(l => l.trim()).filter(Boolean)
    )
}

readDocx('sample-v2.0')