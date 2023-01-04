import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Footer from'../components/footer'
import "../styles/about.module.css"
export default function About() {
  return (
    <>

    <div className='about'>
        <h1 style={{marginTop: 0, marginLeft: 70}}>About us</h1>
        
    </div>


    <div className='container' style={{marginTop:'15rem'}}>
        <div className='row'>
            <div className='col'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc44o1KcDcUxYxHLVP02gNx1P0cqDQ9gINF-smrMAC7DmX0lVdS1PUMTVpRUgnVHwgfMg&usqp=CAU'></img>
            <div className='name'>
                <h4 className='name1' style={{marginLeft:'25px'}}>Yanna Trkovich</h4>
                <h4 className='position ms-2'>Directrice Departement Finance</h4>
                

            
            </div>
            </div>

            <div className='col'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc44o1KcDcUxYxHLVP02gNx1P0cqDQ9gINF-smrMAC7DmX0lVdS1PUMTVpRUgnVHwgfMg&usqp=CAU'></img>
        <div className='name'>
                <h4  className='name1' style={{marginLeft:'25px'}}>Yanna Trkovich</h4>
                <h4 className='position ms-2'>Directeur Departement Marketing</h4>
                

            </div>
            </div>

            <div className='col'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc44o1KcDcUxYxHLVP02gNx1P0cqDQ9gINF-smrMAC7DmX0lVdS1PUMTVpRUgnVHwgfMg&usqp=CAU'></img>
        <div className='name'>
                <h4  className='name1' style={{marginLeft:'25px'}}>Yanna Trkovich</h4>
                <h4 className='position ms-2'>Directrice Departement Rh</h4>
                

            </div>
            </div>

        </div>

    </div>
    </>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
      <Footer />
    </Layout>
  )
}
