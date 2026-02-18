import * as mammoth from 'mammoth'
import path from 'path'

const readDocx = async (filename: string) => {
    const parseHTML = await mammoth.convertToHtml({
        path: path.join(__dirname, `../src/${filename}.docx`)
    })
    console.log(parseHTML.value);
}

readDocx('sample-v2.0')