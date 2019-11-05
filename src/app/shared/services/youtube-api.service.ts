import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppConstants } from '../../app.constants';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  constructor(
    public http: HttpClient
  ) { }

  public bindUrl(url: string): string {
    return AppConstants.YOUTUBE_API_URL + url;
  }

  public getPlaylist(channelId?: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    const part = ['snippet'];
    params = params.append('part', part.join(','));
    params = channelId
      ? params.append('channelId', channelId)
      : params.append('mine', 'true');
    return this.http
      .get(this.bindUrl('/playlists'), {params})
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }
  public getUserLikedVideos(channelId?: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    const part = ['snippet'];
    // const chart  = ['mostPopular'];
    const myRating = ['like']
    params = params.append('part', part.join(','));
    // params = params.append('chart', chart.join(','));
    params = params.append('myRating', myRating.join(','));
    params = channelId
      ? params.append('channelId', channelId)
      : params.append('mine', 'true');
    return this.http
      .get(this.bindUrl('/videos'), {params})
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }

  public getUserSubscriptionsList(channelId?: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    const part = ['snippet', 'contentDetails'];
    const chart  = ['mostPopular'];
    params = params.append('part', part.join(','));
    params = params.append('chart', chart.join(','));
    params = channelId
      ? params.append('channelId', channelId)
      : params.append('mine', 'true');
    return this.http
      .get(this.bindUrl('/subscriptions'), {params})
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }
  public getUserActivities(channelId?: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    const part = ['snippet', 'contentDetails'];
    const chart  = ['mostPopular'];
    params = params.append('part', part.join(','));
    // params = params.append('chart', chart.join(','));
    params = channelId
      ? params.append('channelId', channelId)
      : params.append('mine', 'true');
    return this.http
      .get(this.bindUrl('/activities'), {params})
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }
  public getVideoByChannelId(channelId?: string): Observable<any> { //return last downloaded video from channel
    let params: HttpParams = new HttpParams();
    const part = ['snippet', 'contentDetails', 'id'];
    params = params.append('part', part.join(','));
    params = channelId
      ? params.append('channelId', channelId)
      : params.append('mine', 'false');
    return this.http
      .get(this.bindUrl('/activities'), {params})
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }
}
