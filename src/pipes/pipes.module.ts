import { NgModule } from '@angular/core';
import { MomentPipe } from './moment/moment';
import { SearchPipe } from './search/search';
import { SortPipe } from './sort/sort';
@NgModule({
	declarations: [MomentPipe,
    SearchPipe,
    SortPipe],
	imports: [],
	exports: [MomentPipe,
    SearchPipe,
    SortPipe]
})
export class PipesModule {}
