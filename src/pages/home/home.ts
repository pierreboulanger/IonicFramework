import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  games: FirebaseListObservable<any>;
  current_user = window.localStorage.getItem('currentuser');

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController, af: AngularFire) {

    this.games = af.database.list('/games');

    if (!this.isLoggedin()) {
      console.log('You are not logged in');
      this.navCtrl.push(LoginPage);
    }
  }

  isLoggedin(){
    if (this.current_user) {
      return true;
    }
  }

  addGame(){
    let prompt = this.alertCtrl.create({
      title: 'Crée ton match !',
      message: "Donne le nom de ton adversaire du jour !",
      inputs: [
        {
          name: 'opponent',
          placeholder: 'Adversaire'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.games.push({
              opponent: data.opponent
            });
          }
        }
      ]
    });
    prompt.present();
  }

  showOptions(gameId, gameOpponent) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Que voulez-vous faire ?',
      buttons: [
        {
          text: 'Supprimer',
          role: 'destructive',
          handler: () => {
            this.removeGame(gameId);
          }
        },{
          text: 'Modifier',
          handler: () => {
            this.updateGame(gameId, gameOpponent);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  removeGame(gameId: string){
    this.games.remove(gameId);
  }

  updateGame(gameId, gameOpponent){
    let prompt = this.alertCtrl.create({
      title: 'Les Patrons vs {{game.opponent}}',
      message: "Modifie le nom de ton adversaire",
      inputs: [
        {
          name: 'opponent',
          placeholder: 'Adversaire',
          value: gameOpponent
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.games.update(gameId, {
              opponent: data.opponent
            });
          }
        }
      ]
    });
    prompt.present();
  }
}
