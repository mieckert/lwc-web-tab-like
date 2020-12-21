import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';
import ACCOUNT_NUMBER_FIELD from '@salesforce/schema/Account.AccountNumber';

export default class ExampleLinkButton extends NavigationMixin(LightningElement) {
    @api recordId;

    // Change the fields as needed for your navigation logic
    @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NUMBER_FIELD] })
    record;

    handleClick() {
        const pageRef = {
            type: 'standard__navItemPage',
            attributes: {
                /* API Name of the page/tab under Setup > Custom Tabs */
                apiName: 'Web_Tab_Like'
            },
            state: {
                /* add parameters to pass to the web tab, prefixed with c__ 
                   record fields must be part of the "field:" list in 
                   @wire(getRecord, ...)
                */
                c__company: getFieldValue(this.record.data, ACCOUNT_NUMBER_FIELD)
            }
        };
        this[NavigationMixin.Navigate](pageRef);    
    }
}