import { Component } from '@angular/core';

@Component({
  selector: 'app-accesibilidad',
  templateUrl: './accesibilidad.component.html',
  styleUrls: ['./accesibilidad.component.css']
})
export class AccesibilidadComponent {

  showButtons = false;

  toggleButtons() {
    this.showButtons = !this.showButtons;
  }

  isHighContrastMode = false;
  fontSize = 100;
  text = 'Este es un texto de ejemplo';
  screenReaderEnabled = false;

  speechSynthesisSupported = 'speechSynthesis' in window;
  speechSynthesis: SpeechSynthesis | undefined;
  speechUtterance: SpeechSynthesisUtterance | undefined;
  title: any;

  ngOnInit(): void {
    if (this.speechSynthesisSupported) {
      this.speechSynthesis = window.speechSynthesis;
      this.speechUtterance = new SpeechSynthesisUtterance();
    }
  }

  toggleHighContrast(): void {
    this.isHighContrastMode = !this.isHighContrastMode;
  }

  increaseTextSize(): void {
    this.fontSize += 10;
  }

  decreaseTextSize(): void {
    this.fontSize -= 10;
  }

  changeLanguage(event: any): void {
    const language = event.target.value;
    if (language === 'es') {
      this.text = 'Este es un texto de ejemplo';
    } else if (language === 'en') {
      this.text = 'This is an example text';
    }
  }

  toggleScreenReader(): void {
    if (this.speechSynthesisSupported) {
      if (this.screenReaderEnabled) {
        this.stopSpeech();
      } else {
        this.startSpeech();
      }
    }
  }

  startSpeech(): void {
    if (this.speechSynthesis && this.speechUtterance) {
      this.speechUtterance.text = this.text;
      this.speechSynthesis.speak(this.speechUtterance);
      this.screenReaderEnabled = true;
    }
  }

  stopSpeech(): void {
    if (this.speechSynthesis) {
      this.speechSynthesis.cancel();
      this.screenReaderEnabled = false;
    }
  }
}
