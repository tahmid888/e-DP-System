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

  //আইটেম স্ট্যান্ডার্ডাইজেশন
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-padding > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > [href="/admin/pre-indent-process/item-standardized"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()

  //আইটেম*
  /*cy.get('.css-r85p5r > .MuiFormControl-root > .MuiBox-root > .MuiInputBase-root > #mui-component-select-itemId')
  .click()*/

  //কান্ট্রি অব অরিজিন*
  cy.get('#mui-component-select-countryId')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Bangladesh')
  .click()
  cy.wait(200)

  //Manufacturing Country
  cy.get('#mui-component-select-manufacturingCountryId')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Turkey')
  .click()
  cy.wait(200)

  //Country Of Assembly
  cy.get('#mui-component-select-countryOfAssembleId')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Turkey')
  .click()
  cy.wait(200)

  //স্থানীয় এজেন্ট*
  cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root > .MuiBox-root > .MuiInputBase-root > #mui-component-select-localAgentId')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', '(009051 - আহমেদ গ্রুপ)')
  .click()
  cy.wait(200) 

  //প্রিন্সিপাল
  cy.get(':nth-child(2) > .MuiFormControl-root > .MuiBox-root > .MuiInputBase-root > #mui-component-select-principleAgentId')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'HP')
  .click()
  cy.wait(200) 


  //অনুমোদন পত্র নং*
  cy.get('#simple-tabpanel-item-standardization > div > div > div.MuiBox-root.css-gbvqsn > div > div.MuiBox-root.css-0 > div > form > div > div.MuiBox-root.css-rbmzdy > div:nth-child(4) > div.MuiBox-root.css-3vdidt > div.MuiBox-root.css-79elbk > div > div')
  .type('00.100.2563.00')
  cy.wait(200)

  //Authorization Date*
  cy.get(':nth-child(4) > :nth-child(2) > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(123) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //কার দ্বারা অনুমোদিত হবে*
  cy.get(':nth-child(3) > .MuiFormControl-root > .MuiBox-root > .MuiInputBase-root > #mui-component-select-approvedBy')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'GSPC')
  .click()
  cy.wait(200) 

  //GSPC অনুমোদিত নম্বর
  cy.get('#simple-tabpanel-item-standardization > div > div > div.MuiBox-root.css-gbvqsn > div > div.MuiBox-root.css-0 > div > form > div > div.MuiBox-root.css-rbmzdy > div:nth-child(5) > div.MuiBox-root.css-3vdidt > div.MuiBox-root.css-79elbk > div > div')
  .type('0120356')

  //Approved Validity Upto*
  cy.get(':nth-child(5) > .css-r85p5r > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(123) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //মন্তব্য
  cy.get('.jodit-wysiwyg')
  .click()
  .type('Remarks Remarks Remarks Remarks Remarks')

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
