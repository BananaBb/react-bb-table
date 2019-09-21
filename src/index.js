import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'


export default class ReactBbTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.settings = [];
    this.rowLinks = "";
  }

  replaceRowID(id) {
    return (<div dangerouslySetInnerHTML={{__html: this.rowLinks.replace(/%id%/g, id)}} />)
  }

  tableRowLink(unique) {
    if (this.rowLinks === "") {
      for (let key in unique) {
        this.rowLinks+= `<a href="%path%%id%" class="bb-table-row-cell-btn" key="link-%key%-%id%">%item%</a>`
          .replace("%path%", unique[key].path)
          .replace("%key%", key)
          .replace("%item%", unique[key].item)
      }
    }
    return ""
  }

  tableHeader(cols) {
    if (cols.length <= 0) {
      return (<div />)
    }
    this.settings = []
    return (
      <div className="bb-table-header">
        {cols.map((col) => {
          if (col.unique) {
            this.tableRowLink(col.unique)
          }
          let styleclass = (col.colClass) ? "bb-table-row-cell " + col.colClass : "bb-table-row-cell"
          this.settings.push({
            'unique': (col.unique) ? true : false,
            'key': col.id,
            'style': styleclass
          })
          return (<div className={styleclass} key={"header-" + col.id}>{col.label}</div>)
        })}
      </div>
    )
  }

  tableRow(rows) {
    
    if (rows.length <= 0 || this.settings.length <= 0) {
      return (<div className="bb-table-no-record">No Records</div>)
    }
    return (
      <div className="bb-table-row-group">
        {rows.map((row, idx) => {
          return (
            <div className="bb-table-row" key={"row-" + idx}>
              {this.settings.map((setting) => {
                return (
                  <div className={setting.style} key={idx+"-"+setting.key}>
                    {(setting.unique) ? this.replaceRowID(row[setting.key]) : <div>{row[setting.key]}</div>}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    if (!this.props.options.data) {
      return (<div />)
    }
    return (
      <div className="bb-table" style={(this.props.options.dimensions.width) ? {width: this.props.options.dimensions.width} : {}}>
        {this.tableHeader(this.props.options.data.columns)}
        {this.tableRow(this.props.options.data.rows)}
      </div>
    )
  }
}