(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./user/user.module": "./src/app/user/user.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  \"Help me\" modal\n-->\n\n<app-modal\n  #pleaseHelpMeModal\n  [title]=\"[\n    'Please help me and my animals.',\n    'We have not money to eat...'\n  ]\"\n>\n  <app-please-help-me></app-please-help-me>\n</app-modal>\n\n<!--\n  Page\n-->\n\n<nav id=\"id-top-navbar\" class=\"navbar navbar-expand navbar-dark bg-success\">\n  <div class=\"container\">\n    <div class=\"d-flex flex-row align-items-center in-navbar-row\">\n\n      <a class=\"navbar-brand\" href=\"javascript:void(0);\">\n        Features CSS\n      </a>\n\n      <div *ngFor=\"let linkGroup of navbarLinkGroups\">\n        <app-navbar-link-group [linkGroup]=\"linkGroup\"></app-navbar-link-group>\n      </div>\n\n      <div class=\"gl-social-share-begin\"></div>\n      <div\n        [attr.data-href]=\"shareUrl\"\n        class=\"fb-like\"\n        data-width=\"\"\n        data-layout=\"button_count\"\n        data-action=\"like\"\n        data-size=\"large\"\n        data-show-faces=\"true\"\n        data-share=\"true\"></div>\n      <div class=\"gl-social-share-separator--horizontal\"></div>\n      <a\n        [attr.href]=\"shareUrl\"\n        [attr.data-text]=\"shareTitle\"\n        [attr.data-hashtags]=\"shareTags\"\n        class=\"twitter-share-button\"\n        data-size=\"large\"\n        data-show-count=\"true\">Tweet</a>\n      <div class=\"gl-social-share-narrow-list\">\n        <div\n          [attr.data-href]=\"shareUrl\"\n          class=\"fb-like\"\n          data-width=\"\"\n          data-layout=\"button_count\"\n          data-action=\"like\"\n          data-size=\"large\"\n          data-show-faces=\"true\"\n          data-share=\"false\"></div>\n        <div class=\"gl-social-share-separator--vertical\"><br></div>\n        <a\n          [attr.href]=\"shareUrl\"\n          [attr.data-text]=\"shareTitle\"\n          [attr.data-hashtags]=\"shareTags\"\n          class=\"twitter-share-button\"\n          data-size=\"large\"\n          data-show-count=\"true\">Tweet</a>\n      </div>\n\n    </div>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<nav id=\"id-bottom-navbar\" class=\"navbar fixed-bottom navbar-light\" style=\"background-color: #e3f2fd; height: 0;\">\n  <a class=\"navbar-brand mx-2\">Please help me and my animals. <br class=\"d-block d-sm-none\">We have not money to eat...</a>\n  <form class=\"form-inline mx-2\">\n    <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"onClickDonateMeAndMyAnimals($event)\">\n      Please donate us...\n    </button>\n  </form>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/code-snippet/code-snippet.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/code-snippet/code-snippet.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"snippet\">\n  <ngx-prism [language]=\"snippet.language\" [code]=\"snippet.code\"></ngx-prism>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/modal/modal.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/modal/modal.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">\n      <span [innerHTML]=\"titleAsHtml\"></span>\n    </h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"mr-auto btn btn-success\" (click)=\"onClickDonateUs()\">\n      Please donate us...\n    </button>\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">\n      Close\n    </button>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/navbar-link-group/navbar-link-group.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/navbar-link-group/navbar-link-group.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"linkGroup\">\n  <div class=\"in-root\">\n\n    <a class=\"navbar-brand\" href=\"#\">\n      <app-resp-text [text]=\"linkGroup.title\"></app-resp-text>\n    </a>\n\n    <div class=\"navbar-collapse collapse\">\n      <ul class=\"navbar-nav justify-content-center align-items-center\">\n        <li *ngFor=\"let item of linkGroup.links\" class=\"nav-item\" [routerLink]=\"item.url\" routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"item.routerLinkActiveOptions || {}\">\n\n          <ng-template [ngIf]=\"!item.external\" [ngIfElse]=\"externalLink\">\n            <a class=\"nav-link\" [routerLink]=\"item.url\">\n              <app-resp-text [text]=\"item.text\"></app-resp-text>\n              <div class=\"in-link-active-marker\"></div>\n            </a>\n          </ng-template>\n\n          <ng-template #externalLink>\n            <a class=\"nav-link\" [href]=\"item.url\" target=\"_blank\">\n              <app-resp-text [text]=\"item.text\"></app-resp-text>\n              <div class=\"in-link-active-marker\"></div>\n            </a>\n          </ng-template>\n\n        </li>\n      </ul>\n    </div>\n\n  </div>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/page-section-title/page-section-title.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/page-section-title/page-section-title.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"gl-page-section-title\"><ng-content></ng-content></h2>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/page-sub-section-title/page-sub-section-title.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/page-sub-section-title/page-sub-section-title.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"gl-page-sub-section-title\"><ng-content></ng-content></h4>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/page-title/page-title.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/page-title/page-title.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"gl-page-title\"><ng-content></ng-content></h1>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/resp-text-item/resp-text-item.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/resp-text-item/resp-text-item.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"checker.isString(textItem)\">\n  {{ textItem }}\n</ng-template>\n\n<ng-template [ngIf]=\"checker.isItem(textItem)\">\n  <ng-template [ngIf]=\"textItem_icon\">\n    <i [class]=\"iconClass\" [ngStyle]=\"{ 'font-size.em': iconScale }\"></i>\n  </ng-template>\n  <ng-template [ngIf]=\"textItem_text\">\n    {{ textItem_text }}\n  </ng-template>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/resp-text/resp-text.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/resp-text/resp-text.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"checker.isString(text)\">\n  {{ text }}\n</ng-template>\n\n<ng-template [ngIf]=\"checker.isItem(text)\">\n  <app-resp-text-item [textItem]=\"text\"></app-resp-text-item>\n</ng-template>\n\n<ng-template [ngIf]=\"checker.isText(text)\">\n  <div class=\"d-none d-sm-block\">\n    <app-resp-text-item [textItem]=\"text_text\"></app-resp-text-item>\n  </div>\n  <div class=\"d-block d-sm-none\">\n    <app-resp-text-item [textItem]=\"text_smallText\"></app-resp-text-item>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/components/please-help-me/please-help-me.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/components/please-help-me/please-help-me.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Hello, I’ve been a volunteer zoodefender for almost 2 years and I live in Russia. I am writing in despair asking for help.\n</p>\n\n<p>\n  I came up with the CSS \"Features CSS\" preprocessor just to get the attention of programmers. Because I really need help.\n</p>\n\n<p>\n  I am a livestock volunteer and take homeless animals from the street, because it is very difficult for homeless animals to live on the street without a home. In Ulan-Ude, Russia, most of the homeless animals on the streets die. They die due to trapping animals, or without food from starvation (only a small part of homeless animals can learn to find food and survive), or die in winter from the cold (if they do not find time to eat food to warm themselves). I take animals from the street to save them from such a terrible fate. I also feed homeless animals in the streets.\n</p>\n\n<p>\n  In recent months, I picked up a lot of animals from the street, did not calculate my money needed for food for my selected animals and animals, which I feed on the streets, and got into debt. Now I have 74 animals picked from the street, and still homeless animals in the streets that I feed. In a few days I’ll run out of money to feed all of my animals - and those picked up from the street, and homeless animals. In addition, I do not have money to repay the debts that I took, because I did not have enough money for animals. This is a mini loan and a loan from a private lender. And I am accumulating interest for the delay in these debts, and the amount of debts is growing rapidly. My animals and I will soon be left without food. I beg you to help me with my animals. Without you, we won’t get out.\n</p>\n\n<p>\n  I live in Russia in the city of Ulan-Ude and work as a programmer. I spend only a minimum of money on myself. And I spend all the rest of the money on feeding my animals picked up from the street. As well as feeding homeless animals living on the streets, for which I have no place (these animals are many). I want to find work abroad and build an animal shelter and pick up these animals from the street, for which I still have no place, and also pick up a lot of other animals from the street.\n</p>\n\n<p>\n  Now I have 39 teenage puppies whom I took from the street as young puppies, and now they are already the size of adult dogs. I also have 3 dogs, which I took from the street as adults. I also have 27 teenage kittens, which I also took from the street with still small kittens, and now they have also grown in size as adult cats. And I also have 5 cats, which I took from the street as adults.\n</p>\n\n<p>\n  In the past few months, I have taken a lot of animals from the street. I took them from the street because I could not pass by. In Ulan-Ude, most of the homeless animals on the streets die. They die either from capturing animals, or from hunger, or from cold in winter, because they could not find food and warm themselves. Homeless animals are very ill on the street, most of them die, and those who survived live a painful life on the street. Therefore, I could not pass by, and in recent months I took a lot of animals from the street, more than I can afford. I got more animals and I did not have enough money to feed them. Therefore, I took several mini-loans so that I had enough money to eat my animals.\n</p>\n\n<p>\n  And 2 months ago, some small puppies from recently selected puppies that were sitting in the same enclosure fell ill with enteritis (enteritis is a deadly disease in puppies, this disease has a very high mortality rate). I took the puppies to a veterinary clinic for treatment in a hospital, and in order to pay for treatment, I borrowed 60 thousand rubles (this is $ 937.75 at the dollar rate on Google) from a private lender at high interest rates, because mini-loans I haven’t been given out to the moment, since my previous mini-loans have not yet been closed. I had to return 2 times more, and in case of delay in repayment of the debt, a large interest on the debt was accrued. I gave part of the borrowed money for treatment of puppies to the clinic, and part of it was spent on food for my other animals. Because by that time I already had a lot of money for food and my chosen animals, and homeless animals on the streets of which I care. I needed to pay high interest for mini-loans, in Russia in Russia interest for mini-loans is 1-1.5 percent per day. Therefore, by that time, my animals didn’t just have enough money for food, but not enough.\n</p>\n\n<p>\n  In the veterinary clinic, most of the puppies were cured, but some died (unti-smile). When I took the puppies from the clinic back to my home, after some time the same puppies from the same enclosure again got enteritis. But I already didn’t have the money to give the puppies for treatment to the clinic in the hospital. I treated them at home myself, put antibiotics and droppers, but all the puppies died. There were 5 puppies who died.\n</p>\n\n<p>\n  At the same time, I was looking for work abroad (abroad, the programmer’s salary is much higher than in Russia), so that I would have enough money to feed and help animals; and to close their debts, which are growing rapidly every day due to interest and delay.\n</p>\n\n<p>\n  I also saw homeless puppies and kittens in different places on the street. And really wanted to pick them up from the street. I wrote down, so as not to forget, the places where I saw these puppies and kittens, to pick them up from the street when I find work abroad. In total, I recorded about 20 puppies and kittens. But I still could not find work abroad. A lot of time has passed, probably most of these puppies and kittens have already died or will die soon.\n</p>\n\n<p style=\"color: darkorange;\">\n  <b>\n    In a few days my money will run out with my animals.\n  </b>\n</p>\n<ul>\n  <li>\n    My animals and I need $ 1875.50 for food for the next month. These are my selected animals and the homeless animals that I feed on the streets. I have already asked for a salary ahead of time at work and have spent all of it. On December 3 we will have a salary, but I will not receive it, because I already received it ahead of time and spent all of it. And my animals and I will have nothing to eat in a few days.\n  </li>\n  <li>\n    I need to repay the debt that I took from a private lender. I repaid part of this debt, but could not repay all the debt on time. And because of the delay, the debt has grown and is growing every day. Now I owe 142 thousand rubles for this debt (this is equal to 2219.34 dollars at the dollar rate in Google). And because of the delay, the debt is growing every day by $ 200.\n  </li>\n  <li>\n    And I need to repay a debt for several mini-loans - only about 97 thousand rubles (this is equal to $ 1,516.03 at the dollar rate on Google). For these mini-loans, I also have delays and the amount of debt is growing.\n  </li>\n</ul>\n\n<div style=\"border: 1px solid #000; padding: 10px;;\">\n  <p>\n    <b style=\"font-size: 1.2em; color: red;\">\n      Please help us! We won’t get out without you! We need:\n    </b>\n  </p>\n\n  <ol>\n    <li>\n      <b>$ 1875.50</b>\n      <br>\n      Me and my animals for food next month. In a few days we will run out of money!\n    </li>\n    <li>\n      <b>$ 3,735.37</b>\n      <br>\n      To repay my debts, which are now growing every day due to delay. Now the debt that I took from a private lender is growing every day by $ 200 due to delay ((\n    </li>\n  </ol>\n\n  <p>\n    Without your help, my animals and I will have nothing to eat! And the debts will grow to such an amount that I can never close them.\n  </p>\n\n  <p>\n    If you can help us and transfer money to us, then please use \"Western Union\" (<b>using \"Western Union\" you can send money online from \"Western Union\" site</b>). \"Western Union\" takes percents on the transfer, but \"Western Union\" is almost the only way to transfer money to Russia from the USA or Europe.\n  </p>\n\n  <p>\n    <b>\n      How to transfer money to Russia through \"Western Union\" site online:\n    </b>\n  </p>\n  <div style=\"border: 1px solid #000; padding: 10px; background-color: #eee;\">\n    <p>\n      To find how to transfer money through \"Western Union\" to Russia, try to google on these phrases:\n    </p>\n    <ul>\n      <li>\n        western union send money to russia from europe\n      </li>\n      <li>\n        western union send money to russia from usa\n      </li>\n      <li>\n        <i>\n          if you live in a different country, please indicate the same phrase on Google, but with your country\n        </i>\n      </li>\n    </ul>\n    <p>\n      - for me, these phrases did not produce useful results on Google, but maybe this is because I am in Russia, and Google adjusts the search results for different users and countries.\n    </p>\n\n    <p>\n      Or go to the Western Union website and find directly on the website how to transfer money to Russia.\n    </p>\n\n    <p>\n      I know for sure that money transfers through \"Western Union\" to Russia from other countries work. Because at the end of the summer, a friend of mine transferred money to me from USA through Western Union.\n    </p>\n\n    <p id=\"id-donate-us\" name=\"donate-us\">\n      <b>\n        When transferring via \"Western Union\", indicate the following details of the recipient (this is my data):\n      </b>\n    </p>\n\n    <table border=\"1\" cellpadding=\"5\" cellspacing=\"0\" class=\"in-transfer-receiver-table\">\n      <tr>\n        <td class=\"in-receiver-info-title\">first name:</td>\n        <td>\n          <b>Igor</b>\n          <br>\n          (in Russian - <b>Игорь</b>)\n        </td>\n      </tr>\n      <tr>\n        <td class=\"in-receiver-info-title\">middle name:</td>\n        <td>\n          <b>Gennadevich</b>\n          <br>\n          (in Russian - <b>Геннадьевич</b>)\n        </td>\n      </tr>\n      <tr>\n        <td class=\"in-receiver-info-title\">last name:</td>\n        <td>\n          <b>Shatalov</b>\n          <br>\n          (in Russian - <b>Шаталов</b>)\n        </td>\n      </tr>\n      <tr>\n        <td class=\"in-receiver-info-title\">phone:</td>\n        <td><b>+7-983-459-87-93</b></td>\n      </tr>\n      <tr>\n        <td class=\"in-receiver-info-title\">email:</td>\n        <td><b>little.foot.2.email@gmail.com</b></td>\n      </tr>\n      <tr>\n        <td colspan=\"2\">\n          And be sure to indicate that the transfer is material assistance.\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"2\" style=\"color: red;\">\n          If you transferred money to me, be sure to send me the \"Wester Union\" check/receipt to my email: <b><a href=\"mailto:little.foot.2.email@gmail.com\">little.foot.2.email@gmail.com</a></b>. Without a check/receipt, I won’t know that you transferred money to me.\n        </td>\n      </tr>\n    </table>\n  </div>\n\n  <p>&nbsp;</p>\n  <p>\n    <b>\n      Thank you for your attention to us!\n    </b>\n  </p>\n\n  <div style=\"border: 1px solid #000; padding: 10px; background-color: #eee;\">\n    <p>\n      And if you can, then help me with money so that I can pick up those puppies and kittens that I saw on the streets from the street and record them to pick them up when I find work. It has been a long time since I saw them, but I want to pick up those who have not died or fled in search of food. So far I don’t even know how many puppies and kittens are still there, and I can’t say how much money is needed. I will go and look for them, which of these puppies and kittens is still alive or has not fled in search of food, and if I find them, I will write and ask for a donation.\n    </p>\n  \n    <p>\n      If I don’t take these puppies and kittens from the street now, I’ll have to wait until I find work abroad and get my first salary, which is a month or more. During this time, they will surely die there, now we have winter frosts in Ulan-Ude.\n    </p>\n  </div>\n\n  <hr>\n  <hr>\n  <hr>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/containers/about-features-css-container/about-features-css-container.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/containers/about-features-css-container/about-features-css-container.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page -->\n<div class=\"container\">\n  <app-page-title>About \"Features CSS\"</app-page-title>\n</div>\n\n<!-- \"Features CSS\" section -->\n<div class=\"container\">\n  <app-page-section-title>\"Features CSS\"</app-page-section-title>\n\n  <p>\n    \"Features CSS\" this is CSS-preprocessor for creating of responsive CSS. Creating responsive CSS as it is now is not very convenient in my opinion. See how \"Features CSS\" makes it easy to create responsive CSS:\n  </p>\n</div>\n\n<!-- \"Features CSS\" example sub-section -->\n<div class=\"container\">\n  <app-page-sub-section-title>\"Features CSS\" example</app-page-sub-section-title>\n\n  <p>\n    For example, we need to create a toggleable sidebar. See how “Features CSS” allows you to conveniently create CSS:\n  </p>\n\n  <app-code-snippet [snippet]=\"snippets.featuresCssExample\"></app-code-snippet>\n</div>\n\n<!-- Additional examples for \"Features CSS\" sub-section -->\n<div class=\"container\">\n  <app-page-sub-section-title>Additional examples for \"Features CSS\"</app-page-sub-section-title>\n\n  <app-code-snippet [snippet]=\"snippets.additionalFeaturesCssExamples\"></app-code-snippet>\n</div>\n\n<!-- \"Features CSS JS Ext\" section -->\n<div class=\"container\">\n  <app-page-section-title>\"Features CSS JS Ext\"</app-page-section-title>\n\n  <p>\n    <b>Problem:</b> Why \"side-menu-item\" view (\"small\" or \"large\") must depends from browser width? In \"toggleable\" state \"side-menu\" can has width greater than in \"fixed\" state, but in \"toggleable\" state browser width is smaller than in \"fixed\" state. In addition, even if the element width is proportional to the browser width, but not equal to the browser width, then standard media queries by browser width will work indirectly. I think the \"side-menu-item\" state (\"small\" or \"large\") must depends from \"side-menu-item\" width. \"Features CSS JS Ext\" can provide such functionality - states by element width/height. And this states by element width/height work very fast, almost at the same speed as standard media queries by the browser width/height. It is only possible that the states by element width/height will lag one frame. But one frame it is very small.\n  </p>\n\n  <p>\n    Using \"Features CSS JS Ext\" you can use states not only by browser width and height, but and by DOM element width and height (states by element size). To use states by element size you your element must meet the one requirement:\n    <br>\n    - The width or height of element must be calculated by formula from browser width and height.\n  </p>\n\n  <p>\n    These requirement is met in almost all UI applications cases where responsiveness is required by element size.\n  </p>\n\n  <p>\n    For states by element width, these requirement is not fulfilled if the element or its parents (on which the width of the element depends) have a width equal to \"auto\". But in most UI applications for such elements with width \"auto\", responsiveness by the width of the element is not required. Agree that it sounds strange to demand responsiveness by the width of the element, if the width of the element is rubber and varies depending on the content of the element. The same for responsiveness by the height of the element: it sounds strange to demand responsiveness by the height of the element, if the height of the element is rubber and varies depending on the content of the element.\n  </p>\n\n  <p>\n    But if you still need to make states by element width/height for an element with a width/height equals to auto, then you can use a different mode for states by element width/height (only this mode is slower). That is, it is still possible to make states by element width/height for rubber elements.\n  </p>\n\n  <app-code-snippet [snippet]=\"snippets.featuresCssJsExtExample\"></app-code-snippet>\n</div>\n\n<!--\n<hr>\n<hr>\n<hr>\n<div class=\"container\">\n  <a class=\"btn btn-success\" routerLink=\"/{{ userRelativeUrls.featuresCssTeam }}\">\n    Join the \"Features CSS\" Team\n  </a>\n</div>\n-->\n\n<div class=\"gl-page-bottom\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/containers/about-save-project-container/about-save-project-container.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/containers/about-save-project-container/about-save-project-container.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>about-save-project-container works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/containers/features-css-team-container/features-css-team-container.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/containers/features-css-team-container/features-css-team-container.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"in-root\" #root>\n  <div #wait class=\"in-wait\">Please wait...</div>\n  <iframe\n    class=\"in-team-chat-iframe\"\n    src=\"http://130.211.221.3\"\n  ></iframe>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/containers/save-team-container/save-team-container.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/containers/save-team-container/save-team-container.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>save-team-container works!</p>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



//
// Routes
//
const routes = [
    {
        path: '',
        loadChildren: './user/user.module#UserModule'
    },
    {
        path: '**',
        redirectTo: '',
    },
];
//
// Module
//
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n@media (max-width: 400px) {\n  .navbar {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n@media (max-width: 400px) {\n  .in-projects-separator {\n    width: 2px;\n    background-color: #888;\n  }\n}\n@media (min-width: 401px) {\n  .in-projects-separator {\n    width: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvUHJvamVjdHMvZmVhdHVyZXMtY3NzLXNpdGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ1RGO0FEV0U7RUFKRjtJQUtJLGVBQUE7SUFDQSxnQkFBQTtFQ1JGO0FBQ0Y7QURnQkU7RUFERjtJQUVJLFVBQUE7SUFDQSxzQkFBQTtFQ1pGO0FBQ0Y7QURjRTtFQU5GO0lBT0ksV0FBQTtFQ1hGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy8gVmFyc1xuLy9cblxuJHNtYWxsLW1heC13aWR0aDogNDAwcHg7XG5cbi8vXG4vLyBPdmVycmlkZSB0aGlyZC1wYXJ0eVxuLy9cblxuLm5hdmJhciB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogJHNtYWxsLW1heC13aWR0aCkge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG59XG5cbi8vXG4vLyBUaGlzXG4vL1xuXG4uaW4tcHJvamVjdHMtc2VwYXJhdG9yIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbWFsbC1tYXgtd2lkdGgpIHtcbiAgICB3aWR0aDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNtYWxsLW1heC13aWR0aCArIDEpIHtcbiAgICB3aWR0aDogMzBweDtcbiAgfVxufVxuIiwiLm5hdmJhciB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAubmF2YmFyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmluLXByb2plY3RzLXNlcGFyYXRvciB7XG4gICAgd2lkdGg6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDAxcHgpIHtcbiAgLmluLXByb2plY3RzLXNlcGFyYXRvciB7XG4gICAgd2lkdGg6IDMwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-css */ "./node_modules/prismjs/components/prism-css.js");
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/components/prism-scss */ "./node_modules/prismjs/components/prism-scss.js");
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_models_components_github_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/models/components/github-link */ "./src/app/shared/models/components/github-link.ts");
/* harmony import */ var _user_user_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");








const fcssNavbarLinkGroup = {
    title: 'Features CSS',
    links: [
        {
            text: 'About',
            url: _user_user_routing_module__WEBPACK_IMPORTED_MODULE_6__["userRelativeUrls"].aboutFeaturesCss,
        },
        {
            text: 'Team',
            url: _user_user_routing_module__WEBPACK_IMPORTED_MODULE_6__["userRelativeUrls"].featuresCssTeam,
        },
        new _shared_models_components_github_link__WEBPACK_IMPORTED_MODULE_5__["GitHubLink"]('https://github.com/features-css/features-css'),
    ],
};
const saveProjectLinkGroup = {
    title: 'Save Project',
    links: [
        {
            text: 'About',
            url: _user_user_routing_module__WEBPACK_IMPORTED_MODULE_6__["userRelativeUrls"].aboutSaveProject,
        },
        {
            text: 'Team',
            url: _user_user_routing_module__WEBPACK_IMPORTED_MODULE_6__["userRelativeUrls"].saveTeam,
        },
        new _shared_models_components_github_link__WEBPACK_IMPORTED_MODULE_5__["GitHubLink"]('https://github.com/save-team'),
    ],
};
let AppComponent = class AppComponent {
    constructor() {
        this.shareUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].appUrlNoEndsWithSlash}/about-features-css`;
        this.shareTitle = 'Hi! Take a look at the Features CSS. This is the next generation CSS-Preprocessor...';
        this.shareTags = ['features-css'].join(' ');
        this.navbarLinkGroups = [];
    }
    ngAfterViewInit() {
        let pleaseHelpMeShowedOnce = localStorage.getItem('pleaseHelpMeShowedOnce');
        pleaseHelpMeShowedOnce = 'true';
        if (!pleaseHelpMeShowedOnce) {
            this.openPleaseHelpMeModal();
            localStorage.setItem('pleaseHelpMeShowedOnce', 'true');
        }
    }
    onClickDonateMeAndMyAnimals(e) {
        e.preventDefault();
        this.pleaseHelpMeModal.open();
    }
    openPleaseHelpMeModal() {
        this.pleaseHelpMeModal.open();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pleaseHelpMeModal', null)
], AppComponent.prototype, "pleaseHelpMeModal", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"],
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/shared/components/code-snippet/code-snippet.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/code-snippet/code-snippet.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvZGUtc25pcHBldC9jb2RlLXNuaXBwZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/code-snippet/code-snippet.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/code-snippet/code-snippet.component.ts ***!
  \**************************************************************************/
/*! exports provided: CodeSnippetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSnippetComponent", function() { return CodeSnippetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CodeSnippetComponent = class CodeSnippetComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CodeSnippetComponent.prototype, "snippet", void 0);
CodeSnippetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-code-snippet',
        template: __webpack_require__(/*! raw-loader!./code-snippet.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/code-snippet/code-snippet.component.html"),
        styles: [__webpack_require__(/*! ./code-snippet.component.scss */ "./src/app/shared/components/code-snippet/code-snippet.component.scss")]
    })
], CodeSnippetComponent);



/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.ts ***!
  \************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let ModalComponent = class ModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    get titleAsHtml() {
        let result;
        if (!this.title) {
            result = '';
        }
        else if (typeof this.title === 'string') {
            result = this.title;
        }
        else {
            result = this.title.join('<br>');
        }
        return result;
    }
    ngOnInit() {
    }
    open() {
        this.modalService.open(this.content, { scrollable: true, size: 'lg' }).result.then((result) => {
            // OK
        }, (reason) => {
            // Cancel
        });
    }
    onClickDonateUs() {
        window.location.hash = '#donate-us';
        document.getElementById('id-donate-us').scrollIntoView();
    }
};
ModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', null)
], ModalComponent.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalComponent.prototype, "title", void 0);
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/modal/modal.component.html"),
        styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/shared/components/modal/modal.component.scss")]
    })
], ModalComponent);



/***/ }),

/***/ "./src/app/shared/components/navbar-link-group/navbar-link-group.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/navbar-link-group/navbar-link-group.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\n  margin-right: 0;\n}\n\nul.navbar-nav {\n  width: 100%;\n}\n\n.in-root {\n  text-align: center;\n}\n\nli {\n  position: relative;\n}\n\nli.active .in-link-active-marker {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvUHJvamVjdHMvZmVhdHVyZXMtY3NzLXNpdGUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXZiYXItbGluay1ncm91cC9uYXZiYXItbGluay1ncm91cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyLWxpbmstZ3JvdXAvbmF2YmFyLWxpbmstZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxlQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0FDSEY7O0FEVUE7RUFDRSxrQkFBQTtBQ1BGOztBRFVBO0VBQ0Usa0JBQUE7QUNQRjs7QURVSTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUVBLHdCQUFBO0FDVE4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uYXZiYXItbGluay1ncm91cC9uYXZiYXItbGluay1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vLyBPdmVycmlkZSB0aGlyZC1wYXJ0eVxuLy9cblxuLm5hdmJhci1icmFuZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxudWwubmF2YmFyLW5hdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vL1xuLy8gVGhpc1xuLy9cblxuLmluLXJvb3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICYuYWN0aXZlIHtcbiAgICAuaW4tbGluay1hY3RpdmUtbWFya2VyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGhlaWdodDogNHB4O1xuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgfVxuICB9XG59IiwiLm5hdmJhci1icmFuZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxudWwubmF2YmFyLW5hdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW4tcm9vdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5saS5hY3RpdmUgLmluLWxpbmstYWN0aXZlLW1hcmtlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/navbar-link-group/navbar-link-group.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/navbar-link-group/navbar-link-group.component.ts ***!
  \************************************************************************************/
/*! exports provided: NavbarLinkGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarLinkGroupComponent", function() { return NavbarLinkGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarLinkGroupComponent = class NavbarLinkGroupComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavbarLinkGroupComponent.prototype, "linkGroup", void 0);
NavbarLinkGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar-link-group',
        template: __webpack_require__(/*! raw-loader!./navbar-link-group.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/navbar-link-group/navbar-link-group.component.html"),
        styles: [__webpack_require__(/*! ./navbar-link-group.component.scss */ "./src/app/shared/components/navbar-link-group/navbar-link-group.component.scss")]
    })
], NavbarLinkGroupComponent);



/***/ }),

/***/ "./src/app/shared/components/page-section-title/page-section-title.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/page-section-title/page-section-title.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2Utc2VjdGlvbi10aXRsZS9wYWdlLXNlY3Rpb24tdGl0bGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/page-section-title/page-section-title.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/page-section-title/page-section-title.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PageSectionTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSectionTitleComponent", function() { return PageSectionTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageSectionTitleComponent = class PageSectionTitleComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageSectionTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-section-title',
        template: __webpack_require__(/*! raw-loader!./page-section-title.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/page-section-title/page-section-title.component.html"),
        styles: [__webpack_require__(/*! ./page-section-title.component.scss */ "./src/app/shared/components/page-section-title/page-section-title.component.scss")]
    })
], PageSectionTitleComponent);



/***/ }),

/***/ "./src/app/shared/components/page-sub-section-title/page-sub-section-title.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/shared/components/page-sub-section-title/page-sub-section-title.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2Utc3ViLXNlY3Rpb24tdGl0bGUvcGFnZS1zdWItc2VjdGlvbi10aXRsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/page-sub-section-title/page-sub-section-title.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/page-sub-section-title/page-sub-section-title.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PageSubSectionTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSubSectionTitleComponent", function() { return PageSubSectionTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageSubSectionTitleComponent = class PageSubSectionTitleComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageSubSectionTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-sub-section-title',
        template: __webpack_require__(/*! raw-loader!./page-sub-section-title.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/page-sub-section-title/page-sub-section-title.component.html"),
        styles: [__webpack_require__(/*! ./page-sub-section-title.component.scss */ "./src/app/shared/components/page-sub-section-title/page-sub-section-title.component.scss")]
    })
], PageSubSectionTitleComponent);



/***/ }),

/***/ "./src/app/shared/components/page-title/page-title.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/page-title/page-title.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2UtdGl0bGUvcGFnZS10aXRsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/page-title/page-title.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/page-title/page-title.component.ts ***!
  \**********************************************************************/
/*! exports provided: PageTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleComponent", function() { return PageTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageTitleComponent = class PageTitleComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-title',
        template: __webpack_require__(/*! raw-loader!./page-title.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/page-title/page-title.component.html"),
        styles: [__webpack_require__(/*! ./page-title.component.scss */ "./src/app/shared/components/page-title/page-title.component.scss")]
    })
], PageTitleComponent);



/***/ }),

/***/ "./src/app/shared/components/resp-text-item/resp-text-item.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/resp-text-item/resp-text-item.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Jlc3AtdGV4dC1pdGVtL3Jlc3AtdGV4dC1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/resp-text-item/resp-text-item.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/resp-text-item/resp-text-item.component.ts ***!
  \******************************************************************************/
/*! exports provided: RespTextItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespTextItemComponent", function() { return RespTextItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_resp_text_checker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/resp-text-checker.service */ "./src/app/shared/services/resp-text-checker.service.ts");
/* harmony import */ var _services_icon_checker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/icon-checker.service */ "./src/app/shared/services/icon-checker.service.ts");




var IconProperty;
(function (IconProperty) {
    IconProperty["Icon"] = "Icon";
    IconProperty["Scale"] = "Scale";
})(IconProperty || (IconProperty = {}));
let RespTextItemComponent = class RespTextItemComponent {
    constructor(checker, iconChecker) {
        this.checker = checker;
        this.iconChecker = iconChecker;
    }
    get textItem_icon() {
        return this.checker.isItem(this.textItem) ? this.textItem.icon : null;
    }
    get textItem_text() {
        return this.checker.isItem(this.textItem) ? this.textItem.text : null;
    }
    get iconClass() {
        return this.getIconPropertyValue(IconProperty.Icon);
    }
    get iconScale() {
        return this.getIconPropertyValue(IconProperty.Scale);
    }
    ngOnInit() {
    }
    getIconPropertyValue(iconProperty) {
        let propertyValue = null;
        if (this.checker.isItem(this.textItem)) {
            const typedTextItem = this.textItem;
            if (this.iconChecker.isString(typedTextItem.icon)) {
                if (this.iconPropertyIsIcon(iconProperty)) {
                    propertyValue = typedTextItem.icon;
                }
                else if (this.iconPropertyIsScale(iconProperty)) {
                    propertyValue = 1;
                }
            }
            else if (this.iconChecker.isIcon(typedTextItem.icon)) {
                const typedIcon = typedTextItem.icon;
                if (this.iconPropertyIsIcon(iconProperty)) {
                    propertyValue = typedIcon.icon;
                }
                else if (this.iconPropertyIsScale(iconProperty)) {
                    propertyValue = typedIcon.scale || 1;
                }
            }
        }
        return propertyValue;
    }
    iconPropertyIsIcon(iconProperty) {
        return iconProperty === IconProperty.Icon;
    }
    iconPropertyIsScale(iconProperty) {
        return iconProperty === IconProperty.Scale;
    }
};
RespTextItemComponent.ctorParameters = () => [
    { type: _services_resp_text_checker_service__WEBPACK_IMPORTED_MODULE_2__["RespTextCheckerService"] },
    { type: _services_icon_checker_service__WEBPACK_IMPORTED_MODULE_3__["IconCheckerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RespTextItemComponent.prototype, "textItem", void 0);
RespTextItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resp-text-item',
        template: __webpack_require__(/*! raw-loader!./resp-text-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/resp-text-item/resp-text-item.component.html"),
        styles: [__webpack_require__(/*! ./resp-text-item.component.scss */ "./src/app/shared/components/resp-text-item/resp-text-item.component.scss")]
    })
], RespTextItemComponent);



/***/ }),

/***/ "./src/app/shared/components/resp-text/resp-text.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/resp-text/resp-text.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Jlc3AtdGV4dC9yZXNwLXRleHQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/resp-text/resp-text.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/resp-text/resp-text.component.ts ***!
  \********************************************************************/
/*! exports provided: RespTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespTextComponent", function() { return RespTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_resp_text_checker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/resp-text-checker.service */ "./src/app/shared/services/resp-text-checker.service.ts");



let RespTextComponent = class RespTextComponent {
    constructor(checker) {
        this.checker = checker;
    }
    get text_text() {
        return this.checker.isText(this.text) ? this.text.text : null;
    }
    get text_smallText() {
        return this.checker.isText(this.text) ? this.text.smallText : null;
    }
    ngOnInit() {
    }
};
RespTextComponent.ctorParameters = () => [
    { type: _services_resp_text_checker_service__WEBPACK_IMPORTED_MODULE_2__["RespTextCheckerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RespTextComponent.prototype, "text", void 0);
RespTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resp-text',
        template: __webpack_require__(/*! raw-loader!./resp-text.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/resp-text/resp-text.component.html"),
        styles: [__webpack_require__(/*! ./resp-text.component.scss */ "./src/app/shared/components/resp-text/resp-text.component.scss")]
    })
], RespTextComponent);



/***/ }),

/***/ "./src/app/shared/models/components/code-snippet.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/models/components/code-snippet.ts ***!
  \**********************************************************/
/*! exports provided: CodeLanguage, CodeSnippet, CodeSnippetOnScss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeLanguage", function() { return CodeLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSnippet", function() { return CodeSnippet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeSnippetOnScss", function() { return CodeSnippetOnScss; });
var CodeLanguage;
(function (CodeLanguage) {
    CodeLanguage["scss"] = "scss";
})(CodeLanguage || (CodeLanguage = {}));
class CodeSnippet {
    constructor(language, code) {
        this.language = language;
        this.code = code;
    }
}
CodeSnippet.ctorParameters = () => [
    { type: undefined },
    { type: String }
];
class CodeSnippetOnScss extends CodeSnippet {
    constructor(code) {
        super(CodeLanguage.scss, code);
    }
}
CodeSnippetOnScss.ctorParameters = () => [
    { type: String }
];


/***/ }),

/***/ "./src/app/shared/models/components/github-link.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/models/components/github-link.ts ***!
  \*********************************************************/
/*! exports provided: GitHubLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitHubLink", function() { return GitHubLink; });
/* harmony import */ var _resp_text_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resp-text-model */ "./src/app/shared/models/components/resp-text-model.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/app/shared/models/components/icon.ts");


class GitHubLink {
    constructor(url) {
        this.text = _resp_text_model__WEBPACK_IMPORTED_MODULE_0__["RespText"].create(_resp_text_model__WEBPACK_IMPORTED_MODULE_0__["RespTextItem"].createIconAndText(_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].create(GitHubLink.icon, 1.5), 'GitHub'), _resp_text_model__WEBPACK_IMPORTED_MODULE_0__["RespTextItem"].createIcon(_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"].create(GitHubLink.icon, 1.8)));
        this.url = url;
        this.routerLinkActiveOptions = null;
        this.external = true;
    }
}
GitHubLink.icon = 'fab fa-github';
GitHubLink.ctorParameters = () => [
    { type: String }
];


/***/ }),

/***/ "./src/app/shared/models/components/icon.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/components/icon.ts ***!
  \**************************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
class Icon {
    constructor(icon, scale = 1) {
        this.icon = icon;
        this.scale = scale;
    }
    static create(icon, scale = 1) {
        return new Icon(icon, scale);
    }
}
Icon.ctorParameters = () => [
    { type: String },
    { type: Number }
];


/***/ }),

/***/ "./src/app/shared/models/components/resp-text-model.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/models/components/resp-text-model.ts ***!
  \*************************************************************/
/*! exports provided: RespTextItem, RespText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespTextItem", function() { return RespTextItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespText", function() { return RespText; });
//
// Item
//
class RespTextItem {
    constructor(icon = null, text = null) {
        this.icon = icon;
        this.text = text;
    }
    static createIcon(icon) {
        return new RespTextItem(icon, null);
    }
    static createText(text) {
        return new RespTextItem(null, text);
    }
    static createIconAndText(icon, text) {
        return new RespTextItem(icon, text);
    }
}
RespTextItem.ctorParameters = () => [
    { type: undefined },
    { type: String }
];
//
// Text
//
class RespText {
    constructor(text = null, smallText = null) {
        this.text = text;
        this.smallText = smallText;
    }
    static create(text, smallText) {
        return new RespText(text, smallText);
    }
}
RespText.ctorParameters = () => [
    { type: undefined },
    { type: undefined }
];


/***/ }),

/***/ "./src/app/shared/services/icon-checker.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/icon-checker.service.ts ***!
  \*********************************************************/
/*! exports provided: IconCheckerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconCheckerService", function() { return IconCheckerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_components_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/components/icon */ "./src/app/shared/models/components/icon.ts");



let IconCheckerService = class IconCheckerService {
    constructor() { }
    isString(icon) {
        return typeof icon === 'string';
    }
    isIcon(icon) {
        return icon instanceof _models_components_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"];
    }
};
IconCheckerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IconCheckerService);



/***/ }),

/***/ "./src/app/shared/services/resp-text-checker.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/resp-text-checker.service.ts ***!
  \**************************************************************/
/*! exports provided: RespTextCheckerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespTextCheckerService", function() { return RespTextCheckerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_components_resp_text_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/components/resp-text-model */ "./src/app/shared/models/components/resp-text-model.ts");



let RespTextCheckerService = class RespTextCheckerService {
    constructor() { }
    isString(text) {
        return typeof text === 'string';
    }
    isItem(text) {
        return text instanceof _models_components_resp_text_model__WEBPACK_IMPORTED_MODULE_2__["RespTextItem"];
    }
    isText(text) {
        return text instanceof _models_components_resp_text_model__WEBPACK_IMPORTED_MODULE_2__["RespText"];
    }
};
RespTextCheckerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RespTextCheckerService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _ngx_prism_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-prism/core */ "./node_modules/@ngx-prism/core/dist/index.js");
/* harmony import */ var _components_resp_text_resp_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/resp-text/resp-text.component */ "./src/app/shared/components/resp-text/resp-text.component.ts");
/* harmony import */ var _components_navbar_link_group_navbar_link_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar-link-group/navbar-link-group.component */ "./src/app/shared/components/navbar-link-group/navbar-link-group.component.ts");
/* harmony import */ var _components_resp_text_item_resp_text_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/resp-text-item/resp-text-item.component */ "./src/app/shared/components/resp-text-item/resp-text-item.component.ts");
/* harmony import */ var _components_code_snippet_code_snippet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/code-snippet/code-snippet.component */ "./src/app/shared/components/code-snippet/code-snippet.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/shared/components/modal/modal.component.ts");
/* harmony import */ var _components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page-title/page-title.component */ "./src/app/shared/components/page-title/page-title.component.ts");
/* harmony import */ var _components_page_section_title_page_section_title_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/page-section-title/page-section-title.component */ "./src/app/shared/components/page-section-title/page-section-title.component.ts");
/* harmony import */ var _components_page_sub_section_title_page_sub_section_title_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/page-sub-section-title/page-sub-section-title.component */ "./src/app/shared/components/page-sub-section-title/page-sub-section-title.component.ts");














let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _ngx_prism_core__WEBPACK_IMPORTED_MODULE_5__["PrismModule"],
        ],
        declarations: [
            _components_resp_text_resp_text_component__WEBPACK_IMPORTED_MODULE_6__["RespTextComponent"],
            _components_resp_text_item_resp_text_item_component__WEBPACK_IMPORTED_MODULE_8__["RespTextItemComponent"],
            _components_navbar_link_group_navbar_link_group_component__WEBPACK_IMPORTED_MODULE_7__["NavbarLinkGroupComponent"],
            _components_code_snippet_code_snippet_component__WEBPACK_IMPORTED_MODULE_9__["CodeSnippetComponent"],
            _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
            _components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__["PageTitleComponent"],
            _components_page_section_title_page_section_title_component__WEBPACK_IMPORTED_MODULE_12__["PageSectionTitleComponent"],
            _components_page_sub_section_title_page_sub_section_title_component__WEBPACK_IMPORTED_MODULE_13__["PageSubSectionTitleComponent"],
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _components_resp_text_resp_text_component__WEBPACK_IMPORTED_MODULE_6__["RespTextComponent"],
            _components_resp_text_item_resp_text_item_component__WEBPACK_IMPORTED_MODULE_8__["RespTextItemComponent"],
            _components_navbar_link_group_navbar_link_group_component__WEBPACK_IMPORTED_MODULE_7__["NavbarLinkGroupComponent"],
            _components_code_snippet_code_snippet_component__WEBPACK_IMPORTED_MODULE_9__["CodeSnippetComponent"],
            _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
            _components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_11__["PageTitleComponent"],
            _components_page_section_title_page_section_title_component__WEBPACK_IMPORTED_MODULE_12__["PageSectionTitleComponent"],
            _components_page_sub_section_title_page_sub_section_title_component__WEBPACK_IMPORTED_MODULE_13__["PageSubSectionTitleComponent"],
        ],
    })
], SharedModule);



/***/ }),

/***/ "./src/app/user/components/please-help-me/please-help-me.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/user/components/please-help-me/please-help-me.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 500px) {\n  table.in-transfer-receiver-table {\n    display: block;\n  }\n  table.in-transfer-receiver-table tbody,\ntable.in-transfer-receiver-table tr,\ntable.in-transfer-receiver-table td {\n    display: block;\n  }\n  table.in-transfer-receiver-table td {\n    border: border;\n    border-top: none;\n  }\n  table.in-transfer-receiver-table td:first-child {\n    border-top: 1px solid #000;\n    border-bottom: none;\n  }\n  table.in-transfer-receiver-table td:first-child.in-receiver-info-title {\n    text-decoration: underline;\n  }\n}\n@media (max-width: 400px) {\n  table.in-transfer-receiver-table td {\n    font-size: 0.8em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvUHJvamVjdHMvZmVhdHVyZXMtY3NzLXNpdGUvc3JjL2FwcC91c2VyL2NvbXBvbmVudHMvcGxlYXNlLWhlbHAtbWUvcGxlYXNlLWhlbHAtbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9wbGVhc2UtaGVscC1tZS9wbGVhc2UtaGVscC1tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQURGO0lBRUksY0FBQTtFQ0NGO0VEQ0U7OztJQUdFLGNBQUE7RUNDSjtFRElFO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0VDRko7RURJSTtJQUNFLDBCQVBLO0lBUUwsbUJBQUE7RUNGTjtFRElNO0lBQ0UsMEJBQUE7RUNGUjtBQUNGO0FET0U7RUFDRTtJQUNFLGdCQUFBO0VDTEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9wbGVhc2UtaGVscC1tZS9wbGVhc2UtaGVscC1tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLmluLXRyYW5zZmVyLXJlY2VpdmVyLXRhYmxlIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICB0Ym9keSxcbiAgICB0cixcbiAgICB0ZCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAkYm9yZGVyOiAxcHggc29saWQgIzAwMDtcblxuICAgIHRkIHtcbiAgICAgIGJvcmRlcjogYm9yZGVyO1xuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3A6ICRib3JkZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG5cbiAgICAgICAgJi5pbi1yZWNlaXZlci1pbmZvLXRpdGxlIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAgIHRkIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgfVxuICB9XG59IiwiQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIHRhYmxlLmluLXRyYW5zZmVyLXJlY2VpdmVyLXRhYmxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICB0YWJsZS5pbi10cmFuc2Zlci1yZWNlaXZlci10YWJsZSB0Ym9keSxcbnRhYmxlLmluLXRyYW5zZmVyLXJlY2VpdmVyLXRhYmxlIHRyLFxudGFibGUuaW4tdHJhbnNmZXItcmVjZWl2ZXItdGFibGUgdGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIHRhYmxlLmluLXRyYW5zZmVyLXJlY2VpdmVyLXRhYmxlIHRkIHtcbiAgICBib3JkZXI6IGJvcmRlcjtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICB9XG4gIHRhYmxlLmluLXRyYW5zZmVyLXJlY2VpdmVyLXRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG4gIHRhYmxlLmluLXRyYW5zZmVyLXJlY2VpdmVyLXRhYmxlIHRkOmZpcnN0LWNoaWxkLmluLXJlY2VpdmVyLWluZm8tdGl0bGUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgdGFibGUuaW4tdHJhbnNmZXItcmVjZWl2ZXItdGFibGUgdGQge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/components/please-help-me/please-help-me.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/user/components/please-help-me/please-help-me.component.ts ***!
  \****************************************************************************/
/*! exports provided: PleaseHelpMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PleaseHelpMeComponent", function() { return PleaseHelpMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PleaseHelpMeComponent = class PleaseHelpMeComponent {
    constructor() { }
    ngOnInit() {
    }
};
PleaseHelpMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-please-help-me',
        template: __webpack_require__(/*! raw-loader!./please-help-me.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/components/please-help-me/please-help-me.component.html"),
        styles: [__webpack_require__(/*! ./please-help-me.component.scss */ "./src/app/user/components/please-help-me/please-help-me.component.scss")]
    })
], PleaseHelpMeComponent);



/***/ }),

/***/ "./src/app/user/containers/about-features-css-container/about-features-css-container.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/user/containers/about-features-css-container/about-features-css-container.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29udGFpbmVycy9hYm91dC1mZWF0dXJlcy1jc3MtY29udGFpbmVyL2Fib3V0LWZlYXR1cmVzLWNzcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/containers/about-features-css-container/about-features-css-container.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/user/containers/about-features-css-container/about-features-css-container.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AboutFeaturesCssContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutFeaturesCssContainerComponent", function() { return AboutFeaturesCssContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _snippets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../snippets */ "./src/app/user/snippets/index.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user-routing.module */ "./src/app/user/user-routing.module.ts");




let AboutFeaturesCssContainerComponent = class AboutFeaturesCssContainerComponent {
    constructor() {
        this.snippets = _snippets__WEBPACK_IMPORTED_MODULE_2__["snippets"];
        this.userRelativeUrls = _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["userRelativeUrls"];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
};
AboutFeaturesCssContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-features-css-container',
        template: __webpack_require__(/*! raw-loader!./about-features-css-container.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/containers/about-features-css-container/about-features-css-container.component.html"),
        styles: [__webpack_require__(/*! ./about-features-css-container.component.scss */ "./src/app/user/containers/about-features-css-container/about-features-css-container.component.scss")]
    })
], AboutFeaturesCssContainerComponent);



/***/ }),

/***/ "./src/app/user/containers/about-save-project-container/about-save-project-container.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/user/containers/about-save-project-container/about-save-project-container.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29udGFpbmVycy9hYm91dC1zYXZlLXByb2plY3QtY29udGFpbmVyL2Fib3V0LXNhdmUtcHJvamVjdC1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/containers/about-save-project-container/about-save-project-container.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/user/containers/about-save-project-container/about-save-project-container.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AboutSaveProjectContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutSaveProjectContainerComponent", function() { return AboutSaveProjectContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutSaveProjectContainerComponent = class AboutSaveProjectContainerComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutSaveProjectContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-save-project-container',
        template: __webpack_require__(/*! raw-loader!./about-save-project-container.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/containers/about-save-project-container/about-save-project-container.component.html"),
        styles: [__webpack_require__(/*! ./about-save-project-container.component.scss */ "./src/app/user/containers/about-save-project-container/about-save-project-container.component.scss")]
    })
], AboutSaveProjectContainerComponent);



/***/ }),

/***/ "./src/app/user/containers/features-css-team-container/features-css-team-container.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/user/containers/features-css-team-container/features-css-team-container.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".in-team-chat-iframe {\n  width: 100%;\n  height: 100%;\n}\n\n.in-wait {\n  z-index: 100;\n  position: absolute;\n  padding: 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvUHJvamVjdHMvZmVhdHVyZXMtY3NzLXNpdGUvc3JjL2FwcC91c2VyL2NvbnRhaW5lcnMvZmVhdHVyZXMtY3NzLXRlYW0tY29udGFpbmVyL2ZlYXR1cmVzLWNzcy10ZWFtLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9jb250YWluZXJzL2ZlYXR1cmVzLWNzcy10ZWFtLWNvbnRhaW5lci9mZWF0dXJlcy1jc3MtdGVhbS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29udGFpbmVycy9mZWF0dXJlcy1jc3MtdGVhbS1jb250YWluZXIvZmVhdHVyZXMtY3NzLXRlYW0tY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluLXJvb3Qge31cblxuLmluLXRlYW0tY2hhdC1pZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW4td2FpdCB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59IiwiLmluLXRlYW0tY2hhdC1pZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW4td2FpdCB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/user/containers/features-css-team-container/features-css-team-container.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/user/containers/features-css-team-container/features-css-team-container.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: FeaturesCssTeamContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesCssTeamContainerComponent", function() { return FeaturesCssTeamContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FeaturesCssTeamContainerComponent = class FeaturesCssTeamContainerComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this._interval = setInterval(() => this.onIntervalTick(), 10);
        setTimeout(() => {
            this.wait.nativeElement.style.display = 'none';
        }, 3000);
    }
    ngOnDestroy() {
        if (this._interval) {
            clearInterval(this._interval);
        }
    }
    onIntervalTick() {
        const topNavbar = document.getElementById('id-top-navbar');
        const bottomNavbar = document.getElementById('id-bottom-navbar');
        const top = topNavbar ? topNavbar.offsetHeight : 0;
        const bottom = bottomNavbar ? bottomNavbar.offsetHeight : 0;
        this.root.nativeElement.style.position = 'fixed';
        this.root.nativeElement.style.left = '0';
        this.root.nativeElement.style.right = '0';
        this.root.nativeElement.style.top = `${top}px`;
        this.root.nativeElement.style.bottom = `${bottom}px`;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('root', null)
], FeaturesCssTeamContainerComponent.prototype, "root", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wait', null)
], FeaturesCssTeamContainerComponent.prototype, "wait", void 0);
FeaturesCssTeamContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-features-css-team-container',
        template: __webpack_require__(/*! raw-loader!./features-css-team-container.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/containers/features-css-team-container/features-css-team-container.component.html"),
        styles: [__webpack_require__(/*! ./features-css-team-container.component.scss */ "./src/app/user/containers/features-css-team-container/features-css-team-container.component.scss")]
    })
], FeaturesCssTeamContainerComponent);



/***/ }),

/***/ "./src/app/user/containers/save-team-container/save-team-container.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/user/containers/save-team-container/save-team-container.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29udGFpbmVycy9zYXZlLXRlYW0tY29udGFpbmVyL3NhdmUtdGVhbS1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/containers/save-team-container/save-team-container.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/user/containers/save-team-container/save-team-container.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SaveTeamContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveTeamContainerComponent", function() { return SaveTeamContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SaveTeamContainerComponent = class SaveTeamContainerComponent {
    constructor() { }
    ngOnInit() {
    }
};
SaveTeamContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-save-team-container',
        template: __webpack_require__(/*! raw-loader!./save-team-container.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/containers/save-team-container/save-team-container.component.html"),
        styles: [__webpack_require__(/*! ./save-team-container.component.scss */ "./src/app/user/containers/save-team-container/save-team-container.component.scss")]
    })
], SaveTeamContainerComponent);



/***/ }),

/***/ "./src/app/user/snippets/index.ts":
/*!****************************************!*\
  !*** ./src/app/user/snippets/index.ts ***!
  \****************************************/
/*! exports provided: snippets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snippets", function() { return snippets; });
/* harmony import */ var _items_additional_features_css_examples__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items/additional-features-css-examples */ "./src/app/user/snippets/items/additional-features-css-examples.ts");
/* harmony import */ var _items_features_css_example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items/features-css-example */ "./src/app/user/snippets/items/features-css-example.ts");
/* harmony import */ var _items_features_css_js_ext_example__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items/features-css-js-ext-example */ "./src/app/user/snippets/items/features-css-js-ext-example.ts");



const snippets = {
    additionalFeaturesCssExamples: _items_additional_features_css_examples__WEBPACK_IMPORTED_MODULE_0__["additionalFeaturesCssExamples"],
    featuresCssExample: _items_features_css_example__WEBPACK_IMPORTED_MODULE_1__["featuresCssExample"],
    featuresCssJsExtExample: _items_features_css_js_ext_example__WEBPACK_IMPORTED_MODULE_2__["featuresCssJsExtExample"],
};


/***/ }),

/***/ "./src/app/user/snippets/items/additional-features-css-examples.ts":
/*!*************************************************************************!*\
  !*** ./src/app/user/snippets/items/additional-features-css-examples.ts ***!
  \*************************************************************************/
/*! exports provided: additionalFeaturesCssExamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "additionalFeaturesCssExamples", function() { return additionalFeaturesCssExamples; });
/* harmony import */ var _shared_models_components_code_snippet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/models/components/code-snippet */ "./src/app/shared/models/components/code-snippet.ts");

const additionalFeaturesCssExamples = new _shared_models_components_code_snippet__WEBPACK_IMPORTED_MODULE_0__["CodeSnippetOnScss"](String.raw `
//=======================================
// Applying of feature
//=======================================

$my-feature: @feature(
  parent: null,
  states: (
    small: 1024px,
    large: null,
  ),
) {
  // Same as: @state @up win-width.small
  @state @up .small {
    .test-class { font-weight: bold; }
  }
}

// You can also apply feature in any your CSS file

@apply $my-feature {
  @state @up .small {
    .test-class { font-weight: bold; }
  }
}

// Or use $my-feature states explicitly

// Same as: @state @up $my-feature{win-width.small} {
@state @up $my-feature{.small} {
  .test-class { font-weight: bold; }
}

//=======================================
// Parallel states example
//=======================================

$my-feature: @feature(
  parent: null,
  states-ex: (
    win-width: (
      small: 1024px,
      large: null,
    ),

    //
    // Custom state based on window width
    //

    #right-bar: @win-width-state(
      hide-right-bar: 1200px,
      show-right-bar: null,
    )

    // Both "win-width" and "#right-bar" states based on window width.
  ),
) {
  ...
}

//=======================================
// Example for other types of states
//=======================================

$my-feature: @feature(
  parent: null,
  states-ex: (
    win-width: (
      small: 1024px,
      large: null,
    ),

    win-height: (
      small: 500px,
      large: null,
    ),

    #modal-opening: @selector-state(
      opened: body.modal--opened,

      closed: body:not(.modal--opened),
    ),
  ),
) {

  //
  // You can combine selectors for different types of states
  //

  @state win-width.small {
    @state win-height.small {
      @state #modal-opening.opened {
        ...
      }
    }
  }

  @state win-width.small and win-height.small and #modal-opening.opened {
    ...
  }

}

