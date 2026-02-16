import * as mammoth from 'mammoth'
import path from 'path'

const readDocx = async (filename: string) => {
    const rawText = await mammoth.extractRawText({
        path: path.join(__dirname, `../src/${filename}.docx`)
    })

    const cleanText = rawText.value.split('\n').map(l => l.trim()).filter(Boolean)
    const normalize = normalizeEnum(cleanText)
    // console.log(normalize);
    return normalize;
}

const normalizeEnum = (lines: string[]): string[] => {
    const enumRegex = /([A-Z]\.|(?<!\()[a-z]\))/g
    const delimiter = '|||'

    return lines.flatMap(line => 
        line.replace(enumRegex, `${delimiter}$1`).split(delimiter).map(l => l.trim()).filter(Boolean)
    )
}

type DetectType = null | 'Heading' | 'List-Item' | 'Container' | 'Paragraph'
interface NodeObject {
    type: DetectType
    level: number
    text: string
} 

const classification = async (filename: string) => {
    const resultNormalize = await readDocx(filename)
    let currentLevel: number = 0
    let results: NodeObject[] = []
    for (let i = 0; i < resultNormalize.length; i++) {
        const text = resultNormalize[i]!.trim();

        if (text!.length === 0) {
            continue;
        }

        let detectedType: DetectType = null
        let detectedLevel = null

        if (text.startsWith('BAB')) {
            detectedType = 'Heading'
            detectedLevel = 1
            currentLevel = 1
        } else {

            const subbabRegex = /^\d+(?:\.\d+)*\.?\s+/
            const matchesSubbabPattern = text.match(subbabRegex)

            if (matchesSubbabPattern) {
                const numberingPart = matchesSubbabPattern[0].trim()
                const dotSubbab = numberingPart.match(/\./g)!.length

                detectedType = 'Heading'
                detectedLevel = dotSubbab + 2
                currentLevel = detectedLevel
            } else {
                
                const capitalRegex = /^[A-Z]\.\s+/
                const lowercaseRegex = /^[a-z]\)\s+/

                if (capitalRegex.test(text) || lowercaseRegex.test(text)) {
                    detectedType = 'List-Item'
                    detectedLevel = currentLevel + 1
                } else {
                    
                    if (text.endsWith(':')) {
                        detectedType = 'Container'
                        detectedLevel = currentLevel
                    } else {
                        
                        detectedType = 'Paragraph'
                        detectedLevel = currentLevel

                    }
                }
            }
        }
        results.push({
            type: detectedType,
            level: detectedLevel,
            text
        })
    }
    return results
    // console.log(resultNormalize);
}

classification('sample-v2.0').then(res => {
    console.log(res);
})