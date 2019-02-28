import {
  AfterViewInit,
  Component
} from '@angular/core';
import { ScriptLoaderService } from '../../projects/d3-lib/src/lib/services/script-loader/script-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ScriptLoaderService ]
})
export class AppComponent implements AfterViewInit {

  constructor(private scriptLoader: ScriptLoaderService) {
    this.scriptLoader.createScript();
  }

  public ngAfterViewInit() {

  }

  public announce() {
    console.log('successfully loaded d3');
  }

}