//=======================================
// "states-switch" example
//=======================================

$my-feature: @feature(
  parent: null,
  states-ex: (
    win-width: (
      small: 1024px,
      large: null,
    ),
  ),
) {

  @state-switch win-width {
    @case small {
      ...
    }

    @case large {
      ...
    }
  }
}

//=======================================
// "@breakpoints" example
//=======================================

$my-feature: @feature(
  parent: null,
  states-ex: (
    win-width: (
      extra-small: 500px,
      small: 767px,
      medium: 1024px,
      large: 1200px,
      extra-large: null,
    ),
  ),
) {

  //
  // "@breakpoints" can be applied only for "breakpoints" states
  // (win-width or win-height)
  //

  @breakpoints {
    @item .small { // from "extra-small" to "small": [0; 767px]
      ...
    }

    @item .medium { // "medium" only: [768px;  1024px]
      ...
    }

    // Same as: @item null
    @item .extra-large { // from "large" to "extra-large": [1025px, +Infinity)
      ...
    }
  }

}
`);


/***/ }),

/***/ "./src/app/user/snippets/items/features-css-example.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/snippets/items/features-css-example.ts ***!
  \*************************************************************/
/*! exports provided: featuresCssExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featuresCssExample", function() { return featuresCssExample; });
/* harmony import */ var _shared_models_components_code_snippet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/models/components/code-snippet */ "./src/app/shared/models/components/code-snippet.ts");

const featuresCssExample = new _shared_models_components_code_snippet__WEBPACK_IMPORTED_MODULE_0__["CodeSnippetOnScss"](String.raw `
//=======================================
// $app-feature: This is global app feature
//=======================================

