import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './example1-page.component.html',
  styleUrls: ['./example1-page.component.css']
})
export class Example1PageComponent {

  // Basico
  public counter = signal(10);
  //! Equal function:
  //! block update of signal’s value;
  //! skip change propagation.
  public isEven = computed(()=> this.counter() % 2 === 0 );

  increaseCounter() {
    this.counter.update( c => c + 1);
  }

  // Personas
  public person1 = signal({
    name: 'Fernando',
    email: 'fernando@google.com',
  });

  public person2 = signal({
    name: 'Juan',
    email: 'juan@google.com',
  });

  setPersonValues() {
    const object = {
      name: 'Melissa',
      email: 'melissa@gmail.com'
    }

    this.person1.set(object);
    this.person2.set(object);
  }

  // ! Ejercicio con efectos
  public currentTicker = signal(5);
  public showTicker = signal(false);

  onTickerChanged( value: number ) {
    this.currentTicker.set( value );
  }

  toogleTicker() {
    this.showTicker.update( v => !v );
  }

}
