import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '../paper-grid.js';
import '../debug-grid.js';
import { gridStyles } from './grid-styles.js';

class GridWrapper extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    display: block;
                }
                #container{
                    display: block;
                }
                #containerInput{
                    display: flex;
                    justify-content: space-between;
                    width: 70%;
                    padding: 10px;
                    margin: 20px;
                    border: 1px solid #000;
                }
            </style>
            ${gridStyles}
            <div id="containerInput">
                <paper-input label="Cell Height" value="{{cellHeight}}" type="number" required></paper-input>
                <paper-input label="Cell Width" value="{{cellWidth}}" type="number" required></paper-input>
                <paper-input label="Col Count" value="{{colCount}}" type="number" required></paper-input>
                <paper-input label="Row Count" value="{{rowCount}}" type="number" required></paper-input>
                <paper-input label="Cell Margin" value="{{cellMargin}}" type="number" required></paper-input>
            </div>
            <div id="container">
                <debug-grid cell-height="{{cellHeight}}" cell-width="{{cellWidth}}" cell-margin="{{cellMargin}}" col-count="{{colCount}}" row-count="{{rowCount}}"></debug-grid>
                <paper-grid cell-height="{{cellHeight}}" cell-width="{{cellWidth}}" cell-margin="{{cellMargin}}" col-count="{{colCount}}" row-count="{{rowCount}}" overlappable col-autogrow row-autogrow draggable resizable animated>
                    <dom-repeat items="{{boxes}}">
                        <template>
                            <tile col$="{{item.col}}" row$="{{item.row}}" height$="{{item.height}}" width$="{{item.width}}">
                                <span>{{item.title}}</span>
                                <span resize="left">│</span>
                                <span resize="right">│</span>
                                <span resize="top">─</span>
                                <span resize="bottom">─</span>
                                <span resize="top-right">┐</span>
                                <span resize="top-left">┌</span>
                                <span resize="bottom-right">┘</span>
                                <span resize="bottom-left">└</span>
                            </tile>
                        </template>
                    </dom-repeat>
                    <div placeholder></div>
                </paper-grid>
            </div>
        `
    }

    static get properties() {
        return {
            boxes: {
                type: Array,
                value: function () {
                    return [
                        { title: '0', col: 0, row: 0, width: 1, height: 1 },
                        { title: '1', col: 2, row: 0, width: 1, height: 1 },
                        { title: '2', col: 2, row: 2, width: 1, height: 4 },
                        { title: '3', col: 3, row: 2, width: 1, height: 1 },
                        { title: '4', col: 5, row: 1, width: 2, height: 2 },
                        { title: '5', col: 0, row: 1, width: 2, height: 2 },
                        { title: '6', col: 0, row: 3, width: 1, height: 1 },
                        { title: '7', col: 0, row: 5, width: 2, height: 2 },
                        { title: '8', col: 5, row: 4, width: 1, height: 1 },
                    ];
                }
            },
            cellWidth: {
                type: Number,
                value: 100
            },
            cellHeight: {
                type: Number,
                value: 100
            },
            cellMargin: {
                type: Number,
                value: 10
            },
            rowCount: {
                type: Number,
                value: 10
            },
            colCount: {
                type: Number,
                value: 17
            }
        }
    }

    constructor() {
        super();
    }

}

window.customElements.define('grid-wrapper', GridWrapper);