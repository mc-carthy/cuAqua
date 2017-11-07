/*
 * When Steps
 */

const homePage = require('../pages/home.page');
const searchResultsPage = require('../pages/searchResults.page');
const bookingDetailsPage = require('../pages/bookingDetails.page');

module.exports = function(){

    this.When(/^I select Spa Days$/, () => {
        browser.click(homePage.spaDayLink);
    });

    this.When(/^I select Sherwood Forest from the Choose Your Spa dropdown$/, () => {
        browser.selectByVisibleText(homePage.spaSelectDropdown, 'Sherwood Forest');
    });

    this.When(/^I choose a date from the Date dropdown$/, () => {
        browser.click(homePage.spaDatePicker);
        browser.keys(['\uE014', 'Enter']);
    });
   
    this.When(/^I set 2 days on the flexibility dropdown$/, () => {
        browser.selectByVisibleText(homePage.flexibilityDropdown, '+/- 2 days');
    });

    this.When(/^I click Search Now$/, () => {
        browser.click(homePage.searchButton);
    });

    this.When(/^I select More Information on the first result$/, () => {
        browser.click(searchResultsPage.moreInfoFirstResult);
    });
    
    this.When(/^I select the first available date$/, () => {
        browser.click(bookingDetailsPage.firstDate);
    });

    this.When(/^I choose 2 guests$/, () => {
        browser.scroll(bookingDetailsPage.numberOfGuests);
        browser.selectByValue(bookingDetailsPage.numberOfGuests,'2');
    });

    this.When(/^I book my selection$/, () => {
        browser.scroll(bookingDetailsPage.bookButton);
        browser.click(bookingDetailsPage.bookButton);
    });
};
