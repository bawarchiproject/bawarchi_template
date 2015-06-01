/**
 * Wrap all tables in a <div class='table-wrapper' />
 * Print table in PDF for mobile users (dependent on jspdf.custom.js)
 */
var RR = (function (parent, $) {
    'use strict';

    $.fn.hasHorizontalScrollBar = function() {
        return this.get(0).scrollWidth > this.width();
    };

    var wrap = function() {
        var $contentTable = $('.printableTable');


            if($contentTable.length == 0){
                
                return false;
            }

        if ( !$contentTable.parent().hasClass('table-wrapper') && $contentTable.parent().hasHorizontalScrollBar() ){
            $contentTable.pdfTable( 'init', {
                position: 'float', // top, bottom, float
                orientation: 'l',   // landscape (l), portrait (p)
                unit: 'pt',         // pt, mm, cm, in.
                format: 'a4',       // a3, a4, a5, letter, legal
                marginTop: 20,
                marginRight: 20,
                marginBottom: 20,
                marginLeft: 20,
            });
        }
    };

    var unwrap = function (){
        var $contentTable = $('.printableTable');

        $contentTable.pdfTable('destroy');
    };

    parent.tableScrollbar = {
        wrap: wrap,
        unwrap: unwrap
    };

    return parent;

}(RR || {}, jQuery));