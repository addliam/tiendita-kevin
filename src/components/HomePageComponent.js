import React,{useState} from 'react'
// added temporal image as background
import machuPicchuImage from './sources/pexels-macchu-picchu_custom.webp';
// import schoolTeacherVideo from './sources/school_teacher_compressed.mp4'
import './styles/HomePageComponent.css'
// white social media icons
import facebookWhite from './sources/icons/Facebookwhite.png'
import instagramWhite from './sources/icons/Instagramwhite.png'
import twitterWhite from './sources/icons/Twitterwhite.png'
// images
import taiLoy from './sources/tai_loy.png';
// import cocaCola from './sources/cocaCola.png';
import candy from './sources/candy.jpg';
import mousePadTaza from './sources/mouse_pad_taza.jpg';
import papasLays from './sources/papitaLays.png'
//import arrow icos
import arrowBack from './sources/icons/ArrowBack.png';
import arrowNext from './sources/icons/ArrowNext.png';
// import avatars for opinions
import avatar0 from './sources/avatars/avatar (6).png';
import avatar1 from './sources/avatars/avatar (7).png';
// import waves svg for contact
import waveBlueGlass from './sources/WaveBlueGlass.svg';
import waveBlueSky from './sources/WaveBlueSky.svg';
// import social media icons in blue color
import facebookBlue from './sources/icons/FacebookBlue.png'
import instagramBlue from './sources/icons/InstagramBlue.png'
import whatsappBlue from './sources/icons/WhatsAppBlue.png'
// show only on mobile devices
import burgerMenuWhite from './sources/icons/menuIcon.png'

function ElegirnosItemComponent({image}) {
  return (<div className="elegirnos-item">
        <div className="elegirnos-image">
          <img src={image} alt="description from lorem ipsum" />
        </div>
        <div className="elegirnos-description">
          <h4>CALIDAD</h4>
          <span>Contamos con socios clave quienes garantizan y respaldan la calidad de nuestros productos</span>
        </div>
      </div>);
}

