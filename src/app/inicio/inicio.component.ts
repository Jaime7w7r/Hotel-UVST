import { Component } from '@angular/core';
import { PaginaService } from '../pagina.service';
import { YoutubeUrlPipe } from '../youtube-url.pipe';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private pagina: PaginaService) {
    pagina.setValor('inicio');
  }

  videoUrl: string = 'https://youtu.be/nji5zvkuuFg';


  vermas: boolean = false;

  ver() {
    this.vermas = true;
  }

  nover() {
    this.vermas = false;
  }

  showButtons = false;

  toggleButtons() {
    this.showButtons = !this.showButtons;
  }
  
  isHighContrastMode = false;
  fontSize = 100;
  text = 'BIENVENIDO AL HOTEL UN VERANO SIN TI En Un Verano Sin Ti, nos apasiona crear experiencias memorables para nuestros huéspedes. Somos mucho más que un simple hotel, somos un destino en sí mismo donde los sueños se hacen realidad y los momentos inolvidables se vuelven eternos. En el corazón de nuestro establecimiento, encontrarás una hermosa piscina que te invita a sumergirte en aguas cristalinas y refrescarte bajo el cálido sol. Nuestro oasis acuático es el lugar perfecto para relajarte, nadar y disfrutar de momentos de ocio junto a seres queridos. Para aquellos que desean mantenerse en forma incluso durante las vacaciones, nuestro moderno gimnasio está equipado con equipos de última generación. Desde máquinas cardiovasculares hasta pesas, tendrás todo lo necesario para seguir tu rutina de ejercicios y cuidar tu bienestar físico. Sabemos lo importante que es estar conectado en la era digital, por eso ofrecemos acceso gratuito a internet de alta velocidad en todas nuestras instalaciones. Ya sea para trabajar, compartir tus experiencias o simplemente mantenerte al día con tus seres queridos, estarás siempre conectado. En "Un Verano Sin Ti", nos enorgullece brindar una amplia gama de servicios adicionales para hacer de tu estancia una experiencia completa y satisfactoria. Nuestro equipo amable y dedicado está listo para ayudarte con cualquier solicitud, desde servicios de habitación impecables hasta consejos locales para explorar la belleza de nuestro entorno. En cuanto a la gastronomía, te invitamos a deleitar tu paladar en nuestros restaurantes temáticos, donde chefs talentosos crean platos exquisitos con ingredientes frescos y locales. Cada bocado es una explosión de sabores y una invitación a explorar la diversidad culinaria. En "Un Verano Sin Ti", nuestra misión es superar tus expectativas y brindarte una experiencia hotelera inolvidable. Nos esforzamos por crear un ambiente acogedor y sofisticado donde cada detalle está cuidadosamente diseñado para ofrecerte el máximo confort y disfrute. Bienvenido a "Un Verano Sin Ti", donde la elegancia se fusiona con la hospitalidad y los sueños se convierten en recuerdos duraderos. Estamos aquí para hacer que tus vacaciones sean verdaderamente especiales y transformar tu estancia en una experiencia que desearás revivir una y otra vez.';
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
      this.text = 'BIENVENIDO AL HOTEL UN VERANO SIN TI En Un Verano Sin Ti, nos apasiona crear experiencias memorables para nuestros huéspedes. Somos mucho más que un simple hotel, somos un destino en sí mismo donde los sueños se hacen realidad y los momentos inolvidables se vuelven eternos. En el corazón de nuestro establecimiento, encontrarás una hermosa piscina que te invita a sumergirte en aguas cristalinas y refrescarte bajo el cálido sol. Nuestro oasis acuático es el lugar perfecto para relajarte, nadar y disfrutar de momentos de ocio junto a seres queridos. Para aquellos que desean mantenerse en forma incluso durante las vacaciones, nuestro moderno gimnasio está equipado con equipos de última generación. Desde máquinas cardiovasculares hasta pesas, tendrás todo lo necesario para seguir tu rutina de ejercicios y cuidar tu bienestar físico. Sabemos lo importante que es estar conectado en la era digital, por eso ofrecemos acceso gratuito a internet de alta velocidad en todas nuestras instalaciones. Ya sea para trabajar, compartir tus experiencias o simplemente mantenerte al día con tus seres queridos, estarás siempre conectado. En "Un Verano Sin Ti", nos enorgullece brindar una amplia gama de servicios adicionales para hacer de tu estancia una experiencia completa y satisfactoria. Nuestro equipo amable y dedicado está listo para ayudarte con cualquier solicitud, desde servicios de habitación impecables hasta consejos locales para explorar la belleza de nuestro entorno. En cuanto a la gastronomía, te invitamos a deleitar tu paladar en nuestros restaurantes temáticos, donde chefs talentosos crean platos exquisitos con ingredientes frescos y locales. Cada bocado es una explosión de sabores y una invitación a explorar la diversidad culinaria. En "Un Verano Sin Ti", nuestra misión es superar tus expectativas y brindarte una experiencia hotelera inolvidable. Nos esforzamos por crear un ambiente acogedor y sofisticado donde cada detalle está cuidadosamente diseñado para ofrecerte el máximo confort y disfrute. Bienvenido a "Un Verano Sin Ti", donde la elegancia se fusiona con la hospitalidad y los sueños se convierten en recuerdos duraderos. Estamos aquí para hacer que tus vacaciones sean verdaderamente especiales y transformar tu estancia en una experiencia que desearás revivir una y otra vez.';
    } else if (language === 'en') {
      this.text = 'WELCOME TO HOTEL UN VERANO SIN TI At Un Verano Sin Ti, we are passionate about creating memorable experiences for our guests. We are much more than just a hotel; we are a destination in itself where dreams come true and unforgettable moments become eternal. In the heart of our establishment, you will find a beautiful pool that invites you to immerse yourself in crystal-clear waters and refresh under the warm sun. Our aquatic oasis is the perfect place to relax, swim, and enjoy leisure time with loved ones. For those who wish to stay in shape even during vacations, our modern gym is equipped with state-of-the-art equipment. From cardiovascular machines to weights, you will have everything you need to maintain your exercise routine and take care of your physical well-being. We understand the importance of staying connected in the digital age, which is why we offer free high-speed internet access in all our facilities. Whether its for work, sharing your experiences, or simply staying in touch with your loved ones, you will always be connected. At "Un Verano Sin Ti," we take pride in providing a wide range of additional services to make your stay a complete and satisfying experience. Our friendly and dedicated team is ready to assist you with any request, from impeccable room service to local tips for exploring the beauty of our surroundings. When it comes to gastronomy, we invite you to delight your palate in our themed restaurants, where talented chefs create exquisite dishes with fresh, local ingredients. Every bite is a burst of flavors and an invitation to explore culinary diversity. At "Un Verano Sin Ti," our mission is to exceed your expectations and provide you with an unforgettable hotel experience. We strive to create a welcoming and sophisticated atmosphere where every detail is carefully designed to offer you maximum comfort and enjoyment. Welcome to "Un Verano Sin Ti," where elegance merges with hospitality and dreams turn into lasting memories. We are here to make your vacation truly special and transform your stay into an experience you will want to relive again and again.';
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