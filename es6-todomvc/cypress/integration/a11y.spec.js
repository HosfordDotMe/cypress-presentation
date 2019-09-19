describe('Accessibility checks', function() {
  it('Has no detectable a11y violations', function() {
    cy.visit('/')
      .injectAxe()
      .wait(500)
      .checkA11y({
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa'],
        },
      });
  })
});
