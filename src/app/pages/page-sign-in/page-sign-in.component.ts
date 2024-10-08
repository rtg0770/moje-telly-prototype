import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JustLogoComponent } from '../../ui/just-logo/just-logo.component';
import { DownloadAppComponent } from '../../ui/download-app/download-app.component';

@Component({
  selector: 'page-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, JustLogoComponent, DownloadAppComponent],
  templateUrl: './page-sign-in.component.html',
  styleUrl: './page-sign-in.component.scss',
})
export class PageSignInComponent {}
