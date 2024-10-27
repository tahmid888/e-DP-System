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

  //পরবর্তী
  cy.get('.css-19i8qlo > .MuiButtonBase-root')
  .click()
  cy.wait(500)

  //পরবর্তী
  cy.get(':nth-child(2) > .MuiButton-containedPrimary')
  .click()
  cy.wait(500)

  //1. Name: *
  cy.get('input[name="nameEn"]')
  .type('Molla Basir Uddin')
  cy.wait(200)

  //Rank: *
  cy.get('#mui-component-select-rank')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Major General')
  .click()
  cy.wait(200)


  //2. Ex-Personal Number:*
  cy.get('input[name="exPersonalNo"]')
  .type('BJE654789')
  cy.wait(200)

  //Corps Or Regiment
  cy.get('input[name="corpsOrRegiment"]')
  .type('Regiment')
  cy.wait(200)

  //4. Birth Place: *
  cy.get('#mui-component-select-birthPlaceDistrictId')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Gopalganj')
  .click()
  cy.wait(200)

  //Date of Birth: *
  cy.get(':nth-child(3) > :nth-child(2) > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(63) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //5. Father's Name: *
  cy.get('input[name="fathersName"]')
  .type('Mojibur')
  cy.wait(200)

  //6. Present Residential Address:
  //A. Division:*
  cy.get('#mui-component-select-presentResidentialDivisionId')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Dhaka')
  .click()
  cy.wait(200)

  //B. District:*
  cy.get('#mui-component-select-presentResidentialDistrictId')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Dhaka')
  .click()
  cy.wait(200)

  //C. Police Station:*
  cy.get('#mui-component-select-presentResidentialPoliceStationId')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Savar')
  .click()
  cy.wait(200)

  //D. Telephone No:*
  cy.get('input[name="presentResidentialTelephoneNo"]')
  .type('01524698736')
  cy.wait(200)

  //E. Address Line/House No./Holding No.: *
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div:nth-child(5) > div.subFormContainer.MuiBox-root.css-7ysju6 > div.MuiBox-root.css-29kerx > div.MuiBox-root.css-79elbk > div')
  .click()
  .type('Address Line/House No./Holding No. Address Line/House No./Holding No.')
  cy.wait(200)

  //7. Permanent Residential Address
  //Same as Present Address:
  cy.get('.css-17i6dfn > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()

  //A. Division:*
  /*
  cy.get('#mui-component-select-permanentAddressDivisionId')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Dhaka')
  .click()
  cy.wait(200)

  //B. District:*
  cy.get('#mui-component-select-permanentAddressDistrictId')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Dhaka')
  .click()
  cy.wait(200)

  //C. Police Station:*
  cy.get('#mui-component-select-permanentAddressPoliceStationId')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Dhaka')
  .click()
  cy.wait(200)

  //D. Telephone No:*
  cy.get('input[]')
  .type('')
  cy.wait(200)
  //E. Address Line/House No./Holding No.: *
  cy.get('input[]')
  .type('')
  cy.wait(200)
  */

  //8. Date of Commission*
  cy.get(':nth-child(1) > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
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

  //Date of Enrolment*
  cy.get(':nth-child(7) > :nth-child(2) > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(85) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //9. Name of units served with duration in the entire service life:
  //ADD INFO
  cy.get(':nth-child(8) > .singleColumnRow > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root')
  .click()

  //1. Served Unit Information
  //Unit Name
  cy.get('input[name="unitServedWithDurationParams.0.unitName"]')
  .type('East Bengal Regiment')
  cy.wait(200)

  //Service Duration:
  //Year
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div:nth-child(8) > div.singleColumnRow.MuiBox-root.css-0 > div.subFormContainer.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-0 > div.formRow.MuiBox-root.css-0 > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', '25')
  .click()
  cy.wait(200)

  //Month
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div:nth-child(8) > div.singleColumnRow.MuiBox-root.css-0 > div.subFormContainer.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-0 > div.formRow.MuiBox-root.css-0 > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', '6')
  .click()
  cy.wait(200)

  //Day
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div:nth-child(8) > div.singleColumnRow.MuiBox-root.css-0 > div.subFormContainer.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-0 > div.formRow.MuiBox-root.css-0 > div:nth-child(3) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', '15')
  .click()
  cy.wait(200)

  //10. Name of the Last Unit Served:*
  cy.get('input[name="lastServedUnitName"]')
  .type('21 East Bengal Regiment')
  cy.wait(200)

  //11. Date of *
  //Retirement
  cy.get('.css-8v90jo > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)

  /*
  //Release
  cy.get(':nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)

  //Dismissal
  cy.get(':nth-child(3) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)

  //Discharge
  cy.get(':nth-child(4) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)
  */

  cy.get('.css-qbbete > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(109) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //12. Reasons of Release :
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div.subFormContainer.MuiBox-root.css-0 > div.MuiBox-root.css-29kerx > div.MuiBox-root.css-79elbk > div')
  .type('No Reasons')
  cy.wait(200)

  //13. Present Political Affiliation:
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div:nth-child(11) > div.MuiBox-root.css-79elbk > div')
  .type('Awami League')
  cy.wait(200)

  //14. Whether member of any political party/organization:
  cy.get(':nth-child(12) > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  //Type*
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div.subFormContainer.MuiBox-root.css-7ysju6 > div:nth-child(2) > div > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Party')
  .click()
  cy.wait(200)

  //15. If so, State Name of the Party/Organization with Address and Tel No:
  //Name*
  cy.get('input[name="memberOfPoliticalPartyOrOrganizationName"]')
  .type('Dhaka')
  cy.wait(200)

  //Telephone No.
  cy.get('input[name="memberOfPoliticalPartyOrOrganizationTelephoneNo"]')
  .type('01523456987')
  cy.wait(200)

  //Address*
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div.subFormContainer.MuiBox-root.css-7ysju6 > div:nth-child(5) > div:nth-child(1) > div.MuiBox-root.css-79elbk > div > div')
  .click()
  .type('Address Address Address Address Address')
  cy.wait(200)

  //Description
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div.subFormContainer.MuiBox-root.css-7ysju6 > div:nth-child(5) > div:nth-child(2) > div.MuiBox-root.css-79elbk > div > div')
  .click()
  .type('Description Description Description Description Description')
  cy.wait(200)

  //16. Religion:*
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div:nth-child(13) > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Islam')
  .click()
  cy.wait(200)

  //Cast:
  cy.get('input[name="cast"]')
  .type('sunni')
  cy.wait(200)

  //17. Name of Firm (In English):
  //Name*
  cy.get('input[name="firmName"]')
  .type('Firm Ltd.')
  cy.wait(200)

  //Division:*
  cy.get('#mui-component-select-firmAddressDivisionId')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Dhaka')
  .click()
  cy.wait(200)

  //District:*
  cy.get('#mui-component-select-firmAddressDistrictId')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Dhaka')
  .click()
  cy.wait(200)

  //Police Station:*
  cy.get('#mui-component-select-firmAddressPoliceStationId')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Savar')
  .click()
  cy.wait(200)

  //Telephone
  cy.get('input[name="firmTelephone"]')
  .type('01532659874')
  cy.wait(200)

  //Address Line/House No./Holding No.: *
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div:nth-child(14) > div.subFormContainer.MuiBox-root.css-7ysju6 > div.MuiBox-root.css-29kerx > div.MuiBox-root.css-79elbk > div > div')
  .click()
  .type('Address Line/House No./Holding No. Address Line/House No./Holding No. Address Line/House No./Holding No.')
  cy.wait(200)

  //18. Name of the Post Presently Holding*
  cy.get('input[name="presentlyHoldingPost"]')
  .type('Presently Holding')
  cy.wait(200)

  //19. Name of the Presently Involved (If any Organization)
  cy.get('input[name="presentlyInvolvedOrganization"]')
  .type('Organization')
  cy.wait(200)

  //20. If Partnership, State Name of Partners with Their Antecedents, and Political Affiliations, Address and Tel No. Etc:
  cy.get(':nth-child(17) > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()

  //ADD INFO
  cy.get(':nth-child(17) > .singleColumnRow > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root')
  .click()

  //1. Partnership Information
  //Partner Name*
  cy.get('input[name="partnershipInformationParams.0.partnerName"]')
  .type('Khairul')
  cy.wait(200)

  //Partner Antecedents
  cy.get('input[name="partnershipInformationParams.0.partnerAntecedent"]')
  .type('Partner Antecedents')
  cy.wait(200)

  //Political Affiliation
  cy.get('input[name="partnershipInformationParams.0.politicalAffiliation"]')
  .type('Political Affiliation')
  cy.wait(200)

  //Address Details:
  //Division:*
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div:nth-child(17) > div.singleColumnRow.MuiBox-root.css-0 > div.subFormContainer.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-7ysju6 > div.subFormContainer.MuiBox-root.css-7ysju6 > div:nth-child(2) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Dhaka')
  .click()
  cy.wait(200)

  //District:*
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div:nth-child(17) > div.singleColumnRow.MuiBox-root.css-0 > div.subFormContainer.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-7ysju6 > div.subFormContainer.MuiBox-root.css-7ysju6 > div:nth-child(2) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Dhaka')
  .click()
  cy.wait(200)

  //Police Station:*
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div:nth-child(17) > div.singleColumnRow.MuiBox-root.css-0 > div.subFormContainer.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-7ysju6 > div.subFormContainer.MuiBox-root.css-7ysju6 > div:nth-child(3) > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Savar')
  .click()
  cy.wait(200)

  //Telephone No.
  cy.get('input[name="partnershipInformationParams.0.telephoneNo"]')
  .type('01521897456')
  cy.wait(200)

  //Address Line/House No/Holding No
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div:nth-child(17) > div.singleColumnRow.MuiBox-root.css-0 > div.subFormContainer.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-7ysju6 > div.subFormContainer.MuiBox-root.css-7ysju6 > div.MuiBox-root.css-29kerx > div.MuiBox-root.css-79elbk > div')
  .click()
  .type('Address Line/House No/Holding No Address Line/House No/Holding No Address Line/House No/Holding No')
  cy.wait(200)

  //21. Name of Banks:
  //ADD INFO
  cy.get(':nth-child(18) > .singleColumnRow > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root')
  .click()

  //1. Bank Information
  //Name:*
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div:nth-child(18) > div.singleColumnRow.MuiBox-root.css-0 > div.subFormContainer.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(1) > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Prime Bank Ltd.')
  .click()
  cy.wait(200)
  //Branch Name*
  cy.get('input[name="bankersInformationParams.0.branchName"]')
  .type('Savar')
  cy.wait(200)
  //Division:*
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div:nth-child(18) > div.singleColumnRow.MuiBox-root.css-0 > div.subFormContainer.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(2) > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Dhaka')
  .click()
  cy.wait(200)
  //District:*
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div:nth-child(18) > div.singleColumnRow.MuiBox-root.css-0 > div.subFormContainer.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(2) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Dhaka')
  .click()
  cy.wait(200)
  //Police Station:*
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div:nth-child(18) > div.singleColumnRow.MuiBox-root.css-0 > div.subFormContainer.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(3) > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Savar')
  .click()
  cy.wait(200)
  //Address Line/House No./Holding No.: *
  cy.get('input[name="bankersInformationParams.0.branchAddressLine"]')
  .type('Name of the Organization Name of the Organization Name of the Organization')
  cy.wait(200)

  //22. Whether Member of Any Club/Cultural/Social/Diterary Organization:
  cy.get(':nth-child(19) > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)

  //ADD MORE
  cy.get(':nth-child(19) > .singleColumnRow > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root')
  .click()
  cy.wait(200)

  //1. Organization Membership Information
  //Organization Type*
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div:nth-child(19) > div.singleColumnRow.MuiBox-root.css-0 > div.subFormContainer.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Club')
  .click()
  cy.wait(200)

  //A. Name of the Organization*
  cy.get('input[name="associationWithSocialPoliticalClubOrgParams.0.name"]')
  .type('Organization')
  cy.wait(200)

  //B. Aim of the Organization
  cy.get('input[name="associationWithSocialPoliticalClubOrgParams.0.organizationAim"]')
  .type('Aim of the Organization')
  cy.wait(200)

  //C. Membership Number if Any
  cy.get('input[name="associationWithSocialPoliticalClubOrgParams.0.membershipNo"]')
  .type('Membership')
  cy.wait(200)

  //D. Date of Joining*
  cy.get('.subFormContainer > .singleColumnRow > .formRow > .css-r85p5r > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(109) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //23. Relations Serving in the Defence Forces:
  cy.get(':nth-child(20) > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)

  //ADD MORE
  cy.get(':nth-child(20) > .singleColumnRow > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root')
  .click()
  cy.wait(200)

  //1. Defence Serving Information
  //Name*
  cy.get('input[name="relationsServingDefenceInformationParams.0.relativeName"]')
  .type('East bengal regiment')
  cy.wait(200)
  //Present Rank*
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div:nth-child(20) > div.singleColumnRow.MuiBox-root.css-0 > div.subFormContainer.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-0 > div.MuiBox-root.css-0 > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'Major General')
  .click()
  cy.wait(200)
  //Appointment
  cy.get('input[name="relationsServingDefenceInformationParams.0.appointment"]')
  .type('Second Lieutenant')
  cy.wait(200)
  //Relationship*
  cy.get('input[name="relationsServingDefenceInformationParams.0.relationWithTheRelative"]')
  .type('Uncle')
  cy.wait(200)

  //24. Whether Tried of Summarily Disposed or Charge Sheeted in Defence/Civil Court:
  /*
  cy.get(':nth-child(21) > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)

  //ADD MORE
  cy.get(':nth-child(21) > .singleColumnRow > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root')
  .click()
  cy.wait(200)

  //1. Defence/Civil Court Information:
  //Court Type*
  cy.get('#simple-tabpanel-bio-data-Mil > div > div > form > div > div > div > div:nth-child(21) > div.singleColumnRow.MuiBox-root.css-0 > div.subFormContainer.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'CIVIL')
  .click()
  cy.wait(200)
  //A. Offense Committed*
  cy.get('input[]')
  .type('')
  cy.wait(200)

  //B. Place of Offense Committed*
  cy.get('input[]')
  .type('')
  cy.wait(200)

  //Date of Offense Committed*
  //C. If Found Guilty, Punishment Awarded:
  //Description
  cy.get('input[]')
  .type('')
  cy.wait(200)

  //Attachment (If any):

  */

  //25. If Any Other Occupation State:
  cy.get(':nth-child(22) > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)

  //Organization Name*
  cy.get('input[name="otherOccupationOrgName"]')
  .type('Organization Name')
  cy.wait(200)

  //Name of Post*
  cy.get('input[name="otherOccupationPostName"]')
  .type('Name of Post')
  cy.wait(200)

  //Telephone No:
  cy.get('input[name="otherOccupationTelNo"]')
  .type('01222362514')
  cy.wait(200)

  //26. If Your Firm Enlisted in Defence Forces:
  cy.get(':nth-child(23) > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)

  //State Branches Where Enlisted: *
  cy.get('input[name="enlistedBranches"]')
  .type('9 artillery brigade')
  cy.wait(200)

  //Whether Cleared by DGFI or Not?*
  //Yes
  cy.get(':nth-child(23) > .subFormContainer > .css-1ltrdnm > .css-8v90jo > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)

  //State DGFI Letter No.*
  cy.get('input[name="stateDGFILetterNo"]')
  .type('DC.PCR.01.2563.25687.2014')

  //State DGFI Letter Date*
  cy.get('.css-uh2678 > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(109) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //No

  //27. National ID Card No:
  cy.get('input[name="nid"]')
  .type('7089562314')
  cy.wait(200)

  //Signature (In English):*
  cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Signature_of_applicant.png')
  cy.wait(300) 

  //Seal of the Individual:*
  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Seal_of_Applicant.jpg')
  cy.wait(300) 
})