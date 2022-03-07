import { Injectable } from "@angular/core";
import { AlertController, LoadingController } from '@ionic/angular'
import { constants } from "../environments/constants"

@Injectable({
    providedIn: 'root'
})
export class Utility {

    constructor(
        private alertController: AlertController,
        public loadingController: LoadingController
    ){}

    // parse firebase error code
    parseFbErrorCode(code) {
        return code.split("/").pop().replace("-","_").toUpperCase();
    }

    // reusable ionic alert
    async alert(option) {
        const alert = await this.alertController.create({
            header: option.header || "",
            message: constants[option.message] || option.message,
            buttons: option.buttons || ["OK"]
        })
        alert.present();
    }

    async loading(isShow) {
        if(isShow) {
            this.loadingController.create({
                message: 'Loading...'
            }).then((response) => {
                response.present();
            });
        } else {
            this.loadingController.dismiss().then((response) => {
                console.log('Loader closed!', response);
              }).catch((err) => {
                console.log('Error occured : ', err);
            });
        }
    }
}