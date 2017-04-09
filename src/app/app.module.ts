import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { GameCreatePage } from '../pages/game-create/game-create';
import { GameDetailPage } from '../pages/game-detail/game-detail';
import { GameListPage } from '../pages/game-list/game-list';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';

import { AuthData } from '../providers/auth-data';
import { GameData } from '../providers/game-data';
import { ProfileData } from '../providers/profile-data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyB1VEfV98VPvJ6Nyi8rjaaCX1mTNVPL2NI",
  authDomain: "topflop-test.firebaseapp.com",
  databaseURL: "https://topflop-test.firebaseio.com",
  storageBucket: "topflop-test.appspot.com",
  messagingSenderId: "495637250785"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GameCreatePage,
    GameDetailPage,
    GameListPage,
    LoginPage,
    ProfilePage,
    ResetPasswordPage,
    SignupPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GameCreatePage,
    GameDetailPage,
    GameListPage,
    LoginPage,
    ProfilePage,
    ResetPasswordPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthData,
    GameData,
    ProfileData
  ]
})
export class AppModule {}
