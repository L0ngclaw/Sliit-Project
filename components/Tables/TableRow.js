import React from "react";
import Delete from '../Buttons/Delete'
import Star from '../Buttons/Star'
import Edit from '../Buttons/Edit'


const TableRow = () => {
  return (
    <div>
      <table className="table-fixed ">
        <tr className="text-blue-700">
          <th className="px-10">SKU</th>
          <th className="px-10">IMAGE</th>
          <th className="px-10">PRODUCT NAME</th>
          <th className="px-10">PRICE</th>
          <th className="px-10"></th>
        </tr>
        <tr className="border-b-2 border-gray">
          <td className="text-zinc-400 px-10">#CA25</td>
          <td className="px-10">Image</td>
          <td className="px-10 text-zinc-600">Germany</td>
          <td className="px-10 text-zinc-600">Anders</td>
          <td className="px-10 text-zinc-600 grid grid-cols-3"><Delete/><Edit/><Star/></td>
        </tr>
        <tr className="border-b-2 border-gray">
          <td className="text-zinc-400 px-10">#CA25</td>
          <td className="px-10">Image</td>
          <td className="px-10 text-zinc-600">Germany</td>
          <td className="px-10 text-zinc-600">Anders</td>
          <td className="px-10 text-zinc-600 grid grid-cols-3"><Delete/><Edit/><Star/></td>
        </tr>
      </table>
    </div>
  );
};

export default TableRow;
