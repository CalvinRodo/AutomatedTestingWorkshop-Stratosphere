# Digital Academy Automated Testing Workshop

In this workshop you will be given the opportunity to try out Cypress.io for Test Automation as well as try out [Cypress-Axe](https://www.npmjs.com/package/cypress-axe) for automating accessiblity testing.

## How to run Cypress: 

0. Open the cmd line you can do so wit the following key command: `win+r` and then typing `cmd`  
0. Navigate to the following folder: `cd %USERPROFILE%/auto-test-workshop-strat/`
0. Run the following command `npm i` to install all node dependencies **note: this may have already been done**
0. Run the following command to open cypress: `npm run cypress:open`
0. Run the following command to open the folder in visual studio code: `code .`

Pick one of the following user stories and write a test for it using Cypress. 

## CDS Products: 

The following are non-production products that (were/are being) created by the Canadian Digital Service. 

You can find a link to their product page here: https://digital.canada.ca/products/

### [BETA] Reschedule a  Citizenship Test

The Reschedule a Citizenship Test service was created in partnership with IRCC.   
Link to Beta Service: https://vancouver.rescheduler-dev.cds-snc.ca/  
Link to Github Repo: https://github.com/cds-snc/ircc-rescheduler

The test will reside in the following folder: 
`/activity/cypress/integration/workshop/ircc-rescheduler.spec.js`

#### User Stories 

**Please Note:** The paper file number takes the format of *A123456789* you can use any 9 digit number or just copy and past A123456789 into your code.

1. *As a* aspiring citizen *I need to* reschedule my citizenship test *so that* I don't miss it  
**Definition of Done:** IUser recieves the confirmation screen.

2. 

### [ALPHA] Report a Cybercrime<sup>*</sup>:  
The Report a Cybercrim is a service that is being created in partnership with the RCMP

Link to Alpha Service: https://report-a-cybercrime.cds-snc.ca/  
Link to Github Repo: https://github.com/cds-snc/report-a-cybercrime

<sup>*</sup> As this is an Alpha Version the following features may not exist at the time of this workshop.

The test will reside in the following folder: 
`/activity/cypress/integration/workshop/rcmp-cybercrime.spec.js`

#### User stories

1. *As a* Citizen in Immediate Danger *I need* guidance in an emergency *so that* I can get help  
**Definition of Done:** User is presented with instructions to dial 911.

2. *As a* Victim of a Cyber Crime *I would like to* be able to report my story to a person *so that* I can talk through my issue.  
**Definition of Done:** User is presented with a phone number to the call centre: 
1-888-###-####

3. *As a* Victim of a Cyber Crime *I would like to* be able to report my story online *so that* I can get a follow up.  
**Definition of Done:** User is directed to Report-Cyber.ca 
