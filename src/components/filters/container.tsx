import React, { useEffect, useRef, useState } from 'react';
import { Form, Select, Switch, Radio } from 'antd';
import { Button, Container } from './container.styles';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '../../atoms';
import Sixt from '../../types';
import actions from '../../actions';

interface Props {
  setShowFiltersModal(value: boolean): void;
  insideModal: boolean;
}
const Filters = ({ setShowFiltersModal, insideModal }: Props) => {
  const {
    automaticOnly,
    mustHaveGPS,
    moreThan2Bags,
    numberOfSeats,
    minAge,
    orderBy
  } = useSelector((state: Sixt.FullState) => state.offers);

  const dispatch = useDispatch();

  const onValuesChange = (values: Sixt.Filters) => {
    dispatch(
      actions.offers.updateFilters({
        automaticOnly,
        mustHaveGPS,
        moreThan2Bags,
        numberOfSeats,
        minAge,
        orderBy,
        ...values,
      })
    );
  };

  const [form] = Form.useForm();
  useEffect(
    () =>
      form.setFieldsValue({
        automaticOnly,
        mustHaveGPS,
        moreThan2Bags,
        numberOfSeats,
        minAge,
        orderBy,
      }),
    [automaticOnly, mustHaveGPS, moreThan2Bags, numberOfSeats, minAge, orderBy]
  );
  return (
    <Container>
      <Form
        labelCol={{ span: insideModal ? 6 : 12 }}
        wrapperCol={{ span: 12 }}
        layout={'horizontal'}
        onValuesChange={onValuesChange}
        form={form}
        initialValues={{
          automaticOnly,
          mustHaveGPS,
          moreThan2Bags,
          numberOfSeats,
          minAge,
          orderBy,
        }}
      >
        <Form.Item label='Automatic Only:' name='automaticOnly'>
          <Switch checked={automaticOnly} />
        </Form.Item>
        <Form.Item label='Only with GPS:' name='mustHaveGPS'>
          <Switch checked={mustHaveGPS} />
        </Form.Item>
        <Form.Item label='2+ bags:' name='moreThan2Bags'>
          <Switch checked={moreThan2Bags} />
        </Form.Item>
        <Form.Item label='No. of seats:' name='numberOfSeats'>
          <Select>
            <Select.Option value='2'>2</Select.Option>
            <Select.Option value='4'>4</Select.Option>
            <Select.Option value='5'>5</Select.Option>
            <Select.Option value='7'>7</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label='Min Age:' name='minAge'>
          <Select>
            <Select.Option value='18'>18</Select.Option>
            <Select.Option value='21'>21</Select.Option>
            <Select.Option value='22'>22</Select.Option>
            <Select.Option value='23'>23</Select.Option>
            <Select.Option value='24'>24</Select.Option>
            <Select.Option value='25'>25+</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label='Order by:' name='orderBy'>
          <Radio.Group buttonStyle='solid'>
            <Radio.Button value='popularity'>Popularity</Radio.Button>
            <Radio.Button value='expensive'>Expensive</Radio.Button>
            <Radio.Button value='cheapest'>Cheap</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {insideModal && (
          <Button onClick={() => setShowFiltersModal(false)}>
            <Typography appearance='text' as='span'>
              CLOSE MODAL
            </Typography>
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default Filters;
