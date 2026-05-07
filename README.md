1. AJAXrequestHandling
   - index.html
   - script.js
2. BasicWebPage
   - register.html
   - bootstrap.css
3. BootstrapComponets
   - index.html
4. CSSstyling
- index.html
- style.css
5. HTMLelements
-index.html
6. JSONdataHandling
- index.html
- script.js
7. JSbasics
- index.html
- script.js
8. MVC
  -package.json
  - server.js
- controllers--> userController.js
- models--> userModel.js
- views--> index.html
  
9. TypeScriptBasics
- app.js
- app.ts
- index.html

10. jQueryDOMmanipulation
- index.html
- script.js

11. AngularApp
npm install -g @angular/cli     (install angular)
ng new user-app   (creating a new project)
cd user-app 
ng serve    (run application)
ng generate component register
ng generate component login
-	app.module.ts
-	register.component.ts
-	register.component.html
-  login.component.ts
- login.component.html
- app.component.html

12. ReactApp
Npx create-react-app myapp    (creates app)
cd myapp
npm start
- App.js

13. NodeServer
Check: node -v
Node -server (this is project folder)
Npm init -y     (initialization)
--- Create server.js
Node server.js  (run this)
- server.js 

14. express-app    (folder)
  npm iniy -y    (initialization)
  npm install express
  - server.js
node server.js     (to run file)

15. rest-api
    npm init -y   (initialization)
   npm install express
-server.js
node server.js     (to run)

16. mongodb-connect
    npm init -y
    npm install express mongoose
    --- start mongoDb with default URL (mongodb://127.0.0.1:27017)
   - server.js
     node server.js
   http://localhost:3000/add        (insert)
   http://localhost:3000/students    (fetch)

17. crud-app
  npm init -y
  npm install express mongoose
-server.js
  node server.js
URL: http://localhost:3000/students

18. MobileWebPage
- index.html
19. MobileFirstResponsiveDesign
-  index.html

20. aws-deployment-app
    npm init -y
    npm install express
    -server.js
    node server.js
    --- http://localhost:3000
    -- install Node.js on EC2
    sudo apt update
    sudo apt install nodejs npm -y
    git clone repository-url
    cd aws-deployment-app
    npm install
    node server.js
    --- http://your-public-ip:3000

21. myproject
    -index.html
    git init
    git status
    git add .
    git commit -m "initial commit"
    git remote add origin https://github.com/username/myproject.git
    git push -u origin main
    (optional)
    git pull origin main
    git clone repository-url
