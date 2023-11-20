import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container>
      <Row className='justify-content-center'>
        <div className='col-md-8 align-self-center'>
          <h1 className='m-0 mt-4 fw-bold'>404 Not Found</h1>
          <div className='fs-3 mt-4 mb-5'>
            <p className='m-0'>Sorry</p>
            <p className='my-2'>
              Its not possible to update the Table...{' '}
            </p>

            <p className='m-0'>Did You?...</p>
          </div>
          <Link as={Button} to={'/'}>
            <Button className='btn-lg' variant='primary'>
              Back
            </Button>
          </Link>
        </div>
      </Row>
    </Container>
  );
};

export default NotFound;