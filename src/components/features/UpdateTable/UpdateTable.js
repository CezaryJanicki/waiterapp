import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getTableById, editTableRequest, editTable } from '../../../redux/tablesRedux';
import { useNavigate, Navigate } from 'react-router-dom';
import TableForm from '../TableForm/TableForm';

const UpdateTable = () => {
  const { tableId } = useParams();
  const tableData = useSelector((state) => getTableById(state, tableId));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (table) => {
    dispatch(editTableRequest({ ...table, id: tableId }));
    navigate('/');
  };

  if (!tableData) return <Navigate to='/' />;
  return (
    <TableForm
      action={handleSubmit}
      actionText={'Update Table'}
      {...tableData}
    />
  );
};

export default UpdateTable;