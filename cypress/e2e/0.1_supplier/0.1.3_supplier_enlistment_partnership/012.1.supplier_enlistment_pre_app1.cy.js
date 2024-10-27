/// <reference types="cypress"/>

import 'cypress-mochawesome-reporter/register';
import SupplierCy, { supplierUser } from "../../../Pages/Supplier/Supplier.cy"

it('Supplier Enlistment - Proprietorship', function() {
  cy.visit('http://testing.edp.gov.bd/')
  //Change User Name
  /*cy.get('input[name="username"]')
  .type('alnoman001_single')*/
  SupplierCy.supplierUserforPartnership.supplierUserName()
  cy.wait(300)
  //Change Password
  /*cy.get('input[name="password"]')
  .type('Sqa@12345')*/
  SupplierCy.supplierPass.supplierUserPass()
  cy.wait(300)
  cy.get('.MuiButton-contained')
  .click()
  cy.wait(3000)

  //সরবরাহকারী নিবন্ধন
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(2) > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(200)
  //এপ্লিকেশন ফর এনলিস্টমেন্ট
  cy.get('.MuiCollapse-wrapperInner > .MuiList-root > a > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(500)
  //আবেদন করুন
  cy.get('.css-19i8qlo > .MuiButtonBase-root')
  .click()

  cy.wait(200)

  // default select অন্যান্য
  // uncomment for select অবঃ সামরিক সদস্য
  cy.get('.css-1kfhhld > .MuiBox-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(500)
  

  /* Image Upload */
  cy.get(':nth-child(1) > .fileUploadBox > .fileNameContainer > .addFileBox > .uploadFileInput')
  .selectFile('cypress/fixtures/profile.jpg')
  cy.wait(1000)
  
  //১। পুরা নাম (বাংলায়): *
  cy.get('input[name="preApplicantNameBn"]')
  .type('মোল্লা বছি উদ্দিন')
  cy.wait(300)
  // পিতা
  cy.get('.css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(300)

  //স্বামী
  /*cy.get('.css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()

  //২। স্বামীর নামঃ *
  cy.get('input[name="husbandNameBn"]').type('স্বামী')*/

  //২। পিতার নামঃ *
  cy.get('input[name="fathersNameBn"]')
  .type('মোল্লা কাসির উদ্দিন')
  cy.wait(300)

  //পিতার ঠিকানাঃ
  //বিভাগঃ*
  cy.get('#mui-component-select-guardianDivisionId')
  .click()
  cy.wait(300)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(300)
  //জেলাঃ*
  cy.get('#mui-component-select-guardianDistrictId')
  .click()
  cy.wait(300)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(300)
  //থানাঃ*
  cy.get('#mui-component-select-guardianPoliceStationId')
  .click()
  cy.wait(300)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  cy.wait(300)
  //ফোন নম্বরঃ*
  cy.get('input[name="guardianPhoneNo"]')
  .type('01750671332')
  cy.wait(300)
  //বাড়ি/বাসা/হোল্ডিংঃ*
  cy.get('input[name="guardianAddressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং');
  cy.wait(300)

  //৩। বাণিজ্য প্রতিষ্ঠানের নাম (বাংলায়): *
  cy.get('input[name="businessInstitutionNameBn"]')
  .type('বাণিজ্য প্রতিষ্ঠান')
  cy.wait(300)

  //ক। ব্যবসা প্রতিষ্ঠানের ধরণ (ট্রেড লাইসেন্স মোতাবেকঃ) *
  cy.get('#mui-component-select-tradeLicenseType > .notranslate')
  .click()
  cy.wait(300)

  //ব্যক্তিগত মালিকানা
  /*cy.get('[data-value="PROPRIETORSHIP"]')
  .click()
  cy.wait(300)*/

  //সীমিত মালিকানা (লিমিটেড কোম্পানি)
  /*cy.get('[data-value="LIMITED"]')
  .click()
  cy.wait(300)*/
  
  //যৌথ মালিকানা
  cy.get('[data-value="PARTNERSHIP"]')
  .click()
  cy.wait(300)

  //ট্রেড লাইসেন্স নম্বরঃ*
  cy.get('input[name="tradeLicenseNo"]')
  .type('0530014')
  cy.wait(300)

  //ট্রেড লাইসেন্স এর ফটোকপি*
  cy.get(':nth-child(3) > .css-r85p5r > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Trade-License.jpg')
  cy.wait(300)

  //মালিকের নাম (ট্রেড লাইসেন্স অনুযায়ী) *
  cy.get('input[name="ownerNameAccordingToTradeLicense"]')
  .type('মোল্লা কাসির উদ্দিন')
  cy.wait(300)

  //লাইসেন্স প্রাপ্তির বত্সরঃ *
  cy.get('#mui-component-select-tradeLicenseYear > .notranslate')
  .click()
  cy.wait(300)
  cy.get('[data-value="2021-2022"]')
  .click()

  //সর্বশেষ হালনাগাদের বত্সরঃ
  cy.get('#mui-component-select-lastUpdatedTradeLicenseYear > .notranslate')
  .click()
  cy.wait(300)
  cy.get('[data-value="2023-2024"]')
  .click()
  cy.wait(300)

  //খ । ব্যবসায়িক অভিজ্ঞতা (ইতোপূর্বে যে সকল দেশী/বিদেশী সংস্থা/কোম্পানীর সাথে কাজ করা হয়েছে তার বিবরণঃ)
  cy.get(':nth-child(6) > .css-19w5vep > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root')
  .type('ব্যবসায়িক অভিজ্ঞতা ব্যবসায়িক অভিজ্ঞতা')
  cy.wait(300)

  //৪ । ব্যবসা শুরু করিবার তারিখ ( লাইসেন্স প্রাপ্তির পূর্বের তারিখ অগ্রহণযোগ্য ) :*
  cy.get(':nth-child(5) > .css-r85p5r > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(300)
  //cy.get('[data-testid="CalendarIcon"]').click()
  cy.wait(300)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(300)
  cy.get(':nth-child(1) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(300)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(300)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(300)

  //৫ । স্বত্ত্বাধিকারী/ব্যবস্থাপনা পরিচালকের মোবাইল নম্বরঃ *
  cy.get('input[name="businessOwnerMobileNo"]')
  .type('01750671332')
  cy.wait(300)

  //৬। জন্মস্থানঃ *
  cy.get('input[name="birthPlace"]')
  .type('ঢাকা')
  cy.wait(300)

  //জন্ম তারিখঃ *
  cy.get(':nth-child(6) > .css-r85p5r > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(300)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(300)
  cy.get(':nth-child(83) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(300)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(300)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(300)

  //৭। বর্তমান পেশাঃ
  cy.get('input[name="presentOccupationBn"]')
  .type('ব্যবসা')
  cy.wait(300)

  //৮। ক) ফার্মের সহিত সম্পর্কঃ
  cy.get('input[name="relationWithFirmBn"]')
  .type('ব্যবসা')
  cy.wait(300)

  //৮। খ) পদবী (বাংলায়):
  cy.get('input[name="presentDesignationBn"]')
  .type('চেয়ারম্যান')
  cy.wait(300)

  //৮। গ) বৈবাহিক সম্পর্কঃ *
  cy.get('#mui-component-select-maritalStatus')
  .click()
  cy.wait(300)
  cy.get('[data-value="MARRIED"]')
  .click()
  cy.wait(300)

  //৯। জাতীয় পরিচয় পত্র নংঃ*
  cy.get('input[name="nid"]')
  .type('0123456789')
  cy.wait(300)

  //১০। জাতীয়তাঃ*
  cy.get('#mui-component-select-nationalityTypeId')
  .click()
  cy.wait(300)
  cy.contains('li.MuiMenuItem-root', 'বাংলাদেশী')
  .click();
  cy.wait(300)

  //১১। শিক্ষাগত যোগ্যতাঃ

  //১২। স্থায়ী ঠিকানাঃ

  //বিভাগঃ*
  cy.get('#mui-component-select-permanentDivisionId')
  .click()
  cy.wait(300)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //জেলাঃ*
  cy.get('#mui-component-select-permanentDistrictId')
  .click()
  cy.wait(300)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //থানাঃ*
  cy.get('#mui-component-select-permanentPoliceStationId')
  .click()
  cy.wait(300)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  cy.wait(200)
  //ফোন নম্বরঃ*
  cy.get('input[name="permanentPhoneNo"]')
  .type('01750671332')
  cy.wait(300)
  //বাড়ি/বাসা/হোল্ডিংঃ*
  cy.get('input[name="permanentAddressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং');
  cy.wait(300)

  //১৩। বর্তমান ঠিকানাঃ
  cy.get(':nth-child(1) > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(300)
  //বিভাগঃ*
  //জেলাঃ*
  //থানাঃ*
  //ফোন নম্বরঃ
  //বাড়ি/বাসা/হোল্ডিংঃ *

  //১৪। কোম্পানীর অনুকূলে ব্যাংক সলভেন্সি সনদসহ ০৬ মাসের ব্যাংক স্টেটমেন্ট ০২ পাতার মধ্যে (সংযুক্ত করতে হবে):*
  cy.get('.css-r85p5r > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/bank-statement.jpg')
  cy.wait(1000)

  //শুরুর তারিখঃ *
  cy.get(':nth-child(2) > :nth-child(1) > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(300)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(300)
  cy.get(':nth-child(122) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(300)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(300)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(300)

  //শেষ তারিখঃ *
  cy.get(':nth-child(2) > :nth-child(2) > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(300)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(300)
  cy.get(':nth-child(3) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(300)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(300)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(300)

  //১৫। আয়কর সংক্রান্ত তথ্যাবলী বাৎসরিক ক্রমানুসারে (০৩ বৎসরের): *
  cy.get(':nth-child(14) > .singleColumnRow > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root')
  .click()
  cy.wait(300)
  /*১ম বৎসর*/
  //ক। ই টি আই এনঃ *
  cy.get('input[name="incomeTaxInformationParams.0.tinNo"]')
  .type('224188377547')
  cy.wait(300)
  //খ। ট্যাক্স বৎসরঃ *
  cy.get('#simple-tabpanel-bio-data-bn > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(14) > div.singleColumnRow.MuiBox-root.css-164r41r > div:nth-child(1) > div > div:nth-child(1) > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(300)
  cy.get('[data-value="2018-2019"]')
  .click()
  
  //গ। ব্যক্তিগত কর পরিশোধের পরিমাণঃ *
  cy.get('input[name="incomeTaxInformationParams.0.personalTaxAmount"]')
  .type('250000')
  cy.wait(200)
  //ঘ। প্রতিষ্ঠানের কর পরিশোধের পরিমাণঃ *
  cy.get('input[name="incomeTaxInformationParams.0.companyTaxAmount"]')
  .type('550000')
  cy.wait(200)
  //আয়কর সনদ*
  cy.get(':nth-child(1) > .css-7ysju6 > :nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Income_Tax_Certificate.jpg')
  cy.wait(200)
  //আয়কর রশিদ*
  cy.get(':nth-child(1) > .css-7ysju6 > :nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Income_Tax_Receipt.jpg')
  cy.wait(200)

  /*২য় বৎসর*/
  //ক। ই টি আই এনঃ *
  //খ। ট্যাক্স বৎসরঃ *
  //গ। ব্যক্তিগত কর পরিশোধের পরিমাণঃ *
  cy.get('input[name="incomeTaxInformationParams.1.personalTaxAmount"]')
  .type('350000')
  cy.wait(200)
  //ঘ। প্রতিষ্ঠানের কর পরিশোধের পরিমাণঃ *
  cy.get('input[name="incomeTaxInformationParams.1.companyTaxAmount"]')
  .type('650000')
  cy.wait(200)
  //আয়কর সনদ*
  cy.get(':nth-child(2) > .css-7ysju6 > :nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Income_Tax_Certificate.jpg')
  cy.wait(200)
  //আয়কর রশিদ*
  cy.get(':nth-child(2) > .css-7ysju6 > :nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Income_Tax_Receipt.jpg')
  cy.wait(200)


  /*৩য় বৎসর*/
  //ক। ই টি আই এনঃ *
  //খ। ট্যাক্স বৎসরঃ *
  //গ। ব্যক্তিগত কর পরিশোধের পরিমাণঃ *
  cy.get('input[name="incomeTaxInformationParams.2.personalTaxAmount"]')
  .type('450000')
  cy.wait(200)
  //ঘ। প্রতিষ্ঠানের কর পরিশোধের পরিমাণঃ *
  cy.get('input[name="incomeTaxInformationParams.2.companyTaxAmount"]')
  .type('750000')
  cy.wait(200)
  //আয়কর সনদ*
  cy.get(':nth-child(3) > .css-7ysju6 > :nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Income_Tax_Certificate.jpg')
  cy.wait(200)
  //আয়কর রশিদ*
  cy.get(':nth-child(3) > .css-7ysju6 > :nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Income_Tax_Receipt.jpg')
  cy.wait(200)

  //১৬ । অন্য সংস্থায় তালিকাভুক্তি সংক্রান্ত তথ্যাবলীঃ
  cy.get(':nth-child(15) > .singleColumnRow > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root')
  .click()
  cy.wait(200)
  //১ ।  যে সংস্থায় তালিকাভুক্ত, সেই সংস্থার বিবরণঃ
  //ক। সংস্থার নামঃ *
  cy.get('input[name="otherOrganizationEnlistmentParams.0.organizationName"]')
  .type('সংস্থার নাম')
  cy.wait(200)
  //খ। ঠিকাদারীর শ্রেণীঃ *
  cy.get('input[name="otherOrganizationEnlistmentParams.0.contractorClass"]')
  .type('ঠিকাদারীর শ্রেণী')
  cy.wait(200)
  //গ। উক্ত সংস্থার সাথে চুক্তি অনুযায়ী সম্পন্ন কাজের পরিমাণ/সংখ্যাঃ /*** ***/
  cy.get('input[name="otherOrganizationEnlistmentParams.0.totalCompletedWork"]')
  .click()
  .type('20')
  cy.wait(200)
  //ঘ। উক্ত সংস্থার সাথে চুক্তি অনুযায়ী চলমান কাজের পরিমাণ/সংখ্যাঃ /*** ***/
  cy.get('input[name="otherOrganizationEnlistmentParams.0.totalWorkInProgress"]')
  .click()
  .type('200')
  cy.wait(200)
  
  //১৭। আবেদনকারী বিগত দশ বৎসর যে সকল প্রতিষ্ঠানে কর্মরত ছিলেন তার বিবরণঃ
  cy.get(':nth-child(16) > .singleColumnRow > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root')
  .click()
  cy.wait(200)
  //১ ।  কর্মরত প্রতিষ্ঠানের বিবরণঃ
  //ক। প্রতিষ্ঠানের নামঃ *
  cy.get('#simple-tabpanel-bio-data-bn > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(16) > div.singleColumnRow.MuiBox-root.css-0 > div.MuiBox-root.css-12oq5ku > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(1) > div.MuiBox-root.css-79elbk > div > div')
  .click()
  .type('প্রতিষ্ঠানের নাম')
  cy.wait(300)
  //খ । প্রতিষ্ঠানের বিবরণঃ
  //cy.get('.singleColumnRow > :nth-child(2) > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root')
  //.click() //.type('প্রতিষ্ঠানের বিবরণ')
  //cy.get('.singleColumnRow > :nth-child(2) > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root')
  //.type('প্রতিষ্ঠানের বিবরণ')
  //cy.wait(500)
  //শুরুর তারিখঃ
  cy.get('.css-12oq5ku > .singleColumnRow > .formRow > :nth-child(1) > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(300)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(300)
  cy.get(':nth-child(111) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(300)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(300)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(5)')
  .click()
  cy.wait(300)

  //শেষ তারিখঃ
  cy.get('.css-12oq5ku > .singleColumnRow > .formRow > :nth-child(2) > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(300)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(300)
  cy.get(':nth-child(5) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(300)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(300)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(5)')
  .click()
  cy.wait(300)


  //১৮ । আবেদনকারী বিগত দশ বৎসর যে সকল দেশ ভ্রমণ করেছেন তার বিবরণঃ
  //১ ।   ভ্রমণকৃত দেশের বিবরণঃ
  //ক। দেশের নামঃ *
  cy.get(':nth-child(17) > .singleColumnRow > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root')
  .click()
  cy.get('#simple-tabpanel-bio-data-bn > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(17) > div.singleColumnRow.MuiBox-root.css-0 > div.MuiBox-root.css-12oq5ku > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.get('[data-value="8f66918a-8bb2-441e-a3d8-286106c44146"]')
  .click()
  cy.wait(500)
  //খ । ভ্রমণের বিবরণঃ
  cy.get('#simple-tabpanel-bio-data-bn > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(17) > div.singleColumnRow.MuiBox-root.css-0 > div.MuiBox-root.css-12oq5ku > div.singleColumnRow.MuiBox-root.css-0 > div.MuiBox-root.css-29kerx > div.MuiBox-root.css-79elbk > div > div')
  .click()
  .type('ভ্রমণের বিবরণ ভ্রমণের বিবরণ ভ্রমণের বিবরণ')
  //শুরুর তারিখঃ
  cy.get(':nth-child(17) > :nth-child(2) > .css-12oq5ku > .singleColumnRow > .formRow > :nth-child(1) > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(111) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(5)')
  .click()
  cy.wait(200)

  //শেষ তারিখঃ
  cy.get(':nth-child(17) > :nth-child(2) > .css-12oq5ku > .singleColumnRow > .formRow > :nth-child(2) > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(5) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(5)')
  .click()
  cy.wait(200)

  //১৯। সমিতি, সামাজিক/রাজনৈতিক/ক্লাব/সংস্থার সদস্য হইলেঃ
  cy.get(':nth-child(18) > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  //ক। সংস্থা/প্রতিষ্ঠানের নামঃ *
  cy.get('input[name="associationWithSocialPoliticalClubOrgParams.0.name"]')
  .type('সামাজিক প্রতিষ্ঠান')
  cy.wait(200)
  //খ। রেজিস্ট্রেশন নংঃ
  cy.get('input[name="associationWithSocialPoliticalClubOrgParams.0.registrationNo"]')
  .type('0125478')
  cy.wait(200)
  //গ। সংস্থাটির কার্যক্রমঃ
  cy.get('#simple-tabpanel-bio-data-bn > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(18) > div.singleColumnRow.MuiBox-root.css-0 > div.MuiBox-root.css-12oq5ku > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(3) > div.MuiBox-root.css-79elbk > div > div')
  .click()
  .type('সংস্থাটির কার্যক্রম লিখুন সংস্থাটির কার্যক্রম লিখুন')
  cy.wait(200)
  //ঘ। সংস্থাটিতে পদ (যদি থাকে)
  cy.get('input[name="associationWithSocialPoliticalClubOrgParams.0.designation"]')
  .type('0125478')
  cy.wait(200)
  //ঙ । যোগদানের তারিখঃ
  cy.get('.css-1840zz > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(300)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(300)
  cy.get(':nth-child(111) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(300)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(300)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(5)')
  .click()
  cy.wait(300)

  //20 আবেদনকারীর বিরুদ্ধে যে কোন পুলিশ স্টেশনে (থানায়) অভিযোগ (জিডি) থাকলে তার বিবরণঃ
  /*cy.get(':nth-child(19) > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(500)
  //১ । পুলিশ স্টেশনে (থানায়) অভিযোগ (জিডি) এর বিবরণঃ
  //ক । জিডির তারিখঃ *
  cy.get('.css-1840zz > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root')
  .click()
  cy.wait(500)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(500)
  cy.get(':nth-child(101) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(500)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(500)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(5)')
  .click()
  cy.wait(500)
  //খ । জিডির কপিঃ
  cy.get(':nth-child(2) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox').selectFile('cypress/fixtures/Copy_of_GD.jpg')
  cy.wait(500)
  //গ । জিডির বিবরণঃ
  cy.get('.css-12oq5ku > .singleColumnRow > .css-29kerx > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root').click().type("জিডি শব্দের পূর্ণাঙ্গ রূপ হচ্ছে জেনারেল ডায়েরি। যার বাংলা পরিভাষিক অর্থ হলো সাধারণ ডায়রী বা রোজনামচা। পুলিশ আইনের ৪৪ ধারা ফৌজদারী কার্যবিধি আইনের ১৫৪ ও ১৫৫ ধারার নির্দেশ পূরণের লক্ষ্যে প্রত্যেক থানায় একটি জেনারেল ডায়রী (জিডি) বই সংরক্ষন ও রক্ষণাবেক্ষণ করা হয়ে থাকে।")
  
  */

  //২১। সামরিক/বেসামরিক আদালতে বিচার হইয়া থাকিলে অথবা অভিযুক্ত হইলে তাহার বিবরণঃ
  /*cy.get(':nth-child(20) > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  //১।   সামরিক/বেসামরিক আদালতে বিচার অথবা অভিযুক্ত হওয়ার বিবরণঃ
  //আদালতের ধরণঃ *
  cy.get('.singleColumnRow > :nth-child(1) > .css-8v90jo > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .first()
  .check();
  //ক। অপরাধের ধরনঃ *
  cy.get('input[name="militaryCivilCourtCaseDescriptionParams.0.offenseCommitted"]')
  .type('নাই')
  cy.wait(200)
  //খ। অপরাধ সংগঠনের স্থানঃ *
  cy.get('input[name="militaryCivilCourtCaseDescriptionParams.0.offenseCommittedPlace"]')
  .type("নাই")
  cy.wait(200)
  //তারিখঃ
  cy.get('.css-12oq5ku > .singleColumnRow > .formRow > .css-r85p5r > .css-1ftvhls > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root')
  .click()
  cy.get('.MuiPickersCalendarHeader-labelContainer > .MuiButtonBase-root')
  .click()
  cy.get(':nth-child(111) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(500)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(500)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(5)')
  .click()
  cy.wait(500)

  */

  //২২। সশস্ত্র বাহিনীতে কোন আত্মীয় নিয়োজিত থাকিলে তাহার বিবরণঃ
  cy.get(':nth-child(21) > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(300)
  //১।   সশস্ত্র বাহিনীতে নিয়োজিত আত্মীয়ের বিবরণঃ
  //ক। অফিসের ধরণঃ *
  cy.get('#simple-tabpanel-bio-data-bn > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(21) > div.singleColumnRow.MuiBox-root.css-0 > div.MuiBox-root.css-12oq5ku > div.MuiBox-root.css-1wdhvac > div.formRow.MuiBox-root.css-0 > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.get('[data-value="BANGLADESH_ARMY"]')
  .click()
  cy.wait(300)
  //পদমর্যাদাঃ *
  cy.get('#simple-tabpanel-bio-data-bn > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(21) > div.singleColumnRow.MuiBox-root.css-0 > div.MuiBox-root.css-12oq5ku > div.MuiBox-root.css-1wdhvac > div.formRow.MuiBox-root.css-0 > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.contains('li.MuiMenuItem-root', 'ব্রিগেডিয়ার জেনারেল')
  .click();
  cy.wait(300)
  //খ। নামঃ *
  cy.get('input[name="relationsServingDefenceInformationParams.0.relativeName"]')
  .type('মনসুর আব্দুল্লাহ')
  cy.wait(300)
  //গ। কোর/রেজিমেন্ট/ব্রাঞ্চ ইত্যাদির নামঃ *
  cy.get('input[name="relationsServingDefenceInformationParams.0.relativeCoreOrRegimentName"]')
  .type('এডুকেশন কোর')
  cy.wait(300)
  //ঘ। সম্পর্কঃ *
  cy.get('input[name="relationsServingDefenceInformationParams.0.relationWithTheRelative"]')
  .type('মামা')
  cy.wait(300)
  //ঙ। বর্তমান ঠিকানাঃ
  //বিভাগঃ*
  cy.get('#simple-tabpanel-bio-data-bn > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(21) > div.singleColumnRow.MuiBox-root.css-0 > div.MuiBox-root.css-12oq5ku > div.MuiBox-root.css-1wdhvac > div.singleColumnRow.MuiBox-root.css-0 > div.MuiBox-root.css-7ysju6 > div:nth-child(2) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(300)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(300)
  //জেলাঃ*
  cy.get('#simple-tabpanel-bio-data-bn > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(21) > div.singleColumnRow.MuiBox-root.css-0 > div.MuiBox-root.css-12oq5ku > div.MuiBox-root.css-1wdhvac > div.singleColumnRow.MuiBox-root.css-0 > div.MuiBox-root.css-7ysju6 > div:nth-child(2) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(300)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(300)
  //থানাঃ*
  cy.get('#simple-tabpanel-bio-data-bn > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(21) > div.singleColumnRow.MuiBox-root.css-0 > div.MuiBox-root.css-12oq5ku > div.MuiBox-root.css-1wdhvac > div.singleColumnRow.MuiBox-root.css-0 > div.MuiBox-root.css-7ysju6 > div:nth-child(3) > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(300)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  cy.wait(300)
  //বাড়ি/বাসা/হোল্ডিংঃ*
  cy.get('input[name="relationsServingDefenceInformationParams.0.relativePresentAddressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং')
  cy.wait(300)
  //ফোন নম্বরঃ
  cy.get('input[name="relationsServingDefenceInformationParams.0.relativePresentPhoneNo"]')
  .type('01750671332')
  cy.wait(300)

  //২৩। রেফারেন্সঃ
  cy.get('#simple-tabpanel-bio-data-bn > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div.MuiBox-root.css-ca8iw5 > div.jodit-react-container > div > div.jodit-workplace > div.jodit-wysiwyg')
  .click()
  .type('আমি এই মর্মে শপথ করিতেছি যে, উপরে যে সমস্ত বিবরণ/তথ্য প্রদান করা হইল তাহা আমার জ্ঞান ও বিশ্বাস মতে সত্য।')
  cy.wait(300)
  
  //click for acceptance
  cy.get('.css-17i6dfn > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(300)


  //প্রতিষ্ঠানের সিলঃ*
  cy.get('#simple-tabpanel-bio-data-bn > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(24) > div:nth-child(1) > div.MuiBox-root.css-8atqhb > div > div > div.MuiBox-root.css-8atqhb > div > div.fileNameContainer.MuiBox-root.css-8atqhb > label')
  .selectFile('cypress/fixtures/Seal_of_the_Institution.png')
  cy.wait(300)

  //আবেদনকারীর সিলঃ*
  cy.get('#simple-tabpanel-bio-data-bn > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(24) > div:nth-child(2) > div.MuiBox-root.css-8atqhb > div > div > div.MuiBox-root.css-8atqhb > div > div.fileNameContainer.MuiBox-root.css-8atqhb > label')
  .selectFile('cypress/fixtures/Seal_of_Applicant.jpg')
  cy.wait(300) 

  //আবেদনকারীর স্বাক্ষরঃ*
  cy.get('#simple-tabpanel-bio-data-bn > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(24) > div:nth-child(3) > div.MuiBox-root.css-8atqhb > div > div > div.MuiBox-root.css-8atqhb > div > div.fileNameContainer.MuiBox-root.css-8atqhb > label')
  .selectFile('cypress/fixtures/Signature_of_applicant.png') 
  cy.wait(300)
})