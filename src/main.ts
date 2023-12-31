import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Amplify, { Auth } from 'aws-amplify';
import amplify from './aws-exports';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

Amplify.configure(amplify);

const oauth = {
  // Domain name
  domain : 'cf-amplify.auth.us-east-1.amazoncognito.com', 
  
  // Authorized scopes
  scope : ['phone', 'email', 'profile', 'openid','aws.cognito.signin.user.admin'], 

  // Callback URL
  redirectSignIn : 'https://master.d2be2dd4ktk3gw.amplifyapp.com', 
  
  // Sign out URL
  redirectSignOut : 'https://master.d2be2dd4ktk3gw.amplifyapp.com',

  // 'code' for Authorization code grant, 
  // 'token' for Implicit grant
  responseType: 'code',

  // optional, for Cognito hosted ui specified options
  options: {
      // Indicates if the data collection is enabled to support Cognito advanced security features. By default, this flag is set to true.
      AdvancedSecurityDataCollectionFlag : false
  }
}

Auth.configure({
  oauth:oauth
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
