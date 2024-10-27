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

  //এআইপি অ্যাপ্লিকেশন
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-padding > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > [href="/admin/pre-indent-process/aip-application"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(200)

  //Create AIP
  cy.get('.css-kreh1i > .MuiButtonBase-root')
  .click()

  //ফরওয়ার্ডিং পত্র নং*
  cy.get('#simple-tabpanel-aip-application > div > div.MuiBox-root.css-c18jar > div > div > div.MuiBox-root.css-0 > div > form > div.MuiBox-root.css-1tx28v3 > div > div > div:nth-child(1) > div > div > div.MuiBox-root.css-79elbk > div > div')
  .click()
  //.type('00002543')
  .type('০৬.০০.০০০০.০০৪.২৬.০৫.২৪/ক্রয়/আর্মি/৭০')
  cy.wait(200)

  //বিষয়
  cy.get('.jodit-wysiwyg')
  .click()
  .type('AAAAA')
  cy.wait(200)

  //নীতিগত অনুমোদনের ধরন*
  cy.get('#mui-component-select-aipType')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'TO&E Include')
  // cy.contains('li.MuiMenuItem-root', 'TO&E Exclude')
  // cy.contains('li.MuiMenuItem-root', 'TO&E Extra')
  // cy.contains('li.MuiMenuItem-root', 'Deferred Payment')
  // cy.contains('li.MuiMenuItem-root', 'Carry Forward')
  .click()
  cy.wait(200) 

  //মুদ্রার ধরন*
  cy.get('#mui-component-select-currencyType')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'দেশীয়')
  // cy.contains('li.MuiMenuItem-root', 'বৈদেশিক')
  // cy.contains('li.MuiMenuItem-root', 'দেশীয় এবং বৈদেশিক')
  .click()
  cy.wait(200) 

  //শুরুর অর্থবছর
  cy.get('#mui-component-select-beginningFiscalYear')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', '২০২১-২০২২')
  .click()
  cy.wait(200)

  //শেষ অর্থবছর*
  cy.get('#mui-component-select-endingFiscalYear')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', '২০৩১-২০৩২')
  .click()
  cy.wait(200)

  //আইটেম গ্রুপ
  cy.get('.css-19w5vep > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root')
  .type('BBBBBB CCCCC')

  //Non Standardized
  // cy.get('.css-19w5vep > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root')
  // .click()

  //Standardized
  cy.get(':nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()

  //Add Item Details
  cy.get('.css-b0lka')
  .click()
  cy.wait(250)

  //(ক) ক্রমিক নংঃ 1
  //(খ) নামমালা/আইটেম*
  cy.get('#mui-component-select-itemId')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', '1.1.0000001 - Sedan Suv Liberty - (STD)')
  .click()
  cy.wait(200)

  //(গ) প্রমিতকৃত সকল মডেলসমূহ
  //(ঘ) প্রাধিকার (সংখ্যা)
  cy.get('#simple-tabpanel-aip-application > div > div.MuiBox-root.css-c18jar > div > div > div.MuiBox-root.css-0 > div > form > div.MuiBox-root.css-0 > div.MuiBox-root.css-13o7eu2 > div > div > div > div > div.MuiBox-root.css-1tx28v3 > div:nth-child(3) > div > div.MuiBox-root.css-79elbk > div > div')
  .type('100')

  //(ঙ) মজুদ (সংখ্যা)
  //ইউনিট
  cy.get('#simple-tabpanel-aip-application > div > div.MuiBox-root.css-c18jar > div > div > div.MuiBox-root.css-0 > div > form > div.MuiBox-root.css-0 > div.MuiBox-root.css-13o7eu2 > div > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div.MuiBox-root.css-79elbk > div > div')
  .type('30')
  cy.wait(200)

  //ডিপো
  cy.get('#simple-tabpanel-aip-application > div > div.MuiBox-root.css-c18jar > div > div > div.MuiBox-root.css-0 > div > form > div.MuiBox-root.css-0 > div.MuiBox-root.css-13o7eu2 > div > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div.MuiBox-root.css-79elbk > div > div')
  .type('30')
  cy.wait(200)

  //পাইপলাইন
  cy.get('#simple-tabpanel-aip-application > div > div.MuiBox-root.css-c18jar > div > div > div.MuiBox-root.css-0 > div > form > div.MuiBox-root.css-0 > div.MuiBox-root.css-13o7eu2 > div > div > div > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div.MuiBox-root.css-79elbk > div > div')
  .type('40')
  cy.wait(200)

  //(চ) ইতোপুর্বে বর্ণিত আইটেমের জন্য নীতিগত অনুমোদন নেয়া হয়ে থাকলে এবং তা প্রক্রিয়াধীন থাকলে তার সংখ্যা
  cy.get('#simple-tabpanel-aip-application > div > div.MuiBox-root.css-c18jar > div > div > div.MuiBox-root.css-0 > div > form > div.MuiBox-root.css-0 > div.MuiBox-root.css-13o7eu2 > div > div > div > div > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div.MuiBox-root.css-79elbk > div > div')
  .type('15')
  cy.wait(200)

  //(ছ) = {ঘ - (ঙ + চ)} ঘাটতি/অতিরিক্ত (সংখ্যা)
  //(জ) ক্রয়ের জন্য প্রস্তাবিত সংখ্যা*
  cy.get('#simple-tabpanel-aip-application > div > div.MuiBox-root.css-c18jar > div > div > div.MuiBox-root.css-0 > div > form > div.MuiBox-root.css-0 > div.MuiBox-root.css-13o7eu2 > div > div > div > div > div:nth-child(3) > div:nth-child(2) > div > div.MuiBox-root.css-79elbk > div > div')
  .type('55')
  cy.wait(200)

  //(ঝ) পণ্যের একক প্রাক্কলিত (FOB)/পূর্ব মূল্য (ক্রয় বৎসর উল্লেখসহ দেশীয় ও বৈদেশিক মুদ্রা)
  //প্রাক্কলিত মূল্য by default
  //cy.get('.css-1nmjt4u > .MuiBox-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  //.click()
  //cy.wait(200)

  //পূর্ব মূল্য
  cy.get('.css-1nmjt4u > .MuiBox-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)

  //অর্থবছর*
  cy.get('#simple-tabpanel-aip-application > div > div.MuiBox-root.css-c18jar > div > div > div.MuiBox-root.css-0 > div > form > div.MuiBox-root.css-0 > div.MuiBox-root.css-13o7eu2 > div > div > div > div > div:nth-child(4) > div > div:nth-child(3) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', '২০২২-২০২৩')
  .click()
  cy.wait(200) 

  //মুদ্রার ধরণ*
  cy.get('#simple-tabpanel-aip-application > div > div.MuiBox-root.css-c18jar > div > div > div.MuiBox-root.css-0 > div > form > div.MuiBox-root.css-0 > div.MuiBox-root.css-13o7eu2 > div > div > div > div > div:nth-child(4) > div > div:nth-child(3) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'দেশীয়')
  .click()
  cy.wait(200) 

  //মূল্য
  cy.get('input[name="aipDetailsFOBPriceParam.fobForeignPrice"]')
  .click()
  .type('258613574')
  cy.wait(200) 

  //মন্তব্য
  cy.get('#simple-tabpanel-aip-application > div > div.MuiBox-root.css-c18jar > div > div > div.MuiBox-root.css-0 > div > form > div.MuiBox-root.css-0 > div.MuiBox-root.css-13o7eu2 > div > div > div > div > div:nth-child(4) > div > div:nth-child(5) > div > div.jodit-react-container > div > div.jodit-workplace')
  .click()
  .type('মন্তব্য মন্তব্য মন্তব্য মন্তব্য মন্তব্য')
  cy.wait(200) 

  //(ঞ) পণ্যের মূল্য ব্যতীত বৈদেশিক মুদ্রায় অন্যান্য ব্যয় (বৈদেশিক/স্থানীয় প্রশিক্ষণ, অপশনাল/এসেনশিয়াল আইটেম, টিএসটি, পণ্য পরিবহন ইত্যাদি )
  //ব্যয়ের খাত
  cy.get('input[name="expenditureHead"]')
  .click()
  .type('ব্যয়ের খাত')
  cy.wait(200) 

  //মুদ্রার ধরণ
  //মুদ্রার বিনিময় হার
  //ব্যয়ের পরিমাণ
  /*cy.get('input[name="cfrExpenditureAmount"]')
  .click()
  .type('25064879')
  cy.wait(200) */

  //(ঠ)দেশীয় মুদ্রায় অন্যান্য ব্যয় (বীমা, ভ্যাট , এজেন্ট কমিশন, পূর্ত কাজ ও অন্যান্য খরচ সহ )
  //অন্যান্য ব্যয়ের খাত
  cy.get('input[name="expenditureHead"]')
  .click()
  .type('অন্যান্য ব্যয়ের খাত')
  cy.wait(200) 

  //মুদ্রার ধরণ
  //ব্যয়ের পরিমাণ
  cy.get('input[name="expenditureAmount"]')
  .click()
  .type('25064879')
  cy.wait(200) 

  //(ড) সর্বমোট মূল্য (টাকা) (সম্ভাব্য/প্রাক্কলিত চুক্তি মূল্য)
  //(ঢ) মন্তব্য
  cy.get('#simple-tabpanel-aip-application > div > div.MuiBox-root.css-c18jar > div > div > div.MuiBox-root.css-0 > div > form > div.MuiBox-root.css-0 > div.MuiBox-root.css-13o7eu2 > div > div > div > div > div:nth-child(9) > div > div > div > div.jodit-react-container > div > div.jodit-workplace')
  .click()
  .type('মন্তব্য মন্তব্য মন্তব্য মন্তব্য মন্তব্য মন্তব্য')
  cy.wait(200) 

  //ডিজিডিপি কন্ট্রাক্ট নাম্বার
  cy.get('input[name="aipDetailsCommentParam.contactNO"]')
  .click()
  .type('01256324598')
  cy.wait(200) 

  //তারিখ
  cy.get('[data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(102) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //স্থানীয় সরবরাহকারী
  //প্রিন্সিপাল

  //নোটস
  cy.get('#simple-tabpanel-aip-application > div > div.MuiBox-root.css-c18jar > div > div > div.MuiBox-root.css-0 > div > form > div.MuiBox-root.css-0 > div:nth-child(3) > div > div > div > div > div.jodit-react-container > div > div.jodit-workplace')
  .click()
  .type('নোটস নোটস নোটস নোটস নোটস')
  cy.wait(200) 

})
