import { Routes } from '@angular/router';
import { PageSegments, PageIndex } from './page.index';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSettingsComponent } from './pages/page-settings/page-settings.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { PageSelectPackageComponent } from './pages/page-select-package/page-select-package.component';
import { PageOrderSummaryComponent } from './pages/page-order-summary/page-order-summary.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: PageSegments.order + '/' + PageIndex.selectPackage.relativePath,
    pathMatch: 'full',
  },
  {
    path: PageSegments.sign,
    children: [
      {
        path: PageIndex.signIn.relativePath,
        component: PageSignInComponent,
      },
    ],
  },
  {
    path: PageSegments.register,
    children: [
      {
        path: PageIndex.registerUser.relativePath,
        component: PageRegisterComponent,
      },
    ],
  },
  {
    path: PageSegments.order,
    children: [
      {
        path: PageIndex.selectPackage.relativePath,
        component: PageSelectPackageComponent,
      },
      {
        path: PageIndex.orderSummary.relativePath,
        component: PageOrderSummaryComponent,
      },
    ],
  },
  {
    path: PageSegments.settings,
    children: [
      {
        path: PageIndex.settings.relativePath,
        component: PageSettingsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: PageSegments.order + '/' + PageIndex.selectPackage.relativePath,
  },
];
