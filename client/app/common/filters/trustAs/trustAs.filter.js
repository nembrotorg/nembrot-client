export default function ($sce, $log) {
  return function (input, type) {
    if (typeof input === "string") {
        return $sce.trustAs(type || 'html', input);
    }
    $log.debug("trustAs filter. Error. input isn't a string: ", input);
    return "";
  };
}
