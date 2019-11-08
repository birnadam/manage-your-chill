#Manage your chill

A app which allows you to manage and control a team of industrial chillers systems. will provide the user with 
the ability to set temperature as well as over and under alarms.

TODO 

#backend
* refactor the code so that mysql is used instead of mongodb.
* create a post route to input 5-10 minutes of data at a time. 
* create a post route to serve a specific range of data for the graph of the past temprature readings.
* create a get route to get status with current temperature.
* create a post route to set over temp alarm.
* create post route to  set under temp alarm.
* create post route to change UserSettings. 
* create post route start the chiller.
* create a post route to stop the chiller.
* other stuff minor stuff.....

**moonshots**

* login with google option 0Auth.
* actually hooking up a real chiller.

#front-end

* finish building the login page.
* finish building the sidebar menu.
* build dashboard page which understands if there is more than one chiller.
  Either it shows the multi chiller component or the single chiller component without changing pages.
* build the multi-Chiller dashboard component.
* build the single chiller component 
* build a nice graph utility for the single chiller component.
* build a setting page for user settings. specifically setting your account info and notification settings like phone number.
* build a over and under temperature Alarm settings page.
* create a virtual chiller program which generates fake chiller data to demo the front end.
