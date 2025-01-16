import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-multi-select-dropdown',
  imports: [CommonModule],
  templateUrl: './multi-select-dropdown.component.html',
  styleUrl: './multi-select-dropdown.component.scss'
})
export class MultiSelectDropdownComponent {
  @Input() items: string[] =[];
  @Input() title = 'Select Items';
  @Output() selectionChange = new EventEmitter<Set<string>>();

  selectedItems = new Set<string>();
  isOpen = false;

  toggleItem(label: string): void {
    if (this.selectedItems.has(label)) {
      this.selectedItems.delete(label);
    } else {
      this.selectedItems.add(label);
    }
    this.selectionChange.emit(this.selectedItems);
  }

  formatItem(item: string): string {
    return item
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!(event.target as HTMLElement).closest('.dropdown')) {
      this.isOpen = false;
    }
  }
}
