import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './services/data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-thema',
  templateUrl: './thema.page.html',
  styleUrls: ['./thema.page.scss'],
})
export class ThemaPage implements OnInit {
  public chapter;
  constructor(private route: ActivatedRoute, private dataService: DataService, public alertController: AlertController) { }

  ngOnInit() {
    const title = this.route.snapshot.paramMap.get('title');
    this.chapter = this.dataService.getchapterBytitle(title);
  }

  async presentAlert(why) {
    const alert = await this.alertController.create({
      header: 'Waarom?',
      message: why,
      buttons: ['OK']
    });

    await alert.present();
  }

}
