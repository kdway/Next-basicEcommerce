import Link from 'next/link';
import styles from './sidebar.module.css';



export default function Sidebar() {
  return (
    
        <header className="p-3 bg-white text-dark">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start icon">
              <a href="/" className={styles.nav1}>
                EasyShop
              </a>
    
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 b">
                <li>
                  <a href="/" className={styles.nav}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className={styles.nav}>
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className={styles.nav}>
                    Contact
                  </a>
                </li>

               
            
              </ul>
    
              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input
                  type="search"
                  className="form-control form-control-dark"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>
    
              <div className="text-end">
                 <a href="/Contact" type="button" className="btn btn-dark me-2"> Login</a> 
                 
              
                <button type="button" className="btn btn-warning">
                  Sign-up
                </button>
              </div>
              <li>
                  <a href="#" className={styles.nav2}>
                    Cart
                  </a>
                </li>
              
            </div>
          </div>
        </header>
      );
    };
    
  
