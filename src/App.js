import Layout from './components/layout/Layout'
import HomeSection from './components/sections/home/HomeSection';
import AboutSection from './components/sections/about/AboutSection';
import CertificatesSection from './components/sections/certificates/CertificatesSection';
import Products from './components/sections/products/Products';
import Info from './components/sections/info/Info';
import Team from './components/sections/team/Team';
import News from './components/sections/news/News';

function App() {
  return (
    <Layout>
      <HomeSection />
      <AboutSection />
      <CertificatesSection />
      <Products />
      <Info />
      <Team />
      <News />
    </Layout>
  );
}

export default App;
