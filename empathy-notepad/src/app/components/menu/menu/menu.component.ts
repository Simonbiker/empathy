import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CircleCheckedIcon } from '../../../shared/icons/circle-checked-icon/circle-checked-icon';

interface QuestionType {
  key: string;
  label: string;
  isDefault?: boolean;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, CircleCheckedIcon],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  @Output() typeSelected = new EventEmitter<string>();

  public isOpen: boolean = false;
  public searchTerm: string = '';
  public selectedKey: string | null = null;

  public allTypes: QuestionType[] = [
    { key: 'search', label: 'Search' }, // Placeholder for the search input
    { key: 'single_choice', label: 'Single Choice', isDefault: true },
    { key: 'multiple_choice', label: 'Multiple Choice' },
    { key: 'single_line', label: 'Single-Line Input' },
    { key: 'dropdown', label: 'Dropdown List' }
  ];

  iconMap: { [key: string]: string } = {
    'single_choice': 'single-choice.svg',
    'multiple_choice': 'multiple-choice.svg',
    'single_line': 'single-line.svg',
    'dropdown': 'dropdown.svg'
  };

  public filteredTypes: QuestionType[] = [];
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.filterList();
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
    // Restart search when menu opens 
      this.searchTerm = '';
      this.filterList(); 
    }
  }

  filterList(): void {
    const term = this.searchTerm.toLowerCase();
    
    this.filteredTypes = this.allTypes.filter(type => 
      type.key !== 'search' && type.label.toLowerCase().includes(term)
    );
  }

  selectType(key: string): void {
    this.selectedKey = key;
    this.typeSelected.emit(key);
    this.isOpen = false; // Close menu after selection
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.isOpen && !this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

}
