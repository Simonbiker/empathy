# Empathy Test

## Overview
At Empathy, we're building a platform that will allow researchers to create and manage their research projects. One of the key components to this are surveys. Creating a survey is a collaborative process where multiple researches and team members will discuss what questions to ask to provide meaningful insight to the business. To do that they typical write out their script using Microsoft word and when all the changes have been made, they would build it using a full survey editor tool. 

### My Understanding
From my understanding of the task given to me, Is to create a simple survey notepad screen.  That people can use instead of Microsoft Word For creating scripts for their surveys.
The importance of this notepad screen is it speeds up the process of creating surveys and also updating them for the research platform.

The importance of this notepad screen is it speeds up the process of creating surveys and also updating them for the research platform.


Some assumptions I have made.<br/>
 
Is the database being empty so I have to create my own data. 
There is no delete function in the database so I have not added the functionality to the delete any survey.


### My approach
I started by using the angular CLI to create the app then created some components for example the card component. Then I started to see if I could query the database and pull some data from it and push to it.<br/>
 
I created a service module file that would hold the question interface and the survey interface.<br/>

I created a service folder where I put the API data service file.<br> 
This would hold all of the API calls as follows get survey, get survey ID, create survey, and update survey.<br> 
As the API needs an e-mail address with the key. I had to create an interceptor file that would put in my e-mail address. After I had these files wired up and working, I was able to use the API.

Component Struture


<img width="1024" height="1024" alt="Component Struture" src="https://github.com/user-attachments/assets/6ef57269-f40b-4ad2-83f7-5c946bd37469" />


### Install & Setup

Node.js latest version
Angular version 19.2.19
npm install
ng serve --open

###SVG links

https://fontawesome.com/icons/circle-check?f=classic&s=regular

https://fontawesome.com/icons/list-check?f=classic&s=solid

https://fontawesome.com/icons/keyboard

https://fontawesome.com/search?q=SQUARE%20caret%20down&ic=free-collection

https://fontawesome.com/icons/magnifying-glass?f=classic&s=solid

https://fontawesome.com/icons/chevron-down?f=classic&s=solid

https://fontawesome.com/icons/plus?f=classic&s=solid
