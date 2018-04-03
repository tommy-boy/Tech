const entity =

[{
	"surveyConfigurationId": "be027ed1-6278-485e-8a0c-c0e34ac571e9",
	"properties": {
		"displayName": "Default Generic Sales Survey",
		"marketType": "Generic",
		"preferredDeliveryMethod": "Email",
		"transactionType": "Sales",
		"delayHours": 11,
		"muteWindow": 0,
		"headerLogoUri": "https://digitalairstrike.com/wp/wp-content/uploads/2015/05/DAS-Logo-Horizontal.OnWhite.png",
		"introText": {
			"key": "txt_intro_text",
			"culture": "en-US",
			"value": "{{consumer_name}},\nThank you in advance for taking a moment to answer a couple of quick questions about your experience.\nWe are committed to delivering excellent service and would like to know what you liked about your experience and where we can improve.",
			"context": "intro_text",
			"description": "Survey - Intro Text"
		},
		"optInText": {
			"key": "txt_optin_text",
			"culture": "en-US",
			"value": "This is not a UI component in the MVP.",
			"context": "optin_text",
			"description": "Survey - Opt In Text"
		},
		"finePrintText": {
			"key": "txt_fine_print",
			"culture": "en-US",
			"value": "By filling out this survey you agree to allow all comments submitted, as well as first name and last initial, to be used in marketing materials if applicable as outlined in the <a href=“termsofuse.com”>Terms of Use</a>.",
			"context": "fine_print",
			"description": "Survey - Fine Print Text"
		},
		"termsAndConditions": {
			"key": "txt_terms_and_conditions",
			"culture": "en-US",
			"value": "This is not a component in the MVP mockup.",
			"context": "terms_and_conditions",
			"description": "Survey - Terms and Conditions Text"
		},
		"isActive": true
	},
	"questions": [
		{
            "order": 0,
			"context": "rating_overall",
			"questionDescriptor": "Star5",
			"label": {
				"key": "lbl_rating_overall",
				"culture": "en-US",
				"value": "Please rate your experience with us:",
				"context": "rating_overall",
				"description": "Survey - Rating Overall - Label"
			},
			"content": [{
				"controlType": "Star1to5",
				"order": 0,
				"label": null
			}]
        },
        {
			"order": 1,
			"context": "rating_referral",
			"questionDescriptor": "OptionGroup",
			"label": {
				"key": "lbl_rating_referral",
				"culture": "en-US",
				"value": "How likely are you to recommend {{business_name}} to a friend?",
				"context": "rating_referral",
				"description": "Survey - Rating Referral - Label"
			},
			"content": [{
				"controlType": "Select",
				"order": 0,
				"label": null
			}]
        },
        {
            "order": 2,
			"context": "input_didwell",
			"questionDescriptor": "FreeText",
			"label": {
				"key": "lbl_did_well",
				"culture": "en-US",
				"value": "Please tell us what we are doing well:",
				"context": "input_didwell",
				"description": "Input Did Well - Label"
			},
			"content": [{
				"controlType": "TextBox",
				"order": 0,
				"label": null
			}]
        },
        {
            "order": 3,
			"context": "input_canimprove",
			"questionDescriptor": "FreeText",
			"label": {
				"key": "lbl_canimprove",
				"culture": "en-US",
				"value": "Please let us know if there is anything we can do to improve:",
				"context": "input_canimprove",
				"description": "Can I Improve - Label"
			},
			"content": [{
				"controlType": "TextBox",
				"order": 0,
				"label": null
			}],
			"options": [
                {
                   "key": "001",
                   "value": "0"
                },
                {
                    "key": "002",
                    "value": "1"
                },
                {
                    "key": "003",
                    "value": "2"
                }
            ],
		},
	],
	"feedbackPages": {
		"positive": {
			"salutation": {
				"key": "feedback_positive_salutation_pos",
				"culture": "en-US",
				"value": "Hey {{consumer_name}}!",
				"context": "salutation",
				"description": "Feedback page"
			},
			"body": {
				"key": "feedback_positive_body_pos",
				"culture": "en-US",
				"value": "We're glad you had a good experience, please leave us feedback on one of these sites!",
				"context": "body",
				"description": "Negative feedback body"
			},
			"reviewSites": [{
				"name": "Yelp",
				"url": "http://www.yelp.com/biz/rich-ford-albuquerque"
			}, {
				"name": "CarsDotCom",
				"url": "http://www.cars.com/dealers/150020/rich-ford-sales/reviews/"
			}]
		},
		"negative": {
			"salutation": {
				"key": "feedback_negative_salutation_neg",
				"culture": "en-US",
				"value": "We're sorry, {{consumer_name}}",
				"context": "salutation",
				"description": "Negative feedback salutation"
			},
			"body": {
				"key": "feedback_negative_body_neg",
				"culture": "en-US",
				"value": "Sorry about your experience. Leave us feedback on one one of these sites",
				"context": "body",
				"description": "Negative feedback body"
			},
			"reviewSites": []
		}
	},
	"thankYouPages": {
		"id": "ad09d911-6028-47eb-b979-dbf71d71a485",
		"sentiment": "Positive",
		"displayName": "Default Positive Thank You Page",
		"isActive": false,
		"salutation": {
			"key": "salutation",
			"culture": "en-US",
			"value": "Thank you for taking the time to complete this survey!",
			"context": "salutation",
			"description": "Thank You Page (Positive) - Salutation"
		},
		"bodyContent": {
			"key": "main_body",
			"culture": "en-US",
			"value": "We invite you to follow us on our social media accounts, where we often provide discounts and exclusives opportunities to our followers.",
			"context": "main_body",
			"description": "Thank You Page (Positive) - Body Content"
		}
	},
	"invitations": [{
		"displayName": "Default Email Invitation",
		"deliveryMethod": "Email",
		"properties": {
			"headerLogoUri": "https://digitalairstrike.com/wp/wp-content/uploads/2015/05/DAS-Logo-Horizontal.OnWhite.png",
			"subjectLine": {
				"key": "subject",
				"culture": "en-US",
				"value": "{{business_name}} Would Like Your Feedback!",
				"context": "subject",
				"description": "Survey Invitation - subject line"
			},
			"salutation": {
				"key": "salutation",
				"culture": "en-US",
				"value": "Hi {{consumer_name}},",
				"context": "salutation",
				"description": "Survey Invitation - salutation"
			},
			"mainBody": {
				"key": "main_body",
				"culture": "en-US",
				"value": "On behalf of everyone at {{business_name}} we thank you for your business.\nWe are always looking for ways to improve and would like to get your feedback about your experience with us. Please take a moment to answer a few questions.",
				"context": "main_body",
				"description": "Survey Invitation - Main Body"
			},
			"valediction": {
				"key": "valediction",
				"culture": "en-US",
				"value": "Thank you!",
				"context": "valediction",
				"description": "Survey Invitation - Valediction"
			},
			"buttonText": {
				"key": "button_text",
				"culture": "en-US",
				"value": "Launch Survey",
				"context": "button_text",
				"description": "Survey Invitation - Submit Button text"
			},
			"finePrint": {
				"key": "fine_print",
				"culture": "en-US",
				"value": "If you are no longer interested in receiving these mailings, please unsubscribe. Should you wish to opt out through postal mail, please write to us at the address displayed on this email.",
				"context": "fine_print",
				"description": "Survey Invitation - Fine Print"
			}
		}
	}],
}]

	
export default entity