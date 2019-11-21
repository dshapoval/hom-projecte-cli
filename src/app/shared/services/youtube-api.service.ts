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

  public getVideoById(videoId: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    const part = ['player'];
    params = params.append('part', part.join(','));
    params = params.append('id', videoId)
    return this.http
      .get(this.bindUrl('/videos'), {params})
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
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

  public getUserLikedVideos(maxResults?: string, pageToken?: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    const part = ['snippet', 'player'];
    const myRating = ['like'];
    params = params.append('part', part.join(','));
    params = params.append('myRating', myRating.join(','));
    params = params.append('mine', 'true');
    params = maxResults
      ? params.append('maxResults', maxResults)
      : params.append('maxResult', '5');
    params = pageToken ? params.append('pageToken', pageToken) : params;
    return this.http
      .get(this.bindUrl('/videos'), {params})
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }

  public getPopularVideo( chart: string, regionCode: string, maxResults?: string, nextPageToken?: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    const part = ['snippet', 'player'];
    params = params.append('part', part.join(','));
    params = params.append('chart', chart);
    params = params.append('regionCode', regionCode);
    params = maxResults
      ? params.append('maxResults', maxResults)
      : params.append('maxResult', '5');
    params = nextPageToken
      ? params.append('maxResults', maxResults)
      : params;
    return this.http
      .get(this.bindUrl('/videos'), {params})
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }

  public getUserSubscriptionsList(channelId?: string, maxResults?: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    const part = ['snippet', 'contentDetails'];
    const chart  = ['mostPopular'];
    params = params.append('part', part.join(','));
    params = params.append('chart', chart.join(','));
    params = maxResults
      ? params.append('maxResults', maxResults)
      : params.append('maxResults', '5');
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

  public getVideoByChannelId(channelId?: string, maxResults?: string, pageToken?: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    const part = ['snippet, contentDetails'];
    params = params.append('part', part.join(','));
    params = channelId
      ? params.append('channelId', channelId)
      : params.append('mine', 'false');
    if (pageToken) {
      params =  params.append('pageToken', pageToken);
    }
    params = params.append('maxResults', maxResults);
    return this.http
      .get(this.bindUrl('/activities'), {params})
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }
  public createUriParams(data: any): HttpParams {
    let params = new HttpParams();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (data[key]) {
          params = params.append(key, data[key]);
        }
      }
    }
    return params;
  }

  public searchVideo(searhPrams?): Observable<any> {
    let params: HttpParams = new HttpParams();
    const part = ['snippet'];
    console.log(typeof searhPrams.maxResult)
    params = this.createUriParams(searhPrams);
    params = params.append('part', part.join(','));
    params =  params.append('relevanceLanguage', 'ru');

    return this.http
      .get(this.bindUrl('/search'), {params})
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }
}
