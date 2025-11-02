export let BROTLI_ACTIONS;

(function (brotliActions) {
  brotliActions[(brotliActions['compress'] = 0)] = 'compress';
  brotliActions[(brotliActions['decompress'] = 1)] = 'decompress';
})(BROTLI_ACTIONS || (BROTLI_ACTIONS = {}));
