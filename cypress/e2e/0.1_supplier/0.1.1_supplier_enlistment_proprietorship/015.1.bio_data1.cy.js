/// <reference types="cypress"/>

import 'cypress-mochawesome-reporter/register';
import SupplierCy, { supplierUser } from "../../../Pages/Supplier/Supplier.cy"

it('Supplier Enlistment - Proprietorship', function() {
  cy.visit('http://testing.edp.gov.bd/')
  //Change User Name
  /*cy.get('input[name="username"]')
  .type('alnoman001_single')*/
  SupplierCy.supplierUserforProprietorship.supplierUserName()
  cy.wait(300)
  //Change Password
  /*cy.get('input[name="password"]')
  .type('Sqa@12345')*/
  SupplierCy.supplierPass.supplierUserPass()
  cy.wait(300)
  cy.get('.MuiButton-contained')
  .click()
  cy.wait(3000)

  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(2) > .MuiListItemText-root > .MuiTypography-root').click()
  cy.get('[href="/supplier/supplier-registration/main-application"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(5000)
  cy.get('.MuiTabs-flexContainer > :nth-child(6)')
  .click()
  cy.wait(200)
  cy.get(':nth-child(1) > .person-list-button-sec > :nth-child(2)')
  .click()


  /* Image Upload */
  cy.get(':nth-child(1) > :nth-child(1) > .css-4boj8f > :nth-child(1) > .fileUploadBox > .fileNameContainer > .addFileBox > .uploadFileInput')
  .selectFile('cypress/fixtures/199353.jpg')
  cy.wait(2000)

  //১। প্রতিষ্ঠানের নামঃ*
  //২। স্বত্বাধিকারী এর নামঃ*
  //৩। প্রতিষ্ঠানের পদবী/নিয়োগঃ*

  //৪। সশস্ত্র বাহিনীর অবসর প্রাপ্ত সদস্য হলেঃ
  cy.get(':nth-child(2) > .css-0 > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //নম্বরঃ
  cy.get('input[name="retiredMilitaryNumber"]')
  .type('AO258745')
  //পদবীঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div > div.singleColumnRow.MuiBox-root.css-6gs9hh > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.contains('li.MuiMenuItem-root', 'কর্নেল')
  .click();
  //অবসরের তারিখঃ
  cy.get('.css-r85p5r > .css-1ftvhls > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
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

  //এলপিআর এ থাকলে এলপিআর গ্রহণের তারিখঃ
  cy.get('.css-z8j4a > .css-17i6dfn > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  cy.get('.css-qbbete > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(113) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)


  //৫। সশস্ত্র বাহিনীর কর্মরত/অবসরপ্রাপ্ত সদস্যের Spouse হলে স্বামী/স্ত্রীর
  cy.get('.formRow > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()

  //কর্মরত
  cy.get(':nth-child(3) > :nth-child(2) > .css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  //অবসরপ্রাপ্ত
  //cy.get(':nth-child(3) > :nth-child(2) > .css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //নম্বরঃ
  cy.get('input[name="militarySpouseNumber"]')
  .type('TO256348')
  //পদবীঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div > div.singleColumnRow.MuiBox-root.css-6gs9hh > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div').click()
  cy.contains('li.MuiMenuItem-root', 'মেজর')
  .click();
  //সম্পর্কঃ

  //স্বামী
  /*cy.get(':nth-child(4) > .css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)*/
  //স্ত্রী
  cy.get(':nth-child(4) > .css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  //৬। শেয়ারের পরিমান/অংশঃ*
  cy.get('input[name="sharePercentage"]')
  .type('50')
  //৭। পিতার নামঃ*
  //cy.get('input[name="fatherName"]').type('পিতা')
  //৮। মাতার নামঃ*
  cy.get('input[name="motherName"]')
  .type('মাতা')
  //৯। স্বামী/স্ত্রীর নামঃ
  cy.get('input[name="spouseName"]')
  .type('স্বামী/স্ত্রী')
  //১০। জন্মতারিখঃ*
  //১১। মোবাইল নম্বরঃ*
  cy.get('input[name="phoneNo"]')
  .type('01759784512')
  //১২। ই-মেইল নম্বরঃ*
  cy.get('input[name="email"]')
  .type('testemail@gmail.com')
  //১৩। জাতীয় পরিচয়পত্র নংঃ*
  cy.get('input[name="nidNo"]')
  .type('9025146532')
  //১৪। টিআইএন নম্বরঃ*
  cy.get('input[name="tinNo"]')
  .type('45693215')
  //১৫। পাসপোর্ট নম্বর (যদি থাকে)
  cy.get(':nth-child(11) > .css-0 > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  cy.get('input[name="passportNo"]')
  .type('12364555789058654')
  //প্রদানকারী কর্তৃপক্ষ*
  cy.get('input[name="passportProvider"]')
  .type('BD')
  //মেয়াদ (Passport Expiry Date) *
  cy.get(':nth-child(2) > .css-r85p5r > .css-1ftvhls > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(133) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)
  //পাসপোর্ট সংযুক্তি
  cy.get('.css-1ymhpay > :nth-child(2) > :nth-child(1) > .css-4boj8f > :nth-child(1) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/passport.jpg')
  cy.wait(2000)
  //১৬। পূর্বে কোন চাকুরীতে নিয়োজিত ছিলেন কিনা (থাকলে বিবরণসহ)
  //cy.get(':nth-child(12) > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //১৭। সর্বশেষ শিক্ষাগত যোগ্যতা*
  cy.get('input[name="latestEducationalQualification"]')
  .type('বিএসসি, বিএমএমপি, টিডাব্লিউএসটি')
  //স্কুল/কলেজ/বিশ্ববিদ্যালয় এর নাম*
  //স্কুল
  //cy.get(':nth-child(13) > .css-0 > .css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //কলেজ
  //cy.get(':nth-child(13) > .css-0 > .css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //বিশ্ববিদ্যালয়
  cy.get(':nth-child(3) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  cy.get('input[name="educationalInstituteName"]')
  .type('ইউনিভার্সিটি অফ আর্মি অটোমেশন')
  cy.wait(200)
  //১৮। বর্তমান ঠিকানাঃ
  //বিভাগঃ
  //জেলাঃ
  //থানাঃ
  //বাড়ি/বাসা/হোল্ডিংঃ
  //১৯।। স্থায়ী ঠিকানাঃ
  cy.get(':nth-child(16) > .css-17i6dfn > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  //বর্তমান ঠিকানার অনুরূপ
  //বিভাগঃ
  //জেলাঃ
  //থানাঃ
  //বাড়ি/বাসা/হোল্ডিংঃ
  //২০। স্থায়ী ঠিকানা ঢাকায় হলে প্রকৃত ঠিকানা (গ্রামের)
  //বিভাগঃ
  cy.get('#mui-component-select-dhakaPermanentDivisionId')
  .click()
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //জেলাঃ
  cy.get('#mui-component-select-dhakaPermanentDistrictId')
  .click()
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //থানাঃ
  cy.get('#mui-component-select-dhakaPermanentThanaId')
  .click()
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  //বাড়ি/বাসা/হোল্ডিংঃ
  cy.get('input[name="dhakaPermanentAddressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং')
  //২১। ব্যাংক একাউন্ট নম্বর ও ব্যাংকের নাম:
  //ব্যাংকের নামঃ
  //ব্রাঞ্চের নামঃ
  //একাউন্ট নাম্বারঃ
  //ব্যাংকের ঠিকানাঃ
  //বিভাগঃ
  //জেলাঃ
  //থানাঃ
  //বাড়ি/বাসা/হোল্ডিংঃ
  //২২। অন্য কোন দেশের পাসপোর্ট থাকলে তা সংযুক্ত করুন:
  cy.get('.css-16s43vg > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()

  //১ । পাসপোর্ট সংযুক্ত করুন
  cy.get('.css-1wlhoj4 > :nth-child(1) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/passport.jpg')
  cy.wait(200)
  //সীলমোহর
  cy.get(':nth-child(2) > :nth-child(1) > .css-6qdu9h > :nth-child(1) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/seals-and-signatures.jpg')
  cy.wait(200)
  //স্বাক্ষর *
  cy.get(':nth-child(5) > :nth-child(1) > .css-6qdu9h > :nth-child(1) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Signature_of_applicant.png')
  cy.wait(200)
})