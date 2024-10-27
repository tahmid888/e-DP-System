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


  //আইটেম
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-padding > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > [href="/admin/pre-indent-process/item"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()

  //আইটেম/নামমালা(ইংরেজি)*
  cy.get('#simple-tabpanel-0 > div > div > div.MuiBox-root.css-t52if6 > div > div.MuiBox-root.css-0 > div > form > div > div:nth-child(1) > div:nth-child(1) > div.MuiBox-root.css-79elbk > div > div')
  .click()
  .type('AAAAA')
  cy.wait(200)

  //আইটেম/নামমালা(বাংলা)*
  cy.get('#simple-tabpanel-0 > div > div > div.MuiBox-root.css-t52if6 > div > div.MuiBox-root.css-0 > div > form > div > div:nth-child(1) > div:nth-child(2) > div.MuiBox-root.css-79elbk > div > div')
  .click()
  .type('BBBBB')
  cy.wait(200)

  //নিয়ন্ত্রিত/অনিয়ন্ত্রিত*
  cy.get(':nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiBox-root > .MuiInputBase-root > #mui-component-select-itemType')
  .click()
  cy.contains('li.MuiMenuItem-root', 'Controlled')
  .click()

  //আইটেম ইউনিট*
  cy.get(':nth-child(2) > .MuiFormControl-root > .MuiBox-root > .MuiInputBase-root > #mui-component-select-itemUnitId')
  .click()
  cy.get('.MuiListSubheader-root > .MuiFormControl-root > .MuiInputBase-root')
  .click()
  .type('test KG')
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'test KG')
  .click()

  //আইটেম গ্রুপ
  cy.get('#simple-tabpanel-0 > div > div > div.MuiBox-root.css-t52if6 > div > div.MuiBox-root.css-0 > div > form > div > div:nth-child(3) > div > div.MuiBox-root.css-79elbk > div > div')
  .click()
  .type('AAAAA')
  cy.wait(200)

  //কান্ট্রি অব অরিজিন
  cy.get('.css-r85p5r > .MuiFormControl-root > .MuiBox-root > .MuiInputBase-root > #mui-component-select-countryId')
  .click()
  cy.contains('li.MuiMenuItem-root', 'Bangladesh')
  .click()

  //অর্থনৈতিক কোড
  cy.get('#simple-tabpanel-0 > div > div > div.MuiBox-root.css-t52if6 > div > div.MuiBox-root.css-0 > div > form > div > div:nth-child(4) > div.MuiBox-root.css-3vdidt > div.MuiBox-root.css-79elbk > div > div')
  .click()
  .type('1.2.36.00.25')


  //আইটেম ব্র্যান্ড নির্বাচন করুন
  cy.get('#simple-tabpanel-0 > div > div > div.MuiBox-root.css-t52if6 > div > div.MuiBox-root.css-0 > div > form > div > div:nth-child(5) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'HP')
  .click()

  //টিওএন্ডই(TO&E)
  cy.get(':nth-child(2) > .MuiFormControl-root > .MuiBox-root > .MuiInputBase-root > #mui-component-select-itemTOnEType')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Included')
  //cy.contains('li.MuiMenuItem-root', 'Excluded')
  .click()
})
