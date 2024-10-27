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

  //পরবর্তী
  cy.get('.submitRow > :nth-child(2) > .MuiButtonBase-root')
  .click()
  cy.wait(250)

  //পরবর্তী
  cy.get('.submitRow > :nth-child(2) > .MuiButtonBase-root')
  .click()
  cy.wait(250)

  //আইটেম/নামমালা নং
  //২। পার্ট / ক্যাট নং
  cy.get('input[name="catPartNo"]')
  .type('পার্ট / ক্যাট নং')
  cy.wait(200)

  //৩। দ্রব্যাদির/নামমালার বিবরণ*
  cy.get('#mui-component-select-itemId')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'AIRCRAFT (DUMMY) 25/02/2024')
  .click()
  cy.wait(200)

  //দ্রব্যাদির/নামমালার মডেল
  cy.get('#mui-component-select-itemModelIds')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Model B (All grp)')
  .click()
  cy.contains('li.MuiMenuItem-root', 'Model C (Grp 4&10)')
  .click()
  cy.wait(200)

  cy.get('body').click(0, 0)

  //৪। সরকারী সরবরাহের বিবরণ বিনির্দেশ/অংকন/মোহরযুক্ত নমুনার বরাত/স্বত্বাধিকারী বানিজ্যিক দ্রব্যাদি
  //৫। হিসাবের একক*
  cy.get('#mui-component-select-itemUnitId')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'test KG')
  .click()
  cy.wait(200)

  //৬। প্রয়োজনীয় পরিমান*
  /*cy.get('input[name="quantity"]')
  .type('')
  cy.wait(200)*/

  //৭। প্রতি এককের মূল্য (সর্বশেষ ক্রয় ভোক্যাব) আনুমানিক দরের উপর ভিত্তি করে
  //বৈদেশিক মুদ্রায়
  //দেশীয় মুদ্রায়*
  //৮। ক্রয় তালিকায় উল্লেখিত অন্যান্য খরচ
  //৯। সর্বমোট মূল্য

  //১০। দ্রব্যাদির বণ্টন
  cy.get('#simple-tabpanel-indent-entry-part-three > div > div > form > div.MuiBox-root.css-1tx28v3 > div > div > div.MuiBox-root.css-1tx28v3 > div > div > div > div > div.MuiBox-root.css-onoix2 > div:nth-child(8) > div > div.MuiBox-root.css-79elbk > div')
  .click()
  .type('১০। দ্রব্যাদির বণ্টন ১০। দ্রব্যাদির বণ্টন ১০। দ্রব্যাদির বণ্টন ১০। দ্রব্যাদির বণ্টন ১০। দ্রব্যাদির বণ্টন ১০। দ্রব্যাদির বণ্টন')
  cy.wait(200)

  //১১। পরিদর্শকের / ক্রয় অফিসারের মন্তব্য
  cy.get('#simple-tabpanel-indent-entry-part-three > div > div > form > div.MuiBox-root.css-1tx28v3 > div > div > div.MuiBox-root.css-1tx28v3 > div > div > div > div > div.MuiBox-root.css-onoix2 > div.formRow.MuiBox-root.css-10ib5jr > div > div.jodit-react-container > div > div.jodit-workplace')
  .click()
  .type('১১। পরিদর্শকের / ক্রয় অফিসারের মন্তব্য ১১। পরিদর্শকের / ক্রয় অফিসারের মন্তব্য ১১। পরিদর্শকের / ক্রয় অফিসারের মন্তব্য ১১। পরিদর্শকের / ক্রয় অফিসারের মন্তব্য ১১। পরিদর্শকের / ক্রয় অফিসারের মন্তব্য ১১। পরিদর্শকের / ক্রয় অফিসারের মন্তব্য')
  cy.wait(200)

  //সংযুক্তি প্রদান করুন (যদি থাকে )
  //সংযুক্তির নাম
  cy.get('input[name="indentFileAttachmentParams.0.attachmentName"]')
  .type('সংযুক্তির নাম')
  cy.wait(200)

  //সংযুক্তির
  cy.get('.addFileBox')
  .selectFile('cypress/fixtures/biaa.jpg')
  cy.wait(200)

  //যোগ করুন
  cy.get('.css-hnuddh > .MuiButton-contained')
  .click()
  cy.wait(200)

  //মেয়াদ ও ধারা
  cy.get('#simple-tabpanel-indent-entry-part-three > div > div > form > div.MuiBox-root.css-1tx28v3 > div > div > div.subFormContainer.MuiBox-root.css-0 > div > div.MuiBox-root.css-0 > div > div > div > div.jodit-workplace')
  .click()
  .type('মেয়াদ ও ধারা, মেয়াদ ও ধারা, মেয়াদ ও ধারা, মেয়াদ ও ধারা, মেয়াদ ও ধারা')
  cy.wait(200)

})
