import { Form, FormGroup, Input, Button } from 'reactstrap';

export const Search = () => {
  return (
    <Form>
      <FormGroup className='row'>
        <div className='col-5'>
          <Input
            id='search'
            name='search'
            placeholder='Search'
          />
        </div>
        <div className='col-2'>
          <Button
            color='success'
            className='w-100'>
            Search
          </Button>
        </div>
      </FormGroup>
    </Form>
  );
};

export default Search;
