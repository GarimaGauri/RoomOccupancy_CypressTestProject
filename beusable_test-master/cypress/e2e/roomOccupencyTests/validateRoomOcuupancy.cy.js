// cypress/integration/your_test_spec.js

const testCases = [
    {
      name: 'Test 1',
      premiumRooms: 3,
      economyRooms: 3,
      freepremiumRooms: 3,
      freeeconomyRooms: 3,
      UsagePremium: 3,
      expectedPremiumRevenue: 738,
      UsageEconomy: 3 ,
      
      expectedEconomyRevenue: 167,
    },
    {
      name: 'Test 2',
      premiumRooms: 7,
      economyRooms: 5,
      freepremiumRooms: 6,
      freeeconomyRooms: 4,
      UsagePremium: 6,
      expectedPremiumRevenue: 1054,
      UsageEconomy: 4,
      expectedEconomyRevenue: 189,
    },
    {
      name: 'Test 3',
      premiumRooms: 2,
      economyRooms: 7,
      freepremiumRooms: 2,
      freeeconomyRooms: 4,
      UsagePremium: 2,
      expectedPremiumRevenue: 583,
      UsageEconomy: 4,
      expectedEconomyRevenue:189,
    },
    {
      name: 'Test 4',
      premiumRooms: 7,
      economyRooms: 1,
      freepremiumRooms: 7,
      freeeconomyRooms: 1,
      UsagePremium: 7,
      expectedPremiumRevenue: 1153,
      UsageEconomy: 1,
      expectedEconomyRevenue:45,
    },
  ];
  
  testCases.forEach((testCase) => {
    it(`should have correct occupancy and revenue for ${testCase.name}`, () => {
      cy.visit('http://localhost:3000');
  
      // Your test logic
      cy.get(':nth-child(1) > input').clear().type(testCase.premiumRooms);
      cy.get(':nth-child(3) > input').clear().type(testCase.economyRooms);
      cy.get('button').contains('Calculate Occupancy').click();
  
      // Assertions based on your UI
       cy.get('div.main > div >p:nth-child(1)').should('have.text', `Free Premium rooms: ${testCase.premiumRooms}`);
       cy.get('div.main > div >p:nth-child(2)').should('have.text', `Free Economy rooms: ${testCase.economyRooms}`);
       cy.get('div.main > div >p:nth-child(3)').should('have.text', `Usage Premium: ${testCase.UsagePremium} (EUR ${testCase.expectedPremiumRevenue})`);
       cy.get('div.main > div >p:nth-child(4)').should('have.text', `Usage Economy: ${testCase.UsageEconomy} (EUR ${testCase.expectedEconomyRevenue})`);
    });
  });
  