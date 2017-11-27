import { Component, Input, TemplateRef } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';

@Component({
  selector: 'TreeNodeContent',
  template: `<span *ngIf="!template">{{ node.displayField }}</span>
  <ng-template
    [ngTemplateOutlet]="template"
    [ngTemplateOutletContext]="{ $implicit: node, node: node, index: index }">
  </ng-template>`,
})
export class TreeNodeContent {
  @Input() node: TreeNode;
  @Input() index: number;
  @Input() template: TemplateRef<any>;
}
