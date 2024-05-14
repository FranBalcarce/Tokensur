// Traducciones
const traducciones = {
    'inicio': {
      'es': 'Inicio',
      'en': 'Home'
    },
    'pagina': {
      'es': 'Páginas',
      'en': 'Pages'
    },
      'aboutcompany': {
        'es': 'Sobre la compañìa',
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
      'home1': {
        'es': 'Inicio',
        'en': 'Home'
      },
      'pages1': {
        'es': 'Páginas',
        'en': 'Pages'
      },
      'titulo': {
        'es': 'Validación de datos en la Blockchain',
        'en': 'Data validation in the Blockchain.'
      },
      'subtitulo': {
        'es': '¿Alguna vez necesitaste probarle algo a alguien?',
        'en': 'Have you ever needed to prove something to someone?'
      },
      'p1': {
        'es': 'Hay millones de situaciones donde lo necesitas. Existe una tecnologáa la cual es muy eficaz ante este tipo de situaciones, la Blockchain. Cuando vos posees una patente, obra intelectual u obra artística, podes registrar toda esta información de manera segura, transparente y auditable.',
        'en': 'There are millions of situations where you need it. There is a technology that is very effective in these types of situations, called Blockchain. When you have a patent, intellectual work, or artistic creation, you can securely register all this information in a transparent and auditable manner.'
      },
      'p2': {
        'es': 'La Blockchain es la manera más segura de guardar datos hasta el momento debido a que es inalterable.',
        'en': 'Blockchain is the most secure way to store data so far because it is tamper-proof.'
      },
      'titulo2': {
        'es': 'Nuestro servicio de validación de datos',
        'en': 'Our data validation service.'
      },
      'p3': {
        'es': 'Gracias a nuestra gran asociación con Notardec ahora somos capaces de poder validar distintos contratos, como puede ser el de propiedad, sobre patentes, obras intelectuales u obras artísticas.',
        'en': 'Thanks to our great partnership with Notardec, we are now able to validate various contracts, such as property contracts, patents, intellectual works, or artistic creations.'
      },
     'p4': {
        'es': 'La tecnología Blockchain es la forma perfecta para crear registros totalmente seguros, validados por otros usuarios, aprueba de falsificaciones los cuales tienen validación juridica.',
        'en': 'Blockchain technology is the perfect way to create fully secure records, validated by other users, tamper-proof, and with legal validity.'
      },
      'p5': {
        'es': '¡Contáctanos si estás interesado en validar tus documentos y dejar de preocuparte!',
        'en': 'Contact us if you are interested in validating your documents and stop worrying!'
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
    document.getElementById('home1').innerHTML = traducciones['home1'][idioma];
    document.getElementById('pages1').innerHTML = traducciones['pages1'][idioma];
    document.getElementById('titulo').innerHTML = traducciones['titulo'][idioma];
    document.getElementById('subtitulo').innerHTML = traducciones['subtitulo'][idioma];
    document.getElementById('p1').innerHTML = traducciones['p1'][idioma];
    document.getElementById('p2').innerHTML = traducciones['p2'][idioma];
    document.getElementById('titulo2').innerHTML = traducciones['titulo2'][idioma];
    document.getElementById('p3').innerHTML = traducciones['p3'][idioma];
    document.getElementById('p4').innerHTML = traducciones['p4'][idioma];
    document.getElementById('p5').innerHTML = traducciones['p5'][idioma];
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