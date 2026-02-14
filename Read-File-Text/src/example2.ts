import * as mammoth from 'mammoth'
import path from 'path'

const readDocx = async (filename:string) => {
    const rawText = await mammoth.extractRawText({
        path: path.join(__dirname, `../src/${filename}.docx`)
    })

    // const cleanText = rawText.value.split('\n').map(l => l.trim()).filter(Boolean)

    console.log(rawText);
}

readDocx('sample-v2.0')