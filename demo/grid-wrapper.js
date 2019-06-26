import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '../paper-grid.js';
import '../debug-grid.js'

class GridWrapper extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    display: block;
                }
                paper-grid tile {
                    background: tomato;
                    opacity: 0.8;
                    color: white;
                    cursor: move;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                paper-grid [placeholder] {
                    background: #afafaf;
                }

                paper-grid tile > span:not([resize]) {
                    flex: 1;
                    text-align: center;
                    font-size: 2em;
                }

                paper-grid [resize] {
                    position: absolute;
                }

                paper-grid [resize="bottom-right"] {
                    bottom: 0;
                    right: 0;
                    cursor: nwse-resize;
                }

                paper-grid [resize="bottom-left"] {
                    bottom: 0;
                    left: 0;
                    cursor: nesw-resize;
                }

                paper-grid [resize="top-right"] {
                    top: 0;
                    right: 0;
                    cursor: nesw-resize;
                }

                paper-grid [resize="top-left"] {
                    top: 0;
                    left: 0;
                    cursor: nwse-resize;
                }

                paper-grid [resize="left"] {
                    top: 50%;
                    left: 0;
                    cursor: ew-resize;
                    margin-top: -10px;
                }

                paper-grid [resize="top"] {
                    top: 0%;
                    width: 100%;
                    text-align: center;
                    cursor: ns-resize;
                }

                paper-grid [resize="right"] {
                    top: 50%;
                    right: 0;
                    cursor: ew-resize;
                    margin-top: -10px;
                }

                paper-grid [resize="bottom"] {
                    bottom: 0;
                    width: 100%;
                    text-align: center;
                    cursor: ns-resize;
                }

                dom-repeat {
                    display: none;
                }
            </style>
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
                value: 10
            }
        }
    }

    constructor() {
        super();
    }

}

window.customElements.define('grid-wrapper', GridWrapper);
