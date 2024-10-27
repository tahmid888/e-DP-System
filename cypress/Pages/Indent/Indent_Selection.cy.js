class IndentSelection{
    selectIndent = {
        indentSelect: () => {
            cy.get('#simple-tabpanel-indent-list > div > div > div.MuiBox-root.css-0 > div > div:nth-child(1) > div > div > table > tbody > tr:nth-child(2) > td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-sizeMedium.css-1j6ji2h > div > div:nth-child(1)')
            .click()
        }

    }
}

module.exports = new IndentSelection