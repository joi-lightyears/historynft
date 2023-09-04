import Image from 'next/image'
import "../styles/home.scss"
import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="mainPageContainer">
      <section className="bannerContainer">
        <div className="bannerBg">
          <div className="bannerBgOverlay"></div>
          <div className="bannerContent">
            <div className="bannerContentText">
              <h1>Viet Nam <span className="bannerContentTextName">NFT</span></h1>
              <p>Bringing your favorite history of VietNam to life. 
                Don't miss out on this collection, It's out of this world!
              </p>
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </section>

      <section className="createAccInfoContainer">
        <div className="accWrapper">
          <div className="content">
            <h2 className="title">
              Let's join us
            </h2>
            <p className="desc">
            Join the digital collecting phenomenon and begin collecting the world’s most beloved pop culture collectibles, digitally and physically.
            </p>
            <div className="btnsContainer">
              <button className="btnCreateAcc">Create Account</button>
              <button className="btnLearnMore">Learn More</button>
            </div>
          </div>
          <div className="accBg">
            <div className="accBgOverlay"></div>
          </div>
        </div>

      </section>

      <section className="collectionsPreviewContainer">
        <div className="collectionsPreviewWrapper">
          <div className="title">
            <div className="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4"><path d="M13.5323 4.74365L19.8624 6.64386C21.1126 6.97887 21.8546 8.26398 21.5196 9.51424L18.4867 20.8332C18.1517 22.0835 16.8666 22.8254 15.6163 22.4904L8.82494 20.6707C7.98759 20.4463 7.37824 19.7958 7.16772 19.015" stroke="currentColor" strokeWidth="1.5"></path><rect x="2.3999" y="2.40002" width="11.7183" height="16.4924" rx="2" stroke="currentColor" strokeWidth="1.5"></rect></svg>
            </div>
            <h2>Latest Collections</h2>
            <p>Join in on these exciting new collections</p>
          </div>

          <div className="collectionsListWrapper">
            <div className="collectionsList">
              <Link href="/collection" className="collectionCard">
                <div className="contentContainer">
                  <div className="top">
                    <img src="/img/joitaro.jpg" alt="" />
                  </div>
                  <div className="bottom">
                    <div className="content">
                      <div className="collectionName">
                        <span>Series 1</span>
                      </div>
                      <div className="title">
                        <p>Ly Thuong Kiet</p>
                        <p>Released On Oct 5th, 2002</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/collection" className="collectionCard">
                <div className="contentContainer">
                  <div className="top">
                    <img src="/img/joitaro.jpg" alt="" />
                  </div>
                  <div className="bottom">
                    <div className="content">
                      <div className="collectionName">
                        <span>Series 1</span>
                      </div>
                      <div className="title">
                        <p>Ly Thuong Kiet</p>
                        <p>Released On Oct 5th, 2002</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/collection" className="collectionCard">
                <div className="contentContainer">
                  <div className="top">
                    <img src="/img/joitaro.jpg" alt="" />
                  </div>
                  <div className="bottom">
                    <div className="content">
                      <div className="collectionName">
                        <span>Series 1</span>
                      </div>
                      <div className="title">
                        <p>Ly Thuong Kiet</p>
                        <p>Released On Oct 5th, 2002</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/collection" className="collectionCard">
                <div className="contentContainer">
                  <div className="top">
                    <img src="/img/joitaro.jpg" alt="" />
                  </div>
                  <div className="bottom">
                    <div className="content">
                      <div className="collectionName">
                        <span>Series 1</span>
                      </div>
                      <div className="title">
                        <p>Ly Thuong Kiet</p>
                        <p>Released On Oct 5th, 2002</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/collection" className="collectionCard">
                <div className="contentContainer">
                  <div className="top">
                    <img src="/img/joitaro.jpg" alt="" />
                  </div>
                  <div className="bottom">
                    <div className="content">
                      <div className="collectionName">
                        <span>Series 1</span>
                      </div>
                      <div className="title">
                        <p>Ly Thuong Kiet</p>
                        <p>Released On Oct 5th, 2002</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/collection" className="collectionCard">
                <div className="contentContainer">
                  <div className="top">
                    <img src="/img/joitaro.jpg" alt="" />
                  </div>
                  <div className="bottom">
                    <div className="content">
                      <div className="collectionName">
                        <span>Series 1</span>
                      </div>
                      <div className="title">
                        <p>Ly Thuong Kiet</p>
                        <p>Released On Oct 5th, 2002</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="moreText">
            <a href="">
              <span>
                All Collections
              </span>
            </a>
          </div>
        </div>
      </section>
      
      <section className="discordContatctContainer">
        <div className="divideBg">
          <div className="bgGradient"></div>
        </div>
        <div className="discordContatctWrapper">
          <div className="contentText">
            <h2>Join our Discord</h2>
            <p>Join our Discord to stay up to date on the latest news and announcements.</p>
          </div>
          <a href="" className="jointBtn">
            <div className="content">
              <div className="icon">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="21" viewBox="0 0 27 21" fill="none" className="injected-svg" data-src="/images/icon-discord-white.svg?build=d9a87d1" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <path d="M22.4429 2.37371C20.7626 1.60635 18.9607 1.04098 17.0767 0.717179C17.0424 0.710929 17.0082 0.726547 16.9905 0.757782C16.7588 1.168 16.5021 1.70317 16.3223 2.12381C14.296 1.82188 12.28 1.82188 10.2952 2.12381C10.1154 1.69382 9.84933 1.168 9.61655 0.757782C9.59888 0.727589 9.56465 0.711971 9.53035 0.717179C7.64739 1.03995 5.84551 1.60531 4.16414 2.37371C4.14957 2.37996 4.13711 2.39038 4.12883 2.4039C0.711006 7.48595 -0.225366 12.4431 0.233941 17.3387C0.236026 17.3627 0.249609 17.3856 0.268309 17.4002C2.52329 19.0484 4.7076 20.049 6.85137 20.7122C6.88568 20.7226 6.92203 20.7101 6.94386 20.682C7.45098 19.9927 7.903 19.266 8.29058 18.5017C8.31346 18.457 8.2916 18.4039 8.24485 18.3862C7.52784 18.1155 6.8451 17.7854 6.18834 17.4106C6.1364 17.3804 6.13229 17.3064 6.18008 17.271C6.31829 17.168 6.45648 17.0607 6.58845 16.9524C6.61233 16.9327 6.64564 16.9285 6.67371 16.941C10.9883 18.9016 15.6593 18.9016 19.9229 16.941C19.951 16.9275 19.9843 16.9316 20.0092 16.9514C20.1412 17.0597 20.2795 17.168 20.4187 17.271C20.4665 17.3064 20.4634 17.3804 20.4114 17.4106C19.7547 17.7927 19.0719 18.1155 18.3539 18.3851C18.3071 18.4028 18.2863 18.457 18.3092 18.5017C18.7051 19.2649 19.1571 19.9917 19.6549 20.6809C19.6757 20.7101 19.713 20.7226 19.7474 20.7122C21.9015 20.049 24.0859 19.0484 26.3408 17.4002C26.3606 17.3856 26.3731 17.3637 26.3752 17.3398C26.9249 11.6798 25.4544 6.76337 22.4772 2.40494C22.4699 2.39038 22.4575 2.37996 22.4429 2.37371ZM8.7613 14.3522C7.51534 14.3522 6.48864 13.1282 6.48864 11.6249C6.48864 10.1217 7.49543 8.89764 8.7613 8.89764C10.0371 8.89764 11.0538 10.1324 11.0339 11.6249C11.0339 13.1282 10.0271 14.3522 8.7613 14.3522ZM17.8522 14.3522C16.6062 14.3522 15.5796 13.1282 15.5796 11.6249C15.5796 10.1217 16.5863 8.89764 17.8522 8.89764C19.128 8.89764 20.1446 10.1324 20.1247 11.6249C20.1247 13.1282 19.128 14.3522 17.8522 14.3522Z" fill="white"></path>
                </svg>
                </div>
              </div>
              <div className="text">
                Join us on discord
              </div>
            </div>
          </a>
        </div>
        
      </section>
      
    </main>
  )
}
