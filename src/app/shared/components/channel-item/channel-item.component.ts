import { Component, Input, OnInit } from '@angular/core';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-channel-item',
  templateUrl: './channel-item.component.html',
  styleUrls: ['./channel-item.component.scss']
})
export class ChannelItemComponent implements OnInit {

  @Input() public item: any;

  constructor(
    private youtubeApiService: YoutubeApiService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
  }

  public sanitizedUrl(id): SafeResourceUrl|string {
    const url = `https://www.youtube.com/embed/${id}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
