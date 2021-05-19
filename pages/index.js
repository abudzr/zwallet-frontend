import Layout from '../components/base/Layout'
import Button from '../components/module/Button'
import style from '../styles/landing.module.css'
import Navbar from '../components/module/Navbar'
import Footer from '../components/module/Footer'
import Image from 'next/image'
import { faLock, faDownload, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {

  return (
    <Layout title="Landing Page | Z-wallet" >
      <Navbar />
      <header className={style['landing-page']}>
        <div className="container">

          <div className="row">
            <div className="col-lg-6 col-12">
              <h1>Awesome App <br />
            For Saving<span> Time.</span> </h1>
              <p>We bring you a mobile app for banking problems that<br />
oftenly wasting much of your times.</p>
              <Button
                title="Try It Free"
                btn="btn-tryIt" />
            </div>

            <div className="col-lg-6 col-12">
              <div className={style['bg-landing-page']}></div>
              <img
                className={style['bgHeader']}
                src="/images/vector3.png"
                alt="Picture header"
              />
              <div className={style['image-header']}>
                <Image
                  src="/images/png-phone.png"
                  alt="Picture header"
                  width={278.51338475284683}
                  height={586.4722634749991}
                />
              </div>
            </div>
          </div>
        </div>

      </header>
      {/* <button onClick={() => router.push('/auth/signin')}>Login</button> */}
      <div className={style['landing-page-section']}>
        <div className="container">
          <h1><span>About</span> the Application.</h1>
          <p>We have some great features from the application and it’s totally free <br /> to use by all users around the world.</p>
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className={style['card-section']}>
                <div className={style['circle-section']}>
                  <FontAwesomeIcon icon={faPhone} className={style.iconLanding} />
                </div>
                <h4>24/7 Support</h4>
                <p>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className={style['card-section']}>
                <div className={style['circle-section']}>
                  <FontAwesomeIcon icon={faLock} className={style.iconLanding} />
                </div>
                <h4>Data Privacy</h4>
                <p>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className={style['card-section']}>
                <div className={style['circle-section']}>
                  <FontAwesomeIcon icon={faDownload} className={style.iconLanding} />
                </div>
                <h4>Easy Download</h4>
                <p>Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={style['section-trusted']}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>100+ <span>Trusted</span><br />
                Partners.</h1>
              <p>We have reached global level and have 100+<br />
                brand partners around the globe.</p>
            </div>
            <div className="col-lg-6  d-flex flex-wrap ">
              <div className={style['logo-airbnb']}>
                <Image
                  src="/images/logo1.png"
                  alt="Picture Partner"
                  width={150}
                  height={46}
                />
              </div>
              <div className={style['logo-canon']}>
                <Image
                  src="/images/logo2.png"
                  alt="Picture Partner"
                  width={172}
                  height={120}
                />
              </div>
              <div className={style['logo-dell']}>
                <Image
                  src="/images/logo3.png"
                  alt="Picture Partner"
                  width={87.73}
                  height={87.42}
                />
              </div>
              <div className={style['logo-microsoft']}>
                <Image
                  src="/images/logo4.png"
                  alt="Picture Partner"
                  width={131}
                  height={75.59}
                />
              </div>
              <div className={style['logo-dropbox']}>
                <Image
                  src="/images/logo5.png"
                  alt="Picture Partner"
                  width={132}
                  height={81}
                />
              </div>
              <div className={style['logo-hm']}>
                <Image
                  src="/images/logo6.png"
                  alt="Picture Partner"
                  width={103}
                  height={68}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style['section-feature']}>
        <div className="container">
          <div className="row">

            <div className={[["col-lg-5"], style["image-feature"]].join(" ")}>
              <Image
                src="/images/png-phone2.png"
                alt="Picture feature"
                width={400}
                height={656}
              />
            </div>
            <div className="col-lg-7">
              <h1>All The <span>Great</span><br />
                Zwallet Features.</h1>
              <div className={style['card-feature']}>
                <h6><span>1.</span> Small Fee</h6>
                <p>We only charge 5% of every success transaction done in Zwallet app.</p>
              </div>
              <div className={style['card-feature']}>
                <h6><span>2.</span> Data Secured</h6>
                <p>All your data is secured properly in our system and it’s encrypted.</p>
              </div>
              <div className={style['card-feature']}>
                <h6><span>3.</span> User Friendly</h6>
                <p>Zwallet come up with modern and sleek design and not complicated.</p>

              </div>

            </div>

          </div>
        </div>
      </section>
      <section className={style['section-testimoni']}>
        <div className="container">
          <h1>What Users are <span>Saying.</span> </h1>
          <p>We have some great features from the application and it’s totally free<br /> to use by all users around the world.</p>
          <div className={[["row"], style["card-overflow"]].join(" ")}>
            <div className={style['card-testimoni']}>
              <div className={style['image-testi']}>
                <img
                  className={style['image-testimoni']}
                  src="/images/user.png"
                  alt="Picture feature"
                  width={60}
                  height={60}
                />
              </div>
              <h6>Sherina Chaw</h6>
              <p>“I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life”</p>
            </div>
            <div className={style['card-testimoni']}>
              <div className={style['image-testi']}>
                <img
                  className={style['image-testimoni']}
                  src="/images/user1.png"
                  alt="Picture feature"
                  width={60}
                  height={60}
                />
              </div>
              <h6>Jessica Mera</h6>
              <p>“I use Zwallet to manage all financial needs. It’s super easy to use and it’s 100% free app”</p>
            </div>
            <div className={style['card-testimoni']}>
              <div className={style['image-testi']}>
                <img
                  className={style['image-testimoni']}
                  src="/images/user2.png"
                  alt="Picture feature"
                  width={60}
                  height={60}
                />
              </div>
              <h6>Robert Chandler</h6>
              <p>“Since I’m using this app, I’m not going to move to another similar app. Thank you Zwallet!”</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export default Home