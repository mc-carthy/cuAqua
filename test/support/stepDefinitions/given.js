/*
 * Given Steps
 */

const homePage = require('../pages/home.page');

module.exports = function(){

    this.Given(/^I am on the Aquasana home page$/, () => {
        browser.url(homePage.url);
        browser.getTitle().should.equal(homePage.title);
    })
};
