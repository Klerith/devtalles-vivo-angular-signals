import { Component } from '@angular/core';

@Component({
  templateUrl: './signals-layout.component.html',
  styleUrls: ['./signals-layout.component.css']
})
export class SignalsLayoutComponent {

  public items = [
    {
      label: 'Ejemplos',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'Ejemplo #1',
          icon: 'pi pi-fw pi-plus',
          routerLink: 'example-1',
        },
        {
          label: 'Ejemplo #1',
          icon: 'pi pi-fw pi-trash',
          routerLink: 'example-2',
        },
        {
          separator: true
        },
        {
          label: 'Export',
          icon: 'pi pi-fw pi-external-link'
        }
      ]
    },

  ];

}
