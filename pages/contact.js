import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Footer from'../components/footer'
import styles from '/styles/contact.module.css'
export default function Contact() {
  return (
    <>
    <hr></hr>

 <div className={styles.Form}>
    <div className={styles.contacts}>
      <h5>contact us you will receive all information about our company</h5>
      <h5>E-mail: company-however@gmail.com</h5>
      <h5>Bürmengheimstr. 113</h5>
      <h5>Heinz12256</h5>
      <h5> Tél: +43444444444</h5>
    </div>

    <form className={styles.form}>
    <label for="first">First name:</label>
    <input type="text" id="first" name="first"placeholder='First Name..'/>
    <label for="last">Last name:</label>
    <input type="text" id="last" name="last"placeholder='Name..' />
    <label for="last">E-mail Adress:</label>
    <input type="text" id="last" name="last" placeholder='Email..'/>
    <button type="submit">Submit</button>
  </form>
  </div>

        </>


  );
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
    <Sidebar />
    {page}
    <Footer />
  </Layout>
  );
};
