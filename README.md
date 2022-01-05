This is a project which builds on previous work.  The objective is to build a web app which allows a user to create a visualisation of a project plan by selecting specific activities from the plan and plotting them on a visual.

The objective is to make it easy to create a high level view of a project plan on a single page, or to provide multiple views of the same plan.

The key features of the app will be toL:
- Pick and choose which activities from the main plan are included in the visual.  This allows very detailed plans to be visualised by only including the summary tasks or tasks at any level.
- Select how to plot each activity.  The key ability here is to plot multiple activities on the same line which makes better use of the space and allows related activities to be plotted close to each other.
- Select visual styling of each activity.  This may include colouring, text positioning, height of the visual shape which represents an activity or the shape used, and others.

Typical workflow will be:

1. Upload or enter or modify detailed plan.
2. Select which activities to include on the visual.
3. Choose positioning and formatting for each included activity.
4. Visual is created and updated dynamically every time the configuration changes.
5. Export visual to image, PowerPoint slide or other output format (to be determined)
6. Save visualisation parameters to allow reproduction at a later date.
7. Repeat 1-6 to fine tune or create other visualisations.

Currently in proof of concept mode in local development environment.  The app will be placed on the cloud as soon as it reaches a point where there is enough functionality to be usable.

The app is being build using Django with Vue as the front end and the meat of the logic.
