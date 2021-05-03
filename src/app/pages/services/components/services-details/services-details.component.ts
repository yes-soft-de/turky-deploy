import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Service } from '../../model/service.model';
import { StateServices } from '../../store/service.reducer';
import * as stateActions from '../../store/service.actions';
import { serviceDetailsSelector } from '../../store/service.selector';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.scss']
})
export class ServicesDetailsComponent implements OnInit {
  service: Service;
  serviceCommentsList = [];
  rendering = false;
  imagesRendering = false;
  config: any;

  constructor(private store: Store<StateServices>,
              private activatedRoute: ActivatedRoute,
              @Inject(DOCUMENT) private document: Document,
              private render: Renderer2) { }

  ngOnInit(): void {
    const serviceID = this.activatedRoute.snapshot.paramMap.get('id');
    this.store.dispatch(stateActions.loadService({ id: serviceID }));
    this.serviceDetails();
  }

  // Get service Details
  serviceDetails() {
    this.store.select(serviceDetailsSelector).subscribe(
      data => {
        if (data) {
          this.service = data;
          this.serviceCommentsList = data.comments;
          console.log(data);
          this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.serviceCommentsList.length
          };
        }
    });
  }

  // viewImage(element: HTMLDivElement) {
  //   const mainImage = this.document.querySelector('.image-details img');
  //   const mainImageLink = mainImage.getAttribute('src');
  //   const currentImage = element.firstChild as HTMLImageElement;
  //   const currentImageLink = currentImage.getAttribute('src');
  //   // force user to click on the same image for one time
  //   // if (mainImageLink != currentImageLink) {
  //   this.rendering = true;
  //   this.imagesRendering = true;
  //   this.render.setAttribute(currentImage, 'src', mainImageLink);
  //   this.render.setAttribute(mainImage, 'src', currentImageLink);
  //   // }
  // }

  // Check If main image is rendering
  checkImageloaded()  {
    console.log('main Image rendered');
    this.rendering = false;
  }

  // Check if all second images is rendering
  // checkSecondImagesloaded(customId: number) {
  //   // check if last second image is rendering finished
  //   if ((customId + 1) == this.service.images.length) {
  //     // Check If the main image is rendering finish
  //     if (!this.render) {
  //       console.log('rendering all image');
  //       this.imagesRendering = false;
  //     }
  //   }
  // }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