$app-feature: @feature(
  parent: null,
  states: (

    //
    // This window width states can be used as app global responsive breakpoints (as in Bootstrap).
    // You can also add other parallel group of window width states.
    // You can also add other parallel group of window width states from any other feature and
    // register this group of states in this feature.
    // States in any feature can be published in any other feature.
    // You can access feature states from any other feature.
    //

    extra-small: 500px,   // window width in range [0; 500px]
    small: 767px,         // window width in range [501px, 767px]
    medium: 1024px,       // window width in range [768px, 1024px]
    large: 1200px,        // window width in range [1025px, 1200px]

    // Last element must be null (i.e. max-width is infinity)
    extra-large: null,    // window width in range [1201px, Infinity)
  ),

  // "states" this is shortcut for "states-ex.win-width".
  // "states-ex.win-width" this is states based on window width.
  // Instead of "states" you can write:
  //   states-ex: {
  //     win-width: (
  //       ...
  //     ),
  //   }
);

//=======================================
// $side-menu-feature: This is side menu feature
//=======================================

$side-menu-feature: @feature(
  parent: $app-feature,
  states-ex: (

    //
    // "win-width" is system states group based on window width
    //

    win-width: (
      toggleable: $app-feature{medium} (    // i.e. {extra-small}, {small} and {medium}
        vars: (
          side-width: 80%,
        ),
      ),

      fixed-small: $app-feature{large} (    // i.e. {large}
        vars: (
          side-width: 300px,
        ),
      ),

      // Last breakpoint must be null (i.e. max-width is infinity)
      // You can write also:
      //   fixed-large: $app-feature{extra-large}
      // because $app-feature{extra-large} also is last breakpoint and therefore it also equals to null
      fixed-large: null (    // i.e. {extra-large}
        vars: (
          side-width: 400px,
        ),
      ),
    ),

    //
    // Create custom state group #opening
    // Name of custom states group must starts with #
    //

    #opening: @selector-state( // States
      opened: body.side-menu--opened,

      closed: body:not(.side-menu--opened),
    ) ( // Options
      // Publish this state in $app-feature
      publish: $app-feature{#side-menu-opening},
          // And now you can access this state from $app-feature in your any CSS file:
          //   @state $app-feature{#side-menu-opening.opened} {
          //     .my-item {
          //       font-weight: bold;
          //     }
          //   }
    ),

  ),
) {
  .side-menu {
    background-color: #fff;
  }

  .side-menu-overlay {
    position: relative;
    opacity: 0.5;
    color: #444;
  }

  // Same as: @state win-width.toggleable
  @state .toggleable {
    @state #opening.opened {
      .side-menu {
        width: @var [side-width];
          // Same as: @var win-width[side-width]
          // It takes "width" variable from current win-width state (win-width.toggleable)
          // You can take variable from other current state: @var #opening[my-var]
          // Or from other not current but explicit state: @var #opening.closed[my-var]
      }

      .side-menu-overlay {
        z-index: 100;
      }

      .main-content {
        margin-left: @var [side-width];
        width: 100%;
      }
    }

    @state #opening.closed {
      .side-menu,
      .side-menu-overlay {
        display: none;
      }

      .side-menu-overlay {
        z-index: -100;
      }
    }
  }

  // Same as: @state @up win-width.small
  // Same as: @state win-width(fixed-small, fixed-large)
  // Same as: @state .(fixed-small, fixed-large)
  @state @up .fixed-small {
    .side-menu {
      position: fixed;
      left: 0;
      width: @var [side-width]; // side-width equals to 300px for fixed-small and 400px for fixed-large
      top: 0;
      bottom: 0;
    }

    .main-content {
      margin-left: @var [side-width];
      width: calc(100% - @var [side-width]);
    }
  }
}

