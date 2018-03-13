import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ToolsGridComponent } from './components/tools-grid/tools-grid.component';
import { ToolsBarComponent } from './components/tools-bar/tools-bar.component';
import { ToolsAboComponent } from './components/tools-abo/tools-abo.component';


@NgModule({
	declarations: [
		ToolsGridComponent,
		ToolsBarComponent,
		ToolsAboComponent
	],
	imports: [
		IonicModule
	],
	exports: [
		ToolsGridComponent,
		ToolsBarComponent,
		ToolsAboComponent
    ],
    providers:[]
})
export class ToolsComponentModule {
	constructor(){
		console.log('ToolsComponentModule constructor');
	}
}
