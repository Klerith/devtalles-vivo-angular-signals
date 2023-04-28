import { Component, DestroyRef, computed, effect, inject, signal } from '@angular/core';

@Component({
  selector: 'signals-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.css']
})
export class EffectsComponent {

  public myEffect1 = effect(() => {
    console.log('myEffect1');
    console.log('Counter2 changed', this.counter2());
  });

  public myEffect2 = effect(() => {
    console.log('counter 1 + 2: ', this.counter1() + this.counter2() );
  });


  public counter1 = signal(1);
  public counter2 = signal(1);

  public result = computed(() => this.counter1() + this.counter2());


  private myInterval = setInterval(() => {
    console.log('tick');
    this.counter1.update( v => v + 1 );
  },2000)


  constructor() {
    inject(DestroyRef).onDestroy(() =>{
      clearInterval(this.myInterval);
      console.log('interval destroyed');
    })
  }

  increaseCounter2() {
    this.counter2.update( v => v + 1);
  }

  stopEffects() {
    this.myEffect1.destroy();
    this.myEffect2.destroy();
  }

  reviveEffect() {
    //! No se puede
    this.myEffect2 = effect(() => {
      console.log('counter 1 + 2: ', this.counter1() + this.counter2() );
    })
  }

}
