import { LightningElement } from 'lwc';

export default class WebTabLike extends LightningElement {  
    baseUrl = "https://webtabliketest.herokuapp.com/?x=y";
    srcUrl = undefined;

    constructor() {
        super();
        const prefix = "c__";
        let s =  new URLSearchParams(window.location.search);
        let url = new URL(this.baseUrl);
        for (let [k, v] of s) {
            if(k.startsWith(prefix)) {
                k=k.substring(prefix.length);
            }
            url.searchParams.append(k,v);
        }

        this.srcUrl = url.toString();
    }
}