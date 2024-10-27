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
 
  //SST/SSM & Others
  cy.get('.MuiPaper-root > .MuiList-root > :nth-child(5)')
  .click()
  cy.wait(250)
  
  //Select Item*
  cy.get('#mui-component-select-itemId')
  .click()

  // Step 3: Select the option based on its index (e.g., the second item)
  cy.get('.MuiMenu-list li')
  .eq(1) // Change the index to select a different option
  .click();

  //পরবর্তী
  cy.get('.submitRow > :nth-child(2) > .MuiButtonBase-root')
  .click()
  cy.wait(250)

  //Subject *
  cy.get(':nth-child(1) > .css-ca8iw5 > .jodit-react-container > .jodit-container > .jodit-workplace > .jodit-wysiwyg')
  .click()
  .type('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
  cy.wait(250)

  //Notes *
  cy.get(':nth-child(2) > .css-ca8iw5 > .jodit-react-container > .jodit-container > .jodit-workplace > .jodit-wysiwyg')
  .click()
  .type('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB')
  cy.wait(250)

  //পরবর্তী
  cy.get('.submitRow > :nth-child(2) > .MuiButtonBase-root')
  .click()
  cy.wait(250)

  //Select Annex
  //SST
  cy.get(':nth-child(1) > .MuiListItemButton-root > .MuiListItemIcon-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(250)

  //SSM
  cy.get(':nth-child(2) > .MuiListItemButton-root > .MuiListItemIcon-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(250)

  //Analyzer Measuring And Testing
  cy.get(':nth-child(3) > .MuiListItemButton-root > .MuiListItemIcon-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(250)

  //Spare Parts
  cy.get(':nth-child(4) > .MuiListItemButton-root > .MuiListItemIcon-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(250)

  //Essential Accessories
  cy.get(':nth-child(5) > .MuiListItemButton-root > .MuiListItemIcon-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(250)

  //Optional Items
  cy.get(':nth-child(6) > .MuiListItemButton-root > .MuiListItemIcon-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(250)

  //Local Training
  cy.get(':nth-child(7) > .MuiListItemButton-root > .MuiListItemIcon-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(250)

  //Foreign Training
  cy.get(':nth-child(8) > .MuiListItemButton-root > .MuiListItemIcon-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(250)

  //Book And Publication
  cy.get(':nth-child(9) > .MuiListItemButton-root > .MuiListItemIcon-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(250)

})
