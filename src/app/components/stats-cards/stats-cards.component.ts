import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-cards',
  templateUrl: './stats-cards.component.html',
  styleUrls: ['./stats-cards.component.scss']
})
export class StatsCardsComponent implements OnInit {

  constructor() { }
  @Input() BgColor: string='';
  @Input() Topic: string='';
  @Input() Icon: string='';
  @Input() Stats: string='';
  @Input() Count: number= 0; 
  bgColor: string = '';
  topic: string = '';
  icon: string = '';
  stats: string = '';
  count: number = 0;
  ngOnInit(): void {
  }
  ngOnChanges() {
    this.bgColor = this.BgColor;
    this.topic = this.Topic;
    this.stats = this.Stats;
    this.icon = this.Icon;
    this.count = this.Count;
  }
}
