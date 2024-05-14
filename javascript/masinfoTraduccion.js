// Traducciones
const traducciones = {
    'titulo': {
      'es': 'Más información',
      'en': 'More information'
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
      'homeimage': {
        'es': 'Tokenizá y conseguí inversiones de miles de personas',
        'en': 'Tokenize and get investments from thousands of people'
      },
      'subtitulop': {
        'es': 'Nuestros servicios de tokenización',
        'en': 'Our tokenization services'
      },
      'tokeniza1': {
        'es': 'Tokenización de activos',
        'en': 'Asset Tokenization <br> <br>'
      },
      'tokeniza2': {
        'es': 'Tokenizamos tu empresa a través de nuestra plataforma para que puedas conseguir capital, financiación y liquidez.',
        'en': 'We tokenize your company through our platform so that you can get capital, financing and liquidity.'
      },
      'btn-contactanos': {
        'es': 'Contactanos',
        'en': 'Contact us'
      },
      'value': {
        'es': 'Tu propia plataforma',
        'en': 'Your own platform'
      },
      'valuep': {
        'es': 'Lográ liquidez en tu propia plataforma donde tienes el control de todo.',
        'en': 'Get liquidity on your own platform where you have control of everything.'
      },
      'btn-masinfo': {
        'es': 'Más información',
        'en': 'More information'
      },
      'h3nuestro': {
        'es': 'NUESTRO SERVICIO DE TOKENIZACIÓN Y GESTIÓN DE ACTIVOS',
        'en': 'OUR TOKENIZATION AND ASSET MANAGEMENT SERVICE'
      },
      'tokenization': {
        'es': 'Tokenización',
        'en': 'Tokenization'
      },
      'tokenizationp': {
        'es': 'Convertimos tus activos reales en activos digitales que luego puedes vender a cambio de futuros ingresos para tu inversor.',
        'en': 'We convert your real assets into digital assets that you can later sell in exchange for future income for your investor.'
      },
      'publicacion': {
        'es': 'Publicación',
        'en': 'Publication'
      },
      'publicacionp': {
        'es': 'Te proporcionamos las herramientas necesarias para que construyas tu espacio o dashboard donde tus inversores puedan acceder a los tokens ofrecidos.',
        'en': 'We provide you with the necessary tools to build your space or dashboard where your investors can access the tokens offered.'
      },
       'consultoria': {
        'es': 'Consultoría',
        'en': 'Consultancy'
      },
      'consultoriap': {
        'es': 'Finalmente, te capacitamos sobre cómo recolectar sus tokens ofrecidos para que pueda disponer de los fondos al impulsar su negocio.',
        'en': 'Finally, we train you on how to collect your offered tokens so that you can dispose of the funds when boosting your business.'
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
    document.getElementById('inicio').innerHTML = traducciones['inicio'][idioma];
    document.getElementById('pagina').innerHTML = traducciones['pagina'][idioma];
    document.getElementById('aboutcompany').innerHTML = traducciones['aboutcompany'][idioma];
    document.getElementById('platform').innerHTML = traducciones['platform'][idioma];
    document.getElementById('commingsoon').innerHTML = traducciones['commingsoon'][idioma];
    document.getElementById('certificate').innerHTML = traducciones['certificate'][idioma];
    document.getElementById('investment').innerHTML = traducciones['investment'][idioma];
    document.getElementById('marketplace').innerHTML = traducciones['marketplace'][idioma];
    document.getElementById('elements').innerHTML = traducciones['elements'][idioma];
    document.getElementById('teammembers').innerHTML = traducciones['teammembers'][idioma];
    document.getElementById('contactform').innerHTML = traducciones['contactform'][idioma];
    document.getElementById('homeimage').innerHTML = traducciones['homeimage'][idioma];
    document.getElementById('subtitulop').innerHTML = traducciones['subtitulop'][idioma];
    document.getElementById('tokeniza1').innerHTML = traducciones['tokeniza1'][idioma];
    document.getElementById('tokeniza2').innerHTML = traducciones['tokeniza2'][idioma];
    document.getElementById('btn-contactanos').innerHTML = traducciones['btn-contactanos'][idioma];
    document.getElementById('value').innerHTML = traducciones['value'][idioma];
    document.getElementById('valuep').innerHTML = traducciones['valuep'][idioma];
    document.getElementById('btn-masinfo').innerHTML = traducciones['btn-masinfo'][idioma];
    document.getElementById('h3nuestro').innerHTML = traducciones['h3nuestro'][idioma];
    document.getElementById('tokenization').innerHTML = traducciones['tokenization'][idioma];
    document.getElementById('tokenizationp').innerHTML = traducciones['tokenizationp'][idioma];
    document.getElementById('publicacion').innerHTML = traducciones['publicacion'][idioma];
    document.getElementById('publicacionp').innerHTML = traducciones['publicacionp'][idioma];
    document.getElementById('consultoria').innerHTML = traducciones['consultoria'][idioma];
    document.getElementById('consultoriap').innerHTML = traducciones['consultoriap'][idioma];
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