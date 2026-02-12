import * as mammoth from 'mammoth';
import path from 'path';

type NodeType = 'heading' | 'paragraph'

async function readDocx(filename: string) {
    const rawText = await mammoth.extractRawText({
        path: path.join(__dirname, `../src/${filename}.docx`)
    })
    
    const cleanText = rawText.value.split('\n').map(l => l.trim()).filter(Boolean)
    const result = stringToObject(cleanText)

    console.log(result);
}

function detectType(line: any): NodeType {
    if (line.startsWith('BAB')) {
        return 'heading'
    }
    return 'paragraph'
}

function stringToObject(cleanLine: string[]) {
    return cleanLine.map(line => ({
        type: detectType(line),
        text: line
    }))
}


readDocx("sample")