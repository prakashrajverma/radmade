import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessorBase } from '../../value-accessor-base';

@Component({
  selector: 'th-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: FileComponent, multi: true}]
})
export class FileComponent  extends ValueAccessorBase<string>  {

  value;
  @Input() placeholder: string;
  @Input() fileExtension = '';
  @Input() maxFiles = 1; // 5 files
  @Input() maxSize = 5; // 5MB
  @Output() uploadData = new EventEmitter<File[]>();
  errors: string[] = [];
  onChange($event) {
    const files: File[] = $event.target.files;
    if (files && files.length > 0) {
      this.value = files[0].name;
      if (this.isValidFiles(files)) {
        this.uploadData.emit(files);
      } else {
        this.uploadData.emit(null);
      }
    }
  }
  openUploadModal() {
    alert('openUploadModal');
  }
  removeFiles() {
    this.value = false;
    this.errors = [];
    this.uploadData.emit(null);
  }

  private saveFiles(files) {
    if (this.isValidFiles(files)) {
      return files;
    }
    return null;
  }

  private isValidFiles(files): boolean {
    this.errors = [];
    if (this.isValidNumberOfFiles(files) && this.isValidFileExtension(files) && this.isValidFileSize(files)) {
      return true;
    }
    return false;
  }
  private isValidNumberOfFiles(files): boolean {
    if (files.length > this.maxFiles) {
      this.errors.push(`Error: Only ${this.maxFiles} files can be uploaded at one time.`);
        return false;
    }
    return true;
  }
  private isValidFileExtension(files): boolean {
    if (this.fileExtension === '') {
      return true;
    }
    let validExt = true;
    const extension = this.fileExtension.split(',').map( function(x) { return x.toLocaleLowerCase().trim(); });
    for (let i = 0; i < files.length; i++) {
        const ext = files[i].name.toLowerCase().split('.').pop() || files[i].name;
        const valid = extension.includes(ext);
        if (!valid) {
          this.errors.push(`Error : ${ext} file type is not allowed. It must be ${extension.join(',')}`);
          validExt = false;
          return false;
        }
    }
    return validExt;
  }
  private isValidFileSize(files): boolean {
    for (let i = 0; i < files.length; i++) {
      const fileSizeinMB = files[i].size / (1024 * 1000);
      const size = Math.round(fileSizeinMB * 100) / 100;
      if (size > this.maxSize) {
        this.errors.push(`Error (file size):  ${files[i].name} exceed file size limit of ${this.maxSize}MB`);
        return false;
      }
      return true;
    }
  }
}
