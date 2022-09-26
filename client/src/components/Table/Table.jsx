import {
  TableWrapper,
  BodyWrapper,
  HeadField,
  HeadColumn,
  BodyField,
  BodyColumn,
  HeadWrapper,
  NameProductHead,
  ActionProductColumn,
  MainWrapper,
  HeadContent,
  BadgeWrapper,
  BadgeCard
} from './style/TableStyle';
import { ActionButton, OptionAction } from './ActionButton';
import PropTypes from 'prop-types';
import { LoadingSpinner } from 'components/Loading/Loading';

export const Column = ({ children, ...props }) => {
  return <BodyColumn {...props}>{children}</BodyColumn>;
};

Column.propTypes = {
  children: PropTypes.any
};

export const Row = ({ children }) => {
  return <BodyField>{children}</BodyField>;
};

Row.propTypes = {
  children: PropTypes.any
};

export const TableBadge = ({ children }) => {
  return <BadgeCard>{children}</BadgeCard>;
};

TableBadge.propTypes = {
  children: PropTypes.any
};

export const TableAction = ({ actions }) => {
  return (
    <ActionProductColumn>
      <ActionButton>
        {actions.map((value, index) => {
          return (
            <OptionAction key={index} onClick={value.onClick}>
              {value.label}
            </OptionAction>
          );
        })}
      </ActionButton>
    </ActionProductColumn>
  );
};

TableAction.propTypes = {
  actions: PropTypes.array
};

export const HeadTable = ({ children, ...props }) => {
  return <HeadColumn {...props}>{children}</HeadColumn>;
};

HeadTable.propTypes = {
  children: PropTypes.any
};

export const HeadRow = ({ children }) => {
  return <HeadField>{children}</HeadField>;
};

HeadRow.propTypes = {
  children: PropTypes.any
};

export const BodyRow = ({ children }) => {
  return <BodyWrapper>{children}</BodyWrapper>;
};

BodyRow.propTypes = {
  children: PropTypes.any
};

export const HeadTableWrapper = ({ children }) => {
  return <HeadWrapper>{children}</HeadWrapper>;
};

HeadTableWrapper.propTypes = {
  children: PropTypes.any
};

export const Table = ({ loading, children }) => {
  return (
    <MainWrapper>
      <TableWrapper>{children}</TableWrapper>
      {loading && <LoadingSpinner width="24px" height="24px" />}
    </MainWrapper>
  );
};

Table.propTypes = {
  data: PropTypes.any,
  page: PropTypes.any,
  column: PropTypes.any,
  loading: PropTypes.bool,
  children: PropTypes.any
};
