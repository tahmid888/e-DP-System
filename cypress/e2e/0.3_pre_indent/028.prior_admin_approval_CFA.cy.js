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

  //পূর্বে প্রশাসনিক অনুমোদন (সিএফএ)
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-padding > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > [href="/admin/pre-indent-process/prior-admin-approval"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()


})
