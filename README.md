# Learning Portal Product
---
***Project Description:*** v.01-mwybrow
>This project is basically a loosely coupled front end, which will eventually replace the current Salesforce interface. Design with intention of absorbing exposed Salesforce API's currently used in the Salesforce Application Portal.

### Setting up On Local dev environment
As with many technologies, it’s vital to have the proper foundation set up first, before moving on to solving more complex problems. 
- Please ensure you have Node & Yarn or Npm installed.
### Install Steps
- Download with Git:
```
git clone git@bitbucket.org:username/portalproduct-react.git ...
```
- Installation First run
> Step One: First run requires you to run the initial terminal setup cmd once. 
> Step Two: The staging Endpoint api is also required until all Salesforce endpoints are exposed. Currently, they can be viewed at 
- http://localhost:3004/companyInfo
- http://localhost:3004/studentSessions
- http://localhost:3004/tutorSessions

 *( only after the devapi is started.) *
>These end points are compiled from the current json packets sent via Salesforce to each Lighting Component.
- example
```
"companyInfo": {
        "companyName": "Learning",
        "companyMotto": "Learning Changes Lives!",
        "companyEst": "2017-10-30T11:31:03.684Z"
 }, ...
```

Install with npm or yarn:
```
    $ npm run setup
    $ npm run devapi
or
    $ yarn setup
    $ yarn devapi
```
### Starting servers:
```
    $ npm start
    $ yarn devapi
or
    $ yarn start
```
Main Dependencies:
- fullcalendar
- fullcalendar-reactwrapper
- bootstrap 4
