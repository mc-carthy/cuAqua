Feature: Booking

    As a aquasana customer
    I want to book a spa day
    Because I want to go on a spa day

    Scenario: Booking a valid spa day

        Given I am on the Aquasana home page
        When I select Spa Days
        And I select Sherwood Forest from the Choose Your Spa dropdown
        And I choose a date from the Date dropdown
        And I set 2 days on the flexibility dropdown
        And I click Search Now
        Then I should see many search results
        When I select More Information on the first result
        And I select the first available date
        And I choose 2 guests
        And I book my selection

