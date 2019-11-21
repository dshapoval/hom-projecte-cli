import { Component, OnInit } from '@angular/core';
import { VideoType } from '../enums/video-type.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { YoutubeApiService } from '../../shared/services/youtube-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public videoType = VideoType;
  public form: FormGroup;
  public pageToken: string;

  constructor(
    private formBuilder: FormBuilder,
    private youtubeService: YoutubeApiService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  public initForm(): void {
    this.form = this.formBuilder.group({
      searchText: ['', Validators.required],
      maxResult: ['25', Validators.maxLength(50)],
      type: this.videoType.Video
    }, {updateOn: 'change'});
  }
  public setSearchModel(): any {
    return {
      maxResult: parseInt(this.form.get('maxResult').value, 10),
      type: this.form.get('type').value,
      q: this.form.get('searchText').value,
      pageToken: this.pageToken
    };
  }
  public submit(): void {
    console.log(this.form);
    this.youtubeService.searchVideo(this.setSearchModel()).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }
}
