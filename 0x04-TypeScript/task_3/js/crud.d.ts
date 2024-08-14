import {RowID, RowElement} from './interface'

export function function insertRow(row: RowElement): number;

export function deleteRow(rowI: RowID): void;

export function updateRow(rowId: RowID, row: RowElement): number;
