import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Smith',
    age: 32,
    address: 'New York',
  },
  {
    key: '2',
    name: 'Jane Doe',
    age: 42,
    address: 'London',
  },
  {
    key: '3',
    name: 'Bob Johnson',
    age: 22,
    address: 'Paris',
  },
];

function Quiz() {
  return (
    <dix>
       <Table columns={columns} dataSource={data} />
    </dix>
  );
}

export default Quiz;