import React from 'react'
import Slider from "react-slick";
const Comments = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 449,
            settings: {
              dots: true
            }
          },
        ]
      };
    return (
        <div className="comments_container wow animate__fadeInUp">
             <Slider {...settings}>
          <div>
            <p>Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori. Excepturi nam cupiditate culpa doloremque deleniti repellat.</p>
            <div>
                <img  src="https://preview.colorlib.com/theme/glint/images/avatars/xuser-05.jpg.pagespeed.ic.APnAqT_Vqk.webp"/>
                <p className="developer_name">Sundar Pichai</p>
                <p className="developer">CEO, Google</p>
            </div>
          </div>
          <div>
          <p>Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.</p>
            <div>
                <img  src="https://preview.colorlib.com/theme/glint/images/avatars/xuser-01.jpg.pagespeed.ic.6i12ClXOQG.webp"/>
                <p className="developer_name">Tim Cook</p>
                <p className="developer">CEO, Apple</p>
            </div>
          </div>
          <div>
          <p>Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam. Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.</p>
            <div>
                <img  src="https://preview.colorlib.com/theme/glint/images/avatars/xuser-02.jpg.pagespeed.ic.T71c7D0WMQ.webp"/>
                <p className="developer_name">Satya Nadella</p>
                <p className="developer">CEO, Microsoft</p>
            </div>
          </div>
          
        </Slider>
        <div class="contact__line"></div>
        </div>
    )
}

export default Comments
