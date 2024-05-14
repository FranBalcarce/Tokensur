// Traducciones
const traducciones = {
  'titulo': {
    'es': 'Plataforma',
    'en': 'Platform'
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
        'es': 'Sobre la compañía',
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
      'exclusive': {
        'es': 'Plataforma exclusiva y personalizada',
        'en': 'Exclusive and personalized platform'
      },
      'home1': {
        'es': 'Inicio',
        'en': 'Home'
      },
      'pages1': {
        'es': 'Páginas',
        'en': 'Pages'
      },
      'platform1': {
        'es': 'Plataforma',
        'en': 'Platform'
      },
      'doyou': {
        'es': '¿Quéres tener tu plataforma TEOS personalizada y gestionar tus activos en blockchain?',
        'en': 'Do you want to have your personalized TEOS platform and manage your assets on the blockchain?'
      },
      'own': {
        'es': 'Página de destino propia',
        'en': 'Own landing page'
      },
      'ownp': {
        'es': 'Desarrollamos tu propia página web personalizada de tu proyecto, con un dominio propio.',
        'en': 'We develop your own personalized web page of your project, with your own domain.<br><br>'
      },
      'wallet': {
        'es': 'Billetera',
        'en': 'Wallet '
      },
      'walletp': {
        'es': 'Está diseñada para comprar, vender y almacenar Tokens. Esta billetera, se puede configurar y brandear.<br><br>',
        'en': 'It is designed to buy, sell, and store tokens. This wallet can be configured and branded.<br><br>'
      },
      'emision': {
        'es': 'Emisión de Tokens',
        'en': 'Token Issuance'
      },
      'emisionp': {
        'es': 'En el caso de que hayas contratado tu propia plataforma TEOS, tendrás la capacidad de poder emitir Tokens de distintos proyectos.',
        'en': 'In case you have hired your own TEOS platform, you will have the ability to issue Tokens from different projects.'
      },
      'seguridad': {
        'es': 'Seguridad',
        'en': 'Security'
      },
      'seguridadp': {
        'es': 'Tu plataforma contará con KYC, un sistema de seguridad de facil adopción que verifica la identidad de tus compradores, asegurándose que no sea un comprador fraudulento.',
        'en': 'Your platform will have KYC, an easily adopted security system that verifies the identity of your buyers, making sure that they are not a fraudulent buyer.'
      },
      'liquidez': {
        'es': 'Liquidez',
        'en': 'Liquidity'
      },
      'liquidezp': {
        'es': 'Gracias a esta plataforma, vas a poder solucionar tus problemas de liquidez. A su vez, vas a tener presencia en el marketplace de Tokensur.',
        'en': 'Thanks to this platform, you will be able to solve your liquidity problems. In turn, you will have a presence in the Tokensur market place.'
      },
      'servicio': {
        'es': 'Servicio de Blockchain',
        'en': 'Blockchain service'
      },
      'serviciop': {
        'es': 'Gracias a nuestra Blockchain Sparknet tu proyecto va a poseer excelente seguridad, trazabilidad y transparencia, sin tener que pagar Gas Fee u otras comisiones.',
        'en': 'Thanks to our Sparknet Blockchain, your project will have excellent security, traceability and transparency without having to pay Gas Fees or other commissions.'
      },
      'video': {
        'es': 'Video explicativo',
        'en': 'Explanatory video'
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
    document.getElementById('exclusive').innerHTML = traducciones['exclusive'][idioma];
    document.getElementById('home1').innerHTML = traducciones['home1'][idioma];
    document.getElementById('pages1').innerHTML = traducciones['pages1'][idioma];
    document.getElementById('platform1').innerHTML = traducciones['platform1'][idioma];
    document.getElementById('doyou').innerHTML = traducciones['doyou'][idioma];
    document.getElementById('own').innerHTML = traducciones['own'][idioma];
    document.getElementById('ownp').innerHTML = traducciones['ownp'][idioma];
    document.getElementById('wallet').innerHTML = traducciones['wallet'][idioma];
    document.getElementById('walletp').innerHTML = traducciones['walletp'][idioma];
    document.getElementById('emision').innerHTML = traducciones['emision'][idioma];
    document.getElementById('emisionp').innerHTML = traducciones['emisionp'][idioma];
    document.getElementById('seguridad').innerHTML = traducciones['seguridad'][idioma];
    document.getElementById('seguridadp').innerHTML = traducciones['seguridadp'][idioma];
    document.getElementById('liquidez').innerHTML = traducciones['liquidez'][idioma];
    document.getElementById('liquidezp').innerHTML = traducciones['liquidezp'][idioma];
    document.getElementById('servicio').innerHTML = traducciones['servicio'][idioma];
    document.getElementById('serviciop').innerHTML = traducciones['serviciop'][idioma];
    document.getElementById('video').innerHTML = traducciones['video'][idioma];
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