import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TreeNode } from '../models/tree-node.model';

@Component({
  selector: 'TreeNodeChildren',
  encapsulation: ViewEncapsulation.None,
  styles: [
    '.tree-children.tree-children-no-padding { padding-left: 0 }',
    '.tree-children { padding-left: 20px }'
  ],
  template: `
    <div [class.tree-children]="true"
         [class.tree-children-no-padding]="node.options.levelPadding"
         *ngIf="node.isExpanded">
      <div *ngIf="node.children">
        <TreeNode
          *ngFor="let node of node.children"
          [node]="node"
          [index]="node.index"
          [templates]="templates">
        </TreeNode>
      </div>
      <LoadingComponent
        [style.padding-left]="node.getNodePadding()"
        class="tree-node-loading"
        *ngIf="!node.children"
        [template]="templates.loadingTemplate"
      ></LoadingComponent>
    </div>
  `
})
export class TreeNodeChildrenComponent {
  @Input() node: TreeNode;
  @Input() templates: any;
}
