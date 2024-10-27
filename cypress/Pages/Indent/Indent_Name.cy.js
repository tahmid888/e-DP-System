class IndentName {
    element = {
        indentName: () => 
        cy.get('.css-z2naod > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root')
        .click()
        .type('ইন্ডেন্ট/অটোমেশন/০৭/০৭/২০২৪/০০১-0001')
    }

    createIndentName = {
        IndentNameCreation: () => 
            cy.get('input[name="demandLetterNo"]')
            .type('ইন্ডেন্ট/অটোমেশন/০৭/০৭/২০২৪/০০১-0001')

    }
}

module.exports = new IndentName()