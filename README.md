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
                colClass: "",
                unique: {
                    view: {path: "./view/[AutoPutID]", item: "Preview"},
                    edit: {path: "./edit/[AutoPutID]", item: "Modify"},
                    del: {path: "./del/[AutoPutID]", item: "Delete"}
                }
            },
            {
                id: "key_1",
                label: "Key 1",
                colClass: "keyClass1"
            },
            {
                id: "key_2",
                label: "Key 2",
                colClass: "keyClass2"
            },
            {
                id: "key_3",
                label: "Key 3",
                colClass: "keyClass3"
            },
            {
                id: "key_4",
                label: "Key 4",
                colClass: "keyClass4"
            },
            {
                id: "key_5",
                label: "Key 5",
                colClass: "keyClass5"
            },
            
        ],
        rows: [
            {
                id: 1,
                key_1: "Data 1",
                key_2: "Desc. of Data",
                key_3: "28/08/2019, 00:00",
                key_4: "Status",
                key_5: "Any data from db",
            },
            {
                id: 2,
                key_1: "Data 2",
                key_2: "Desc. of Data",
                key_3: "28/08/2019, 00:01",
                key_4: "Status",
                key_5: "Any data from db",
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
