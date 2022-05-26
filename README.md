# NASA Astronomy Picture Of The Day
✨ Utilizes NASA's API to show the Astronomy Picture Of The Day, title, and description.

<p align="center">
<img src="https://github.com/kristenlynne/kristenlynne/blob/main/projects/nasaapod.gif">
</p>

☄ **Link to live site:** https://nasa-astronomy-pod.netlify.app/

👽 **Link to repo:** https://github.com/kristenlynne/nasa-api

## How It's Made:

**Tech used:** HTML, CSS, JavaScript.



🚀 Select a date on the calendar and click "Get Photo" to show the picture, title, and description.

💫 Calendar has future dates deactivated as those photos aren't accessible yet.

🌕 Fully responsive design that works on any size screen.


## Optimizations

NASA’s first Astronomy Picture Of The Day was on June 16, 1995 so I made all the dates prior to that deactivated. There are some dates that don’t have any data, those dates are still clickable and the text box reads “undefined.” The project needs to be optimized to disable dates with no data from being selected. In addition, the pictures sometimes load slowly so further optimizations can be made regarding that.

## Lessons Learned:

I learned how to create a function to set the maximum date to today's date in order to disable future dates from being selected. The calendar also shows the date as today's date so you don't have to select the calendar and change the date to get the current picture of the day. Some picture of the days are videos so I learned how to show different media types.
