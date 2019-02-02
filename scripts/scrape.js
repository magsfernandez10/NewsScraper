var request = require("request");
var cheerio = require("cheerio");

var scrape = function(cb) {
  
  request("http://www.nytimes.com", function(err, res, body) {
  //  console.log(body);
    var $ = cheerio.load(body);

    var articles = [];

    $("div.css-1100km").each(function(i, element) {
    //  console.log(element);
      var head = $(this).find("h2").text().trim();
      // console.log(head);

      var url = $(this).find("a").attr("href");
console.log(url);
      var sum = $(this).find(".summary").text().trim();

     if (head && sum && url) {
        
        var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

       

        var dataToAdd = {
          headline: headNeat,
          summary: sumNeat,
          url: url
        };

        articles.push(dataToAdd);
      }
    });
  console.log(articles);
    cb(articles);
    
  });
};

module.exports = scrape;
