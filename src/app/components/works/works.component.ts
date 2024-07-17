import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements AfterViewInit {

  ngAfterViewInit() {
    const section = document.querySelector('.centered-section4') as HTMLElement;
    const title = document.querySelector('.works-title') as HTMLElement;
    const items = document.querySelectorAll('.work-item');

    const options = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
          title.style.opacity = '1';
          title.style.transform = 'translateY(0)';

          items.forEach((item, index) => {
            const htmlItem = item as HTMLElement;
            setTimeout(() => {
              htmlItem.style.opacity = '1';
              htmlItem.style.transform = 'scale(1)';
            }, index * 200); // Staggered animation
          });

          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(section);
  }
}
