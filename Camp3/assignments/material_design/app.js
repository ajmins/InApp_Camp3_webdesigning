import {MDCTopAppBar} from '@material/top-app-bar';


// Instantiation
const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;
const ripple = new MDCRipple(document.querySelector('.foo-button'));
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
//const topAppBar = new MDCTopAppBar(topAppBarElement);

import {MDCDrawer} from "@material/drawer";
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

import {MDCDataTable} from '@material/data-table';
const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));

import {MDCList} from '@material/list';

const list = new MDCList(document.querySelector('.mdc-list'));
import {MDCMenu} from '@material/menu';

const menu = new MDCMenu(document.querySelector('.mdc-menu'));
menu.open = true;

import {MDCBanner} from '@material/banner';
const banner = new MDCBanner(document.querySelector('.mdc-banner'));
import {MDCSwitch} from '@material/switch';

for (const el of document.querySelectorAll('.mdc-switch')) {
  const switchControl = new MDCSwitch(el);
}

import {MDCTooltip} from '@material/tooltip';
const tooltip = new MDCTooltip(document.querySelector('.mdc-tooltip'));
import {MDCTabBar} from '@material/tab-bar';

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));