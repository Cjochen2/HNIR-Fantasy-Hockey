// scrape() {

  //   const proxyurl = "https://cors-anywhere.herokuapp.com/";
  //   let standings = []
  //   axios.get(proxyurl + "https://www.hnir.net/standings/show/5240533?subseason=634286")
  //     .then(function (response) {

  //       var $ = cheerio.load(response.data);

  //       $(".statTable").children('tbody').children('tr').each(function (i, element) {

  //         let team = $(element).children("td").children(".teamName").eq(0).text().trim();

  //         let points = $(element).children().eq(2).text().trim();

  //          standings.push({
  //            team: team,
  //            points: points
  //          })
  //       });
  //       console.log(standings);

  //     });

  // }