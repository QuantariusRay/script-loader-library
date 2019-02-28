import {
  Inject,
  Injectable,
  Output
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable()
export class ScriptLoaderService {
  scriptCreated = false;
  scriptsLoaded = false;

  @Output() scriptLoaded = new Subject();

  constructor(
    @Inject(DOCUMENT) private document: any,
  ) {}

  createScript() {
    if (!this.scriptCreated) {
      const script = this.document.createElement('script');
      script.type = 'text/javascript';
      script.src =  'https://d3js.org/d3.v4.min.js';
      script.onload = this.d3Callback.bind(this);
      this.document.body.appendChild(script);
      return;
    }

    if (this.scriptCreated && this.scriptsLoaded) {
      this.scriptLoaded.next();
    }
  }

  d3Callback() {
    this.scriptsLoaded = true;
    window['d3Callback'] = null;
    this.scriptLoaded.next();
  }
}


