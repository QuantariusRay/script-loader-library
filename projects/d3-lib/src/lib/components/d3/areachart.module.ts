import { NgModule }             from '@angular/core';
import { D3AreaChartComponent } from './areachart.component';
import { ScriptLoaderModule }   from '../../services/script-loader/script-loader.module';

export * from './areachart.component';

@NgModule({
  imports: [
    ScriptLoaderModule
  ],
  exports: [
    D3AreaChartComponent
  ],
  declarations: [
    D3AreaChartComponent
  ]
})

export class D3AreaChartModule { }
