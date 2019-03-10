import React from "react";
import PropTypes from "prop-types";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

//import "../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
//import "../../node_modules/bootstrap-3.3.7/dist/css/bootstrap.min.css";

export default class Ranking extends React.Component {
  componentWillMount() {
    this.props.onMount(this.props.categoryId);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.categoryId !== nextProps.categoryId) {
      this.props.onUpdate(nextProps.categoryId);
    }
  }
  render() {
    const { category, ranking, error } = this.props;

    return (
      <div>
        <h2>
          {typeof category !== "undefined" ? `${category.name}_ranking` : ""}
        </h2>

        {(() => {
          if (error) {
            return <p>ERROR please reload</p>;
          } else if (typeof ranking === "undefined") {
            return <p>please wait</p>;
          } else {
            return (
              <div>
                <BootstrapTable data={ranking} insertRow={true} dataSort={true}>
                  <TableHeaderColumn
                    width="150"
                    dataField="code"
                    isKey={true}
                    dataSort={true}
                  >
                    code
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    width="150"
                    dataField="review"
                    dataSort={true}
                  >
                    Review
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    width="150"
                    dataField="name"
                    dataSort={true}
                  >
                    ProductName
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    width="150"
                    dataField="url"
                    dataSort={true}
                  >
                    ProductUrl
                  </TableHeaderColumn>
                  <TableHeaderColumn
                    width="150"
                    dataField="imageUrl"
                    dataSort={true}
                  >
                    Product
                  </TableHeaderColumn>
                </BootstrapTable>
              </div>
              /*
                            <ol>
                            {ranking.map(item => (
                                <li key={`ranking-item-${item.code}`}>
                                <img alt={item.name} src={item.imageUrl} />
                                <a href={item.url} target="_blank">{item.name}</a>
                                </li>

                            ))}
                        </ol>



*/
            );
          }
        })()}
      </div>
    );
  }
}

Ranking.propTypes = {
  categoryId: PropTypes.string,
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,

  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  ranking: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired
    })
  ),
  error: PropTypes.bool.isRequired
};
Ranking.defaultProps = {
  categoryId: "1"
};
