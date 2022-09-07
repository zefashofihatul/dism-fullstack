import {
  HeaderDashboardSection,
  HeaderWrapper,
  HeaderTitle,
  HeaderDescription,
  Line,
  FilterInputWrapper
} from '../style/HeaderDashboard';
import { FilterInput } from 'components/Input/filterInput';
import { Switch } from 'components/Switch';
import { useNavigate } from 'react-router';
import { useAuth } from 'lib/auth';
import PropTypes from 'prop-types';

export const HeaderDashboard = ({ handleClick }) => {
  const navigate = useNavigate();
  const { user, logoutFn } = useAuth();
  return (
    <>
      <HeaderDashboardSection>
        <HeaderWrapper>
          <HeaderDescription>HOUSEGOODS</HeaderDescription>
          <HeaderTitle>PRODUCT</HeaderTitle>
        </HeaderWrapper>
        <FilterInputWrapper>
          <FilterInput />
        </FilterInputWrapper>
        <Switch option1="GRID" option2="LIST" handleClick={handleClick} />
      </HeaderDashboardSection>
      <Line />
    </>
  );
};

HeaderDashboard.propTypes = {
  handleClick: PropTypes.func
};