//=======================================
// $side-menu-item-feature
//=======================================

$side-menu-item-feature: @feature(
  parent: $side-menu-feature,
  states: (
    toggleable: @parent{toggleable} => item-large,
    fixed-small: @parent{fixed-small} => item-small,
    fixed-large: @parent{fixed-large} => item-large,
      // You can use readble state names "item-small" or "item-large" instead of unreadble
      // global app states $app-feature{extra-small}, $app-feature{small}.
      // $app-feature{...} states unreadble in context of side-menu-item
      // because $app-feature{...} states based on the browser width
      // and therefore $app-feature{...} state names semantic based on browser width
      // and therefore $app-feature{...} state names is unreadble in context of side-menu-item

    //
    // or
    //

    // If toggleable side-menu has width in percentage of screen
    // and therefore side-menu width is proportional to the browser window width
    // then we can do the following:
    toggleable-small: @parent{{toggleable, 720px}} => item-small,
      // @parent{{toggleable, 720px}} takes 720px and ensures
      // that 720px is in "toggleable" window width range.
      // Otherwise compilation error occured.
    toggleable-large: @parent{toggleable} => item-large,
      // or:
      //   toggleable-small: @parent{{toggleable, 70%}} => item-small,
      //   toggleable-large: @parent{toggleable} => item-large,
      //
      // @parent{toggleable} (@side-menu-feature{toggleable}) has such rule:
      //   browser-width in range [0px, 1024px]
      //
      // Since the width of the side-menu is proportional to the width of the browser window,
      // we know that for small browser widths the menu is narrow (therefore menu item is small),
      // and for large browser widths the menu is wide (therefore menu item is large).
      //
      // But also we can implement "side-menu-item" state depends not from browser width value,
      // but depends from "side-menu-item" element width value using "Features CSS JS Ext"
      //

    fixed-small: @parent{fixed-small} => item-small,
    fixed-large: @parent{fixed-large} => item-large,
  ),
) {
  // This causes compilation error.
  // Use {item-small} or {item-large} states.
  @state .toggleable {}

  // This is works
  @state .item-small {
  }
  @state .item-large {
  }
}

