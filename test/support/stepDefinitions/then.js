/*
 * Then Steps
 */

const searchResultsPage = require('../pages/searchResults.page');

module.exports = function(){

    this.Then(/^I should see many search results$/, () => {
        return browser.elements(searchResultsPage.result);
    });
};
