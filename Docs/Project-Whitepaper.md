#Manage your chill

A app which allows you to manage and control a team of industrial chillers systems. will provide the user with 
the ability to set temperature as well as over and under alarms.

TODO 

#backend

* refactor the code so that mysql is used instead of mongodb. semi completion.
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

- components necessary for every page: 
    - background [wrapper] (using similar color palette as logo)
    - header [nav] (dashboard, settings, sign in & sign up (or username & log out))
    - collapsible [sidebar] (quick inspection for chillers)

* finish building the login page.
    - components:
        - a home page [landing] (depending on if user has visited, it would provide auth modal)
        - sign in/sign up & registration [modal] (a modal that provides prop switches)
        - use wrapper 

* finish building the sidebar menu.
    - sidebar can display quick information on available chillers
        component: [status] (can be reused for dashboard)
    - clickable options: 
        - click on any information to display info pg on clicked
        - click dashboard to be taken there

* build [dashboard] pg which understands if more than one chiller.
  (either it shows the multi chiller component or the single chiller component without changing pages.)

* build the [multiChiller] dashboard component.
    - include wrapper, nav, sidebar, and status
    - information to be included: 
        - name of chiller
        - temperature of chiller
        - status of chiller (with colors: red, yellow, green)

* build the [singleChiller] component 
    - include wrapper, nav, and sidebar 
    - information to be included: 
        - temperature range (low, setpoint, high)
        - temperature gauge with ranges by rolling

* build a nice graph utility for the single chiller component.
    - need to research what technology we should use

* build a [settings] page for user settings. 
    (specifically setting your account info and notification settings like phone number.)

* build a over and under temperature [alarm] settings page.
    - potentially add in audio and visual alerts

* create a virtual chiller program which generates fake chiller data to demo the front end.
