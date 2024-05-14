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
        'es': 'SparkNet Blockchain',
        'en': 'SparkNet Blockchain'
      },
      'p1': {
        'es': 'Es una Blockchain la cual utiliza la tecnología de Ethereum, pero a diferencia de esta, no tiene Gas Fee (comisiones). Sparknet utiliza la validación mediante Proof-of-Authority, lo que garantiza una alta seguridad y eficiencia a la hora de aplicarla.',
        'en': ' It is a Blockchain that uses Ethereum technology, but unlike Ethereum, it does not have Gas Fees. Sparknet utilizes Proof-of-Authority validation, which ensures high security and efficiency when applying it.'
      },
      'p2': {
        'es': 'Nos enorgullece decir que SparkNet Blockchain es muy amigable con el medio ambiente debido a su bajo consumo eléctrico.',
        'en': 'We are proud to say that SparkNet Blockchain is very environmentally friendly due to its low energy consumption.'
      },
      'titulo2': {
        'es': 'Somos el primer Nodo validador de LatinoAmerica',
        'en': 'We are the first validating Node in Latin America.'
      },
      'p3': {
        'es': 'Gracias a nuestra gran relación con SparkNet, hemos tenido el privilegio de ser parte de su Blockchain y colaborar como los primeros en validar transacciones en Latinoamérica, más específicamente en la Patagonia Argentina..',
        'en': 'Thanks to our great relationship with SparkNet, they have granted us the privilege of being part of the Blockchain and helping them by being the first to validate transactions in Latin America, specifically in the Argentine Patagonia.'
      },
      'titulo3': {
        'es': 'Ingresá a este sitio el cual muestra <br> a los validadores.',
        'en': 'Access this website that displays the validators'
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
    document.getElementById('investment').innerHTML = traducciones['investment'][idioma];
    document.getElementById('marketplace').innerHTML = traducciones['marketplace'][idioma];
    document.getElementById('elements').innerHTML = traducciones['elements'][idioma];
    document.getElementById('teammembers').innerHTML = traducciones['teammembers'][idioma];
    document.getElementById('contactform').innerHTML = traducciones['contactform'][idioma];
    document.getElementById('home1').innerHTML = traducciones['home1'][idioma];
    document.getElementById('pages1').innerHTML = traducciones['pages1'][idioma];
    document.getElementById('titulo').innerHTML = traducciones['titulo'][idioma];
    document.getElementById('p1').innerHTML = traducciones['p1'][idioma];
    document.getElementById('p2').innerHTML = traducciones['p2'][idioma];
    document.getElementById('titulo2').innerHTML = traducciones['titulo2'][idioma];
    document.getElementById('p3').innerHTML = traducciones['p3'][idioma];
    document.getElementById('titulo3').innerHTML = traducciones['titulo3'][idioma];
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