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
  BadgeCard
} from './style/TableStyle';
import { ActionButton } from './ActionButton';
import PropTypes from 'prop-types';

export const Table = ({ data }) => {
  return (
    <MainWrapper>
      <TableWrapper>
        <HeadWrapper>
          <HeadField>
            <HeadColumn>Id</HeadColumn>
            <HeadColumn minWidth="180px">Name</HeadColumn>
            <HeadColumn>Price</HeadColumn>
            <HeadColumn>Badge</HeadColumn>
            <HeadColumn>Stock</HeadColumn>
            <HeadColumn>Sold</HeadColumn>
            <HeadColumn></HeadColumn>
          </HeadField>
        </HeadWrapper>
        <BodyWrapper>
          {data.map((value, index) => {
            return (
              <BodyField key={index}>
                <BodyColumn>{index}</BodyColumn>
                <BodyColumn minWidth="180px">{value.title}</BodyColumn>
                <BodyColumn>${value.price}</BodyColumn>
                <BodyColumn>
                  <BadgeCard>New Product</BadgeCard>
                </BodyColumn>
                <BodyColumn>12</BodyColumn>
                <BodyColumn>8</BodyColumn>
                <ActionProductColumn>
                  <ActionButton />
                </ActionProductColumn>
              </BodyField>
            );
          })}
        </BodyWrapper>
      </TableWrapper>
    </MainWrapper>
  );
};

Table.propTypes = {
  data: PropTypes.any
};
