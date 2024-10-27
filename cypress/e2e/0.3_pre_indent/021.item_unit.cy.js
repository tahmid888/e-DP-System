/// <reference types="cypress"/>

import 'cypress-mochawesome-reporter/register';
import Indent_UserCy from "../../Pages/Indent/Indent_User.cy"

it('Item Unit', function() {

  cy.visit('http://training.edp.gov.bd/')
  //cy.visit('http://testing.edp.gov.bd/')
  //Change User Name
  Indent_UserCy.indentforArmy.indentUserName()
  //Change Password
  Indent_UserCy.indentPass.indentUserPass()

  cy.get('.MuiButton-contained')
  .click()
  cy.wait(5000)

  cy.get('.inactive > .MuiChip-label')
  .click()
  cy.wait(200)

  //প্রি-ইন্ডেন্ট প্রক্রিয়া
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(6) > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(250)


  //আইটেম ইউনিট
  cy.get('[href="/admin/pre-indent-process/item-unit"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()
  //আইটেম ইউনিটের নাম (ইংরেজি)*
  cy.get('#simple-tabpanel-0 > div > div > div.MuiBox-root.css-t52if6 > div > div.MuiBox-root.css-0 > div > form > div > div:nth-child(1) > div:nth-child(1) > div.MuiBox-root.css-79elbk > div')
  .click()
  .type('test KG')
  cy.wait(250)

  //আইটেম ইউনিটের নাম (বাংলা)*
  cy.get('#simple-tabpanel-0 > div > div > div.MuiBox-root.css-t52if6 > div > div.MuiBox-root.css-0 > div > form > div > div:nth-child(1) > div:nth-child(2) > div.MuiBox-root.css-79elbk > div > div')
  .click()
  //.type('টেস্ট কেজি')
  .type('test KG')
  cy.wait(250)

  //Add Button
  cy.get('.MuiButton-contained')
  .click()
  cy.wait(200)

  //Are You Sure to Submit Data?
  cy.get('.swal2-confirm')
  .click()

})
