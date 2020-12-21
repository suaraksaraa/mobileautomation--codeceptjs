const { I } = inject();
// Add in your custom step files
const { element } = require ('../utils/constant')


Given('I have an access flutter gallery', () => {
  // From "features/gallery.feature" {"line":6,"column":5}
  I.seeAppIsInstalled("io.flutter.demo.gallery");
  I.waitForElement(element.shrineLocator,2);
});

When('I tap the shrine Image', () => {
  I.tap(element.shrineLocator)
});

Then('I will be redirected to the login page', () => {
  I.waitForElement(element.nextButton, 2)
});

When('I click the next button', () => {
  I.tap(element.nextButton)
});

Then('I will be redirected to all listed product on the shrine detail page', () => {
  I.waitForElement(element.shoppingCartButton, 2);
});

When('I tap the menu', () => {
  I.touchPerform([{
    action: 'tap',
    options: {
      x: 0,
      y: 180
    }
}, {action: 'release'}])
});

When('click clothing filter', () => {
  I.waitForElement(element.allFilter, 2)
  I.tap(element.clothingFilter)
});

Then('I will see a list of the product of clothing', () => {
  I.waitForElement(element.shoppingCartButton, 2)
});