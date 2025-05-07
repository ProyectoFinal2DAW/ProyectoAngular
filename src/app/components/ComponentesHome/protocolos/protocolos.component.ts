import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-protocolos',
  standalone: true,
  imports: [],
  templateUrl: './protocolos.component.html',
  styleUrl: './protocolos.component.css'
})
export class ProtocolosComponent implements OnInit {

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }
}
