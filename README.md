# This application allows the search of NASA's meteor API and displays results and information.
# React, JavaScript, Jest, Rebass, React-Simple-Maps

# I've included a SVG Globe and a custom definitions JSON file to enhance UX.

# There are four 'panel' components which allow user interaction and to display data.  All four are shown on desktop versions while two are shown at a time on mobile or smaller windows, controlled by conditional routing.

# The search funciton limits results to 1000 items, sorted by mass in descending order.  Search parameters (year and mass) are controller by sliders.

# The SVG globe places a marker element for the selected meteor.  When the globe is rotated, a calculation between the marker and user POV is made to determine when the marker should be hidden.

# When a meteor is selected, the Info component parses the meteors class name and matches the result to a class definition which is in turn displayed.

# Hosted on gitpages

# 18/Nov - 02/Dec 2020
