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

  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(2) > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.get('[href="/supplier/supplier-registration/main-application"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(5000)
  cy.get('.MuiTabs-flexContainer > :nth-child(6)')
  .click()
  cy.wait(200)
  cy.get(':nth-child(2) > .person-list-button-sec > :nth-child(2)')
  .click()


  /* Image Upload */
  cy.get(':nth-child(1) > :nth-child(1) > .css-4boj8f > :nth-child(1) > .fileUploadBox > .fileNameContainer > .addFileBox > .uploadFileInput')
  .selectFile('cypress/fixtures/199353.jpg')
  cy.wait(2000)


  //২। পিতা/স্বামীর নাম ও ঠিকানা :
  //স্বামী
  //cy.get('.css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  //.click()
  //পিতা
  cy.get('.css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  //পিতার নাম:
  cy.get('input[name="supplierBiodataFatherHusbandParam.fullName"]')
  .type('আকবর বাদশাহ')
  //ঠিকানা :
  //বিভাগঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(4) > div.MuiBox-root.css-1q7njkh > div.formRow.MuiBox-root.css-0 > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //জেলাঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(4) > div.MuiBox-root.css-1q7njkh > div.formRow.MuiBox-root.css-0 > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //থানাঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(4) > div.MuiBox-root.css-1q7njkh > div.formRow.MuiBox-root.css-1q7njkh > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  //ফোন নম্বর:
  cy.get('input[name="supplierBiodataFatherHusbandParam.phoneNo"]')
  .type('01750671332')
  //বাড়ি/বাসা/হোল্ডিংঃ
  cy.get('input[name="supplierBiodataFatherHusbandParam.addressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং')

  //৩। মাতার নাম:
  cy.get('input[name="motherName"]')
  .type('মাতা')

  //৪। সশস্ত্র বাহিনীর অবসর প্রাপ্ত সদস্য হলে:
  cy.get(':nth-child(6) > .formRow > .css-16s43vg > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  //নম্বরঃ
  cy.get('input[name="retiredMilitaryNumber"]')
  .type('AO258745')
  //পদবীঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.contains('li.MuiMenuItem-root', 'কর্নেল')
  .click();
  //অবসরের তারিখঃ
  cy.get(':nth-child(2) > .css-r85p5r > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
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
  cy.get(':nth-child(7) > .formRow > .css-16s43vg > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()

  //কর্মরত
  cy.get(':nth-child(1) > .css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  //অবসরপ্রাপ্ত
  //cy.get(':nth-child(1) > .css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //নম্বরঃ
  cy.get('input[name="militarySpouseNumber"]')
  .type('TO256348')
  //পদবীঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(7) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.contains('li.MuiMenuItem-root', 'মেজর')
  .click();
  //সম্পর্কঃ

  //স্বামী
  /*cy.get(':nth-child(3) > .css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  cy.wait(200)*/
  //স্ত্রী
  cy.get(':nth-child(3) > .css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)

  //৬। জন্মস্থান:
  cy.get('input[name="birthPlace"]')
  .type('গোপালগঞ্জে')
  //জন্মতারিখঃ
  cy.get(':nth-child(2) > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(23) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //৭। বাণিজ্য প্রতিষ্ঠানের নাম:

  //৮। 
  //স্বত্বাধিকারী
  //cy.get('.css-1ltrdnm > .css-8v90jo > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  //.click()

  //ব্যবস্থাপনা পরিচালক
  cy.get('.css-1ltrdnm > .css-8v90jo > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()

  //ব্যবস্থাপনা পরিচালকের মোবাইল নম্বর*
  cy.get('input[name="companyMobileNo"]')
  .type('01750974665')

  //৯। প্রতিনিধিগণের (যদি থাকে) মোবাইল নম্বর:
  cy.get('input[name="phoneNo"]')
  .type('01798445566')

  //১০। প্রতিষ্ঠানের ই-মেইল এড্রেস:
  cy.get('input[name="companyEmail"]')
  .type('company@gmail.com')

  //১১। টিআইএন নম্বর (ব্যক্তিগত):
  cy.get('input[name="tinNo"]')
  .type('251436789')

  //১২। পাসপোর্ট নম্বর (যদি থাকে):
  cy.get(':nth-child(14) > .css-16s43vg > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  //পাসপোর্ট নম্বর:
  cy.get('input[name="passportNo"]')
  .type('3654218796')

  //প্রদানকারী কর্তৃপক্ষ:
  cy.get('input[name="passportProvider"]')
  .type('কর্তৃপক্ষ')

  //মেয়াদ (Passport Expiry Date)
  cy.get('.formRow.css-0 > .css-r85p5r > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(23) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //পাসপোর্ট সংযুক্তি
  cy.get(':nth-child(1) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/passport.jpg')
  cy.wait(200)

  //১৩। জাতীয় পরিচয়পত্র নং :*
  cy.get('input[name="nidNo"]')
  .type('9876985740')

  //১৪। (ক) ফার্মের সহিত সম্পর্ক:
  cy.get('input[name="supplierBiodataPhysicalDescriptionParam.relationshipWithFirm"]')
  .type('রিপ্রেজেন্টেটিভ')

  //(খ) পদবী:
  //গ) বৈবাহিক অবস্থান:
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(16) > div:nth-child(2) > div:nth-child(1) > div > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.contains('li.MuiMenuItem-root', 'বিবাহিত')
  .click();
  //(ঘ) উচ্চতা: (সে:মি:)
  cy.get('input[name="supplierBiodataPhysicalDescriptionParam.height"]')
  .type('178')

  //(ঙ) ওজন:
  cy.get('input[name="supplierBiodataPhysicalDescriptionParam.weight"]')
  .type('76')

  //(চ) চোখের রং:
  cy.get('input[name="supplierBiodataPhysicalDescriptionParam.eyeColor"]')
  .type('কালো')

  //(ছ) গায়ের রং:
  cy.get('input[name="supplierBiodataPhysicalDescriptionParam.color"]')
  .type('শ্যামল')

  //(জ) গঠন:
  cy.get('input[name="supplierBiodataPhysicalDescriptionParam.physicalStructure"]')
  .type('ভালো গঠন')

  //১৫। দৃষ্টি গোচর সনাক্তকরণ চিহ্ন :
  cy.get('input[name="supplierBiodataPhysicalDescriptionParam.identifyMark"]')
  .type('দৃষ্টি')

  //১৬। ধর্ম:
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(18) > div > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.contains('li.MuiMenuItem-root', 'ইসলাম')
  .click();

  //১৭। সম্প্রদায়:
  cy.get('input[name="religionCommunity"]')
  .type('সম্প্রদায়')

  //১৮। জাতীয়তা:
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(20) > div > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.contains('li.MuiMenuItem-root', 'বাংলাদেশী')
  .click();
  
  //১৯। যদি দেশভুক্ত হইয়া থাকে তবে পূর্ববর্তী জাতীয়তা:
  /*cy.get('.css-0 > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(21) > div > div.MuiBox-root.css-164r41r > div > div > div > div')
  .click()
  cy.contains('li.MuiMenuItem-root', 'বাংলাদেশী')*/

  //*****cy.get('input[]').type('')*****//

  //২০। শিক্ষাগত যোগ্যতা:
  cy.get('input[name="latestEducationalQualification"]')
  .type('বিএসসি অনার্স ')

  //২১। স্থায়ী ঠিকানা
  //বিভাগঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(23) > div:nth-child(2) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //জেলাঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(23) > div:nth-child(2) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //থানাঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(23) > div:nth-child(3) > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  //ফোন নম্বর:
  cy.get('input[name="permanentAddressPhoneNo"]')
  .type('01750986532')
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('input[name="permanentAddressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং');


  //২২। বর্তমান ঠিকানাঃ
  //স্থায়ী ঠিকানার অনুরূপ
  cy.get(':nth-child(24) > .css-17i6dfn > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  //বিভাগঃ
  /*cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //জেলাঃ
  cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //থানাঃ
  cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  //ফোন নম্বর:
  cy.get('input[]').type('')
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('input[]').type('বাড়ি/বাসা/হোল্ডিং');*/

  //২৩। স্থায়ী ঠিকানা ঢাকায় হলে প্রকৃত ঠিকানা (গ্রামের) :
  cy.get(':nth-child(25) > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  //বিভাগঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(25) > div.MuiBox-root.css-164r41r > div > div:nth-child(1) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //জেলাঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(25) > div.MuiBox-root.css-164r41r > div > div:nth-child(1) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //থানাঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(25) > div.MuiBox-root.css-164r41r > div > div:nth-child(2) > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  //ফোন নম্বর:
  cy.get('input[name="dhakaAddressPhoneNo"]')
  .type('01765987423')
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('input[name="dhakaPermanentAddressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং');

  //২৪। যে ব্যাংকে টাকা লেনদেন করা হয় তাহার নাম ও ব্যাংক একাউন্ট নম্বর:
  //ব্যাংকের নাম:
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(26) > div.MuiBox-root.css-12oq5ku > div:nth-child(2) > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'শাহজালাল ইসলামী ব্যাংক লি')
  .click();
  //একাউন্টের নাম:
  cy.get('input[name="supplierPersonnelBankAccountParams.0.bankAccountName"]')
  .type('kalam')
  //ব্রাঞ্চের নাম :
  cy.get('input[name="supplierPersonnelBankAccountParams.0.bankBranchName"]')
  .type('ব্রাঞ্চ')
  //একাউন্ট নম্বর:
  cy.get('input[name="supplierPersonnelBankAccountParams.0.bankAccountNo"]')
  .type('36521495135745685')

  //ব্রাঞ্চের ঠিকানা :
  //বিভাগঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(26) > div.MuiBox-root.css-12oq5ku > div:nth-child(5) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //জেলাঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(26) > div.MuiBox-root.css-12oq5ku > div:nth-child(5) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //থানাঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(26) > div.MuiBox-root.css-12oq5ku > div:nth-child(6) > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('input[name="supplierPersonnelBankAccountParams.0.bankAddressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং');

  //২৫। সংঘ বা অন্য কোনো সামাজিক /সাহিত্যিক প্রতিষ্ঠানের সদস্য/ সদস্যা থাকিলে তাহার বিবরণ :
  cy.get(':nth-child(27) > .formRow > .css-6ex3lx > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()

  //ক। প্রতিষ্ঠানের নামঃ
  cy.get('input[name="supplierBiodataMemberOfAssociationParams.0.organisationName"]')
  .type('কৃষ্টি লিঃ')

  //খ। যে শাখায় নিবন্ধিত তাহার নামঃ
  cy.get('input[name="supplierBiodataMemberOfAssociationParams.0.organisationBranch"]')
  .type('কৃষ্টি লিঃ, গৌরীপুর')

  //গ। সদস্য/সদস্যা সংখ্যা যদি থাকেঃ
  cy.get('input[name="supplierBiodataMemberOfAssociationParams.0.numberOfMember"]')
  .type('৫৮৭')

  //ঘ। যোগদানের তারিখঃ
  cy.get('.css-1840zz > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
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
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)


  //২৬। অত্র বাণিজ্য প্রতিষ্ঠানে যোগদানের পূর্বে পেশা/চাকুরীর বিবরণ
  cy.get('input[name="previousJobDescription"]')
  .type('ম্যানেজার')

  //২৭। চাকুরীতে যোগদানের তারিখঃ
  cy.get(':nth-child(29) > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
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
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //২৮। সামরিক/বেসামরিক আদালতে বিচার হইয়া থাকিলে অথবা অভিযুক্ত হইলে তাহার বিবরণ:
  //কোর্ট টাইপ
  //ক। অপরাধঃ
  //খ। তারিখঃ
  //গ। অপরাধ সংগঠনের স্থানঃ
  //২৯। দোষী সাব্যস্ত হইয়া থাকিলে, শাস্তির বিবরণ:

  //৩০। সশস্ত্র বাহিনীতে কোন আত্মীয় নিয়োজিত থাকিলে তাহার বিবরণ:
  cy.get(':nth-child(31) > .formRow > .css-6ex3lx > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()

  //ক। পদমর্যাদাঃ
  cy.get('input[name="supplierBiodataAcquaintedPersonParams.0.rank"]')
  .type('লেঃ কর্নেল')

  //খ। নামঃ
  cy.get('input[name="supplierBiodataAcquaintedPersonParams.0.name"]')
  .type('মোহাম্মদ মোসলেহ উদ্দিন')

  //গ। সম্পর্কঃ
  cy.get('input[name="supplierBiodataAcquaintedPersonParams.0.relationship"]')
  .type('ছেলে')

  //ঘ। কোর/রেজিমেন্ট ইত্যাদির নামঃ
  cy.get('input[name="supplierBiodataAcquaintedPersonParams.0.coreRegimentNames"]')
  .type('আর্মি এডুকেশন কোর')

  //ঙ। বর্তমান ঠিকানাঃ
  //বিভাগঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(31) > div.MuiBox-root.css-12oq5ku > div:nth-child(7) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //জেলাঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(31) > div.MuiBox-root.css-12oq5ku > div:nth-child(7) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //থানাঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(31) > div.MuiBox-root.css-12oq5ku > div:nth-child(8) > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  //ফোন নম্বর:
  cy.get('input[name="supplierBiodataAcquaintedPersonParams.0.phoneNo"]')
  .type('01985631458')
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('input[name="supplierBiodataAcquaintedPersonParams.0.addressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং');

  //৩১। পুরুষ হইলে স্ত্রীর নাম এবং মহিলা হলে স্বামীর নাম:
  cy.get(':nth-child(32) > .css-r85p5r > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  //পুরুষ
  cy.get(':nth-child(32) > :nth-child(2) > :nth-child(1) > .css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()

  //মহিলা
  /*cy.get(':nth-child(32) > :nth-child(2) > :nth-child(1) > .css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()*/

  //ক। পুরা নামঃ
  cy.get('input[name="supplierBiodataSpouseParam.fullName"]')
  .type('তৃষা')
  //খ। ডাক নামঃ
  cy.get('input[name="supplierBiodataSpouseParam.nickName"]')
  .type('তৃষা')
  //গ। জন্ম তারিখঃ
  cy.get(':nth-child(32) > :nth-child(2) > .formRow > :nth-child(1) > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(87) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  // জন্মস্থানঃ
  cy.get('input[name="supplierBiodataSpouseParam.birthPlace"]')
  .type('গোপালগঞ্জে')

  //ঘ। জাতীয়তাঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(32) > div.MuiBox-root.css-0 > div:nth-child(4) > div > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'বাংলাদেশী')
  .click();

  //ঙ। ধর্মঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(32) > div.MuiBox-root.css-0 > div:nth-child(5) > div > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ইসলাম')
  .click();

  //চ। পেশাঃ
  cy.get('input[name="supplierBiodataSpouseParam.occupation"]')
  .type('গৃহিনী')
  
  //ছ। যে অফিসে চাকুরীরত তাহার নামঃ
  cy.get('input[name="supplierBiodataSpouseParam.companyName"]')
  .type('হোম অফিস')

  //৩২। শশুরের নাম ও ঠিকানাঃ
  cy.get(':nth-child(33) > .css-r85p5r > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  //নামঃ
  cy.get('input[name="supplierBiodataFatherInLawParam.fullName"]')
  .type('আবির আলম')
  //বিভাগঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(33) > div.MuiBox-root.css-0 > div:nth-child(2) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //জেলাঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(33) > div.MuiBox-root.css-0 > div:nth-child(2) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //থানাঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(33) > div.MuiBox-root.css-0 > div:nth-child(3) > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  //ফোন নম্বর:
  cy.get('input[name="supplierBiodataFatherInLawParam.phoneNo"]')
  .type('01536659874')
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('input[name="supplierBiodataFatherInLawParam.addressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং');

  //আমি এই মর্মে শপথ করিতেছি যে, উপরে যে সমস্ত বিবরণ/তথ্য প্রদান করা হইল তাহা আমার জ্ঞান ও বিশ্বাস মতে সত্য। 
  //অধিকন্তু, ইহাও নিশ্চয়তা প্রদান করিতেছি যে, যদি এই সমস্ত বিবরন/তথ্যের কোনটি মিথ্যা প্রমানিত হয় অথবা কোন তথ্য 
  //পুরাপুরি সরবরাহ করা হয় নাই বলিয়া বিবেচিত হয়, তবে আইনতঃ দন্ডনীয় হইতে বাধ্য থাকিবে।
  cy.get(':nth-child(34) > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()

  //স্বাক্ষর
  cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .css-1ou7viv > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/representative.jpg')
  cy.wait(200)

  //সীলমোহর
  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .css-1ou7viv > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/seals-and-signatures.jpg')
  cy.wait(200)

  //পুরা নাম:
})