import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Pipe({
  name: 'youtubeUrl'
})
export class YoutubeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string): SafeResourceUrl {
    const videoId = this.getVideoId(url);
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  private getVideoId(url: string): string {
    const videoIdRegex = /(?:\/embed\/|\/watch\?v=|\/\?v=|youtu\.be\/|\/v\/|\/e\/|\/u\/\w+\/|\/user\/\w+\/|vi?=|v%3D|^youtu\.be\/|\/v\/|u\/\w+\/|embed\/|e\/|watch\?v=|user\/\w+\/|videos\/|vi?=|&v=|\?v=)([^#\&\?]*).*/;
    const match = url.match(videoIdRegex);
    return (match && match[1]) || '';
  }
}
