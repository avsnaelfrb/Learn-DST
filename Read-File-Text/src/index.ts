import * as mammoth from 'mammoth';
import path from 'path';

async function readDocx() {
    const result = await mammoth.extractRawText({
        path: path.join(__dirname, '../src/sample.docx')
    })
    
    console.log(result);
}

readDocx()