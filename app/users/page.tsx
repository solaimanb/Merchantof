import { Container } from '@/components/Container';
import UsersList from '@/components/UsersList';

const Users = () => {
  return (
    <Container className="py-10">
      <h1>USERS:</h1>
      <UsersList />
    </Container>
  );
};

export default Users;
