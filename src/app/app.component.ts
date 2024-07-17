import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    const sections = document.querySelectorAll('.section');

    sections.forEach((section, index) => {
      if (!section.classList.contains('no-scroll-trigger')) {
        gsap.fromTo(section,
          { y: '100%', autoAlpha: 0 },
          {
            y: '0%',
            autoAlpha: 1,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 20%',
              scrub: true,
              onEnter: () => {
                if (index > 0) {
                  gsap.to(sections[index - 1], { y: '-100%', autoAlpha: 0, duration: 1 });
                }
              },
              onLeaveBack: () => {
                if (index > 0) {
                  gsap.to(sections[index - 1], { y: '0%', autoAlpha: 1, duration: 1 });
                }
              }
            }
          }
        );
      }
    });
  }
}
