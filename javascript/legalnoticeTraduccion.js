// Traducciones
const traducciones = {
    'titulo': {
      'es': 'Aviso legal',
      'en': 'Legal notice'
    },
    'inicio': {
      'es': 'Inicio',
      'en': 'Home'
    },
    'pagina': {
      'es': 'Páginas',
      'en': 'Pages'
    },
      'aboutcompany': {
        'es': 'Sobre la compañia',
        'en': 'About company'
      },
      'platform': {
        'es': 'Plataforma',
        'en': 'Platform'
      },
      'commingsoon': {
        'es': 'Muy pronto',
        'en': 'Comming soon'
      },
      'creditos': {
        'es': 'Creditos de carbono',
        'en': 'Carbon credits'
      },
      'certificate': {
        'es': 'Certificado de Autenticidad',
        'en': 'Certificate of Authenticity'
      },
      'elements': {
        'es': 'Contacto',
        'en': 'Contact'
      },
      'teammembers': {
        'es': 'Miembros del equipo',
        'en': 'Team Members'
      },
      'contactform': {
        'es': 'Formulario de contacto',
        'en': 'Contact form'
      },
      'legal': {
        'es': 'Aviso legal',
        'en': 'Legal notice'
      },
      'home1': {
        'es': 'Inicio',
        'en': 'Home'
      },
      'legal1': {
        'es': 'Aviso legal',
        'en': 'Legal notice'
      },
      'subtitulo1': {
        'es': 'Aviso legal',
        'en': 'Legal notice'
      },
      'texto1': {
        'es': 'ACTUALIZADO EN MAYO DE 2023.',
        'en': 'UPDATED ON MAY 2023.'
      },
      'texto2': {
        'es': 'Editor:',
        'en': 'Publisher:'
      },
      'texto3': {
        'es': 'Nombre legal: Patagonia Hashers LLC.',
        'en': 'Legal name: Patagonia Hashers LLC.'
      },
      'texto4': {
        'es': 'Numero de registro: (EIN) 30-1334867',
        'en': 'Registration number: (EIN) 30-1334867'
      },
      'texto5': {
        'es': 'VAT: LU29932821.',
        'en': 'VAT: LU29932821.'
      },
      'texto6': {
        'es': 'Email: hello@tokensur.com.',
        'en': 'Email: hello@tokensur.com'
      },
      'texto7': {
        'es': 'Sede: 88255 Southwest Gemini Drive, Beaverton, Oregon 97008, USA',
        'en': 'Headquarters: 88255 Southwest Gemini Drive, Beaverton, Oregon 97008, USA'
      },
      'texto8': {
        'es': 'Oficina de Argentina: Parque Empresarial Científico y Tecnológico Austral, Avenida Sargento Mayor.',
        'en': 'The Argentina office: Parque Empresarial Científico y Tecnológico Austral, Avenida Sargento Mayor.'
      },
      'texto9': {
        'es': 'Cayetano Beliera 3025 (RN8)  B1629, Pilar, Buenos Aires AR. Edificio M3, Oficina 2 Planta Baja.',
        'en': 'Cayetano Beliera 3025 (RN8)  B1629, Pilar, Buenos Aires AR. Edificio M3, Oficina 2 Planta Baja.'
      },
      'texto10': {
        'es': 'Representada por Christian Fernandez, Fundador y CEO de Patagonia Hashers LLC (Tokensur)',
        'en': 'Represented by Christian Fernandez, Founder and CEO of Patagonia Hashers LLC (Tokensur)'
      },
      'texto11': {
        'es': 'Alojamiento web',
        'en': 'Web hosting'
      },
      'texto12': {
        'es': 'Oficina central: 1201 North Market Street, Suite 111-F69, Wilmington, DE 19801, United States',
        'en': 'Head Office: 1201 North Market Street, Suite 111-F69, Wilmington, DE 19801, United States'
      },
      'texto13': {
        'es': 'Creditos de imagen',
        'en': 'Image credits'
      },
      'footer1': {
        'es': 'Inicio',
        'en': 'Home'
      },
      'footer2': {
        'es': 'Sobre la compañía',
        'en': 'About company'
      },
      'footer3': {
        'es': 'Plataforma',
        'en': 'Platform'
      },
      'footer4': {
        'es': 'Muy pronto',
        'en': 'Commingsoon'
      },
      'footer-pol': {
        'es': 'Politica de privacidad',
        'en': 'Privacy Policy'
      },
      'footer5': {
        'es': 'Marketplace',
        'en': 'Marketplace'
      },
      'footer6': {
        'es': 'Miembros del equipo',
        'en': 'Team members'
      },
      'footer7': {
        'es': 'Formulario de contacto',
        'en': 'Contact form'
      },
      'footer8': {
        'es': 'Agendá una reunión',
        'en': 'Scheudle a meeting'
      },
      'footer9': {
        'es': 'Terminos de uso',
        'en': 'Terms of use'
      },
      'footer10': {
        'es': 'Aviso legal',
        'en': 'Legal notice'
      },
      
  
  
  };
  
  function cambiarIdioma(idioma) {
    localStorage.setItem('idioma', idioma);
    aplicarTraducciones();
   }
  
  // Función para cambiar el idioma
    function aplicarTraducciones() {
    const idioma = localStorage.getItem('idioma') || 'es';
    document.getElementById('titulo').innerHTML = traducciones['titulo'][idioma];
    document.getElementById('inicio').innerHTML = traducciones['inicio'][idioma];
    document.getElementById('pagina').innerHTML = traducciones['pagina'][idioma];
    document.getElementById('aboutcompany').innerHTML = traducciones['aboutcompany'][idioma];
    document.getElementById('platform').innerHTML = traducciones['platform'][idioma];
    document.getElementById('commingsoon').innerHTML = traducciones['commingsoon'][idioma];
    document.getElementById('creditos').innerHTML = traducciones['creditos'][idioma];
    document.getElementById('certificate').innerHTML = traducciones['certificate'][idioma];
    document.getElementById('elements').innerHTML = traducciones['elements'][idioma];
    document.getElementById('teammembers').innerHTML = traducciones['teammembers'][idioma];
    document.getElementById('contactform').innerHTML = traducciones['contactform'][idioma];
    document.getElementById('legal').innerHTML = traducciones['legal'][idioma];
    document.getElementById('home1').innerHTML = traducciones['home1'][idioma];
    document.getElementById('legal1').innerHTML = traducciones['legal1'][idioma];
    document.getElementById('subtitulo1').innerHTML = traducciones['subtitulo1'][idioma];
    document.getElementById('texto1').innerHTML = traducciones['texto1'][idioma];
    document.getElementById('texto2').innerHTML = traducciones['texto2'][idioma];
    document.getElementById('texto3').innerHTML = traducciones['texto3'][idioma];
    document.getElementById('texto4').innerHTML = traducciones['texto4'][idioma];
    document.getElementById('texto5').innerHTML = traducciones['texto5'][idioma];
    document.getElementById('texto6').innerHTML = traducciones['texto6'][idioma];
    document.getElementById('texto7').innerHTML = traducciones['texto7'][idioma];
    document.getElementById('texto8').innerHTML = traducciones['texto8'][idioma];
    document.getElementById('texto9').innerHTML = traducciones['texto9'][idioma];
    document.getElementById('texto10').innerHTML = traducciones['texto10'][idioma];
    document.getElementById('texto11').innerHTML = traducciones['texto11'][idioma];
    document.getElementById('texto12').innerHTML = traducciones['texto12'][idioma];
    document.getElementById('texto13').innerHTML = traducciones['texto13'][idioma];
    document.getElementById('footer1').innerHTML = traducciones['footer1'][idioma];
    document.getElementById('footer2').innerHTML = traducciones['footer2'][idioma];
    document.getElementById('footer3').innerHTML = traducciones['footer3'][idioma];
    document.getElementById('footer4').innerHTML = traducciones['footer4'][idioma];
    document.getElementById('footer-pol').innerHTML = traducciones['footer-pol'][idioma];
    document.getElementById('footer5').innerHTML = traducciones['footer5'][idioma];
    document.getElementById('footer6').innerHTML = traducciones['footer6'][idioma];
    document.getElementById('footer7').innerHTML = traducciones['footer7'][idioma];
    document.getElementById('footer8').innerHTML = traducciones['footer8'][idioma];
    document.getElementById('footer9').innerHTML = traducciones['footer9'][idioma];
    document.getElementById('footer10').innerHTML = traducciones['footer10'][idioma];
  }
  
  // EventListeners para los botones
  document.getElementById('btn-es').addEventListener('click', function() {
    cambiarIdioma('es');
  });
  
  document.getElementById('btn-en').addEventListener('click', function() {
    cambiarIdioma('en');
  });
  
  window.addEventListener('DOMContentLoaded', function() {
    aplicarTraducciones();
  });