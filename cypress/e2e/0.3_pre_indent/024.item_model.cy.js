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

  //আইটেম মডেল/শনাক্তকরণ
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-padding > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > [href="/admin/pre-indent-process/item-model"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()

  //আইটেম/নামমালা*
  /*
  cy.get('#simple-tabpanel-0 > div > div > div.MuiBox-root.css-t52if6 > div > div.MuiBox-root.css-0 > div > form > div > div:nth-child(1) > div > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.get('li[data-value="18dca46d-8b27-44b5-a9db-86f207ce1ef0"]').click();
  */

  //মডেল নাম/শনাক্তকরণ (ইংরেজি)*
  cy.get('#simple-tabpanel-0 > div > div > div.MuiBox-root.css-t52if6 > div > div.MuiBox-root.css-0 > div > form > div > div:nth-child(2) > div:nth-child(1) > div.MuiBox-root.css-79elbk > div > div')
  .click()
  .type('AAABBB')
  cy.wait(200)

  //মডেল নাম/শনাক্তকরণ (বাংলা)*
  cy.get('#simple-tabpanel-0 > div > div > div.MuiBox-root.css-t52if6 > div > div.MuiBox-root.css-0 > div > form > div > div:nth-child(2) > div:nth-child(2) > div.MuiBox-root.css-79elbk > div > div')
  .click()
  .type('CCCDDD')
  cy.wait(200)

  //বর্ণনা
  cy.get('#simple-tabpanel-0 > div > div > div.MuiBox-root.css-t52if6 > div > div.MuiBox-root.css-0 > div > form > div > div:nth-child(3) > div > div.jodit-react-container > div > div.jodit-workplace')
  .click()
  .type('EEEFFF')
  cy.wait(200)

  /*
  //Add Button
  cy.get('.MuiButton-contained')
  .click()
  cy.wait(200)

  //Are You Sure to Submit Data?
  cy.get('.swal2-confirm')
  .click()
  */
})
