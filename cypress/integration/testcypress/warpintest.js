describe('Warpin Cypress', () => {
    it('Gist', () => {

      //login
      cy.visit('https://github.com/')
      cy.get('.mr-3 > .HeaderMenu-link').click()
      cy.get('#login_field').type('abilarachma@gmail.com')
      cy.get('#password').type('Rahasia1234567890!')
      cy.get('.btn').click()

      //create gist
      cy.visit('https://gist.github.com/')
      cy.get('.CodeMirror-lines').type('TestCreate Gist')
      cy.get('.hx_create-pr-button').click()

      //edit gist
      cy.get('.d-md-flex > :nth-child(1) > .btn').click()
      cy.get('.CodeMirror-lines').type('TestCreate Gist Update')
      cy.get('.btn-primary').click()

      //deletegist
      cy.get('.btn-danger').click()

      //accesslist gist
      cy.visit('https://gist.github.com/abilarachma')
    
    })
  })