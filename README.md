# PL: Aplikacja Node.js – Zadanie Rekrutacyjne

#### Opis działania aplikacji

Aplikacja opiera się na technologii Node.js i wykorzystuje OpenAI API do przetwarzania i analizy tekstu. Po uruchomieniu skryptu, ten przesyła dane do OpenAI API, które następnie generuje odpowiednie odpowiedzi. Wynik jest przetwarzany i zwracany w formie pliku HTML.

#### Technologie
- Node.js
- OpenAI API (GPT-4o)
- Moduły Node.js, takie jak axios (do zapytań HTTP)

### Instrukcja uruchomienia
**Sklonuj repozytorium:**

```sh
$ git clone https://github.com/Adisexe/zadanie-rekrutacyjne.git
$ cd zadanie-rekrutacyjne
```

**Zainstaluj zależności:** Upewnij się, że masz zainstalowany Node.js (min. wersja 14). Następnie uruchom:

```sh
$ npm install
```

**Dodaj swój klucz api**: W pliku script.js w linijce 4 umieść klucz API:

```javascript
const OPENAI_API_KEY = 'TUTAJ_UMIEŚĆ_KLUCZ';
```

**Uruchom aplikacje:**

```sh
$ node script.js
```


# ENG: Node.js Application – Recruitment Task

#### Application Description

The application is based on Node.js technology and uses the OpenAI API to process and analyze text. When the script is executed, it sends data to the OpenAI API, which then generates the appropriate responses. The result is processed and returned as an HTML file.

#### Technologies
- Node.js
- OpenAI API (GPT-4o)
- Node.js modules such as `axios` (for HTTP requests)

### How to Run the Application
**Clone the repository:**

```sh
$ git clone https://github.com/Adisexe/zadanie-rekrutacyjne.git
$ cd zadanie-rekrutacyjne
```

**Install dependencies:** Make sure you have Node.js installed (version 14 or higher). Then run:

```sh
$ npm install
```

**Add your API key:** In the script.js file, on line 4, insert your API key:

```javascript
const OPENAI_API_KEY = 'TUTAJ_UMIEŚĆ_KLUCZ';
```

**Run the application:**

```sh
$ node script.js
```
