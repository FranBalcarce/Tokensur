// Traducciones
const traducciones = {
  'titulo': {
    'es': 'Formulario de contacto',
    'en': 'Contact form'
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
      'investment': {
        'es': 'Oportunidades de inversión',
        'en': 'Investment Opportunitties'
      },
      'marketplace': {
        'es': 'Marketplace',
        'en': 'Marketplace'
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
      'formulario': {
        'es': 'Formulario de contacto',
        'en': 'Contact form'
      },
      'home1': {
        'es': 'Inicio',
        'en': 'Home'
      },
      'element1': {
        'es': 'Elementos',
        'en': 'Elements'
      },
      'contact': {
        'es': 'Formulario de contacto',
        'en': 'Contact form'
      },
      'nombre': {
        'es': 'Nombre completo <span>*</span>',
        'en': 'Full name <span>*</span>'
      },
      'email': {
        'es': 'Correo electronico <span>*</span>',
        'en': 'Email <span>*</span>'
      },
      'message': {
        'es': 'Mensaje',
        'en': 'Message'
      },
      'send': {
        'es': 'Enviar mensaje',
        'en': 'Send message'
      },
      'footer1': {
        'es': 'Inicio',
        'en': 'Home'
      },
      'footer2': {
        'es': 'Sobre la compañia',
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
    document.getElementById('investment').innerHTML = traducciones['investment'][idioma];
    document.getElementById('marketplace').innerHTML = traducciones['marketplace'][idioma];
    document.getElementById('elements').innerHTML = traducciones['elements'][idioma];
    document.getElementById('teammembers').innerHTML = traducciones['teammembers'][idioma];
    document.getElementById('contactform').innerHTML = traducciones['contactform'][idioma];
    document.getElementById('formulario').innerHTML = traducciones['formulario'][idioma];
    document.getElementById('home1').innerHTML = traducciones['home1'][idioma];
    document.getElementById('element1').innerHTML = traducciones['element1'][idioma];
    document.getElementById('contact').innerHTML = traducciones['contact'][idioma];
    document.getElementById('nombre').innerHTML = traducciones['nombre'][idioma];
    document.getElementById('email').innerHTML = traducciones['email'][idioma];
    document.getElementById('message').innerHTML = traducciones['message'][idioma];
    document.getElementById('send').innerHTML = traducciones['send'][idioma];
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