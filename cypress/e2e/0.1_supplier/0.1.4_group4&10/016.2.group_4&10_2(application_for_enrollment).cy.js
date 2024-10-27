/// <reference types="cypress"/>

it('Group 4 & 10, Application for Enrollment).cy', function() {
  cy.visit('http://testing.edp.gov.bd/')
  //Change User Name
  cy.get('input[name="username"]')
  .type('anisur002')
  //Change Password
  cy.get('input[name="password"]')
  .type('Sqa@12345')
  cy.wait(200)
  cy.get('.MuiButton-contained')
  .click()
  cy.wait(3000)

  //গ্রুপ ৪ এবং ১০ নিবন্ধন
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(7) > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(200)

  //গ্রুপ ৪ এবং ১০ তালিকাভুক্তি
  cy.get('.MuiCollapse-wrapperInner > .MuiList-root > a > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(200)

  //পরবর্তী
  cy.get('.css-19i8qlo > .MuiButtonBase-root')
  .click()
  cy.wait(500)

  //তালিকাভুক্তির জন্য আবেদনের প্রয়োজনীয় নথিপত্র
  cy.get('.MuiTabs-flexContainer > :nth-child(7)')
  .click()

  //সংযুক্ত করুন
  //১। আমদানি নিবন্ধন সনদঃ*
  cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Import_Registration_Certificate.jpeg')
  cy.wait(200)

  //২। বিআইএএ মেম্বারশিপ / সিওসি মেম্বারশিপ সনদঃ
  cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/biaa.jpg')
  cy.wait(200)

  //৩। এজেন্সী সনদঃ (প্রিসিপালে ম্যানুফ্যাকচারিং)
  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Agency_Certificate.jpg')
  cy.wait(200)

  //৪। স্বরাষ্ট্র মন্ত্রণালয়ের ছাড়পত্র / সনদঃ
  cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Ministry_Clearance.jpg')
  cy.wait(200)

  //৫। ইন্ডেন্টিং সনদঃ
  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/bank-statement.jpg')
  cy.wait(200)

  //৬। সর্বশেষ সম্পন্ন চুক্তিপত্র নম্বরঃ
  cy.get('#simple-tabpanel-required-document-for-g4n10 > div > div.MuiBox-root.css-1enqly4 > div.formColumn.centerAlignItems.MuiBox-root.css-0 > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(2) > div > div.MuiBox-root.css-79elbk > div > div')
  .type('AB00254T8596')
  cy.wait(200)

  //৭। সর্বশেষ চুক্তিপত্রঃ
  cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/citizenship_certificate.jpeg')
  cy.wait(200)

  //৮। পূর্বের তালিকাভুক্তির তারিখঃ
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

})