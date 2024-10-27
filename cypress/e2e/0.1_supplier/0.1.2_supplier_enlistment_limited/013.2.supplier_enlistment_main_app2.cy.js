/// <reference types="cypress"/>

import 'cypress-mochawesome-reporter/register';
import SupplierCy, { supplierUser } from "../../../Pages/Supplier/Supplier.cy"

it('Supplier Enlistment - Proprietorship', function() {
  cy.visit('http://testing.edp.gov.bd/')
  //Change User Name
  /*cy.get('input[name="username"]')
  .type('alnoman001_single')*/
  SupplierCy.supplierUserforLimited.supplierUserName()
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
  cy.get('[href="/supplier/supplier-registration/main-application"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
  cy.wait(5000)
  cy.get('.MuiTabs-flexContainer > :nth-child(3)')
  .click()


  //২। যদি নাম পরিবর্তন করা হইয়া থাকে তবে পুরানো নাম উল্লেখপূর্বক উহা পরিবর্তন করিবার কারণঃ
  /*cy.get(':nth-child(2) > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //পুরানো নামঃ *
  cy.get('input[name="oldFullName"]').type('')
  //পরিবর্তন করিবার কারণঃ *
  cy.get('input[name="reasonOfNameChange"]').type('')
  //সংযুক্তিঃ
  cy.get('.addFileBox')
  .selectFile('cypress\\fixtures\\witness_signature.png')
  */
  
  //৩। পিতার নামঃ *
  cy.get('input[name="fatherName"]')
  .type('কুংচুফুয়া')
  
  //৪। সংস্থার নামঃ
  
  //৫। সংস্থার পদমর্যাদাঃ *
  cy.get('input[name="designation"]')
  .type('চেয়ারম্যান')
  
  //৬। ব্যবসা আরম্ভ করার তারিখঃ *
  cy.get(':nth-child(5) > .css-r85p5r > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
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

  //৭। জন্মস্থানঃ *
  cy.get('input[name="birthPlace"]')
  .type('গোপালগঞ্জ')

  //জন্ম তারিখঃ *
  cy.get(':nth-child(6) > .css-r85p5r > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(83) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //৮। উচ্চতা (সেন্টিমিটার)
  cy.get('input[name="height"]')
  .type('178 ')

  //৯। ওজন (কেজি)
  cy.get('input[name="weight"]')
  .type('75')

  //১০। রং বা বর্ণ
  cy.get('input[name="color"]')
  .type('শ্যামল')

  //১১। চক্ষুর রং
  cy.get('input[name="eyeColor"]')
  .type('কালো')

  //১২। শনাক্ত করার জন্য
  cy.get('input[name="identifyMark"]')
  .type('৬২ তিল')

  //১৩। ধর্ম *
  cy.get('#mui-component-select-religion')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ইসলাম')
  .click();

  //১৪। জাতীয়তাঃ *
  cy.get('#mui-component-select-nationality')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'বাংলাদেশী')
  .click();

  //১৫। পূর্বের জাতীয়তা (যদি থাকে)
  /*cy.get('.css-sprzcj > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'বাংলাদেশী')
  .click();
  */
  //১৬। স্থায়ী ঠিকানাঃ
  //ফোন নম্বরঃ*
  cy.get('input[name="permanentAddress.phoneNo"]')
  .type('01750671332')
  cy.wait(200)
  //১৭। বর্তমান ঠিকানাঃ
  cy.get('.css-bcgk97 > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()

  //বিভাগঃ*
  //জেলাঃ*
  //থানাঃ*
  //ফোন নম্বরঃ (পরবর্তী যোগাযোগের জন্য এই ফোন নম্বরটি ব্যবহৃত হবে)*
  cy.get('input[name="presentAddress.phoneNo"]')
  .type('01750671332')

  //১৮ ও ১৯। লেনদেনকারী ব্যাংকের বিবরণ   এবং   ব্যাংকে যে ব্যক্তি বা কর্মচারীর নামে হিসাব রাখা হয় তাহার বিবরণঃ

  //২০। সমিতি, সামাজিক/সাহিত্যিক/রাজনৈতিক/ক্লাব/সংস্থার সদস্য হইলে
  //cy.get('.supplier-owner-member > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  //.click()
  //১ ।   সমিতি, সামাজিক/সাহিত্যিক/রাজনৈতিক/ক্লাব/সংস্থার বিবরণঃ
  //সামাজিক
  /*cy.get('.css-1rzmcj3 > .MuiBox-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  //সাহিত্যিক
  cy.get(':nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  //রাজনৈতিক
  cy.get(':nth-child(3) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  //ক্লাব
  cy.get(':nth-child(4) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  //সংস্থা
  cy.get(':nth-child(5) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  //সংস্থার নামঃ *
  cy.get('input[name="supplierOwnerMemberOfAssociationParamSet.0.organisationName"]')
  .type('সংস্থাসংস্থাসংস্থা')
  //কোন শাখার সহিত রেজিস্ট্রিকৃতঃ
  cy.get('input[name="supplierOwnerMemberOfAssociationParamSet.0.organisationBranch"]')
  .type('BTC শাখা')
  //সদস্য সংখ্যাঃ
  cy.get('input[name="supplierOwnerMemberOfAssociationParamSet.0.numberOfMember"]')
  .type('4000')*/
  //সদস্য চুক্তির তারিখঃ *

  //রেজিস্ট্রির তারিখ (প্রযোজ্য হলে)

  //২১। এই ফর্ম পূরণের তিন বৎসর পূর্বের পেশা বা চাকুরীর বর্ণনাঃ
  cy.get('#simple-tabpanel-owner-or-supplier-information > div > form > div > div.formColumn.centerAlignItems.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-6gs9hh > div.MuiBox-root.css-1mflskp > div.jodit-react-container > div > div.jodit-workplace')
  .click()
  .type(' তিন বৎসর পূর্বের পেশা বা চাকুরীর বর্ণনা')

  //২২। বর্তমান পদে যোগদান করার তারিখঃ *
  cy.get('.css-1840zz > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
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

  //২৩। কোন আদালতে অভিযুক্ত বা দোষী সাব্যস্থ হইয়া থাকিলে উহার বিবরণঃ

  //২৪। অনাত্মীয় তিনজন বিশিষ্ট ব্যক্তির নাম ও তাহাদের বিস্তারিত ঠিকানা ও ফোন নং, যাহারা বিগত পাঁচ বৎসর যাবৎ আপনাকে জানেনঃ

  //২৫। আপনার নিজস্ব, স্ত্রী, পুত্র ও কন্যাদের নামে সম্পত্তির, শেয়ার এবং নিরপত্তার বিবরণঃ

  //২৬। আবেদনকারী পুরুষ হইলে স্ত্রীর এবং মহিলা হলে স্বামীর বিবরণঃ
  //(ক) পুরা নামঃ
  cy.get('input[name="supplierOwnerSpouseParam.fullName"]')
  .type('বৃনিতা লিলি')
  //(খ) ডাকনাম (যদি থাকে)
  cy.get('input[name="supplierOwnerSpouseParam.nickName"]')
  .type('বৃনিতা')
  //(গ) স্থায়ী ঠিকানাঃ
  //বিভাগঃ
  cy.get('#simple-tabpanel-owner-or-supplier-information > div > form > div > div.formColumn.centerAlignItems.MuiBox-root.css-0 > div:nth-child(3) > div > div:nth-child(5) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //জেলাঃ
  cy.get('#simple-tabpanel-owner-or-supplier-information > div > form > div > div.formColumn.centerAlignItems.MuiBox-root.css-0 > div:nth-child(3) > div > div:nth-child(5) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //থানাঃ
  cy.get('#simple-tabpanel-owner-or-supplier-information > div > form > div > div.formColumn.centerAlignItems.MuiBox-root.css-0 > div:nth-child(3) > div > div:nth-child(6) > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('input[name="supplierOwnerSpouseParam.permanentAddress.addressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং');

  //বর্তমান ঠিকানাঃ
  // স্থায়ী ঠিকানার অনুরূপ ?
  cy.get('.css-94fa8i > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  //বিভাগঃ
  //জেলাঃ
  //থানাঃ
  //বাড়ি/বাসা/হোল্ডিংঃ

  //(ঘ) জন্মস্থানঃ
  cy.get('input[name="supplierOwnerSpouseParam.birthPlace"]')
  .type('গোপালগঞ্জে')
  //জন্ম তারিখঃ
  cy.get(':nth-child(10) > .css-r85p5r > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(73) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200) 
  //(ঙ) জাতীয়তাঃ
  cy.get('#simple-tabpanel-owner-or-supplier-information > div > form > div > div.formColumn.centerAlignItems.MuiBox-root.css-0 > div:nth-child(3) > div > div:nth-child(11) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'বাংলাদেশী')
  .click();
  //(চ) ধর্মঃ
  cy.get('#simple-tabpanel-owner-or-supplier-information > div > form > div > div.formColumn.centerAlignItems.MuiBox-root.css-0 > div:nth-child(3) > div > div:nth-child(11) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ইসলাম')
  .click();
  //(ছ) কোথায় নিয়োজিতঃ
  cy.get('input[name="supplierOwnerSpouseParam.appointedAt"]')
  .type('ঢাকায়')
  //(জ) পূর্ব বাসস্থান এর ঠিকানাঃ
  //বিভাগঃ
  cy.get('#simple-tabpanel-owner-or-supplier-information > div > form > div > div.formColumn.centerAlignItems.MuiBox-root.css-0 > div:nth-child(3) > div > div:nth-child(14) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //জেলাঃ
  cy.get('#simple-tabpanel-owner-or-supplier-information > div > form > div > div.formColumn.centerAlignItems.MuiBox-root.css-0 > div:nth-child(3) > div > div:nth-child(14) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  //থানাঃ
  cy.get('#simple-tabpanel-owner-or-supplier-information > div > form > div > div.formColumn.centerAlignItems.MuiBox-root.css-0 > div:nth-child(3) > div > div:nth-child(15) > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('[name="supplierOwnerSpouseParam.previousAddress.addressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং');
  //মেয়াদ শুরুর তারিখঃ
  cy.get(':nth-child(16) > :nth-child(1) > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(73) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200) 
  //মেয়াদ শেষের তারিখঃ
  cy.get(':nth-child(16) > :nth-child(2) > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(103) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200) 
  //(ঝ) বিবাহ সম্পাদনের স্থানঃ
  cy.get('input[name="supplierOwnerSpouseParam.marriageLocation"]')
  .type('ঢাকায়')
  //তারিখঃ
  cy.get(':nth-child(17) > .css-r85p5r > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(83) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200) 
})