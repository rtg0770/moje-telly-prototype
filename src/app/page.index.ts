import { PageBase } from './util/type/page.base';

export enum PageSegments {
  sign = 'sign',
  register = 'create',
  order = 'order',
  settings = 'settings',
}

export enum PageNames {
  signIn = 'account.moje-telly.page.sign.in',
  registerUser = 'account.moje-telly.page.register',
  orderSummary = 'account.moje-telly.page.order-summary',
  selectPackage = 'account.moje-telly.page.select-package', // New entry for Select Packages
  settings = 'account.moje-telly.page.settings',
}

export const PageIndex: { [page in keyof typeof PageNames]: PageBase } = {
  signIn: {
    key: PageNames.signIn,
    relativePath: 'in',
  },
  registerUser: {
    key: PageNames.registerUser,
    relativePath: 'account',
  },
  orderSummary: {
    key: PageNames.orderSummary,
    relativePath: 'summary',
  },
  selectPackage: {
    key: PageNames.selectPackage,
    relativePath: 'select-package',
  },
  settings: {
    key: PageNames.settings,
    relativePath: 'settings',
  },
};
