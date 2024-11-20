# PL: Aplikacja Node.js – Zadanie Rekrutacyjne

#### Opis działania aplikacji

Aplikacja opiera się na technologii Node.js i wykorzystuje OpenAI API do przetwarzania i analizy tekstu. Po wprowadzeniu danych wejściowych aplikacja przesyła je do OpenAI API, które generuje odpowiednie odpowiedzi. Wynik jest przetwarzany i zwracany w czytelnej formie.

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

The application is based on Node.js and utilizes the OpenAI API to process and analyze text. After receiving input data, the application sends it to the OpenAI API, which generates the appropriate responses. The result is then processed and returned in a readable format.

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
