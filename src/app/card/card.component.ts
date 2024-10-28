import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  @Input() titulo: string='';
  @Input() icono: string='';
  constructor(){}
  ngOnInit(): void {
    
  }

}
