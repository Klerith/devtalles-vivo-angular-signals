import { AfterViewInit, Component, DestroyRef, EventEmitter, Input, OnDestroy, OnInit, Output, effect, inject, signal } from '@angular/core';


@Component({
  selector: 'signals-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent implements OnDestroy, OnInit {

  // @Input({ required: true })
  @Input()
  public initialValue: number = 10;

  @Output()
  public tickerChanged = new EventEmitter<number>();

  ngOnInit(): void {
    this.ticker.set( this.initialValue );
  }

  // public ticker = signal(this.initialValue || 10);
  public ticker = signal(0);


  // public tickerChangedEffect = effect(() => {
  //   console.log(`Ticker changed: ${ this.ticker() }`);
  //   this.tickerChanged.emit( this.ticker() );
  // }, {
  //   allowSignalWrites: true
  // });

  public myInterval: NodeJS.Timer;



  constructor() {
    this.myInterval = setInterval(() => {
      console.log('interval ticked');
      this.ticker.update( v => v + 1 );
      this.tickerChanged.emit( this.ticker());
    },1000);


    inject(DestroyRef).onDestroy(() => {
      console.log('DestroyRef');
      // clearInterval(myInterval);
    });

    console.log('input:', this.initialValue );
  }
  ngOnDestroy(): void {
    clearInterval( this.myInterval );
    console.log('onDestroy');
  }


}
