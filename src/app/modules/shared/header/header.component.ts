import { Component, OnInit } from '@angular/core';

import { BreadCrumbItem } from "@progress/kendo-angular-navigation";
import { BadgeAlign, BadgePosition, BadgeShape } from '@progress/kendo-angular-indicators';

const defaultItems: BreadCrumbItem[] = [
  {
    text: "Home",
    title: "Home",
    icon: "home",
  },
  {
    text: "Products",
    title: "Products",
  },
  {
    text: "Computer peripherals",
    title: "Computer peripherals",
  },
  {
    text: "Keyboards",
    title: "Keyboards",
  },
  {
    text: "Gaming keyboards",
    title: "Gaming keyboards",
  },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public items: BreadCrumbItem[] = [...defaultItems];

  public onItemClick(item: BreadCrumbItem): void {
    const index = this.items.findIndex((e) => e.text === item.text);
    this.items = this.items.slice(0, index + 1);
  }

  public refreshBreadCrumb(): void {
    this.items = [...defaultItems];
  }

  public badgeAlign: BadgeAlign = { vertical: 'bottom', horizontal: 'end' };
  public badgePosition: BadgePosition = 'inside';
  public dot: BadgeShape = "dot";

  avatarURL: string = 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png';

  public toggleText = "Hide";
  public show = true;

  public onToggle(): void {
    this.show = !this.show;
    this.toggleText = this.show ? "Hidе" : "Show";
  }

}
