import React from 'react'
import Add from '../images/add.png'
import ModalImage from 'react-modal-image';
const Gallery = () => {
    return (
        <div className="gallery_container">
            <div className="gallery_inner">
                <div className="first_grid">
                <div className="first_pic_div first wow animate__fadeInLeft" onClick={()=> {

                }}>
                  <div className="first_pic wow animate__fadeInLeft">
                    <div className="first_pic_shadow">
                        <img src={Add} />
                        <h4>SHUTTERBUG</h4>
                        <p>Branding</p>
                    </div>
                    <ModalImage
                    small={'https://preview.colorlib.com/theme/glint/images/portfolio/xlady-shutterbug.jpg.pagespeed.ic.L78MPZ15Bu.webp'}
                    large={'https://preview.colorlib.com/theme/glint/images/portfolio/xlady-shutterbug.jpg.pagespeed.ic.L78MPZ15Bu.webp'}
                    
                    />
                  </div>
                </div>
                <div className="first_pic_div second wow animate__fadeInLeft">
                  <div className="first_pic wow animate__fadeInLeft">
                     <div className="first_pic_shadow">
                        <img src={Add} />
                        <h4>THE BEETLE</h4>
                        <p>Web Development</p>
                     </div>
                    <ModalImage
                    small={'https://preview.colorlib.com/theme/glint/images/portfolio/xthe-beetle.jpg.pagespeed.ic.SN25FoWyHG.webp'}
                    large={'https://preview.colorlib.com/theme/glint/images/portfolio/xthe-beetle.jpg.pagespeed.ic.SN25FoWyHG.webp'}
                    
                    />
              
                  </div>
                </div>
                <div className="second_pic_div third wow animate__fadeInLeft">
                  <div className="second_pic wow animate__fadeInLeft">
                    <div className="first_pic_shadow">
                        <img src={Add} />
                        <h4>GUITARIST</h4>
                        <p>Web Design</p>
                    </div>
                    <ModalImage
                    small={'https://preview.colorlib.com/theme/glint/images/portfolio/xguitarist.jpg.pagespeed.ic.XlIs6QyzIt.webp'}
                    large={'https://preview.colorlib.com/theme/glint/images/portfolio/xguitarist.jpg.pagespeed.ic.XlIs6QyzIt.webp'}
                    
                    />
              
                  </div>
                </div>
                </div>
                <div className="second_grid">
                <div className="second_pic_div fourth wow animate__fadeInRight">
                  <div className="second_pic wow animate__fadeInRight">
                    <div className="first_pic_shadow">
                        <img src={Add} />
                        <h4>WOODCRAFT</h4>
                        <p>Web Design</p>
                    </div>
                    <ModalImage
                    small={'https://preview.colorlib.com/theme/glint/images/portfolio/xwoodcraft.jpg.pagespeed.ic.9Sgb2Cbm2k.webp'}
                    large={'https://preview.colorlib.com/theme/glint/images/portfolio/xwoodcraft.jpg.pagespeed.ic.9Sgb2Cbm2k.webp'}
                    
                    />

                  </div>
                </div>
                <div className="first_pic_div fifth wow animate__fadeInRight">
                  <div className="first_pic wow animate__fadeInRight">
                     <div className="first_pic_shadow">
                        <img src={Add} />
                        <h4>GROW GREEN</h4>
                        <p>Branding</p>
                     </div>
                    <ModalImage
                    small={'https://preview.colorlib.com/theme/glint/images/portfolio/xgrow-green.jpg.pagespeed.ic.IfG2gjDTOk.webp'}
                    large={'https://preview.colorlib.com/theme/glint/images/portfolio/xgrow-green.jpg.pagespeed.ic.IfG2gjDTOk.webp'}
                    
                    />
                  </div>
                </div>
                <div className="first_pic_div six wow animate__fadeInRight">
                  <div className="first_pic wow animate__fadeInRight">
                    <div className="first_pic_shadow">
                        <img src={Add} />
                        <h4>PALMEIRA</h4>
                        <p>Web Design</p>
                    </div>
                    <ModalImage
                    small={'https://preview.colorlib.com/theme/glint/images/portfolio/xpalmeira.jpg.pagespeed.ic.JaY25Mc1m0.webp'}
                    large={'https://preview.colorlib.com/theme/glint/images/portfolio/xpalmeira.jpg.pagespeed.ic.JaY25Mc1m0.webp'}
                    
                    />
                  </div>
                </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Gallery
