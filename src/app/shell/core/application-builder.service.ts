import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApplicationMetadata } from './application-metadata';

@Injectable({
  providedIn: 'root'
})
export class ApplicationBuilderService {

  private applicationSource = new BehaviorSubject<ApplicationMetadata>(null);

  public get application(): Observable<ApplicationMetadata> {
    return this.applicationSource.asObservable();
  }

  public loadApplication(app: ApplicationMetadata): void {
    this.applicationSource.next(app);
  }
}
