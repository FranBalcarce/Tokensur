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
     'titulo2': {
        'es': '¿Qué es el Real Estate?',
        'en': 'What is Real Estate?'
      },
      'parrafo1': {
        'es': 'Cuando hablamos de Real Estate hacemos referencia a todo lo que tiene que ver con la oferta y demanda de aquellos proyectos relacionados a bienes raíces o bienes inmuebles.',
        'en': 'When we talk about Real Estate we refer to everything that has to do with the supply and demand of those projects related to real estate or real estate.'
      },
      'parrafo2': {
        'es': 'Tokensur es una empresa que se dedica a la Tokenizacion de activos del mundo real, convirtiendo activos fisicos en activos digitales.',
        'en': 'Tokensur is a company that is dedicated to the Tokenization of real-world assets, converting physical assets into digital assets.'
      },
      'parrafo3': {
        'es': 'La tokenización de activos elimina la necesidad de intermediarios, lo que simplifica y abarata el proceso de compra y venta de bienes raíces para los inversores, así como la recaudación de capital para los propietarios y desarrolladores. Este nuevo método de financiación e inversión viene ocupando un papel importante a nivel mundial. ',
        'en': 'Asset tokenization eliminates the need for intermediaries, making the process of buying and selling real estate simpler and cheaper for investors, as well as raising capital for owners and developers. This new method of financing and investment has been playing an important role worldwide.'
      },
      'parrafo4': {
        'es': 'Ya fueron varias las empresas que optaron por Tokenizar sus proyectos y conseguir inversores de todo el mundo, logrando que este se financie de manera mas rapida y global.',
        'en': 'There were already several companies that chose to Tokenize their projects and get investors from all over the world, making it financed more quickly and globally.'
      },
      'parrafo5': {
        'es': 'Esta nueva forma de Tokenizado llego para optimizar, diversificar y simplificar los métodos tradicionales.',
        'en': 'This new form of Tokenization came to optimize, diversify and simplify traditional methods.'
      },
      'parrafo6': {
        'es': 'Al Tokenizar tu proyecto logras que puedan acceder personas de todo el mundo, ya que los Tokens se puede vender desde m2, esto agiliza la venta de los mismos logrando conseguir inversores en menor tiempo.',
        'en': 'By Tokenizing your project you make it accessible to people from all over the world, since Tokens can be sold from m2, this speeds up their sale, achieving investors in less time.'
      },
      'parrafo7': {
        'es': 'El proceso es totalmente seguro, transparente y confiable. Tokensur utiliza NotRZR de Notardec, este es un servicio de base de datos que almacena la información de manera segura, ya que la misma es inmutable. Lo que logra darle a los proyectos una mayor transparencia, demosotrando la existencia, procedencia e integridad.',
        'en': 'The process is totally safe, transparent and reliable. Tokensur uses Notardecs NotRZR, this is a database service that stores information securely, since it is immutable. Which manages to give the projects greater transparency, demonstrating the existence, origin and integrity.'
      },
      'parrafo8': {
        'es': 'Este almacena el historial de cada proyecto Tokenizado, el cual se va actualizando con cada avance. Todo lo que es subido a esta plataforma no puede ser eliminado o editado, lo cual brinda seguridad.',
        'en': 'This stores the history of each Tokenized project, which is updated with each progress. Everything that is uploaded to this platform cannot be deleted or edited, which provides security.'
      },
      'parrafo9': {
        'es': 'Los inversores tienen la capacidad de realizar transacciones con tokens de manera casi instantánea, accediento a la compra del Token desde en movil o computadora. Esto ofrece a los propietarios la oportunidad de obtener dinero para financiar su proyecto sin depender de intermediarios financieros.',
        'en': 'Investors have the ability to carry out transactions with tokens almost instantly, accessing the purchase of the Token from a mobile or computer. This offers owners the opportunity to obtain money to finance their project without depending on financial intermediaries.'
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
   document.getElementById('titulo2').innerHTML = traducciones['titulo2'][idioma];
   document.getElementById('parrafo1').innerHTML = traducciones['parrafo1'][idioma];
   document.getElementById('parrafo2').innerHTML = traducciones['parrafo2'][idioma];
   document.getElementById('parrafo3').innerHTML = traducciones['parrafo3'][idioma];
   document.getElementById('parrafo4').innerHTML = traducciones['parrafo4'][idioma];
   document.getElementById('parrafo5').innerHTML = traducciones['parrafo5'][idioma];
   document.getElementById('parrafo6').innerHTML = traducciones['parrafo6'][idioma];
   document.getElementById('parrafo7').innerHTML = traducciones['parrafo7'][idioma];
   document.getElementById('parrafo8').innerHTML = traducciones['parrafo8'][idioma];
   document.getElementById('parrafo9').innerHTML = traducciones['parrafo9'][idioma];
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