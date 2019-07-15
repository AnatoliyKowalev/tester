import React from 'react'
import { Table } from 'react-materialize';

export default function Symbols() {
  return (
    <div className="Section" >
    <div className="Section-name">Symbols</div>
    <div className="Section__bottom">
      <Table>
        <thead>
          <tr>
            <th data-field="Symbol">
              Symbol
            </th>
            <th data-field="Bid">
              Bid
            </th>
            <th data-field="Ask">
              Ask
            </th>
            <th data-field="S">
              S
            </th>
            <th data-field="Progress">
              Progress
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              EURUSD
            </td>
            <td>
              1.25345
            </td>
            <td>
              1.25123
            </td>
            <td>
              0
            </td>
            <td>
              Data is up-to-date
            </td>
          </tr>
          <tr>
            <td>
              GBPUSD
            </td>
            <td>
              1.00345
            </td>
            <td>
              1.00123
            </td>
            <td>
              0
            </td>
            <td>
              Downloading
            </td>
          </tr>
          <tr>
            <td>
              USDJPY
            </td>
            <td>
              1.25345
            </td>
            <td>
              1.25123
            </td>
            <td>
              0
            </td>
            <td>
              Download
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  </div>
  
  )
}
