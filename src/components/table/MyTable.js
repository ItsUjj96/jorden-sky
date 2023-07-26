import React, { useState } from 'react';
import './MyTable.css'; // Import custom CSS for styling
import data from '../../jsons/data'; // Import the data from data.js


const MyTable = () => {
  const [openRows, setOpenRows] = useState({});

  const toggleRow = (accountId) => {
    setOpenRows((prevOpenRows) => ({
      ...prevOpenRows,
      [accountId]: !prevOpenRows[accountId],
    }));
  };

  const renderParentRows = () => {
    return Object.keys(data).map((accountId) => {
      const account = data[accountId];
      const hasChildren = account.children && Object.keys(account.children).length > 0;
      const isOpen = openRows[accountId];

      // Show all parent accounts with current and previous values
      return (
        <React.Fragment key={accountId}>
          <tr className={isOpen ? 'expanded-row' : 'collapsed-row'}>
            <td colSpan={3} style={{ cursor: hasChildren ? 'pointer' : 'default' }} onClick={() => toggleRow(accountId)}>
              {isOpen ? '-' : '+'} {account.account_name}
            </td>
          </tr>
          {!isOpen && ( // Render current and previous for closed rows
            <tr>
              <td style={{ paddingLeft: '20px' }}>{account.account_name}</td>
              <td>{account.current}</td>
              <td>{account.previous}</td>
            </tr>
          )}
          {isOpen && (
            <React.Fragment>
              <tr>
                <td style={{ paddingLeft: '20px' }}>{account.account_name}</td>
                <td>{account.current}</td>
                <td>{account.previous}</td>
              </tr>
              {hasChildren && renderChildRows(account.children)}
              {hasChildren && (
                <tr>
                  <td style={{ paddingLeft: '20px' }}>TOTAL</td>
                  <td>{account.children_total_current || account.current}</td>
                  <td>{account.children_total_previous || account.previous}</td>
                </tr>
              )}
            </React.Fragment>
          )}
        </React.Fragment>
      );
    });
  };

  const renderChildRows = (children) => {
    return Object.keys(children).map((childId) => {
      const child = children[childId];
      const hasChildren = child.children && Object.keys(child.children).length > 0;
      const isOpen = openRows[childId];

      return (
        <React.Fragment key={childId}>
          <tr className={isOpen ? 'expanded-row' : 'collapsed-row'}>
            <td colSpan={3} style={{ cursor: hasChildren ? 'pointer' : 'default', paddingLeft: '40px' }} onClick={() => toggleRow(childId)}>
              {isOpen ? '-' : '+'} {child.account_name}
            </td>
          </tr>
          {isOpen && (
            <React.Fragment>
              <tr>
                <td style={{ paddingLeft: '60px' }}>{child.account_name}</td>
                <td>{child.current}</td>
                <td>{child.previous}</td>
              </tr>
              {hasChildren && renderChildRows(child.children)}
              {hasChildren && (
                <tr>
                  <td style={{ paddingLeft: '60px' }}>TOTAL</td>
                  <td>{child.children_total_current || child.current}</td>
                  <td>{child.children_total_previous || child.previous}</td>
                </tr>
              )}
            </React.Fragment>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="table-container">
      <h1>Expense Info</h1>
      <table className="custom-table">
        <thead>
          <tr>
            <th>ACCOUNT</th>
            <th>APR 2023 - JUN 2023</th>
            <th>JUL 2023 - SEP 2023</th>
          </tr>
        </thead>
        <tbody>
          {renderParentRows()}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
