import { Card, CardMedia, Grid } from '@mui/material';
import bug from '../assets/Certificate/bug.png'
import c from '../assets/Certificate/c.png'
import design from '../assets/Certificate/design.png'
import front from '../assets/Certificate/front.png'
import js from '../assets/Certificate/js.png'
import fse from '../assets/Certificate/fse.png'


function Certificado({ imagen, titulo}) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="300" // Ajusta la altura según tu imagen
        image={imagen}
        alt={titulo}
      />

    </Card>
  );
}

function SeccionCertificados() {
    const certificados = [
      {
        imagen: front,
      },
      {
        imagen: js,
      },
      {
        imagen: design,
      },
      {
        imagen: bug,
      },
      {
        imagen: c,
      },
      {
        imagen: fse,
      }
    ];
  
    return (
      <section className='mt-20' >
      <div><h2 className=' md:text-7xl text-6xl text-center font-bold mb-4 p-8 mx-auto' id='certifi'>Certifications</h2></div>
      <Grid container spacing={5} className=' flex items-center justify-center px-9 '>
        {certificados.map((certificado, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3.5} key={index} className='flex items-center justify-center ' >
            <Certificado
              imagen={certificado.imagen}
            />
          </Grid>
        ))}
      </Grid></section>
    );
  }
  
  export default SeccionCertificados;
