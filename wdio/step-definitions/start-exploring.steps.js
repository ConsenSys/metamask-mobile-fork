import { Given, Then, When } from '@wdio/cucumber-framework';
import OnboardingWizardModal from '../screen-objects/Modals/OnboardingWizardModal.js';
import WalletAccountModal from '../screen-objects/Modals/WalletAccountModal.js';

Given(/^the onboarding wizard is visible on wallet view$/, async () => {
  await OnboardingWizardModal.isVisible();
});

When(/^On the onboarding wizard I tap on "([^"]*)" button$/, async (text) => {
  switch (text) {
    case 'Take a Tour':
      await OnboardingWizardModal.tapTakeTourButton();
      break;
    case 'Got it':
      await OnboardingWizardModal.tapGotItButton();
      break;
    case 'Back':
      await OnboardingWizardModal.tapBackButton();
      break;
    default:
      throw new Error('Button not found');
  }
});

When(/^I tap and hold on the account Name$/, async () => {
  await WalletAccountModal.longPressAccountNameLabel();
});

When(/^I enter "([^"]*)" for account name$/, async (text) => {
  await WalletAccountModal.editAccountNameLabel(text);
});

Then(/^the tutorial modal heading should read "([^"]*)"$/, async (text) => {
  await OnboardingWizardModal.isHeaderDisplayedByXPath(text);
});

Then(
  /^there should be an explanation of the accounts functionality.$/,
  async () => {
    await OnboardingWizardModal.isStep2ContentDisplayed();
  },
);

Then(
  /^there should be an explanation about adding a nickname to your account.$/,
  async () => {
    await OnboardingWizardModal.isStep3ContentDisplayed();
  },
);

Then(/^I should be able to edit the account Name$/, async () => {
  await WalletAccountModal.isAccountNameLabelEditable();
});

Then(/^the account nickname should read "([^"]*)"$/, async (text) => {
  await WalletAccountModal.isAccountInputLabelEqualTo(text);
});

Then(
  /^there should be an explanation of the what exists within the main menu.$/,
  async () => {
    await OnboardingWizardModal.isStep4ContentDisplayed();
  },
);

Then(
  /^there should be an explanation of the what the purpose of the browser.$/,
  async () => {
    await OnboardingWizardModal.isStep5ContentDisplayed();
  },
);

Then(
  /^there should be an explanation of the what the purpose of the search input box.$/,
  async () => {
    await OnboardingWizardModal.isStep6ContentDisplayed();
  },
);

Then(/^the onboarding wizard is no longer visible$/, async () => {
  await OnboardingWizardModal.isGotItButtonNotDisplayed();
});
