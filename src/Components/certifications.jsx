import { Card, CardMedia, Grid } from '@mui/material';

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
        imagen: 'src/assets/Certificate/front.png',
      },
      {
        imagen: 'src/assets/Certificate/js.png',
      },
      {
        imagen: 'src/assets/Certificate/design.png',
      },
      {
        imagen: 'src/assets/Certificate/bug.png',
      },
      {
        imagen: 'src/assets/Certificate/c.png',
      }
    ];
  
    return (
      <section className='mt-10' style={{backgroundColor:'#252040'}}>
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
