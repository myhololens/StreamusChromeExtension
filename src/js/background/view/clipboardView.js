﻿import {LayoutView} from 'marionette';

var ClipboardView = LayoutView.extend({
  id: 'clipboard',
  tagName: 'textarea',
  template: false,

  initialize: function() {
    this.listenTo(StreamusBG.channels.clipboard.commands, 'copy:text', this._copyText);
  },

  // http://stackoverflow.com/questions/5235719/how-to-copy-text-to-clipboard-from-a-google-chrome-extension
  // Copies text to the clipboard. Has to happen on background page due to elevated privileges.
  _copyText: function(text) {
    this.$el.val(text).select();
    document.execCommand('copy', false, null);
  }
});

export default ClipboardView;