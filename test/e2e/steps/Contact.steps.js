import debugModule from 'debug';
import { assert } from 'chai';
import { When, Then } from 'cucumber';
import { contactPage } from '../pages/Contact.page';
import * as systemMessages from '../constants/SystemMessages.constant';
import * as systemLabels from '../constants/SystemLabels.constant';

const debug = debugModule('steps:contact');

When(/^I'm on the contact page$/, () => {
    debug('Im on the contact page');
    contactPage.goToContactPage();
});

Then(/^the system shows a customer service label$/, () => {
    assert.equal(contactPage.heading.getText(), systemLabels.CUSTOMER_SERVICE);
});

When(/^I send a message with a document$/, () => {
    const content = {
        subject: 2,
        message: 'My first test.',
        file: 'test.pdf',
    };
    contactPage.sendMessage(content);
});

Then(/^the system shows a successful message$/, () => {
    assert.equal(
        contactPage.successMessage.getText(),
        systemMessages.FEEDBACK_MESSAGE_SENT,
    );
});
