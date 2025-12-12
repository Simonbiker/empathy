# Empathy Test

## Overview
At Empathy, we're building a platform that will allow researchers to create and manage their research projects. One of the key components to this are surveys. Creating a survey is a collaborative process where multiple researches and team members will discuss what questions to ask to provide meaningful insight to the business. To do that they typical write out their script using Microsoft word and when all the changes have been made, they would build it using a full survey editor tool. 

### My Understanding
To create a simple script for surveys that people could use instead of Microsoft Word. 

This would help speed up the creating survey process and enable them to be updated to the surveys on the research platform. 


Some assumptions I have made.<br/>
 
To facilitate this, I had to create my own data as the database was empty. As there was no delete function available in the database, I have not added the ability to delete said surveys.



### My approach
My approach for building any app is get the API working and having the data visible on screen. Then I look at the fimga design to decide which components I need to create and wire the data to. Lastly, I come up with the design per the figma specs. The design stage can sometimes alter the components, and therefore the data, but this is always changed accordingly.

### My approach in more detail

I started by using the Angular CLI to create the app and then created some components, such as the card component. Then I looked at if I could query the database, pull some data from it and push to it. I also created a service module file that would hold both the question and survey interface.

I then created a service folder where I put the API data service file, which would hold all of the API calls namely, get survey, get survey ID, create survey, and update survey.
AS the the API needs an e-mail address with the key, I created an interceptor file that would put in my e-mail address. After I had these files wired up and working, I was able to use the API.

I came across a small issue where I had been using surveys instead of survey which made it more difficult to access the data. However, with a little debugging, I was able to find where I had made the mistake and corrected it so that it should the singular. 

I also made a component called create survey with reactive forms. I was going to create an edit survey component, but it seemed more logical to combine the two components as this would keep the code dry and reduce the need for extra components.

I updated the app roots file so that I could manage the home and survey components. This is where I made a design decision to separate the two pages, as I didn't want the components getting too big or the flow to be confusing so having two pages made it things cleaner. 

### Issues:

The only one issue I encountered was with font awesome. The figma design had some icons that were only available in font awesome pro, which I did not have. To get around this, I had to find some icons that would closely match the design. I tried to create an icon component that could be reusable but had some problems with the caching and Angular wouldn't show the icons within the new icon component. 

### Solution:
I found a workaround by creating an SVG constants file that's I could then call upon without having any caching problems. I did have to create a pipe to tell Angular that the data from the constant file was safe and the menu component has an SVG map.


Component Struture


<img width="1024" height="1024" alt="Component Struture" src="https://github.com/user-attachments/assets/6ef57269-f40b-4ad2-83f7-5c946bd37469" />


### Install & Setup

Node.js latest version <br>
Angular version 19.2.19 <br>
npm install <br>
ng serve --open <br>

### SVG links

https://fontawesome.com/icons/circle-check?f=classic&s=regular

https://fontawesome.com/icons/list-check?f=classic&s=solid

https://fontawesome.com/icons/keyboard

https://fontawesome.com/search?q=SQUARE%20caret%20down&ic=free-collection

https://fontawesome.com/icons/magnifying-glass?f=classic&s=solid

https://fontawesome.com/icons/chevron-down?f=classic&s=solid

https://fontawesome.com/icons/plus?f=classic&s=solid
