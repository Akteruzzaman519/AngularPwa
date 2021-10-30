import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PWA';
  readonly VAPID_PULIC_KEY = "BLvAVuGIscNJmIj5XWS4Wlp6IOQncwDY8-1E3A82OF9ftZBq1soEVZt7AF_P8eos_0VNBNh6BkBInzuV5PzWwbs";
  constructor(private swUpdate: SwUpdate, private swPush: SwPush) { }
  ngOnInit(): void {

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm("New version available. Load New Version?")) {
          window.location.reload();
        }
      });
    }

  }

  subscribeToNotification() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PULIC_KEY
    }).then(
      sub => {
        console.log("notification Subscribtion", sub)
        
      }
    ).catch(
      err => {
        console.error("could not subscribe to notification", err)
      }
    )
  }
  sendNewsletter() {

  }
}
