import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WindowRefService } from '@app/_services/window-ref.service';
import { Label } from '@app/models'

@Component({
  selector: 'app-annotorious',
  template: `<img [src]="image" class="annotatable" />`,
  styles: []
})
export class AnnotoriousComponent implements OnInit {
  @Input("img") image: string;
  @Output("tag") labelEmitter: EventEmitter<Label> = new EventEmitter<Label>();

  constructor(private windowRef: WindowRefService) { }

  ngOnInit() {
    this.setUpListener()
  }

  setUpListener(): void {
    var self = this
    document.addEventListener("DOMContentLoaded", function() {
      self.windowRef.nativeWindow.anno.addHandler('onAnnotationCreated', function(annotation) {
        var newLabel = <Label> {
          name: annotation.text,
          x: annotation.shapes[0].geometry.x,
          y: annotation.shapes[0].geometry.y,
          width: annotation.shapes[0].geometry.width,
          height: annotation.shapes[0].geometry.height
        }
        console.log("new label", newLabel);
        self.labelEmitter.emit(newLabel);
      });
    });
  }

}
