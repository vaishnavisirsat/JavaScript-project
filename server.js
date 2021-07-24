const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');
const { filteredSearch } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));


app.get('/api/quotes/random', (req, res, next) => {
    const quote = getRandomElement(quotes);
    res.send(quote.quote);
});

app.get('/api/quotes', (req, res, next) => {
    const person = req.query.person;

    if (person === undefined){
        res.send(quotes);
    } else {
        const ris = filteredSearch(quotes, person);
        res.send(ris);
    }
});

app.post('/api/quotes', (req, res, next) => {
    const person = req.query.person;
    const quote = req.query.quote;

    if (person === undefined || quote === undefined){
        res.status(400).send("Wrong Query");
    } else {
        let resQuote = {
            quote: quote.toString(),
            person: person.toString()
        };

        quotes.push(resQuote);
        res.send(resQuote);
    }
});

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
