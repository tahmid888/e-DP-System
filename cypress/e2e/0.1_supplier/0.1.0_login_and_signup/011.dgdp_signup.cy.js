/// <reference types="cypress"/>
import 'cypress-mochawesome-reporter/register';

it('Signup DPGDP', function() {

  cy.visit('http://testing.edp.gov.bd/')
  cy.get('.MuiButton-outlined')
  .click()
  //Change Full Name
  //cy.get('input[name="fullName"]')
  //.type('Molla Basir Uddin')
  cy.get('input[name="fullName"]')
  .type('noman')
  //Change User Name
  // cy.get('input[name="username"]')
  //.type('basir')
  cy.get('input[name="username"]')
  .type('noman002')
  //Change Email
  cy.get('input[name="email"]')
  .type('simec.sqa01@gmail.com')

  //Change Mobile
  cy.get('input[name="phone"]')
  .type('01730264304')

  /* Password (change if needed) */
  cy.get('input[name="password"]')
  .type('Sqa@12345')
  cy.get('.MuiButton-contained')
  .click()
  cy.get('#mui-component-select-identityType')
  .click()
  cy.get('[data-value="NATIONAL_ID"]')
  .click()

  /* NATIONAL ID (change if needed) */  
  cy.get('input[name="identityNumber"]')
  .type('0123456789')
  cy.get('[data-testid="CalendarIcon"]')
  .click()
  cy.wait(500)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(500)
  cy.get(':nth-child(83) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(500)
  cy.get('.MuiMonthPicker-root > :nth-child(2)')
  .click()
  cy.wait(500)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(500)
  cy.get('#mui-component-select-secretQuestionId')
  .click()
  cy.contains('li.MuiMenuItem-root', 'কোন শহরে আপনার জন্ম ?')
  .click()
  
  /* Secret Question Answer (change if needed) */
  cy.get('input[name="secretQuestionAnswer"]')
  .type('Dhaka')
  cy.get('.MuiButton-contained')
  .click()
})
