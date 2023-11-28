/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { ExportPdf } from '@ckeditor/ckeditor5-export-pdf';
import { ExportWord } from '@ckeditor/ckeditor5-export-word';
import { FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { ImportWord } from '@ckeditor/ckeditor5-import-word';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { DocumentList } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {
	public static override builtinPlugins = [
		Autoformat,
		BlockQuote,
		Bold,
		CloudServices,
		DocumentList,
		Essentials,
		ExportPdf,
		ExportWord,
		FontFamily,
		FontSize,
		Heading,
		ImportWord,
		Indent,
		Italic,
		Paragraph,
		PasteFromOffice,
		Table,
		TableToolbar,
		TextTransformation
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'heading',
				'|',
				'undo',
				'redo',
				'|',
				'importWord',
				'exportWord',
				'exportPdf',
				'|',
				'fontFamily',
				'fontSize',
				'bold',
				'italic',
				'|',
				'bulletedList',
				'numberedList',
				'outdent',
				'indent',
				'|',
				'blockQuote',
				'insertTable'
			]
		},
		language: 'zh-cn',
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		}
	};
}

export default Editor;
