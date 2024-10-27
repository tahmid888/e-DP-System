/// <reference types="cypress"/>

import Indent_NameCy from "../../../Pages/Indent/Indent_Name.cy"
import Indent_UserCy from "../../../Pages/Indent/Indent_User.cy"
import Indent_SelectionCy from "../../../Pages/Indent/Indent_Selection.cy"

it('Indent', function() {

  cy.visit('http://training.edp.gov.bd/')
  //Change User Name
  Indent_UserCy.indentforArmy.indentUserName()
  //Change Password
  Indent_UserCy.indentPass.indentUserPass()

  cy.get('.MuiButton-contained')
  .click()
  cy.wait(3000)

  //cy.get('.inactive > .MuiChip-label')
  cy.get('.active > .MuiChip-label')
  .click()
  cy.wait(200)

  //ইন্ডেন্ট প্রক্রিয়া
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(7) > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(250)

  //ইন্ডেন্ট
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-padding > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > [href="/admin/indent-process/indent"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(250)

  //Sidebar-Toggler
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .MuiToolbar-root > .css-12d2mry > .css-1mwz337 > .sidebar-toggler')
  .click()
  cy.wait(250)

  //Page
  /*cy.get('.css-iz101f > .MuiList-root > :nth-child(4)')
  .click() 
  cy.wait(3000)*/

  Indent_NameCy.element.indentName()
  cy.wait(250)

  //Search Indent Name
  /*
  cy.get('.css-z2naod > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root')
  .click()
  .type('ইন্ডেন্ট/অটোমেশন/০৭/০৭/২০২৪/০০১-0005')
  cy.wait(250)*/

  //Action
  Indent_SelectionCy.selectIndent.indentSelect()
  cy.wait(2500)
 
  //Edit
  cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]')
  .click()
  cy.wait(250)

  //পরবর্তী
  cy.get('.submitRow > :nth-child(2) > .MuiButtonBase-root')
  .click()
  cy.wait(250)

  //বিতরণ
  //বহির্গমন
  cy.get('#mui-component-select-firstExternalOffice')
  .click()
  cy.wait(250)
  cy.contains('li.MuiMenuItem-root', 'EME&Dte')
  cy.contains('li.MuiMenuItem-root', 'INSPECTORATE')
  .click()
  cy.wait(200)

  cy.get('body').click(0, 0)

  //অবগতি
  cy.get('input[name="firstExternalAcknowledgment"]')
  .type('অবগতি')
  cy.wait(200)

  //অভ্যন্তরীণ
  //কার্যক্রম
  cy.get('#mui-component-select-firstInternalOffice')
  .click()
  cy.wait(250)
  cy.contains('li.MuiMenuItem-root', 'ST-1')
  cy.contains('li.MuiMenuItem-root', 'ST-2')
  .click()
  cy.wait(200)

  cy.get('body').click(0, 0)

  //অবগতি
  cy.get('input[name="firstInternalAcknowledgment"]')
  .type('অবগতি')
  cy.wait(200)

  //পরবর্তী
  /*cy.get('.submitRow > :nth-child(2) > .MuiButtonBase-root')
  .click()
  cy.wait(250)*/

})