//=======================================
// $side-menu-item-sub-element-feature
//=======================================

$side-menu-item-sub-element-feature: @feature(
  parent: $side-menu-item-feature,
  states: @parent.states,
) {
  @state .item-small {
    ...
  }

  @state .item-large {
    ...
  }
}`);


/***/ }),

/***/ "./src/app/user/snippets/items/features-css-js-ext-example.ts":
/*!********************************************************************!*\
  !*** ./src/app/user/snippets/items/features-css-js-ext-example.ts ***!
  \********************************************************************/
/*! exports provided: featuresCssJsExtExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featuresCssJsExtExample", function() { return featuresCssJsExtExample; });
/* harmony import */ var _shared_models_components_code_snippet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/models/components/code-snippet */ "./src/app/shared/models/components/code-snippet.ts");

const featuresCssJsExtExample = new _shared_models_components_code_snippet__WEBPACK_IMPORTED_MODULE_0__["CodeSnippetOnScss"](String.raw `
$side-menu-item-feature: @feature(
  parent: null,
  states-ex: (
    #item-width: @element-width-state(
      selector: '.item-root',
      states: (
        small: 300px,
        medium: 400px,
        large: null,
      ),
    ),
  ),
) {

  @state #item-width.small {
    .item-icon {
      display: none;
    }
  }

}`);


/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: userRelativeUrls, UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRelativeUrls", function() { return userRelativeUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _containers_about_features_css_container_about_features_css_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/about-features-css-container/about-features-css-container.component */ "./src/app/user/containers/about-features-css-container/about-features-css-container.component.ts");
/* harmony import */ var _containers_features_css_team_container_features_css_team_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/features-css-team-container/features-css-team-container.component */ "./src/app/user/containers/features-css-team-container/features-css-team-container.component.ts");
/* harmony import */ var _containers_about_save_project_container_about_save_project_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/about-save-project-container/about-save-project-container.component */ "./src/app/user/containers/about-save-project-container/about-save-project-container.component.ts");
/* harmony import */ var _containers_save_team_container_save_team_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/save-team-container/save-team-container.component */ "./src/app/user/containers/save-team-container/save-team-container.component.ts");







//
// Urls
//
const userRelativeUrls = {
    aboutFeaturesCss: 'about-features-css',
    featuresCssTeam: 'features-css-team',
    aboutSaveProject: 'about-save-project',
    saveTeam: 'save-team',
};
//
// Routes
//
const routes = [
    {
        path: '',
        component: _containers_about_features_css_container_about_features_css_container_component__WEBPACK_IMPORTED_MODULE_3__["AboutFeaturesCssContainerComponent"],
    },
    {
        path: userRelativeUrls.aboutFeaturesCss,
        component: _containers_about_features_css_container_about_features_css_container_component__WEBPACK_IMPORTED_MODULE_3__["AboutFeaturesCssContainerComponent"],
    },
    {
        path: userRelativeUrls.featuresCssTeam,
        component: _containers_features_css_team_container_features_css_team_container_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesCssTeamContainerComponent"],
    },
    {
        path: userRelativeUrls.aboutSaveProject,
        component: _containers_about_save_project_container_about_save_project_container_component__WEBPACK_IMPORTED_MODULE_5__["AboutSaveProjectContainerComponent"],
    },
    {
        path: userRelativeUrls.saveTeam,
        component: _containers_save_team_container_save_team_container_component__WEBPACK_IMPORTED_MODULE_6__["SaveTeamContainerComponent"],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
//
// Module
//
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _containers_features_css_team_container_features_css_team_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/features-css-team-container/features-css-team-container.component */ "./src/app/user/containers/features-css-team-container/features-css-team-container.component.ts");
/* harmony import */ var _containers_save_team_container_save_team_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/save-team-container/save-team-container.component */ "./src/app/user/containers/save-team-container/save-team-container.component.ts");
/* harmony import */ var _containers_about_features_css_container_about_features_css_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/about-features-css-container/about-features-css-container.component */ "./src/app/user/containers/about-features-css-container/about-features-css-container.component.ts");
/* harmony import */ var _containers_about_save_project_container_about_save_project_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/about-save-project-container/about-save-project-container.component */ "./src/app/user/containers/about-save-project-container/about-save-project-container.component.ts");
/* harmony import */ var _components_please_help_me_please_help_me_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/please-help-me/please-help-me.component */ "./src/app/user/components/please-help-me/please-help-me.component.ts");










let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"],
        ],
        declarations: [
            _containers_features_css_team_container_features_css_team_container_component__WEBPACK_IMPORTED_MODULE_5__["FeaturesCssTeamContainerComponent"],
            _containers_save_team_container_save_team_container_component__WEBPACK_IMPORTED_MODULE_6__["SaveTeamContainerComponent"],
            _containers_about_features_css_container_about_features_css_container_component__WEBPACK_IMPORTED_MODULE_7__["AboutFeaturesCssContainerComponent"],
            _containers_about_save_project_container_about_save_project_container_component__WEBPACK_IMPORTED_MODULE_8__["AboutSaveProjectContainerComponent"],
            _components_please_help_me_please_help_me_component__WEBPACK_IMPORTED_MODULE_9__["PleaseHelpMeComponent"],
        ],
        exports: [
            _components_please_help_me_please_help_me_component__WEBPACK_IMPORTED_MODULE_9__["PleaseHelpMeComponent"],
        ],
    })
], UserModule);



/***/ }),

/***/ "./src/environments/environment-shared.ts":
/*!************************************************!*\
  !*** ./src/environments/environment-shared.ts ***!
  \************************************************/
/*! exports provided: environmentShared */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environmentShared", function() { return environmentShared; });
const appUrlNoEndsWithSlash = 'http://130.211.221.3:8080';
const environmentShared = {
    appUrlNoEndsWithSlash,
    appUrl: `${appUrlNoEndsWithSlash}/`,
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _environment_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environment-shared */ "./src/environments/environment-shared.ts");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    //
    // Shared
    //
    appUrlNoEndsWithSlash: _environment_shared__WEBPACK_IMPORTED_MODULE_0__["environmentShared"].appUrlNoEndsWithSlash,
    appUrl: _environment_shared__WEBPACK_IMPORTED_MODULE_0__["environmentShared"].appUrl,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Documents/Projects/features-css-site/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map