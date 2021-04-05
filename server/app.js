const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
// const htmlparser2 = require('htmlparser2');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/jokes/random', async (req, res) => {
  request(
    { url: 'https://www.amazon.com/gp/cart/view.html?ref_=nav_cart' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }
      const options = {
        // xmlMode: true,
        decodeEntities: false, // Decode HTML entities.
        // withStartIndices: false, // Add a `startIndex` property to nodes.
        // withEndIndices: false, // Add an `endIndex` property to nodes.
    }

    // res.set('Content-Type', 'text/html')

    // const dom = htmlparser2.parseDocument(body, options);
    //   const $ = cheerio.load(body)
    //   var html = 'SOME_HTML_STRING'
      var $ = cheerio.load(body, options)
    //   const buffer = Buffer.from(body)
    //   let arrayOfHTMLstrings = $('meta').toArray().map( (el, index) => el.toString() )
    //   var htmlString = $.html()
      console.log('body -- body', body, $.html())

      res.send($.html());
    }
  )
//   .pipe(fileStream);

//   console.log('response', response)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on buffer{PORT}`));