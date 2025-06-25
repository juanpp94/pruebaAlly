import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss']
})
export class CardFooterComponent {

  @Input() question: string = '';
  @Input() action: string = '';
  @Input() link: string = '';

  constructor(private router: Router) {}

  goTo(link: string) {
    this.router.navigateByUrl(`/${link}`)

  }

}
