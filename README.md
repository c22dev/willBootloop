# willBootloop
Global database of jailed tools and the number of reported bootloops per-app.

## Report a bootloop
Go [there](https://cclerc.ch/willBootloop/submit/) and choose your app from the list. Please be honest, random checks and backups are done pretty often to be sure nobody is mass-reporting. 

There is a one week cooldown before every bootloop you can report (you shouldn't bootloop more than once a week, else you are extremly unlucky lmao)


If your app isn't in the list, please contribute to this repo :

## Contributing to App Database
While you can't dirrectly add bootloops for a new app, you can add it and let users report encountered issues with it.

To proceed, fork this Github repo and edit `src.json`. Add your app by following this pattern :
1. Add a `,` next to latest object, then add a new line
   
<img width="201" alt="Capture d’écran 2024-01-02 à 18 13 41" src="https://github.com/c22dev/willBootloop/assets/102235607/da472792-ee5c-4ff4-9229-53c8b8887326">

2. Paste this :
```json
      {
        "Name" : "App Name",
        "Icon" : "app icon hosted in /icon directory",
        "Releases": [
          {
              "Package": "link to latest release"
          }
        ],
        "PackageID": "com.bundle.id"
      }
```
- Replace the Name by your app name
- Replace Icon by a rounded icon, you can use [this tool](https://round-corner.imageonline.co) (round it to maximum), and upload it to /icon directory, then link it
- Replace PackageID by app's bundle ID or an unique ID (not used yet).
3. Pull request




