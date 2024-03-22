import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [
      RouterModule
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {

}
