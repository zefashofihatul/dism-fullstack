import { OptionProductWrapper, OptionsWrapper, Option } from '../style/OptionsProductStyle';
import { Switch } from 'components/Switch';
import { Button } from 'components/Button';

export const OptionsProduct = () => {
  return (
    <OptionProductWrapper>
      <OptionsWrapper>
        <Option className="filled">ALL</Option>
        <Option>DESIGN</Option>
        <Option>DEVELOPMENT</Option>
        <Option>HOUSEGOODS</Option>
      </OptionsWrapper>
    </OptionProductWrapper>
  );
};
