Application in action : https://danannmcmahon.github.io/meteors/

# React, JavaScript, Jest, Rebass, React-Simple-Maps

This application fetches data from NASA's metero API, then displays the largest 1000 results by mass.  Clicking on a result will display the location of the meteor on a SVG map with accompanied information.

# User interaction with the map is controlled with sliders.

The SVG globe has a marker placed for the selected meteor location.  When the globe is rotated, a calculation between the marker and user POV is made to determine when the marker should be hidden.

# Meteor class description

When a meteor is selected, it's class name is parsed and matched to a class definition, displayed in the Info panel.

18/Nov - 02/Dec 2020
