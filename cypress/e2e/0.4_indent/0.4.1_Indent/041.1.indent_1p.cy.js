/// <reference types="cypress"/>

import Indent_NameCy from "../../../Pages/Indent/Indent_Name.cy"
import Indent_UserCy from "../../../Pages/Indent/Indent_User.cy"

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

  //নতুন ইন্ডেন্ট তৈরি করুন
  cy.get('.css-kreh1i > .MuiButtonBase-root')
  .click()
  cy.wait(200)

  //১| অগ্রাধিকার*
  cy.get('#mui-component-select-indentType')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাধারণ')
  //cy.contains('li.MuiMenuItem-root', 'জরুরী')
  .click()
  cy.wait(200) 

  //নিরাপত্তা শ্রেণীবিভাগ*
  cy.get('#mui-component-select-securityClassification')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'বিশেষ গোপনীয়')
  //cy.contains('li.MuiMenuItem-root', 'অতি গোপনীয়')
  //cy.contains('li.MuiMenuItem-root', 'গোপনীয়')
  //cy.contains('li.MuiMenuItem-root', 'অতি গোপনীয়')
  .click()
  cy.wait(200) 

  //চাহিদাকারীঃ (প্রেরক)*
  //2|চাহিদাপত্র নং*
  Indent_NameCy.createIndentName.IndentNameCreation()
  cy.wait(200)

  //৩| অনুমোদনের ধরণঃ*
  cy.get('#mui-component-select-indentApprovalType')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'এআইপি')
  //cy.contains('li.MuiMenuItem-root', 'প্রাইওর এডমিন এপ্রুভাল (সিএফএ)')
  .click()
  cy.wait(200) 

  //অনুমোদনের বিবরণঃ
  cy.get('input[name="approvalDescription"]')
  .type('অনুমোদনের বিবরণ')

  //সিএফএ নং

  //আইটেম/নামমালা*

  //অর্থ বছর*
  /*
  cy.get('#mui-component-select-fiscalYear')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'দেশীয়')
  //cy.contains('li.MuiMenuItem-root', 'বৈদেশিক')
  //cy.contains('li.MuiMenuItem-root', 'দেশীয় এবং বৈদেশিক')
  .click()
  cy.wait(200) 

  //মুদ্রার ধরন*
  cy.get('#mui-component-select-indentApprovalType')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', '২০২৩-২০২৪')
  //cy.contains('li.MuiMenuItem-root', '২০২২-২০২৩')
  //cy.contains('li.MuiMenuItem-root', '২০২১-২০২২')
  .click()
  cy.wait(200) 
  */

  //৪| দ্রব্য মূল্য কোন খাত হতে পরিশোধ্যঃ
  //বাজেট কোড
  cy.get('#mui-component-select-budgetCodeIds')
  .click()
  cy.wait(200)
  cy.get('[data-value="e0fef102-4c2f-4e01-9577-ded89019af76"]')
  .click()
  cy.get('[data-value="2cf7efba-1bd0-4ccf-a09e-3e824d071e1c"]')
  //cy.get('[data-value="79c04c61-00ba-4620-8bbd-738d0a770384"]')
  //cy.get('[data-value="53173f87-397f-4211-9369-b69a2ca2f5af"]')
  .click()
  cy.wait(200)


  cy.get('body').click(0, 0)

  //প্রতিষ্ঠানের কোড
  cy.get('input[name="institutionCode"]')
  .type('TPC-56894322')
  cy.wait(200) 

  //৫। ক। দ্রব্যাদি সরবরাহের মেয়াদ*
  cy.get('input[name="deliveryTime"]')
  .type('২৮ জুন - ২০২৪')
  //.type('2024')
  cy.wait(200) 

  //খ। কিস্তিতে গ্রহণ ?
  //হ্যাঁ
  cy.get('.css-jalm7a > .css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200) 

  //কিস্তির সংখ্যা
  cy.get('#mui-component-select-numberOfInstallment')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', '2 Installment')
  //cy.contains('li.MuiMenuItem-root', '3 Installment')
  //cy.contains('li.MuiMenuItem-root', '6 Installment')
  //cy.contains('li.MuiMenuItem-root', '9 Installment')
  //cy.contains('li.MuiMenuItem-root', '12 Installment')
  .click()
  cy.wait(200) 

  //না
  /*
  cy.get('.css-jalm7a > .css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  */ 

  //১ম কিস্তি
  //শুরুর তারিখ নির্বাচন করুন
  cy.get(':nth-child(6) > .subFormContainer > .css-1qm1lh > :nth-child(1) > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
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

  //শেষ তারিখ নির্বাচন করুন
  cy.get(':nth-child(6) > .subFormContainer > .css-1qm1lh > :nth-child(2) > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  //Year
  cy.get(':nth-child(1) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(12)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //বিবরণ প্রদান করুন
  cy.get(':nth-child(6) > .subFormContainer > .css-0 > .css-19w5vep > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root')
  .click()
  .type('১ম কিস্তি == বিবরণ প্রদান করুন বিবরণ প্রদান করুন বিবরণ প্রদান করুন বিবরণ প্রদান করুন বিবরণ প্রদান করুন')

  //২য় কিস্তি
  //শুরুর তারিখ নির্বাচন করুন
  cy.get(':nth-child(7) > .subFormContainer > .css-1qm1lh > :nth-child(1) > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(124) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //শেষ তারিখ নির্বাচন করুন
  cy.get(':nth-child(7) > .subFormContainer > .css-1qm1lh > :nth-child(2) > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  //Year
  cy.get(':nth-child(1) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(12)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //বিবরণ প্রদান করুন
  cy.get(':nth-child(7) > .subFormContainer > .css-0 > .css-19w5vep > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root')
  .click()
  .type('২য় কিস্তি == বিবরণ প্রদান করুন বিবরণ প্রদান করুন বিবরণ প্রদান করুন বিবরণ প্রদান করুন বিবরণ প্রদান করুন')

  //৬| দ্রব্যাদি কোথায় প্রেরণ করতে হবেঃ
  //গ্রাহক অফিসারের পদবী ও ঠিকানাঃ
  cy.get('input[name="receivingOfficerDesignation"]')
  .type('গ্রাহক অফিসারের পদবী ও ঠিকানাঃ')
  cy.wait(200)

  //রেল স্টেশন /স্থানঃ
  cy.get('input[name="receivingOfficerRailStationPlace"]')
  .type('রেল স্টেশন /স্থানঃ')
  cy.wait(200)

  //ডাকঘরের ঠিকানাঃ
  cy.get('input[name="receivingOfficerPostOffice"]')
  .type('ডাকঘরের ঠিকানাঃ')
  cy.wait(200)

  //তার প্রেরণের (ফ্যাক্স) ঠিকানাঃ
  cy.get('input[name="receivingOfficerFax"]')
  .type('তার প্রেরণের (ফ্যাক্স) ঠিকানাঃ')
  cy.wait(200)

  //যোগ করুন Button
  cy.get('.css-dqlyof > .submitBtnBox > .MuiButton-contained')
  .click()
  cy.wait(200)

  //৭। চাহিদা পত্রের কোন কোন আইটেম / নামমালা এর বীমা প্রয়োজন
  //৮। সর্বশেষ ক্রয়ের তথ্যাদি (চাহিদাকারী পূরণ করবে ) যদি থাকে - ক্রোড়পত্র ক আকারে সংযুক্ত করা হলো।
  //৯। পরিদর্শকের অফিস হতে এমসি নোট গ্রহণ পূর্বক উহা সাহায্য দ্রব্যাদি মাল গাড়িতে / যান্ত্রিক গাড়িতে বুক করতে হবে।
  //10. Shipping Info
  //Country Group


})
