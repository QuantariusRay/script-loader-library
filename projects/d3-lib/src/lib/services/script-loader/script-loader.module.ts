import {
  NgModule,
} from '@angular/core';
import { ScriptLoaderService } from './script-loader.service';

export * from './script-loader.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    ScriptLoaderService
  ],
})
export class ScriptLoaderModule { }
