class suplier {
    supplierUserforProprietorship = {
        supplierUserName: () =>   
            cy.get('input[name="username"]')
            .type('alnoman001_single')
    }

    supplierUserforLimited = {
        supplierUserName: () =>   
            cy.get('input[name="username"]')
            .type('alnoman002_limited')
    }

    supplierUserforPartnership = {
        supplierUserName: () =>   
            cy.get('input[name="username"]')
            .type('alnoman003_partner')
    }

    supplierPass = {
        supplierUserPass: () =>
            cy.get('input[name="password"]')
            .type('Sqa@12345')
    }
}

module.exports = new suplier()