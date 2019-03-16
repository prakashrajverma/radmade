import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) { }
  transform(value): SafeResourceUrl {
    return this.sanitized.bypassSecurityTrustResourceUrl(value || '');
  }

}
