/// <reference types="cypress"/>

import 'cypress-mochawesome-reporter/register';
import SupplierCy from "../../../Pages/Supplier/Supplier.cy"

it('Login DPGDP', function() {

  cy.visit('http://testing.edp.gov.bd/')
  //Change User Name
  SupplierCy.supplierUserforProprietorship.supplierUserName()
  //SupplierCy.supplierUserforLimited.supplierUserName()
  //SupplierCy.supplierUserforPartnership.supplierUserName()

  //Change Password
  SupplierCy.supplierPass.supplierUserPass()
  cy.get('.MuiButton-contained')
  .click()
})
