import { useState } from "react";
import { process } from "@progress/kendo-data-query";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Window } from "@progress/kendo-react-dialogs";
import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";
import categories from "./categories.json";
import products from "./products.json";

const CheckboxColumn = props => {
  return (
    <td>
      <input
        type="checkbox"
        checked={props.dataItem[props.field]}
        disabled="disabled"
      />
    </td>
  );
};

function App() {
  const [dropdownListCategory, setDropdownListCategory] = useState(null);
  const [windowVisible, setWindowVisible] = useState(false);
  const [gridClickedRow, setGridRowClicked] = useState({});
  const [gridDataState, setGridDataState] = useState({
    sort: [{ field: "ProductName", dir: "asc" }],
    skip: 0,
    take: 10,
  });

  const handleDropDownChange = e => {
    let newDataState = { ...gridDataState };
    if (e.target.value.CategoryID !== null) {
      newDataState.filter = {
        logic: "and",
        filters: [
          {
            field: "CategoryID",
            operator: "eq",
            value: e.target.value.CategoryID,
          },
        ],
      };
      newDataState.skip = 0;
    } else {
      newDataState.filter = [];
      newDataState.skip = 0;
    }
    setDropdownListCategory(e.target.value.CategoryID);
    setGridDataState(newDataState);
  };

  const handleGridDataStateChange = e => {
    setGridDataState(e.dataState);
  };

  const handleGridRowClick = e => {
    setGridRowClicked(e.dataItem);
    setWindowVisible(true);
  };

  const closeWindow = () => setWindowVisible(false);

  return (
    <div className="App">
      <h1>Hello KendoReact!</h1>
      <p>
        <DropDownList
          data={categories}
          dataItemKey="CategoryID"
          textField="CategoryName"
          defaultItem={{ CategoryID: null, CategoryName: "Product categories" }}
          onChange={handleDropDownChange}
        />
        &nbsp; Selected category ID: <strong>{dropdownListCategory}</strong>
      </p>
      <Grid
        data={process(products, gridDataState)}
        pageable={true}
        sortable={true}
        {...gridDataState}
        onDataStateChange={handleGridDataStateChange}
        style={{ height: "400px" }}
        onRowClick={handleGridRowClick}
      >
        <GridColumn field="ProductName" title="Product Name" />
        <GridColumn field="UnitPrice" title="Price" format="{0:c}" />
        <GridColumn field="UnitsInStock" title="Units in Stock" />
        <GridColumn field="Discontinued" cell={CheckboxColumn} />
      </Grid>
      {windowVisible ? (
        <Window title="Product Details" onClose={closeWindow} height={250}>
          <dl style={{ textAlign: "left" }}>
            <dt>Product Name</dt>
            <dd>{gridClickedRow.ProductName}</dd>
            <dt>Product ID</dt>
            <dd>{gridClickedRow.ProductID}</dd>
            <dt>Quantity per Unit</dt>
            <dd>{gridClickedRow.QuantityPerUnit}</dd>
          </dl>
        </Window>
      ) : null}
    </div>
  );
}

export default App;
