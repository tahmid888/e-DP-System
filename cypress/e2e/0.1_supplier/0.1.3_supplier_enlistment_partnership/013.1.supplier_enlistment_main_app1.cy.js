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

  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(2) > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(500)
  cy.get('[href="/supplier/supplier-registration/main-application"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(500)
  cy.get('.css-19i8qlo > .MuiButtonBase-root')
  .click()
  cy.wait(1000)


  //আপনি কি গ্রুপ ৪ এবং ১০ সহ আবেদন করতে ইচ্ছুক?
  //হ্যাঁ
  cy.get('.css-1kfhhld > .MuiBox-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  //না By Default

  //১।*
  //সংস্থা
  //cy.get('.css-6gs9hh > :nth-child(2) > .css-8v90jo > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //cy.wait(500)
  //সরবরাহকারী
  //cy.get('.css-6gs9hh > :nth-child(2) > .css-8v90jo > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root').click()
  //cy.wait(500)
  
  //২। প্রধান কার্যালয়ের ঠিকানাঃ (ট্রেড লাইসেন্স মোতাবেক)
  //বিভাগঃ*
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(5) > div > div > div:nth-child(2) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //জেলাঃ*
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(5) > div > div > div:nth-child(2) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //থানাঃ*
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(5) > div > div > div:nth-child(3) > div.MuiBox-root.css-11ze7cv > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  cy.wait(200)
  //বাড়ি/বাসা/হোল্ডিংঃ*
  cy.get('input[name="supplierOrganizationAddressParam.addressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং');
  cy.wait(200)
  
  
  //৩। টেলিফোন নম্বরঃ
  cy.get('input[name="supplierOrganizationAddressParam.telephone"]')
  .type('01750671332')
  cy.wait(200)
  //মোবাইল নম্বরঃ
  cy.get('input[name="supplierOrganizationAddressParam.phoneNo"]')
  .type('01750671332')
  cy.wait(200)

  //৪। শাখা থাকিলে তাহার ঠিকানা
  cy.get('.css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  cy.get('input[name="organizationBranchAddress"]')
  .type('প্রস্তাবিত শাখার পূর্ণাঙ্গ ঠিকানা')
  cy.wait(200)

  //৫। কি কি বিষয়ে তালিকাভুক্তি হতে ইচ্ছুক: *
  //(ক)
  cy.get('[name="supplierOrganizationEnlistmentParams.0.itemDescription"]')
  .type('অস্ত্র সরবরাহ')
  cy.wait(200)
  cy.get('.subFormContainer > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root > .MuiButton-icon > [data-testid="AddIcon"]')
  .click()
  cy.wait(200)
  //(খ)
  cy.get('[name="supplierOrganizationEnlistmentParams.1.itemDescription"]')
  .type('পণ্য সরবরাহ')
  cy.wait(200)

  //৬ । ব্যাংকের তথ্যাদি:
  //ব্যাংকের নামঃ *
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(8) > div.subFormContainer.MuiBox-root.css-uewl2b > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(2) > div.MuiBox-root.css-11ze7cv > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'মেসার্স আহছানিয়া ইন্টারন্যাশনাল')
  .click();
  cy.wait(200)
  //ব্রাঞ্চের নামঃ *
  cy.get('[name="supplierOrganizationBankAccountParams.0.bankBranchName"]')
  .type('ইউনিভার্সাল টাইপ ব্রাঞ্চ')
  cy.wait(200)
  //একাউন্ট হোল্ডারের নামঃ *
  cy.get('[name="supplierOrganizationBankAccountParams.0.bankAccountName"]')
  .type('ইউনিভার্সাল')
  cy.wait(200)
  //একাউন্ট নাম্বারঃ *
  cy.get('[name="supplierOrganizationBankAccountParams.0.bankAccountNo"]')
  .type('7758 932 125 5548')
  cy.wait(200)
  //ব্রাঞ্চের ঠিকানাঃ
  //বিভাগঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(8) > div.subFormContainer.MuiBox-root.css-uewl2b > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(5) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //জেলাঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(8) > div.subFormContainer.MuiBox-root.css-uewl2b > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(5) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //থানাঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(8) > div.subFormContainer.MuiBox-root.css-uewl2b > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(6) > div.MuiBox-root.css-11ze7cv > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  cy.wait(200)
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('[name="supplierOrganizationBankAccountParams.0.addressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং');
  cy.wait(200)

  //৭। যে ব্যক্তি বা কর্মকর্তার নামে হিসাব রাখা হয় তার সহিত সংস্থা/সরবরাহকারী সম্পর্ক কি?
  cy.get('[name="supplierOrganizationBankAccountParams.0.bankAccountHolderRelationWithOrganization"]')
  .type('মালিক');
  cy.wait(200)

  //৮। বাংলাদেশ সরকারের আনুগত্য স্বীকার করেন কি? নাগরিকতার প্রমানপত্র সংযুক্ত করুন*
  cy.get('.css-s82cf1 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/citizenship_certificate.jpeg')
  cy.wait(200)

  //৯। আপনার সংস্থা কি ফ্যাক্টরি অ্যাক্ট অনুসারে রেজিষ্ট্রিকৃত ?
  //হ্যাঁ
  cy.get(':nth-child(10) > .css-8v90jo > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  //না By Default

  //১০। আপনার সংস্থা কি ১৯১৩ সালের কোম্পানি অ্যাক্ট অনুসারে রেজিষ্ট্রিকৃত ?
  //হ্যাঁ
  cy.get(':nth-child(11) > .css-8v90jo > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  //না By Default

  //১১। আপনার সংস্থা কি ১৯৩২ সালের পার্টনারশিপ অ্যাক্ট অনুসারে রেজিষ্ট্রিকৃত ?
  //হ্যাঁ
  cy.get(':nth-child(12) > .css-8v90jo > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  //না By Default

  /*১২ । আপনার সংস্থার পক্ষে দলিলপত্র দস্তখত করার অনুমোদিত দুই ব্যক্তির নাম ও পদবী তৎপর ওই ব্যক্তিদের সত্যায়িত তিনটি 
  দস্তখত: (তাহাদেরই নামে পরিচয়পত্র প্রদান করা হইবে)
  অনুমোদিত দুই ব্যক্তির নাম যুক্ত করার জন্য ’প্রতিনিধি যুক্ত করুন ’ ট্যাব হতে পরবর্তীতে পূরণ করুন*/

  //১৩। আয়কর নিবন্ধকের নং: *
  cy.get('input[name="tinNo"]')
  .type('225187978687')
  cy.wait(200)

  //আয়করের প্রমাণপত্র সংযুক্ত করুন: *
  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Income_Tax_Certificate.jpg')
  cy.wait(200)

  //১৪। আপনার স্থাবর/অস্থাবর সম্পত্তির পূর্ণ বিবরণ: (কপি সংযুক্ত করুন)
  cy.get(':nth-child(1) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/immovable_property.jpg')
  cy.wait(200)
  
  //১৫। *
  //(ক) আপনার সংস্থা যদি ব্যক্তিগত মালিকানা (এক ব্যক্তির নিবন্ধ) থাকে তাহার বিবরণঃ
  /*
  cy.get('.css-16s43vg > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  //মালিকের নামঃ
  //cy.get('input[]').type('')
  cy.get('input[name="proprietorshipOwnerParam.name"]')
  .type('মালিক')
  cy.wait(200)
  //বিভাগঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(15) > div.subFormContainer.MuiBox-root.css-wjsf6v > div > div:nth-child(3) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //জেলাঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(15) > div.subFormContainer.MuiBox-root.css-wjsf6v > div > div:nth-child(3) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //থানাঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(15) > div.subFormContainer.MuiBox-root.css-wjsf6v > div > div:nth-child(4) > div.MuiBox-root.css-11ze7cv > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  cy.wait(200)
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('[name="proprietorshipOwnerParam.addressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং');
  cy.wait(200)


  //(খ) উক্ত ১৫ (ক) অনুচ্ছেদে বর্ণিত ব্যক্তি যদি অন্য কোন সংস্থার সাথে জড়িত থাকেন তবে তাহার বর্ণনাঃ
  cy.get(':nth-child(3) > .formRow > .css-1e8ytuy > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  //সংস্থার নামঃ
  cy.get('[name="proprietorshipOwnerOtherOrganizationParams.0.organisationName"]')
  .type('সংস্থা')
  cy.wait(200)
  //পূর্ণ ঠিকানাঃ
  //বিভাগঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(15) > div:nth-child(3) > div.subFormContainer.MuiBox-root.css-wjsf6v > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(3) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //জেলাঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(15) > div:nth-child(3) > div.subFormContainer.MuiBox-root.css-wjsf6v > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(3) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //থানাঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(15) > div:nth-child(3) > div.subFormContainer.MuiBox-root.css-wjsf6v > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(4) > div.MuiBox-root.css-11ze7cv > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  cy.wait(200)
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('[name="proprietorshipOwnerOtherOrganizationParams.0.addressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং');
  cy.wait(200)

  //(গ) ১৫ (ক) অনুচ্ছেদে বর্ণিত কোন ব্যক্তি অথবা পরিবারের কোন সদস্য অন্য কোন সংস্থার সহিত জড়িত থাকিলে তাহার বিবরণঃ
  cy.get(':nth-child(4) > .formRow > .css-1e8ytuy > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  //সংস্থার নামঃ
  cy.get('[name="proprietorshipOwnerFamilyOtherOrganizationParams.0.organisationName"]')
  .type('সংস্থা সংস্থা সংস্থা');
  cy.wait(200)
  //পূর্ণ ঠিকানাঃ
  //বিভাগঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(15) > div:nth-child(4) > div.subFormContainer.MuiBox-root.css-wjsf6v > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(3) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //জেলাঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(15) > div:nth-child(4) > div.subFormContainer.MuiBox-root.css-wjsf6v > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(3) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //থানাঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(15) > div:nth-child(4) > div.subFormContainer.MuiBox-root.css-wjsf6v > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(4) > div.MuiBox-root.css-11ze7cv > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  cy.wait(200)
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('[name="proprietorshipOwnerFamilyOtherOrganizationParams.0.addressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং');
  cy.wait(200)
  //আত্মীয়তা
  cy.get('[name="proprietorshipOwnerFamilyOtherOrganizationParams.0.relationship"]')
  .type('আত্মীয়ত');
  cy.wait(200)

  //(ঘ) উক্ত ১৫ (ক) অনুচ্ছেদে বর্ণিত ব্যক্তি যদি কোন সংস্থার অংশীদার/শেয়ার হোল্ডার/পরিচালক/অর্থ সংস্থাপনকারী হিসাবে থাকেন তবে তাহার ঠিকানাঃ
  cy.get(':nth-child(5) > .formRow > .css-1e8ytuy > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  
  //সংস্থার নামঃ
  cy.get('[name="proprietorshipOwnerOtherOrganizationPartnershipParams.0.organisationName"]')
  .type('সংস্থা সংস্থা সংস্থা সংস্থা');
  cy.wait(200)
  //পূর্ণ ঠিকানাঃ
  //বিভাগঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(15) > div:nth-child(5) > div.subFormContainer.MuiBox-root.css-wjsf6v > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(3) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //জেলাঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(15) > div:nth-child(5) > div.subFormContainer.MuiBox-root.css-wjsf6v > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(3) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //থানাঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(15) > div:nth-child(5) > div.subFormContainer.MuiBox-root.css-wjsf6v > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(4) > div.MuiBox-root.css-11ze7cv > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  cy.wait(200)
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('[name="proprietorshipOwnerOtherOrganizationPartnershipParams.0.addressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং');
  cy.wait(200)
  //আত্মীয়তা
  cy.get('[name="proprietorshipOwnerOtherOrganizationPartnershipParams.0.relationship"]')
  .type('আত্মীয়ত');
  cy.wait(200)


  //(ঙ) সংস্থার দুই বা ততোধিক অংশীদার থাকিলে উহার পূর্ণ বিবরণ এবং অংশিতা দলিলের নকল সংযুক্ত করুন:
  //(চ) সংস্থার দায় সীমিত হইলে মেমোরান্ডাম এন্ড আর্টিকেলস অব এ্যাসোসিয়েশন এবং সার্টিফিকেট অব ইনকরপোরেশন সংযুক্ত করুন:

  //(ছ) উক্ত ১৫ (ক) অনুচ্ছেদে বর্ণিত ব্যক্তি যদি অন্য কোন সংস্থার মালিক/অংশীদার হইয়া থাকেন তাহার বিবরণ:
  cy.get(':nth-child(8) > .formRow > .css-1e8ytuy > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  //সংস্থার মালিক
  //cy.get('.css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //সংস্থার অংশীদার
  //cy.get('.css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //সংস্থার নামঃ
  cy.get('input[name="partnershipOtherOrganizationParams.0.organisationName"]')
  .type('সংস্থা সংস্থা সংস্থা সংস্থা')
  cy.wait(200)
  //পূর্ণ ঠিকানা:
  //বিভাগঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(15) > div:nth-child(8) > div.subFormContainer.MuiBox-root.css-wjsf6v > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(4) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //জেলাঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(15) > div:nth-child(8) > div.subFormContainer.MuiBox-root.css-wjsf6v > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(4) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //থানাঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(15) > div:nth-child(8) > div.subFormContainer.MuiBox-root.css-wjsf6v > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(5) > div.MuiBox-root.css-11ze7cv > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  cy.wait(200)
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('[name="proprietorshipOwnerOtherOrganizationPartnershipParams.0.addressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং');
  cy.wait(200)

  //(জ) নির্বাহী পরিচালক/ ব্যবস্থাপনা সংগঠন/গৃহ পরিচালকদের নাম ও বাংলাদেশের স্থায়ী ঠিকানা:
  cy.get(':nth-child(9) > .formRow > .css-1e8ytuy > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  //নির্বাহী পরিচালক
  //cy.get('.css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  //ব্যবস্থাপনা সংগঠন
  //cy.get('.css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //গৃহ পরিচালক
  //cy.get(':nth-child(3) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //সংস্থার নামঃ
  cy.get('input[name="organizationExecutivesParams.0.organisationName"]')
  .type('সংস্থা সংস্থা সংস্থা সংস্থা সংস্থা')
  cy.wait(200)
  //পূর্ণ ঠিকানা:
  //বিভাগঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(15) > div:nth-child(9) > div.subFormContainer.MuiBox-root.css-wjsf6v > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(4) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //জেলাঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(15) > div:nth-child(9) > div.subFormContainer.MuiBox-root.css-wjsf6v > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(4) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //থানাঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div:nth-child(15) > div:nth-child(9) > div.subFormContainer.MuiBox-root.css-wjsf6v > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(5) > div.MuiBox-root.css-11ze7cv > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  cy.wait(200)
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('[name="organizationExecutivesParams.0.addressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং');
  cy.wait(200)
  */

  /*
  //১৬। এই সংস্থা কি ?
  //সংভৃতক (Indenting Firm)
  cy.get(':nth-child(17) > .css-1ltrdnm > .css-8v90jo > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  //(১) শুধু নিজ নামে বা খাতে আমদানী করে ?
  //হ্যাঁ
  cy.get(':nth-child(16) > .css-0 > :nth-child(1) > .css-8v90jo > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  //না
  //cy.get(':nth-child(16) > .css-0 > :nth-child(1) > .css-8v90jo > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').first().check()
  
  //(২) শুধু মাত্র সংভৃতক হিসাবে কাজ করে ?
  //হ্যাঁ
  cy.get('.css-0 > :nth-child(2) > .css-8v90jo > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  //না
  //cy.get('.css-0 > :nth-child(2) > .css-8v90jo > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  //.click()
  
  //(৩) অন্যের পক্ষে আমদানী / সংভৃৃতি করে ?
  //হ্যাঁ
  cy.get(':nth-child(3) > .css-8v90jo > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  //না
  //cy.cy.get(':nth-child(3) > .css-8v90jo > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  //.click()
  
  //প্রস্তুতকারক (Manufacturer)
  /*
  cy.get(':nth-child(16) > .css-1ltrdnm > .css-8v90jo > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //(ক) কতজন কর্মচারী আছে ?
  cy.get('input[name="totalEmployee"]').type('৫০০');
  //(খ) উৎপাদন ক্ষমতা কত?
  cy.get('input[name="productionCapability"]').type('৫০০ টন');
  //(গ) গুদাম ঘর আছে কি?
  //হ্যাঁ
  cy.get('.css-1wicde7 > .css-8v90jo > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //না
  cy.get('.css-1wicde7 > .css-8v90jo > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  */
  
  //১৭। আমি/আমরা অঙ্গীকার করিতেছি যে, এই দরখাস্তে দেয়া কোন তথ্য মিথ্যা/ভুল অথবা অসম্পুর্ণ প্রমাণিত হইলে আমরা/আমাদের প্রতিষ্ঠানের নিবন্ধন/দরখাস্ত বাতিল বলিয়া গণ্য হইবে। অথবা যদি সাময়িকভাবে রেজিস্ট্রিকৃত হয় তাহাও বাতিল বলিয়া গণ্য হইবে।
  //আবেদনকারীর স্বাক্ষর ও সীলমোহর:
  //সাক্ষীগণের দস্তখতঃ
  //নামঃ *
  cy.get('input[name="supplierOrganizationWitnessParams.0.name"]')
  .type('ওয়াংচু')
  cy.wait(200)
  //পিতার নামঃ *
  cy.get('input[name="supplierOrganizationWitnessParams.0.fatherName"]')
  .type('ফিয়াংচু ')
  cy.wait(200)
  //ঠিকানাঃ
  //বিভাগঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div.MuiBox-root.css-7ysju6 > div.subFormContainer.MuiBox-root.css-1xaekgw > div.singleColumnRow.MuiBox-root.css-0 > div.MuiBox-root.css-7ysju6 > div:nth-child(2) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //জেলাঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div.MuiBox-root.css-7ysju6 > div.subFormContainer.MuiBox-root.css-1xaekgw > div.singleColumnRow.MuiBox-root.css-0 > div.MuiBox-root.css-7ysju6 > div:nth-child(2) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();
  cy.wait(200)
  //থানাঃ
  cy.get('#simple-tabpanel-application-for-enlistment > div > div > form > div > div > div > div.MuiBox-root.css-7ysju6 > div.subFormContainer.MuiBox-root.css-1xaekgw > div.singleColumnRow.MuiBox-root.css-0 > div.MuiBox-root.css-7ysju6 > div:nth-child(3) > div.MuiBox-root.css-11ze7cv > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();
  cy.wait(200)
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('[name="supplierOrganizationWitnessParams.0.addressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং');
  //স্বাক্ষর:*
  cy.get('.css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/witness_signature.png')
  cy.wait(200)
  
})