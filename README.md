# react-bb-table

> This is a modulable component to render data in a table with some nice features !

[![NPM](https://img.shields.io/npm/v/react-bb-table.svg)](https://www.npmjs.com/package/react-bb-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-bb-table
```

## Usage

```jsx
import React, { Component } from 'react'
import ReactBbTable from 'react-bb-table'

let options  = {
    dimensions: {
        width: "100%"
    },
    data: {
        columns: [ 
            {
                id: "id",
                label: "Action",
                colClass: "actionCell",
                unique: {
                    view: {path: "./view/", item: "Preview"},
                    edit: {path: "./edit/", item: "Modify"},
                    del: {path: "./del/", item: "Delete"}
                }
            },
            {
                id: "file_name",
                label: "File Name",
                colClass: "fileCell"
            },
            {
                id: "doc_type",
                label: "Document Type",
                colClass: "docCell"
            },
            {
                id: "modify_date",
                label: "Last Modify Date",
                colClass: "dateCell"
            },
            {
                id: "confident_level",
                label: "Confident Level",
                colClass: "lvCell"
            },
            {
                id: "page_num",
                label: "Scanned Page",
                colClass: "pageCell"
            },
            
        ],
        rows: [
            {
                id: 1,
                file_name: "File 1",
                doc_type: "document",
                modify_date: "28/08/2019, 00:00",
                confident_level: "98% confidence",
                page_num: "5 Pages",
            },
            {
                id: 2,
                file_name: "File 2",
                doc_type: "execl",
                modify_date: "28/08/2019, 00:01",
                confident_level: "99% confidence",
                page_num: "148 Pages",
            },
        ],
    }
}

export default class App extends Component {
  render () {
    return (
    	<ReactBbTable options={options} />
    )
  }
}
```

## License

MIT © [BananaBb](https://github.com/BananaBb)
