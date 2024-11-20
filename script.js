const axios = require('axios');
const fs = require('fs/promises');

const OPENAI_API_KEY = 'CHANGE_ME'; //YOUR API KEY

const INPUT_FILE = 'artykul.txt';
const OUTPUT_FILE = 'artykul.html';

// FUNCTIONS //
async function readTXTFile(filePath) {
    try {
        return await fs.readFile(filePath, 'utf-8');
    } catch (err) {
        console.error(`[ERROR] Błąd podczas odczytu pliku: ${err.message}`);
        process.exit(1);
    }
}

async function sendToOpenAI(articleContent) {

    const prompt = `
      Przetwórz poniższy artykuł do formatu HTML:
      - Użyj odpowiednich tagów HTML w odpowiednich miejsach do strukturyzacji treści (na przykład nagłówki, paragrafy, listy, stopka, sekcje, header itp)
      - Określ miejsca w tekście, gdzie warto wstawić grafiki i oznacz je z użyciem <img src="image_placeholder.jpg" alt="szczegółowy prompt do wygenerowania grafiki">
      - Umieść podpisy pod grafikami używając tagu <figcaption>, uprzednio umieszczając grafikę w tagu <figure>
      - Nie używaj CSS, JavaScript, a także tagów HTML typu <html>, <head>, <body>, <article>. Nie otaczaj odpowiedzi znacznikami dla bloków kodu (np. \`\`\`html), zwróć jedynie kod gotowy do wstawienia pomiędzy <body> a </body>
      
      Artykuł:
      ${articleContent}
    `;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4o',
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 2000,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                },
            }
        );

        return response.data.choices[0].message.content;
    } catch (err) {
        console.error(`[ERROR] Błąd podczas komunikacji z API OpenAI: ${err.message}`);
        process.exit(1);
    }
}

async function saveHTMLToFile(htmlContent, filePath) {
    try {
        await fs.writeFile(filePath, htmlContent, 'utf-8');
        console.log(`[INFO] Kod HTML zapisano w pliku ${filePath}`);
    } catch (err) {
        console.error(`[ERROR] Błąd podczas zapisu pliku: ${err.message}`);
    }
}

async function main() {
    console.log('[INFO] Odczytywanie pliku tekstowego...');

    const articleContent = await readTXTFile(INPUT_FILE);

    console.log('[INFO] Rozpoczynam przetwarzanie...');

    const htmlContent = await sendToOpenAI(articleContent);

    await saveHTMLToFile(htmlContent, OUTPUT_FILE);
}

main();