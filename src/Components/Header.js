import React from "react";
import Icons from "./Icons";
import Scroll from "react-scroll-to-element";

const Header = (props) => {
  return (
    <div className="main_container">
      {/* background image with shadow */}
      <div className="background_img">
        <div className="header">
          {/*header first section container'*/}
          <div className="header_container">
            <div className="header_logo">
              <img
                alt="background"
                src="data:image/webp;base64,UklGRnYDAABXRUJQVlA4TGkDAAAv7UATEPdAmG1Uf6DTu+cUBAJJXPt7LRBI8tufZ4EAYcF/pAQJ/qNYAQO0BIBpYlsJPdJO79f97/MpiQzg+4zo/wTA/9RbsDbEuxQ1Hpp8iwKeq+0Gbdiq8u2pqgntwiQK1mpERGsdxXwRIbOFkJnWJJNFvnJUHsFwwoIU0ihuqHaHXLscxePFPi1BYj5Q8dihTV0ZThgFMh+HFPbpSkeBE1cia+xWUT+FoWEhCLs2pRcIbXEdqsPOVewFTIuHZagG+6deIJwogmXIGh/R9wIlGEQTCixDNfiYqZcRP1g1+JAqwaIZlLZEKaVIzoioDIsWUNZHaC2bZekMi7ahaKjALr7NVFi0qiRsAdFiG0yFVXMoSCBO6shXGFcmZzWiso7yiBLyVYYLs/mPB/4FhMwWZNJR8QqbNVUWXp4u0zyV4dJqEAOMqjgUDHUsG7JVhour2WBUpFBUp6FoXoTHHIJH8W0gEdkBpuXxQhqHYxmYlsdLt1FUZKdpGbw4D2JjWZjW5WYQjpWWBWkMimNgXdQQMnJpYXAbwcYq89OeUopkJMyRPebY1nwJcTTMziQ4LZaH9eCUA71ajpegi9NgAjQTL46HJPBiGssGTGKFAShOnBsB23DsAJCbpqaBnzjmXmwCYBh4L0CSbowVScOxHJqZF6mjCzMLIjAczzEzoykQB+vNSax4c4DlBPiLZzlYbg6x/M0pLFXuDRgOupuzsXC7N6BZKt8bYqGut6ZqFpp6Z2Djocl34uX1mQGWhyrKpcV6/9n3ff/7fG4qiofoqkz1uChZ6OVvP/9ogU0CFVVeIYWrQjJv//bWrxbwEojKx6a6OZRcBlUlXv7t7R8t1YggorK0pZQieYPCEzMMNPWguNrwuzP/PTdANUIdTsxxUIWUyCHS2dvO/mqBrFaLWOfm7Jv3rwmyeggP88piWE7+ePtzE1TzAAQTAy0WTnbB1zaotjcVYWokprsBoL5shblVLYXx6EcA+Fn3owi484Eo5o8+eb8CUKkXV2B+4KWwHjzz3iUAiu/BJhCcEXipdABfnD+QLv4qn0B0SuBFdIbjp1/GixhAIS1nqIDwnCAqlqIK5y+/Te9wbSYroBwVkJ8UVNJNmio0P32d/b1Ah4mCteo/1jqKGRY1kzWIaB1l4D9//uz73/c73HMA"
              />
            </div>
            <div className="header_menu"></div>
          </div>
          {/*header main container' */}
          <div className="header-main-container">
            <div className="header-main-container_text animate__animated animate__fadeInUp  animate__delay-2s">
              <div className="header_main_text">
                <div>
                  <p>WELCOME TO GLINT</p>
                  <h1>
                    We are a creative group of people who design influential
                    brands and digital experiences.
                  </h1>
                </div>
                <div>
                  <Icons />
                </div>
              </div>
              <div className="header_main_buttons">
                <Scroll type="class" element="title_container ">
                  <button>START A PROJECT</button>
                </Scroll>
                <Scroll type="class" element="about_second_title ">
                  <button>MORE ABOUT US</button>
                </Scroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
