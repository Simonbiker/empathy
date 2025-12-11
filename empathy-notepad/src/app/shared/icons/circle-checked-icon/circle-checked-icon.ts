import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
      selector: 'app-circle-checked-icon',
      standalone: true,
      imports: [CommonModule],
      styleUrls: ['./circle-checked-icon.css'],
      template: '<div class="svg-wrapper" [innerHTML]="svgContent"></div>'
})

export class CircleCheckedIcon implements OnInit {
      @Input({required: true}) name!: string;
      // @Input() src: string = 'assets/icons/circle-checked.svg';

      svgContent: SafeHtml | null = null;
      private readonly assetPath: string = 'icons/';


      constructor(
            private http: HttpClient,
            private sanitizer: DomSanitizer
      ) {}

      ngOnInit(): void {
            if (!this.name) return;

            const fullUrl = `${this.assetPath}${this.name}`;
            
            this.http.get(fullUrl, { responseType: 'text' }).subscribe({
                  next: (svgText) => {
                        // Sanitize the content before injecting it into the DOM
                        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svgText);
                  },
                  error: (error) => {
                        console.error('Error loading SVG:', error);
                        this.svgContent = null;
                  }
            });
      }
}