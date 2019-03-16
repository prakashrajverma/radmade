import { ApplicationMetadata } from './application-metadata';

export class NavigationGroup {
  public id: string;
  public name?: string;
  public navigations: Navigationfilter[];
}

export class Navigationfilter {
  public id: string;
  public name: string;
  public icon?: string;
  public active: boolean;
  public children?: Navigationfilter[];
  public metadata?: ApplicationMetadata;
}
