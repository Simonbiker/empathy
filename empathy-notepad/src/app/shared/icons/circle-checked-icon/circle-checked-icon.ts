import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
      selector: 'app-circle-checked-icon',
      standalone: true,
      imports: [CommonModule],
      styleUrls: ['./circle-checked-icon.css'],
      template: `
        <img [src]="iconPath" 
             alt="Question Type Icon">
      `
})

export class CircleCheckedIcon implements OnInit {
      @Input({required: true}) name!: string;

      svgContent: SafeHtml | null = null;

      public iconPath!: string;
      private readonly assetsBase: string = '/assets/icons/';


      constructor(
            private http: HttpClient,
            private sanitizer: DomSanitizer
      ) {}

      ngOnInit(): void {
            if (!this.name) return;

            this.iconPath = `${this.assetsBase}${this.name}`;
      }
}