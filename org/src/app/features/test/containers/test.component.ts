import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Subject} from "rxjs";

@Component({
  selector: 'app-test',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  list = new Subject();

}
