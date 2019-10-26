HNIR Fantasy Hockey is a Pick'Em style fantasy application based on a local Adult Hockey Rec League. A user selects 5 players, 1 from each team in the league, and watches as they accrue points over the duration of the season. The team with the most total points at the end of the season is declared the winner. User's are able to buy multiple teams at a cost of 5 dollars per team.

NOTE: This application is currently in testing mode. Therefore user's are able to create teams at any point during the season as well as utilize our test Credit Card to simulate buying a team. Instructions are more detailed with in the app as to how you purchase a team and the rules for scoring.

This application was built utilizing a variety of technologies. The app uses React for rendering pages and the UI along with JSX. It also runs a manually desinged screen scrape to dynamically scrape 5 individual pages from the HNIR Website (https://www.hnir.net/page/show/5240533-division-2). That data is handled with Sequelize and pased to our SQL database to be utilized later on in the application. Currently the app scrapes everytime the login page is rendered but plans are in place to have the scrape run off a cron job. Along with the above the app does not allow users to create more than one account with the same email using a manually built database validation. It also will encrypt passwords using B-Crypt to hash them and Session to store user information and validate that a user is successfully logged in while navigating between pages. 

If you have any questions about the code or how this application works feel free to reach out.
