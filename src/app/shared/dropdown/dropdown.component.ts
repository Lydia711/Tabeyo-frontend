import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input() items: string[] = [];
  @Input() title: string = "";
  @Output() selectionChange = new EventEmitter<string>();

  selectedItem: string = "";
  isOpen = false;

  selectItem(item: string) {
    this.selectedItem = item;
    this.title = item;;
    this.selectionChange.emit(this.selectedItem);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!(event.target as HTMLElement).closest('.dropdown')) {
      this.isOpen = false;
    }
  }
}
