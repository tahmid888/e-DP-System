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
    cy.get('[href="/supplier/supplier-registration/main-application"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
    .click()
    cy.wait(5000)
    cy.get('.MuiTabs-flexContainer > :nth-child(5)')
    .click()
    cy.wait(200)
    cy.get('.person-list-button-sec > .MuiButtonBase-root')
    .click()

    //নাম
    cy.get('input[name="name"]')
    .type('জাহাঙ্গীর')
    //বাংলা দস্তখত ১
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .css-3z33pd > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
    .selectFile('cypress/fixtures/b_signature.png')
    //ইংরেজি দস্তখত ১
    cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(1) > .css-3z33pd > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
    .selectFile('cypress/fixtures/e_signature.png')
    //পদবী
    cy.get('input[name="designation"]')
    .type('মেজর')
    //বাংলা দস্তখত ২
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .css-3z33pd > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
    .selectFile('cypress/fixtures/b_signature.png')
    //ইংরেজি দস্তখত ২
    cy.get(':nth-child(2) > :nth-child(3) > :nth-child(1) > :nth-child(1) > .css-3z33pd > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
    .selectFile('cypress/fixtures/e_signature.png')
    //বাংলা দস্তখত ৩
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .css-3z33pd > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
    .selectFile('cypress/fixtures/b_signature.png')
    //ইংরেজি দস্তখত ৩
    cy.get(':nth-child(3) > :nth-child(3) > :nth-child(1) > :nth-child(1) > .css-3z33pd > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
    .selectFile('cypress/fixtures/e_signature.png')
    //কলামের দস্তখত সত্যায়িতকরণ (সিলমোহর সহ)
    cy.get('.css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
    .selectFile('cypress/fixtures/seals-and-signatures.jpg')

})