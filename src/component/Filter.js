import { useDispatch, useSelector } from 'react-redux';
import { getStatusFilter } from '../redux/selectors';
import { setStatusFilter, statusFilters } from '../redux/store';

const Filter = () => {
  const dispatch = useDispatch();
  const status = useSelector(getStatusFilter);

  return (
    <div>
      {Object.keys(statusFilters).map(key => (
        <button
          key={key}
          onClick={() => dispatch(setStatusFilter(statusFilters[key]))}
          style={{
            fontWeight: status === statusFilters[key] ? 'bold' : 'normal',
          }}
        >
          {statusFilters[key]}
        </button>
      ))}
    </div>
  );
};

export default Filter;
