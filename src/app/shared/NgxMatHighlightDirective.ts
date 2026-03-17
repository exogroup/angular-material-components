import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import highlightjs from 'highlight.js/lib/common';

@Directive({
    selector: 'code[ngxMatHighlight]'
})
export class NgxMatHighlightDirective implements AfterViewInit {
    constructor(private eltRef: ElementRef) {
    }
    ngAfterViewInit() {
        const hljs: any = (highlightjs as any).default || highlightjs;
        hljs.highlightElement(this.eltRef.nativeElement);
    }
}
