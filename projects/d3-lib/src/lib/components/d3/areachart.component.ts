import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';
import { ScriptLoaderService } from '../../services/script-loader/script-loader.service';

declare const d3;

@Component({
  selector: 'd3-areachart',
  templateUrl: './areachart.component.html',
  styles: [`
    .axis path,
    .axis line {
      fill: none;
      stroke: #000;
      shape-rendering: crispEdges;
    }
    .x.axis path {
      display: none;
    }
    .area {
      fill: steelblue;
    }
  `]
})
export class D3AreaChartComponent implements AfterViewInit {

  @Output() public loaded = new EventEmitter();
  @Output() public reload = new EventEmitter();


  /**
   * @desc Element Reference to this component.
   */
  @ViewChild('chart') public chart: ElementRef;

  constructor(public scriptLoader: ScriptLoaderService) {}

  ngAfterViewInit() {
    if (this.scriptLoader.scriptsLoaded) {
      this.drawChart();
    } else {

      this.scriptLoader.scriptLoaded.subscribe(() => {
        this.drawChart().then(() => {
          this.loaded.emit();
        });
      });
    }
  }

  public drawChart() {
    // Your code here


    return Promise.resolve();
  }
}

