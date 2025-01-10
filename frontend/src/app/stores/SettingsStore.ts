import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { ICase, IProject, ISetting, ISettingContent } from "../types/settings";
import { AppClient } from "../services/AppClient";

@Injectable( {
  providedIn: 'root'
} )
export class SettingsStore {
  _settings: BehaviorSubject<ISetting | null> = new BehaviorSubject<ISetting | null>( null );

  get config(): Observable<ISetting | null> {
    return this._settings.asObservable();
  }

  get projects(): Observable<IProject[] | undefined> {
    return this._settings.asObservable().pipe( map( r => r?.projects ) );
  }

  get cases(): Observable<ICase[] | undefined> {
    return this._settings.asObservable().pipe( map( r => r?.cases ) );
  }

  get content(): Observable<ISettingContent | undefined> {
    return this._settings.asObservable().pipe( map( r => r?.content ) );
  }

  constructor( private http: AppClient ) {
    this.http.get<ISetting>( '/settings' ).subscribe( ( response ) => {
      this._settings.next( response );
    } )
  }
}
