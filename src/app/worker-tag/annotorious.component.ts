import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { WindowRefService } from '@app/_services/window-ref.service';
import { Label } from '@app/models'

@Component({
  selector: 'app-annotorious',
  template: `<img [src]="image" width="720px" class="annotatable"/>`,
  styles: []
})
export class AnnotoriousComponent implements OnInit, OnChanges {
  @Input("img") image: string;
  @Output("tag") labelEmitter: EventEmitter<Label> = new EventEmitter<Label>();

  constructor(private windowRef: WindowRefService) { }

  ngOnInit() {
    this.setUpListener()
  }

  ngOnChanges(changes: SimpleChanges) {
    var hasImageChanged = changes.image;
    if (hasImageChanged) {
      this.removeAll();
    }
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
        self.labelEmitter.emit(newLabel);
      });
    });
  }

  removeAll(): void {
    this.windowRef.nativeWindow.anno.removeAll();
  }

}
