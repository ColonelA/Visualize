class Node { 
    constructor(options) { 
      this.setAttrs(options);
    } 
     
    bindCtx(ctx) {  
      this.ctx = ctx;
    } 

    appendChild(child) {
      if (child.parent) {
          this.children.parent.removeChild(child);
          child.parent = this;
      }
      this.children.push(child);
    } 
     
    
  hasChildren() {
    return this.children && this.children.length > 0;
 } 

  removeChild(child) {
    this.children.splice(this.children.indexOf(child), 1);
    child.parent = null;
  } 

  removeAllChild() {
    this.children.forEach(child => {
      child.parent = null;
    });
    this.children = [];
  } 

  getChild(index) {
    return this.children[index];
  }
 
  onClick() {}

  onHover() {}

  onHoverOut() {}

  onMouseWheel() {}

  onDragEnd() {}

  onDragStart() {} 

  onDrag(x, y) {   
    this.setAttrs({x, y});
  } 
    
  setAttrs(attrs) {    
    for (const key in attrs) {  
       this[key] = attrs[key];
    }
  }   

}