import React from 'react'
import { Table } from 'react-materialize';

export default function Statistic() {
  return (
    <div className="Section" >
      <div className="Section-name">Statistic</div>
      <div className="Section__bottom">
        <Table>
          <tbody>
            <tr>
              <td className="w-75">Parametr</td>
              <td>Value</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <th>Time:</th>
              <th></th>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Days passed</td>
              <td>2400</td>
            </tr>
            <tr>
              <td>Months passed</td>
              <td>79</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <th>Deals:</th>
              <th></th>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>All deals</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Profitable deals</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Unprofitable deals</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Profitable deals in a row</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Unprofitable deals in a row</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Deals at day</td>
              <td>0.00</td>
            </tr>
            <tr>
              <td>Deals at month</td>
              <td>0</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
 
  )
}
 