import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@Component({
  selector: 'app-noodsituatie',
  templateUrl: './noodsituatie.page.html',
  styleUrls: ['./noodsituatie.page.scss'],
})
export class NoodsituatiePage implements OnInit {

  constructor(private callNumber: CallNumber) { }

  bellNoodnummer(){
      this.callNumber.callNumber('+32474261401', true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
  }
      voegNoodnummerToeAanContacten(){
        // to do
      }
    voeginternationaalNoodnummerToeAanContacten(){
        // to do
    }

  ngOnInit() {
  }

}
