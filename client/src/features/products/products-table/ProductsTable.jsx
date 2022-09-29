import PropTypes from 'prop-types';
import {
  Table,
  HeadTableWrapper,
  HeadRow,
  HeadTable,
  BodyRow,
  Row,
  Column,
  TableBadge,
  TableAction
} from 'components/Table';
import { useProducts } from '../providers/ProductsProviders';

export const ProductsTable = ({ loading, products }) => {
  const { getDetailProductFn, setShowProductForm } = useProducts();
  return (
    <Table loading={loading}>
      <HeadTableWrapper>
        <HeadRow>
          <HeadTable>No</HeadTable>
          <HeadTable width="200px">Name</HeadTable>
          <HeadTable>Category</HeadTable>
          <HeadTable>Price</HeadTable>
          <HeadTable>Badge</HeadTable>
          <HeadTable>Stock</HeadTable>
          <HeadTable>Sold</HeadTable>
          <HeadTable></HeadTable>
        </HeadRow>
      </HeadTableWrapper>
      <BodyRow>
        {products.products.map((value, index) => {
          return (
            <Row key={index}>
              <Column>{index + products.page * products.size + 1}</Column>
              <Column width="200px">{value.name}</Column>
              <Column>{value.category}</Column>
              <Column>{value.price}</Column>
              <Column>
                <TableBadge>New Products Depok</TableBadge>
              </Column>
              <Column>{value.stock}</Column>
              <Column>8</Column>
              <TableAction
                actions={[
                  {
                    label: 'Edit',
                    onClick: () => {
                      console.log('Edit');

                      getDetailProductFn(value.id).then((result) => {
                        console.log(result);
                        setShowProductForm({
                          show: true,
                          method: 'PUT',
                          productValue: {
                            id: result.data.id,
                            name: result.data.name,
                            price: result.data.price,
                            productImage: result.data.productImage,
                            stock: result.data.stock,
                            category: result.data.category,
                            description: result.data.descriptions,
                            details: result.data.details,
                            materials: result.data.materials,
                            dimensions: result.data.dimensions
                          }
                        });
                      });
                    }
                  },
                  {
                    label: 'Detail',
                    onClick: () => {
                      console.log('Detail');
                    }
                  }
                ]}
              />
            </Row>
          );
        })}
      </BodyRow>
    </Table>
  );
};

ProductsTable.propTypes = {
  loading: PropTypes.bool,
  products: PropTypes.any
};
