import { Table } from '@mantine/core';
import React from 'react';
import { data } from '../../constants/data';

const Gama: React.FC = () => {

// const rows = data.map((element) => (
//     <Table.Tr key={data.}>
//       <Table.Td>{element.position}</Table.Td>
//       <Table.Td>{element.name}</Table.Td>
//       <Table.Td>{element.symbol}</Table.Td>
//       <Table.Td>{element.mass}</Table.Td>
//     </Table.Tr>
//   ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      {/* <Table.Tbody>{rows}</Table.Tbody> */}
    </Table>
  );
};

export default Gama;
