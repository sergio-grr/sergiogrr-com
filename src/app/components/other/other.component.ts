import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    const gallery = this.el.nativeElement.querySelector('.gallery');
    const images = gallery.querySelectorAll('span');

    // Empezar con las imágenes invisibles
    images.forEach((image: HTMLElement) => {
      gsap.set(image, { opacity: 0 });
    });

    // Animación de fade-in al cargar la página
    gsap.to(images, {
      opacity: 1,
      duration: 1.5,
      stagger: 0.3,
      ease: 'power1.inOut'
    });

    // Efecto de hover
    images.forEach((image: HTMLElement) => {
      this.renderer.listen(image, 'mouseover', () => {
        gsap.to(image, { scale: 2.5, duration: 0.5, ease: 'power1.inOut' });
      });

      this.renderer.listen(image, 'mouseout', () => {
        gsap.to(image, { scale: 1, duration: 0.5, ease: 'power1.inOut' });
      });
    });
  }

}