const ProductoEstrellaComponent = ({title,isVisible})=>{
  let className = isVisible ? 'p-estrella-container visible':'p-estrella-container';
  // let className = 'p-estrella-container';
  return (
    <div className={className} >
      <div className="p-estrella-image">
        <img src={papasLays} alt="producto estrella description" />
      </div>
      <div className="p-estrella-text">
        <h3 className='p-estrella-title'>{title}</h3>
        <h5 className="p-estrella-topic">Descripcion</h5>
        <p className="p-estrella-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat molestiae at reprehenderit hic dolore quisquam labore fuga corrupti totam nam cumque vero, perferendis amet ullam! Quisquam nisi at ut expedita. Lorem, ipsum dolor sit labore fuga amet consectetur.</p>

        <h5 className="p-estrella-topic">Marca</h5>
        <p className="p-estrella-content">Lay's</p>

        <h5 className="p-estrella-topic">Peso</h5>
        <p className="p-estrella-content">226.8 gr</p>
        <div className="p-estrella-price">
          <span className='price-currency'>S/.</span>
          <span className='price-integer'>1</span>
          <span className='price-decimal'>.49</span>
        </div>
      </div>
    </div>
  )
}
const ProductoEstrellaDot = ({isVisible}) =>{
  let classi = isVisible ? 'p-estrella-dot selected':'p-estrella-dot';
  return (
  <button className={classi} ></button>
  )
}
const ClientOpinionComponent = ({avatarImage,clientName,clientLastName}) => {
  return (<div className="opinion-container">
            <img className='client-avatar' width='100px' height='100px' src={avatarImage} alt="client avatar" />
            <span>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Itaque dolore nisi ipsa neque? Dolorem incidunt fugiat temporibus animi nobis, vero expedita voluptate</span>
            <div className="client-name">
                <h3>{clientName}</h3>
                <h4>{clientLastName}</h4>
            </div>
        </div>);
}
export const HomePageComponent = () => {
  // refer to the index for more easy
  const [numberElementVisible, setNumberElementVisible] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const LENGTH_PRODUCTS = 5;
  // start all invisible

  const handleButtonNext = () =>{
    setNumberElementVisible((c)=>{
      if (c>=LENGTH_PRODUCTS-1){
        return 0;
      }
      else{
        return c+1;
      }
    })
  }
  const handleButtonPrevious = () =>{
    setNumberElementVisible((c)=>{
      if (c<=0){
        return LENGTH_PRODUCTS-1; 
      }
      else{
        return c - 1;
      }
    })
  }
  // TODO: make an arawy of properties for productos estrellas
  const productEstrellasTitle = ["Papitas lays","Doritos","Empanada Torres","Coca cola","Cheetos picantes"]

  const switchShowMobileMenu = () =>{
    setShowMobileMenu(prevState=>{
      return prevState ? false : true;
    })
  }
  return (
    <div>
        <nav className='navbar'>
          <span id='logo'>KEVIN</span>
          <button onClick={()=>switchShowMobileMenu()} id='menu-burger'>
            <img src={burgerMenuWhite} width='32px' height='32px' alt="menu burger white for navegation bar" />
          </button>
          <div className="navbar-items" style={{display:showMobileMenu?'flex':'none'}}>
          <a className='link-page' href="./#">Inicio</a>
          <a className='link-page' href="./#">Productos</a>
          <a className='link-page' href="./#">Acerca de</a>
          <a className='link-page' href="./#">Contacto</a>
          <div className="social-media">
            <a href="./#">
            <img src={facebookWhite} width='28px' height='28px' alt="facebook logo white" />
            </a>
            <a href="./#">
            <img src={instagramWhite} width='28px' height='28px' alt="instagram logo white" />
            </a>
            <a href="./#">
            <img src={twitterWhite} width='28px' height='28px' alt="twitter logo white" />
            </a>
          </div>  
          </div>
          
        </nav>
        <div className="presentation-container">
            <div id="overlay"></div>
            <div id="content">
              <h2>TIENDITA KEVIN</h2>
              <span>LO QUE NECESITAS. LO TENEMOS!</span>
              <button>VER PRODUCTOS</button>
            </div>
            <img id='presentation' src={machuPicchuImage} alt="macchu picchu landscape" />
            {/* <video id='presentation' width='100%' height='auto' className='videoTag' autoPlay loop muted>
                <source src={schoolTeacherVideo} type='video/mp4' />
            </video> */}
        </div>
        
        <section className='elegirnos'>
          <h3>POR QUE ELEGIRNOS?</h3>
          <div className="elegirnos-reasons">
            <div className="elegirnos-container">
              <ElegirnosItemComponent image={mousePadTaza} />
              <ElegirnosItemComponent image={candy} />
              <ElegirnosItemComponent image={taiLoy} />
            </div>
          </div>
        </section>
        <section className="productos-estrella">
          <h3>PRODUCTOS ESTRELLA</h3>
          <button className='handlers' id='previous' onClick={()=>handleButtonPrevious()}>
            <img width='78px' height='78px' src={arrowBack} alt="arrow back" />
          </button>
          <button className='handlers' id='next' onClick={()=>handleButtonNext()}>
            <img width='78px' height='78px' src={arrowNext} alt="arrow next" />
          </button>
          <div className="p-estrellas-carousel">
              {
                productEstrellasTitle.map((objTitle,indx)=>{
                if (indx === numberElementVisible){
                  return <ProductoEstrellaComponent key={indx} title={objTitle} isVisible={true}/>;
                }else{
                  return <ProductoEstrellaComponent key={indx} title={objTitle} isVisible={false}/>;
                }
              })
              }
          </div>
          <div className="product-estrella-number">
            {
            Array(5).fill(false).map((obj,indx)=>{
              if (indx === numberElementVisible){
                return <ProductoEstrellaDot key={indx} isVisible={true}/>;
              }else{
                return <ProductoEstrellaDot key={indx}/>;
              }
            })
            }
          </div>
        </section>
        <section className='clients-opinion'>
          <h3>CON EL RESPALDO DE LOS CLIENTES</h3>
          <div className="opinions-list">
            <ClientOpinionComponent clientName={'Alexander'} clientLastName={'Palacios'} avatarImage={avatar0} />
            <ClientOpinionComponent clientName={'Valeria'} clientLastName={'Caceres'} avatarImage={avatar1} />
          </div>
        </section>
        <section className="location">
          <h3>ENCUENTRANOS EN</h3>
          <p>San Juan de Lurigancho 15438. Juan Pablo II 1 Zona</p>
          <div className="maps-container">
            <iframe id='google-map' title='store location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.7263959801048!2d-76.9862866708317!3d-11.98103468757858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c56313e7425f%3A0x35ffa0b32806a165!2sTiendita%20Kevin!5e0!3m2!1ses!2spe!4v1660245550299!5m2!1ses!2spe&callback=initAutocomplete" width="996" height="480" style={{"border":0,allowFullScreen:"on",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}}></iframe>
          </div>
        </section>
        <footer className='homepage-foot'>
          <img className='wave-down' id='wave-blue-sky' src={waveBlueSky} alt="wave blue sky" />
          <img className='wave-down' id='wave-blue-glass' src={waveBlueGlass} alt="wave blue glass" />
          <h3 id='contact-text'>CONTACTO</h3>
          <div className="contacts-container">
            <div className="contact-item">
              <img width='32px' height='32px' src={facebookBlue} alt="facebook icon in blue color" />
              <span>Facebook</span>
              <p>@tiendita.kevin</p>
            </div>
            <div className="contact-item">
              <img width='32px' height='32px' src={whatsappBlue} alt="whatsapp icon in blue color" />
              <span>WhatsApp</span>
              <p>914 734 123</p>
            </div>
            <div className="contact-item">
              <img width='32px' height='32px' src={instagramBlue} alt="instagram icon in blue color" />
              <span>Instagram</span>
              <p>@tiendita.kevin</p>
            </div>
          </div>
        </footer>
    </div>
  )
}

  