import {
  HeaderTitle,
  HeaderDescriptionWrapper,
  HeaderTitleWrapper,
  HeaderDescription,
  IconWrapper,
  TableSettingWrapper
} from './style/HeaderTableStyle';
import { SpaceBetween } from 'components/Flex/SpaceBetween';
import { ButtonRect } from 'components/Button/ButtonRect';
import { InputIconLabel } from 'components/Input/IconLabel';
import filterIcon from 'assets/images/filter_icon.svg';
import sortIcon from 'assets/images/sort_icon.svg';
import { InputCount } from 'components/Input/InputCount';
import { InputIcon } from 'components/Input/InputIcon';
import PropTypes from 'prop-types';

export const HeaderTable = ({ setShowForm }) => {
  return (
    <HeaderTitleWrapper>
      <SpaceBetween>
        <HeaderDescriptionWrapper>
          <HeaderTitle>Products</HeaderTitle>
          <HeaderDescription>Last updated at 14/11/20</HeaderDescription>
        </HeaderDescriptionWrapper>
        <IconWrapper>
          <InputIconLabel label="Filter" icon={filterIcon} />
          <InputIconLabel label="Sort" icon={sortIcon} />
        </IconWrapper>
      </SpaceBetween>
      <TableSettingWrapper>
        <SpaceBetween>
          <ButtonRect onClick={() => setShowForm(true)} />
          <IconWrapper>
            <InputIcon></InputIcon>
            <InputCount label="Column">15</InputCount>
            <InputCount label="Page">2</InputCount>
          </IconWrapper>
        </SpaceBetween>
      </TableSettingWrapper>
    </HeaderTitleWrapper>
  );
};

HeaderTable.propTypes = {
  setShowForm: PropTypes.func
};
