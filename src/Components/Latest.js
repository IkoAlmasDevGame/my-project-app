import {Card, CardImg} from 'react-bootstrap';
import { Link } from 'react-daisyui';

const NewLatest = () => {
    return (
        <div>
            <h2 
            id='latest'
            className='text-center items-center'
            style={{fontSize:"18px", fontWeight:"500"}}>CD Terbaru</h2>
            <Card>
                <CardImg src='https://cdn.lorem.space/images/game/.cache/150x220/gta-sa.jpg' alt='GTA SA'
                style={{
                    width : "150px", height : "220px", margin : "auto", marginTop : "5px"
                }} />
                <Card.Body className="items-center text-center">
                    <Card.Header>
                        <Card.Title tag="h2">Grand Theft Auto: San Andreas</Card.Title>
                    </Card.Header>
                    <Card.Text className='text-start'>
                    Grand Theft Auto: San Andreas (sering disingkat sebagai GTA: SA atau GTA: San Andreas), 
                    adalah permainan video laga-petualangan yang dikembangkan oleh Rockstar North, dan diterbitkan oleh Rockstar Games. Permainan ini adalah permainan 3D ke-7 
                    dalam seri Grand Theft Auto, yang ke-5 pada rilis konsol dan permainan ke-7 secara keseluruhan. Pada awalnya dirilis untuk PlayStation 2 pada bulan Oktober 2004, permainan ini kemudian di pemortakan ke Xbox dan Microsoft Windows, 
                    kini yang baru rilis Android dan menerima penerimaan dan penjualan yang tinggi pada tiga platform tersebut, dan mendapat rekor penjualan permainan tertinggi di PlayStation 2. Grand Theft Auto: San Andreas diteruskan oleh Grand Theft Auto: Liberty City Stories dan didahului oleh Grand Theft Auto: Vice City.
                    </Card.Text>
                    <Card.Footer>
                        <Link color='white' className='btn btn-primary' 
                        href='https://id.wikipedia.org/wiki/Grand_Theft_Auto:_San_Andreas'>
                            Baca Lebih Lanjut Lagi
                        </Link>
                    </Card.Footer>
                </Card.Body>
            </Card>
            <Card>
                <CardImg src='https://cdn.lorem.space/images/game/.cache/150x220/the-walking-dead.jpg' alt='The Walkin Dead' 
                style={{
                    width : "150px", height : "220px", margin : "auto", marginTop : "5px"
                }}
                />
                <Card.Body className="items-center text-center">
                    <Card.Header>
                        <Card.Title tag='h2'>The Walking Dead</Card.Title>
                    </Card.Header>
                    <Card.Text className='text-start'>
                    The Walking Dead (diketahui juga sebagai The Walking Dead: The Game) adalah sebuah permainan video petualangan arah dan klik, 
                    dan permainan peran komputer secara episodik, berdasarkan serial komik The Walking Dead yang dikarang oleh Robert Kirkman, untuk iOS, Mac OS X, Microsoft Windows, 
                    PlayStation 3 dan Xbox 360. Permainan ini dibuat dan dikembangkan oleh Telltale Games. The Walking Dead rencananya akan dirilis pada akhir tahun 2011 tetapi karena masalah produksi dan 
                    pengembangan proyek, jadwal rilis permainan tersebut diundur sampai ke awal tahun 2012. Dalam permainan ini terdapat lims episode, yang dirilis antars bulan April dan November 2012. 
                    Versi iOS dari setiap episode akan menyusul sesudahnya. Telltale akan mempublikasikan versi eceran dari keseluruhan episode secara komplet.
                    </Card.Text>
                    <Card.Footer>
                        <Link href='https://id.wikipedia.org/wiki/The_Walking_Dead_(permainan_video)'
                        color='white' className='btn btn-primary'>
                            Baca Lebih Lanjut Lagi
                        </Link>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
}

export default NewLatest